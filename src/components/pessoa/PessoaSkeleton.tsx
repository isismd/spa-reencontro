import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PessoaSkeleton() {
  return (
    <Card className="flex flex-col p-0 overflow-hidden gap-2 shadow-md">
      <div className="relative w-full h-72 bg-muted">
        <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        <div className="absolute top-2 right-2">
          <Skeleton className="h-6 w-28 rounded-full" />
        </div>
      </div>

      <CardContent className="flex flex-col text-left gap-2 py-4 px-3">
        <Skeleton className="h-5 w-2/3" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-36" />
        </div>
      </CardContent>
    </Card>
  );
}
