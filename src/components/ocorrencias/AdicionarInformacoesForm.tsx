import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/hooks/ThemeProvider";
import { formatYmdLocal, parseYmdToLocalDate } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FileImage,
  FilePlay,
  FileText,
  Paperclip,
  Send,
  Trash2,
  X,
} from "lucide-react";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formatBytes = (bytes: number) => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = bytes,
    i = 0;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(2)} ${units[i]}`;
};

const iconByType = (type?: string) => {
  if (!type) return <FileText className="size-4" />;
  if (type.startsWith("image/")) return <FileImage className="size-4" />;
  if (type.startsWith("video/")) return <FilePlay className="size-4" />;
  return <FileText className="size-4" />;
};

const schema = z
  .object({
    informacao: z.string().min(10, "Descreva melhor (mín. 10 caracteres)"),
    descricao: z.string().optional(),
    data: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Use yyyy-MM-dd")
      .refine(
        (d) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const input = new Date(d + "T00:00:00");
          return input.getTime() <= today.getTime();
        },
        { message: "A data não pode ser maior que hoje." },
      ),
    files: z.array(z.custom<File>()).optional(),
    recaptchaToken: z.string().min(1, "Confirme que você não é um robô"),
  })
  .refine(
    (data) => {
      if (data.files && data.files.length > 0) {
        return data.descricao && data.descricao.trim().length >= 2;
      }
      return true;
    },
    {
      message: "Informe uma descrição curta para o(s) anexo(s)",
      path: ["descricao"],
    },
  );

type FormData = z.infer<typeof schema>;

interface AdicionarInformacoesFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  onCancel: () => void;
}

export default function AdicionarInformacoesForm({
  onSubmit,
  onCancel,
}: AdicionarInformacoesFormProps) {
  const { theme } = useTheme();

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;
  const enabled = (import.meta.env.VITE_RECAPTCHA_ENABLED ?? "true") === "true";
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      informacao: "",
      descricao: "",
      data: formatYmdLocal(new Date()),
      files: [],
      recaptchaToken: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const files = form.watch("files") ?? [];

  const handleDrop = (accepted: File[]) => {
    form.setValue("files", [...(form.getValues("files") ?? []), ...accepted], {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const removeFileAt = (idx: number) => {
    const current = form.getValues("files") ?? [];
    const next = current.filter((_, i) => i !== idx);
    form.setValue("files", next, { shouldDirty: true, shouldValidate: true });
  };

  const clearAll = () => {
    form.setValue("files", [], { shouldDirty: true, shouldValidate: true });
  };
  const handleSubmit = async (values: FormData) => {
    try {
      await onSubmit(values);
      recaptchaRef.current?.reset();
      form.setValue("recaptchaToken", "");
    } catch (error) {
      recaptchaRef.current?.reset();
      form.setValue("recaptchaToken", "");
      throw error;
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="informacao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Informação *</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Ex.: Foi vista em Cuiabá na rua ABC, nº 123, usando saia rosa..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="data"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data da visualização *</FormLabel>
                <FormControl>
                  <DatePicker
                    value={
                      field.value ? parseYmdToLocalDate(field.value) : undefined
                    }
                    onChange={(date) =>
                      field.onChange(date ? formatYmdLocal(date) : "")
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="descricao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Descrição do(s) anexo(s){" "}
                  {files && files.length > 0 ? "*" : ""}
                </FormLabel>
                <FormControl>
                  <Input placeholder="Ex.: Foto da pessoa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="files"
          render={() => (
            <FormItem>
              <FormLabel>Anexos (opcional)</FormLabel>
              <FormControl>
                <Dropzone
                  disabled={isSubmitting}
                  accept={{
                    "application/pdf": [],
                    "image/*": [],
                    "video/*": [],
                  }}
                  onDrop={handleDrop}
                  onError={(error) => toast.error(error.message)}
                  multiple
                >
                  <DropzoneEmptyState />
                  <DropzoneContent />
                </Dropzone>
              </FormControl>

              {files.length > 0 && (
                <div className="mt-3 rounded-lg border">
                  <div className="flex items-center justify-between px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Paperclip className="text-primary size-4" />
                      <span className="text-sm font-medium">
                        {files.length} arquivo{files.length > 1 ? "s" : ""}{" "}
                        selecionado{files.length > 1 ? "s" : ""}
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={clearAll}
                      disabled={isSubmitting}
                    >
                      <X className="mr-1 size-4" />
                      Limpar tudo
                    </Button>
                  </div>

                  <ul className="max-h-56 divide-y overflow-auto">
                    {files.map((file, idx) => (
                      <li
                        key={`${file.name}-${file.lastModified}-${idx}`}
                        className="flex items-center justify-between gap-3 px-3 py-2"
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <div className="text-muted-foreground shrink-0">
                            {iconByType(file.type)}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">
                              {file.name}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {file.type || "arquivo"} ·{" "}
                              {formatBytes(file.size)}
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFileAt(idx)}
                          disabled={isSubmitting}
                        >
                          <Trash2 className="mr-1 size-4" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {enabled && siteKey ? (
          <FormField
            control={form.control}
            name="recaptchaToken"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex justify-end">
                    <ReCAPTCHA
                      key={theme}
                      theme={theme === "dark" ? "dark" : "light"}
                      ref={recaptchaRef}
                      sitekey={siteKey}
                      onChange={(token) => field.onChange(token ?? "")}
                      onExpired={() => field.onChange("")}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={!form.formState.isValid || isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar informação"}
            <Send />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export type { FormData };
