import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  eyebrow,
  title,
  lede,
  children,
  className = "",
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container-page">
        {(eyebrow || title || lede) && (
          <div className={`max-w-3xl ${alignClass}`}>
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
                {title}
              </h2>
            )}
            {lede && (
              <p className="mt-5 text-lg text-ink-soft leading-relaxed">
                {lede}
              </p>
            )}
          </div>
        )}
        {children && <div className="mt-12 md:mt-16">{children}</div>}
      </div>
    </section>
  );
}
