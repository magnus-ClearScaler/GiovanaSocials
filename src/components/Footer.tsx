import { Link } from "react-router";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-line bg-surface/40 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-mauve-300/20 blur-3xl pointer-events-none"
      />
      <div className="container-page py-16 grid gap-10 md:grid-cols-3 relative">
        <div>
          <Link
            to="/"
            className="font-display text-2xl tracking-tight text-ink"
          >
            Gio
            <span className="italic text-mauve-500 glow-text">Content</span>
          </Link>
          <p className="mt-4 text-ink-muted text-sm leading-relaxed max-w-xs">
            A studio for content creation and social media management — by
            Giovana Tonon.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="text-ink-soft hover:text-mauve-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/work/marzelle-sweets"
                className="text-ink-soft hover:text-mauve-500"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-ink-soft hover:text-mauve-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:hello@giocontent.studio"
                className="inline-flex items-center gap-2 text-ink-soft hover:text-mauve-500"
              >
                <Mail size={14} /> hello@giocontent.studio
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ink-soft hover:text-mauve-500"
              >
                <Instagram size={14} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink-muted relative">
        <p>© {year} GioContent. All rights reserved.</p>
        <p className="italic font-display">
          Made after dark, in neon and ink.
        </p>
      </div>
    </footer>
  );
}
