import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PessoaSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-muted">
        <Skeleton className="h-full w-full rounded-none" />
      </div>
      <CardContent className="space-y-2 p-4">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-1/3" />
      </CardContent>
    </Card>
  );
}
