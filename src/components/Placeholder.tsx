type Tone = "blush" | "mauve" | "cream";

const toneClasses: Record<Tone, string> = {
  blush: "from-mauve-300/40 via-blush-200/30 to-bg",
  mauve: "from-mauve-400/45 via-mauve-200/30 to-bg",
  cream: "from-blush-300/35 via-mauve-200/25 to-bg",
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
      <div className="absolute inset-0 mix-blend-screen opacity-50 [background-image:radial-gradient(circle_at_30%_20%,oklch(80%_0.18_332/0.6),transparent_55%),radial-gradient(circle_at_70%_80%,oklch(80%_0.18_18/0.4),transparent_50%)]" />
      <div className="absolute inset-0 flex items-end p-6">
        <span className="font-display italic text-ink-soft/80 text-sm">
          {label ?? "Image placeholder"}
        </span>
      </div>
    </div>
  );
}
