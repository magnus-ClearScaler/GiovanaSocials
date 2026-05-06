import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Placeholder } from "../components/Placeholder";
import { Section } from "../components/Section";

export function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-24 -z-10 h-[460px] w-[460px] rounded-full bg-mauve-200/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-24 -z-10 h-[380px] w-[380px] rounded-full bg-blush-200/50 blur-3xl"
        />
        <div className="container-page pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="max-w-3xl fade-up">
            <p className="text-xs uppercase tracking-[0.28em] text-mauve-700">
              About
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl leading-[1.05]">
              Hi, I&rsquo;m{" "}
              <span className="italic font-light text-mauve-600">
                Giovana
              </span>
              .
            </h1>
            <p className="mt-6 text-xl text-ink-soft leading-relaxed">
              I run GioContent, a small studio focused on shooting, editing,
              and managing social media for brands who want to grow on their
              own terms.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <Placeholder
              alt="Editorial portrait of Giovana Tonon working on a content shoot in soft window light."
              tone="mauve"
              ratio="landscape"
              label="Giovana on set"
            />
          </div>
          <div className="md:col-span-5">
            <Placeholder
              alt="Behind-the-scenes flat lay of camera, tripod and styling props."
              tone="blush"
              ratio="portrait"
              label="The studio"
            />
          </div>
        </div>
      </section>

      <Section
        eyebrow="My approach"
        title={
          <>
            Considered content. <br />
            <span className="italic text-mauve-600">Consistent presence.</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div className="space-y-5 text-lg text-ink-soft leading-relaxed">
            <p>
              I started GioContent because I saw too many great brands
              flatten themselves to fit social. The good news: with the right
              hooks, a clear voice, and content shot with intention, social
              becomes the most honest place for a brand to live.
            </p>
            <p>
              My specialties are{" "}
              <span className="text-ink">social media management</span> and{" "}
              <span className="text-ink">organic growth</span> — which is
              just a way of saying I care about the result, not just the
              aesthetic. Both matter.
            </p>
          </div>
          <div className="space-y-5 text-lg text-ink-soft leading-relaxed">
            <p>
              On a typical engagement, I&rsquo;ll shoot and edit the content
              myself, run the channel day-to-day, and obsess over the
              numbers — what&rsquo;s working, what&rsquo;s not, what we
              should ship next.
            </p>
            <p>
              I work best with founders and small teams who want a partner,
              not a vendor.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/70 rounded-[3rem] mx-3 md:mx-8 border border-line">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
              What I do
            </p>
            <ul className="mt-5 space-y-3 text-lg">
              <li>Social media management</li>
              <li>Organic growth strategy</li>
              <li>Content creation (photo + video)</li>
              <li>Editing & post-production</li>
              <li>Brand & voice direction</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
              Tools of the trade
            </p>
            <ul className="mt-5 space-y-3 text-lg">
              <li>Camera + natural light</li>
              <li>Capcut, Premiere, Lightroom</li>
              <li>Notion + content calendars</li>
              <li>Instagram, TikTok, LinkedIn</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
              Better together if&hellip;
            </p>
            <ul className="mt-5 space-y-3 text-lg text-ink-soft">
              <li>You care how your brand looks and sounds.</li>
              <li>You want growth that converts, not just vanity.</li>
              <li>You&rsquo;re ready to ship consistently.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="!pt-12">
        <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center border border-line bg-surface">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-mauve-100/80 via-cream-100 to-blush-100/80"
          />
          <div
            aria-hidden="true"
            className="absolute -top-32 -left-24 h-[360px] w-[360px] rounded-full bg-mauve-200/60 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl leading-tight">
              Want to <span className="italic text-mauve-600">work together</span>?
            </h2>
            <p className="mt-4 text-ink-soft max-w-xl mx-auto">
              I take on a small number of partners at a time so each one
              gets real attention.
            </p>
            <Link to="/contact" className="btn btn-primary mt-8">
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
