import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "@/components/layout/Header";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
