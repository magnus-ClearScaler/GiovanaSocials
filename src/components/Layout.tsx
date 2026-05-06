import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-ink">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
