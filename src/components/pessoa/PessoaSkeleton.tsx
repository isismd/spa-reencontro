import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PessoaSkeleton() {
  return (
    <Card className="flex flex-col gap-2 overflow-hidden p-0 shadow-md">
      <div className="bg-muted relative h-72 w-full">
        <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        <div className="absolute top-2 right-2">
          <Skeleton className="h-6 w-28 rounded-full" />
        </div>
      </div>

      <CardContent className="flex flex-col gap-2 px-3 py-4 text-left">
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
