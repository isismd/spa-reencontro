import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { formatYmdLocal, parseYmdToLocalDate } from "@/lib/utils";
import { useOcorrenciaStore } from "@/stores/ocorrenciaStore";
import { usePessoasStore } from "@/stores/pessoasStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Send } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

export default function AdicionarInfoPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { pessoaSelecionada: p, fetchById } = usePessoasStore();

  const { postInformacao } = useOcorrenciaStore();

  useEffect(() => {
    if (!id) return;
    fetchById(Number(id));
  }, [id, fetchById]);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      informacao: "",
      descricao: "",
      data: formatYmdLocal(new Date()),
      files: [],
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const files = form.watch("files");

  const handleDrop = (accepted: File[]) => {
    form.setValue("files", accepted, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  async function onSubmit(values: FormData) {
    try {
      await postInformacao({
        ocoId: Number(p?.ultimaOcorrencia?.ocoId),
        informacao: values.informacao.trim(),
        data: values.data,
        descricao: values.descricao.trim(),
        files: values.files,
      });
      toast.success("Informação enviada. Obrigado por ajudar!");
      navigate(`/detalhes/${id}`);
    } catch (e: any) {
      toast.error(e?.message ?? "Erro ao enviar informação.");
    }
  }

  return (
    <section className="mx-auto w-full max-w-6xl space-y-6 px-4 sm:px-6">
      <Button
        onClick={() => navigate(`/detalhes/${id}`)}
        className="mb-4 pt-2"
        variant="link"
      >
        <ArrowLeft />
        Voltar para Página de Detalhes
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Adicionar informações</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
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
                            field.value
                              ? parseYmdToLocalDate(field.value)
                              : undefined
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
                      <FormLabel>Descrição do(s) anexo(s) *</FormLabel>
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
                        maxSize={MAX_FILE_SIZE}
                        disabled={isSubmitting}
                        onDrop={handleDrop}
                        onError={console.error}
                        src={files}
                        aria-label="Área para soltar ou selecionar arquivos (até 5MB cada)"
                      >
                        <DropzoneEmptyState />
                        <DropzoneContent />
                      </Dropzone>
                    </FormControl>
                    <p className="text-muted-foreground text-xs">
                      Você pode anexar arquivos de até 5MB cada.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => navigate(-1)}
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
        </CardContent>
      </Card>
    </section>
  );
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const schema = z.object({
  informacao: z.string().min(10, "Descreva melhor (mín. 10 caracteres)"),
  descricao: z
    .string()
    .min(2, "Informe uma descrição curta para o(s) anexo(s)"),
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
  files: z
    .array(z.custom<File>())
    .refine(
      (files) => files.every((f) => f.size <= MAX_FILE_SIZE),
      "Cada arquivo até 5MB",
    )
    .optional(),
});

type FormData = z.infer<typeof schema>;
