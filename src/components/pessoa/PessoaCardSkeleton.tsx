import { Skeleton } from "@/components/ui/skeleton";

export default function PessoaCardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="mb-3 h-80 w-full rounded-xl" />
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
