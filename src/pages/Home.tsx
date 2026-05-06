import { Link } from "react-router";
import { ArrowRight, Camera, Sparkles, TrendingUp } from "lucide-react";
import { Section } from "../components/Section";
import { Placeholder } from "../components/Placeholder";
import { HeroAnimation } from "../components/HeroAnimation";
import { caseStudies } from "../data/caseStudies";

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
      <HeroAnimation />

      <div className="container-page pt-2 pb-20 md:pb-28 -mt-10 md:-mt-16 relative z-10">
        <div className="max-w-3xl fade-up">
          <p className="text-xs uppercase tracking-[0.24em] text-mauve-700">
            Content & social media studio
          </p>
          <p className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
            GioContent is a studio by Giovana Tonon — shooting and editing
            content, and managing social media for brands that want to grow
            without ever sounding like anyone else.
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

function AboutTeaser() {
  return (
    <Section
      eyebrow="About"
      title={
        <>
          A studio built on{" "}
          <span className="italic text-mauve-700">taste</span> and a sharp eye
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
            className="inline-flex items-center gap-2 text-mauve-700 hover:text-mauve-800 font-medium"
          >
            Read Gio&apos;s story <ArrowRight size={16} />
          </Link>
        </div>
        <div className="md:col-span-5">
          <Placeholder
            alt="Editorial placeholder image — flat lay of pink and cream brand props with handwritten notes."
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
      className="bg-blush-50/60 rounded-[3rem] mx-3 md:mx-8"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article
            key={it.title}
            className="rounded-3xl bg-cream-50 border border-mauve-100 p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-warm duration-300"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-blush-100 text-mauve-700">
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
            className="group rounded-3xl overflow-hidden border border-mauve-100 bg-cream-50 shadow-soft transition hover:shadow-warm hover:-translate-y-1 duration-300"
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
                  <span className="text-[11px] uppercase tracking-[0.18em] text-mauve-700 bg-blush-100 px-2.5 py-1 rounded-full">
                    {c.status}
                  </span>
                )}
              </div>
              <p className="mt-2 text-ink-soft">{c.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-mauve-700 font-medium group-hover:gap-3 transition-all">
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
      <div className="rounded-[2.5rem] bg-gradient-to-br from-mauve-200 via-blush-200 to-cream-100 p-10 md:p-16 text-center shadow-warm">
        <p className="text-xs uppercase tracking-[0.24em] text-mauve-800">
          Let&apos;s create
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl leading-tight">
          Ready for content that feels{" "}
          <span className="italic">unmistakably yours</span>?
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
    </Section>
  );
}

function ContactStrip() {
  return (
    <section className="container-page pb-16">
      <div className="rounded-3xl border border-mauve-100 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-cream-50">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
            Contact
          </p>
          <p className="mt-2 font-display text-2xl">
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
