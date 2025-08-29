type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export default function EmptyState({
  title = "Nada por aqui",
  subtitle = "Tente ajustar os filtros ou a página.",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border p-10 text-center">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm opacity-70">{subtitle}</div>
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
