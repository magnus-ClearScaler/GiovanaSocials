import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Placeholder } from "../components/Placeholder";
import { Section } from "../components/Section";

export function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-100 via-cream-50 to-cream-50" />
        <div className="container-page pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="max-w-3xl fade-up">
            <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
              About
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl leading-[1.05]">
              Hi, I&rsquo;m{" "}
              <span className="italic font-light text-mauve-700">Giovana</span>
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
              alt="Editorial placeholder portrait of Giovana Tonon working on a content shoot, soft natural light."
              tone="mauve"
              ratio="landscape"
              label="Giovana on set"
            />
          </div>
          <div className="md:col-span-5">
            <Placeholder
              alt="Behind-the-scenes placeholder image of camera, tripod and pink prop styling."
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
            <span className="italic text-mauve-700">
              Consistent presence.
            </span>
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
              My specialties are <span className="text-ink">social media management</span>
              {" "}and <span className="text-ink">organic growth</span> — which
              is just a way of saying I care about the result, not just the
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

      <Section className="bg-blush-50/60 rounded-[3rem] mx-3 md:mx-8">
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
        <div className="rounded-[2.5rem] bg-gradient-to-br from-mauve-200 via-blush-200 to-cream-100 p-10 md:p-16 text-center shadow-warm">
          <h2 className="text-4xl md:text-5xl leading-tight">
            Want to <span className="italic">work together</span>?
          </h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto">
            I take on a small number of partners at a time so each one gets
            real attention.
          </p>
          <Link to="/contact" className="btn btn-primary mt-8">
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
