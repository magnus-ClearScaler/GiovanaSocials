type Tone = "blush" | "mauve" | "cream";

const toneClasses: Record<Tone, string> = {
  blush: "from-blush-100 via-blush-50 to-cream-100",
  mauve: "from-mauve-100 via-blush-50 to-cream-100",
  cream: "from-cream-200 via-blush-50 to-mauve-100",
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
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${toneClasses[tone]} ${ratioClasses[ratio]} shadow-soft ${className}`}
    >
      <div className="absolute inset-0 mix-blend-soft-light opacity-60 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_55%),radial-gradient(circle_at_70%_80%,white,transparent_50%)]" />
      <div className="absolute inset-0 flex items-end p-6">
        <span className="font-display italic text-ink-soft/80 text-sm">
          {label ?? "Image placeholder"}
        </span>
      </div>
    </div>
  );
}
