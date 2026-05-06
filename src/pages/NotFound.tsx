import { Link } from "react-router";

export function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-mauve-700">
        404
      </p>
      <h1 className="mt-4 text-5xl md:text-6xl leading-tight">
        This page wandered off.
      </h1>
      <p className="mt-5 text-ink-soft max-w-md mx-auto">
        Let&apos;s get you back to something beautiful.
      </p>
      <Link to="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
