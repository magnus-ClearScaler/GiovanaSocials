import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { caseStudies, findCaseStudy } from "../data/caseStudies";
import { Placeholder } from "../components/Placeholder";
import { NotFound } from "./NotFound";

export function CaseStudy() {
  const { slug = "" } = useParams();
  const study = findCaseStudy(slug);
  if (!study) return <NotFound />;

  const others = caseStudies.filter((c) => c.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-100 via-cream-50 to-cream-50" />
        <div className="container-page pt-16 md:pt-20 pb-10 md:pb-14 fade-up">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-mauve-700"
          >
            <ArrowLeft size={14} /> Back to all work
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
              Case study
            </p>
            {study.status && (
              <span className="text-[11px] uppercase tracking-[0.18em] text-mauve-700 bg-blush-100 px-2.5 py-1 rounded-full">
                {study.status}
              </span>
            )}
          </div>
          <h1 className="mt-4 text-5xl md:text-7xl leading-[1.04] max-w-4xl">
            {study.brand}
          </h1>
          <p className="mt-5 text-xl md:text-2xl text-ink-soft max-w-3xl leading-relaxed">
            {study.tagline}
          </p>
          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-mauve-700 hover:text-mauve-800"
            >
              Visit site <ExternalLink size={14} />
            </a>
          )}
        </div>
      </section>

      <section className="container-page">
        <Placeholder
          alt={study.imageAlt}
          tone={study.accent}
          ratio="wide"
          label={`${study.brand} — hero`}
        />
      </section>

      <section className="container-page py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-lg">
            {study.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-ink-soft">
          <p className="text-xl text-ink">{study.intro}</p>
          {study.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-blush-100 via-cream-100 to-mauve-100 p-10 md:p-16">
          <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
            The numbers
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-8">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-5xl md:text-6xl text-ink leading-none">
                  {m.value}
                </p>
                <p className="mt-3 text-ink-soft">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
          Selected visuals
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {study.galleryAlts.map((alt, i) => (
            <Placeholder
              key={i}
              alt={alt}
              tone={
                i === 0
                  ? study.accent
                  : i === 1
                    ? "blush"
                    : "cream"
              }
              ratio={i === 1 ? "portrait" : "landscape"}
              label={`Visual ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-[2.5rem] border border-mauve-100 p-10 md:p-14 bg-cream-50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
                More work
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Other case studies
              </h2>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Start a project <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/work/${o.slug}`}
                className="group rounded-2xl overflow-hidden border border-mauve-100 bg-cream-50 hover:shadow-warm transition duration-300"
              >
                <Placeholder
                  alt={o.imageAlt}
                  tone={o.accent}
                  ratio="landscape"
                  label={o.brand}
                />
                <div className="p-5">
                  <h3 className="text-xl">{o.brand}</h3>
                  <p className="mt-1 text-ink-soft text-sm line-clamp-2">
                    {o.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
