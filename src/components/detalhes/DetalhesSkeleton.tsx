import { Skeleton } from "@/components/ui/skeleton";

export default function DetalhesSkeleton() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-6 p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <Skeleton className="h-6 w-6 rounded" />
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="mb-4 h-10 w-1/2">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          <Skeleton className="h-80 w-full rounded-2xl" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-2">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-10 w-1/2" />
        </div>
      </div>
    </section>
  );
}
