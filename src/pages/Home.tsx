import { Link } from "react-router";
import { ArrowRight, Camera, Sparkles, TrendingUp } from "lucide-react";
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

      <div className="container-page pt-12 pb-20 md:pb-28 -mt-24 md:-mt-32 relative z-10">
        <div className="max-w-3xl fade-up">
          <p className="text-xs uppercase tracking-[0.28em] text-mauve-500 glow-text">
            Content & social media studio · by Giovana Tonon
          </p>
          <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl leading-[1.02] glow-text">
            Social media{" "}
            <span className="italic font-light text-mauve-500">growth</span>{" "}
            <br className="hidden md:block" />
            without{" "}
            <span className="italic font-light text-blush-400">limits</span>.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
            GioContent shoots, edits and runs social for brands that want to
            stop blending in. Considered content. Compounding presence.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
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

function AboutTeaser() {
  return (
    <Section
      eyebrow="About"
      title={
        <>
          A studio built on{" "}
          <span className="italic text-mauve-500">taste</span> and a sharp eye
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
            className="inline-flex items-center gap-2 text-mauve-500 hover:text-mauve-400 font-medium"
          >
            Read Gio&apos;s story <ArrowRight size={16} />
          </Link>
        </div>
        <div className="md:col-span-5">
          <Placeholder
            alt="Editorial placeholder image — moody flat lay of brand props in neon light."
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
      className="bg-surface/40 rounded-[3rem] mx-3 md:mx-8 border border-line"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article
            key={it.title}
            className="group relative rounded-3xl bg-surface border border-line p-8 shadow-soft transition hover:-translate-y-1 hover:border-mauve-300 duration-300 overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-mauve-400/15 blur-3xl group-hover:bg-mauve-400/30 transition-all duration-500"
            />
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-mauve-300/15 text-mauve-500 border border-line">
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
            className="group rounded-3xl overflow-hidden border border-line bg-surface shadow-soft transition hover:shadow-warm hover:-translate-y-1 hover:border-mauve-300 duration-300"
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
                  <span className="text-[11px] uppercase tracking-[0.18em] text-mauve-500 bg-mauve-300/10 border border-line px-2.5 py-1 rounded-full">
                    {c.status}
                  </span>
                )}
              </div>
              <p className="mt-2 text-ink-soft">{c.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-mauve-500 font-medium group-hover:gap-3 transition-all">
                View case study <ArrowRight size={16} />
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
          className="absolute inset-0 bg-gradient-to-br from-mauve-400/25 via-mauve-300/15 to-blush-400/25"
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-mauve-400/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-blush-400/40 blur-3xl"
        />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.28em] text-mauve-500 glow-text">
            Let&apos;s create
          </p>
          <h2 className="mt-4 text-4xl md:text-6xl leading-tight glow-text">
            Ready for content that feels{" "}
            <span className="italic text-mauve-500">unmistakably yours</span>?
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
      <div className="rounded-3xl border border-line p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-surface">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-mauve-500">
            Contact
          </p>
          <p className="mt-2 font-display text-2xl glow-text">
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
