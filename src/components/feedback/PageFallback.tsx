import { Skeleton } from "@/components/ui/skeleton";

export default function PageFallback() {
  return (
    <div className="space-y-6">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl">
        <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        <div className="absolute bottom-6 left-6 right-6 space-y-3">
          <Skeleton className="h-8 w-3/4 rounded-lg" />
          <Skeleton className="h-5 w-1/2 rounded-lg" />
          <div className="flex gap-4">
            <Skeleton className="h-5 w-32 rounded-lg" />
            <Skeleton className="h-5 w-32 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6 w-72" />
        <Skeleton className="h-4 w-96" />
      </div>

      <Skeleton className="h-10 rounded-xl" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-background p-4 shadow-sm ring-1 ring-border"
          >
            <Skeleton className="mb-3 h-28 w-full rounded-xl" />
            <Skeleton className="mb-2 h-5 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-56" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-20 rounded-lg" />
          <Skeleton className="h-5 w-10" />
          <Skeleton className="h-9 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
