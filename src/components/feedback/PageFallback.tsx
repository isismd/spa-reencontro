import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PageFallback: React.FC = () => (
  <div className="p-6">
    <div className="space-y-4">
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-3/5 h-6" />
      <Skeleton className="w-full h-48" />
      <Skeleton className="w-4/5 h-6" />
      <Skeleton className="w-2/5 h-6" />
    </div>
  </div>
);

export default PageFallback;
