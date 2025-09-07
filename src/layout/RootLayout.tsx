import MockBanner from "@/components/feedback/MockBanner";
import PageFallback from "@/components/feedback/PageFallback";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="bg-background text-foreground flex min-h-dvh flex-col">
      <Header />
      <MockBanner />
      <ScrollToTop />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
}
