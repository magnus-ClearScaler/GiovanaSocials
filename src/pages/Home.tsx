import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Camera, Sparkles, TrendingUp } from "lucide-react";
import { Section } from "../components/Section";
import { Placeholder } from "../components/Placeholder";
import { PoemAnimation } from "../components/ui/3d-animation";
import { caseStudies } from "../data/caseStudies";

const HERO_POEM = `
  <p>In the <span>static</span> of feeds, between the noise and the longing for attention, content that <span>resonates</span> blooms — each frame a heartbeat, each caption a quiet <span>confession</span>. The brand that <span>dares</span> to feel becomes the brand that <span>grows</span>. Hooks land not by accident but by intention; every reel is an invitation, every grid a <span>love</span> letter to the audience. Where most settle for visibility, we chase <span>resonance</span>. Where most chase trends, we make <span>presence</span>. Social media without limits is not louder — it is more <span>alive</span>. It is the camera held close enough to see the texture, the cut held long enough to feel the <span>breath</span>, the voice clear enough to be unmistakably <span>yours</span>. We move at the speed of <span>taste</span>, we ship at the rhythm of <span>belief</span>, and we <span>grow boundlessly</span> by daring to mean every word.</p>
`;

const HERO_BG = "https://i.ibb.co/q3XSxR9W/20250831-120144.jpg";
const HERO_FG = "https://i.ibb.co/Y4FKvK38/20250831-113022.png";

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutTeaser />
      <Expertise />
      <WorkPreview />
      <CTA />
      <ContactStrip />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <PoemAnimation
        poemHTML={HERO_POEM}
        backgroundImageUrl={HERO_BG}
        boyImageUrl={HERO_FG}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 z-10 bg-gradient-to-t from-black/70 via-black/35 to-transparent pointer-events-none"
      />

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="container-page pb-14 md:pb-20 fade-up">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-cream-100/90">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mauve-300" />
            Content & social media studio · by Giovana Tonon
          </p>
          <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-cream-50 max-w-3xl">
            Social media{" "}
            <span className="italic font-light text-mauve-300">growth</span>{" "}
            <br className="hidden md:block" />
            without{" "}
            <span className="italic font-light text-blush-300">limits</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream-100/85 leading-relaxed max-w-2xl">
            GioContent shoots, edits and runs social for brands that want to
            stop blending in. Considered content. Compounding presence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn btn-primary">
              Start a project <ArrowRight size={16} />
            </Link>
            <Link to="/work/marzelle-sweets" className="btn btn-ghost">
              See the work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "MarzelleSweets",
    "ClearCruit",
    "Amr Arquitectura",
    "ClearScaler",
    "Founder-led brands",
    "Studios & ateliers",
  ];
  return (
    <section className="border-y border-line bg-surface/60">
      <div className="container-page py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-ink-muted">
        <span className="text-xs uppercase tracking-[0.24em] text-mauve-700">
          Trusted by
        </span>
        {items.map((it) => (
          <span
            key={it}
            className="font-display text-lg md:text-xl text-ink/80 italic"
          >
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <Section
      eyebrow="About"
      title={
        <>
          A studio built on{" "}
          <span className="italic text-mauve-600">taste</span> and a sharp eye
          for what works on social.
        </>
      }
    >
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-5 text-lg text-ink-soft leading-relaxed">
          <p>
            Giovana Tonon founded GioContent to give brands content that feels
            considered — and a social media presence that compounds. The work
            spans shooting, editing, and day-to-day management.
          </p>
          <p>
            Two specialties shape every engagement:{" "}
            <span className="text-ink">social media management</span> and{" "}
            <span className="text-ink">organic growth</span>. Together they
            turn brand stories into audiences that pay attention — and act.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-mauve-700 hover:text-mauve-600 font-medium"
          >
            Read Gio&apos;s story <ArrowRight size={16} />
          </Link>
        </div>
        <div className="md:col-span-5">
          <Placeholder
            alt="Editorial flat lay of brand props on a soft cream surface."
            tone="cream"
            ratio="landscape"
            label="Studio flat lay"
          />
        </div>
      </div>
    </Section>
  );
}

function Expertise() {
  const items = [
    {
      icon: TrendingUp,
      title: "Social media management",
      body: "End-to-end channel ownership: strategy, calendar, captions, community, performance. A consistent voice that earns attention.",
    },
    {
      icon: Sparkles,
      title: "Organic growth",
      body: "Built around hooks, format-fit, and tight test-and-learn loops. The kind of growth that turns into followers and customers — not just views.",
    },
    {
      icon: Camera,
      title: "Content creation",
      body: "Shooting and editing photo + video that feels handheld and human — the texture brands need to stand out in a busy feed.",
    },
  ];

  return (
    <Section
      eyebrow="Expertise"
      title="What we do best."
      lede="Two specialties — backed by content production that moves at the speed of social."
      className="bg-surface/70 rounded-[3rem] mx-3 md:mx-8 border border-line"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="group relative rounded-3xl bg-cream-50 border border-line p-8 shadow-soft transition hover:-translate-y-1 hover:border-mauve-300 hover:shadow-warm duration-300 overflow-hidden"
          >
            <span className="absolute top-6 right-6 text-xs tabular-nums text-ink-muted">
              0{i + 1}
            </span>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-mauve-100 text-mauve-700 border border-mauve-200">
              <it.icon size={20} />
            </div>
            <h3 className="mt-6 text-2xl">{it.title}</h3>
            <p className="mt-3 text-ink-soft leading-relaxed">{it.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function WorkPreview() {
  return (
    <Section
      eyebrow="Selected work"
      title="Brands we&rsquo;ve loved working with."
      lede="A few engagements — from a current ongoing partnership to a sweets brand to an architecture studio."
    >
      <div id="work" className="grid md:grid-cols-2 gap-6 md:gap-8">
        {caseStudies.map((c, i) => (
          <Link
            key={c.slug}
            to={`/work/${c.slug}`}
            className="group rounded-3xl overflow-hidden border border-line bg-cream-50 shadow-soft transition hover:shadow-warm hover:-translate-y-1 hover:border-mauve-300 duration-300"
          >
            <Placeholder
              alt={c.imageAlt}
              tone={c.accent}
              ratio={i % 2 === 0 ? "landscape" : "wide"}
              label={c.brand}
            />
            <div className="p-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl">{c.brand}</h3>
                {c.status && (
                  <span className="text-[11px] uppercase tracking-[0.18em] text-mauve-700 bg-mauve-100 border border-mauve-200 px-2.5 py-1 rounded-full">
                    {c.status}
                  </span>
                )}
              </div>
              <p className="mt-2 text-ink-soft">{c.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-mauve-700 font-medium group-hover:gap-3 transition-all">
                View case study <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="!py-24">
      <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center border border-line bg-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-mauve-100/80 via-cream-100 to-blush-100/80"
        />
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-24 h-[360px] w-[360px] rounded-full bg-mauve-200/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-24 h-[360px] w-[360px] rounded-full bg-blush-200/60 blur-3xl"
        />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.28em] text-mauve-700">
            Let&apos;s create
          </p>
          <h2 className="mt-4 text-4xl md:text-6xl leading-tight">
            Ready for content that feels{" "}
            <span className="italic text-mauve-600">unmistakably yours</span>?
          </h2>
          <p className="mt-5 text-ink-soft max-w-2xl mx-auto text-lg">
            Whether you&rsquo;re launching, scaling, or simply tired of
            inconsistent social — let&rsquo;s talk about a partnership that
            fits.
          </p>
          <Link to="/contact" className="btn btn-primary mt-8">
            Book a call <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function ContactStrip() {
  return (
    <section className="container-page pb-16">
      <div className="rounded-3xl border border-line p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-cream-50 shadow-soft">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
            Contact
          </p>
          <p className="mt-2 font-display text-2xl text-ink">
            hello@giocontent.studio
          </p>
        </div>
        <Link to="/contact" className="btn btn-ghost">
          More ways to reach Gio <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
