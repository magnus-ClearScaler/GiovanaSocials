type Tone = "blush" | "mauve" | "cream";

const toneClasses: Record<Tone, string> = {
  blush: "from-blush-200/70 via-blush-100/60 to-cream-100",
  mauve: "from-mauve-200/70 via-mauve-100/60 to-cream-100",
  cream: "from-cream-200 via-cream-100 to-cream-50",
};

type Props = {
  alt: string;
  tone?: Tone;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  label?: string;
  className?: string;
};

const ratioClasses = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export function Placeholder({
  alt,
  tone = "blush",
  ratio = "landscape",
  label,
  className = "",
}: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${toneClasses[tone]} ${ratioClasses[ratio]} shadow-soft border border-line ${className}`}
    >
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_30%_20%,oklch(82%_0.10_36/0.55),transparent_55%),radial-gradient(circle_at_70%_80%,oklch(86%_0.07_38/0.45),transparent_50%)]" />
      <div className="absolute inset-0 flex items-end p-6">
        <span className="font-display italic text-ink-soft/80 text-sm">
          {label ?? "Image placeholder"}
        </span>
      </div>
    </div>
  );
}
