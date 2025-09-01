import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { postInformacaoDesaparecido } from "@/services/ocorrenciaService";
import { ArrowLeft, Send } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { usePessoasStore } from "@/stores/pessoasStore";
import { useEffect } from "react";

export default function AdicionarInfoPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { pessoaSelecionada: p, fetchById } = usePessoasStore();

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
      data: new Date().toISOString().slice(0, 10),
      files: [] as any,
    },
  });

  async function onSubmit(values: FormData) {
    try {
      await postInformacaoDesaparecido({
        ocoId: Number(p?.ultimaOcorrencia?.ocoId),
        informacao: values.informacao.trim(),
        data: values.data,
        descricao: values.descricao.trim(),
        files: values.files as File[] | undefined,
      });
      toast.success("Informação enviada. Obrigado por ajudar!");
      navigate(`/detalhes/${id}`);
    } catch (e: any) {
      toast.error(e?.message ?? "Erro ao enviar informação.");
    }
  }

  const isSubmitting = form.formState.isSubmitting;

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="data"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data da visualização *</FormLabel>
                      <FormControl>
                        <DatePicker
                          value={
                            field.value ? new Date(field.value) : undefined
                          }
                          onChange={(date) =>
                            field.onChange(
                              date ? date.toISOString().slice(0, 10) : "",
                            )
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
                        <Input placeholder="Ex.: Foto da Pessoa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="files"
                render={({ field: { onChange, ...rest } }) => (
                  <FormItem>
                    <FormLabel>Anexos (opcional)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        accept="image/*,application/pdf"
                        onChange={(e) => onChange(e.target.files)}
                        name="files"
                        ref={rest.ref}
                        disabled={rest.disabled}
                        onBlur={rest.onBlur}
                      />
                    </FormControl>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG ou PDF — até 5MB cada.
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

const schema = z.object({
  informacao: z.string().min(10, "Descreva melhor (mín. 10 caracteres)"),
  descricao: z
    .string()
    .min(2, "Informe uma descrição curta para o(s) anexo(s)"),
  data: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use yyyy-MM-dd"),
  files: z
    .any()
    .transform((v) =>
      v instanceof FileList ? Array.from(v) : (v as File[] | undefined),
    )
    .refine(
      (files?: File[]) =>
        !files || files.every((f) => f.size <= 5 * 1024 * 1024),
      "Cada arquivo até 5MB",
    ),
});

type FormData = z.infer<typeof schema>;
