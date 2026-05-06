import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/work/marzelle-sweets", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream-50/85 backdrop-blur-md border-b border-mauve-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-5">
        <Link
          to="/"
          className="font-display text-2xl tracking-tight text-ink"
          aria-label="GioContent — home"
        >
          Gio<span className="italic text-mauve-700">Content</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? "text-mauve-700"
                    : "text-ink-soft hover:text-mauve-700"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary text-sm">
            Book a call
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-mauve-200 p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-mauve-100 bg-cream-50">
          <div className="container-page py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `text-base ${
                    isActive ? "text-mauve-700" : "text-ink-soft"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary self-start">
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
