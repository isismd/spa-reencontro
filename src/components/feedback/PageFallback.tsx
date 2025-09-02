import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const PageFallback: React.FC = () => (
  <div className="p-6">
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-6 w-3/5" />
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-6 w-4/5" />
      <Skeleton className="h-6 w-2/5" />
    </div>
  </div>
);

export default PageFallback;
