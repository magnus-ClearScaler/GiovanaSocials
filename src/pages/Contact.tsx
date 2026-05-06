import { useState, type FormEvent } from "react";
import { Calendar, Instagram, Mail, Send } from "lucide-react";
import { Placeholder } from "../components/Placeholder";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-100 via-cream-50 to-cream-50" />
        <div className="container-page pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="max-w-3xl fade-up">
            <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
              Contact
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl leading-[1.05]">
              Let&rsquo;s make something{" "}
              <span className="italic font-light text-mauve-700">
                worth scrolling for
              </span>
              .
            </h1>
            <p className="mt-6 text-xl text-ink-soft leading-relaxed">
              Tell me a little about your brand and what you&rsquo;re hoping
              to build. I&rsquo;ll get back within two business days.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <div className="rounded-3xl border border-mauve-100 bg-cream-50 p-8 md:p-10 shadow-soft">
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
                  Sent
                </p>
                <h2 className="mt-4 text-3xl md:text-4xl">
                  Thank you — message received.
                </h2>
                <p className="mt-4 text-ink-soft">
                  Gio will be in touch shortly. In the meantime, feel free to
                  follow along on Instagram.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <Field label="Your name" name="name" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@brand.com"
                />
                <Field
                  label="Brand or company"
                  name="company"
                  placeholder="Optional"
                />
                <Field
                  label="What kind of help?"
                  name="service"
                  as="select"
                  options={[
                    "Social media management",
                    "Content creation",
                    "Organic growth strategy",
                    "Brand & voice",
                    "Something else",
                  ]}
                />
                <Field
                  label="Tell me about your project"
                  name="message"
                  as="textarea"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary justify-center mt-2"
                >
                  Send message <Send size={16} />
                </button>
                <p className="text-xs text-ink-muted">
                  By sending, you agree to be contacted at the email
                  provided. No marketing spam — ever.
                </p>
              </form>
            )}
          </div>
        </div>

        <aside className="md:col-span-5 space-y-6">
          <Placeholder
            alt="Calm placeholder image of a desk with notebook, camera and a pink ceramic mug."
            tone="blush"
            ratio="landscape"
            label="Studio desk"
          />
          <ContactRow
            icon={Mail}
            label="Email"
            value="hello@giocontent.studio"
            href="mailto:hello@giocontent.studio"
          />
          <ContactRow
            icon={Calendar}
            label="Booking"
            value="Schedule a 30-min intro call"
            href="mailto:hello@giocontent.studio?subject=Intro%20call"
          />
          <ContactRow
            icon={Instagram}
            label="Instagram"
            value="@giocontent"
            href="https://instagram.com"
          />
          <div className="rounded-3xl bg-blush-50/70 border border-mauve-100 p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-mauve-700">
              Working together
            </p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              I take on a small number of partners at a time. Most engagements
              start with a 30-minute intro call to make sure we&rsquo;re a
              fit before any proposal.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
};

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  as = "input",
  options = [],
}: FieldProps) {
  const base =
    "mt-2 w-full rounded-2xl border border-mauve-100 bg-cream-50 px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:border-mauve-400 focus:ring-4 focus:ring-blush-100 transition";
  return (
    <label className="block">
      <span className="text-sm text-ink-soft">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={base}
        />
      ) : as === "select" ? (
        <select name={name} className={base} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

type ContactRowProps = {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
  href: string;
};

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-mauve-100 bg-cream-50 p-5 hover:border-mauve-300 hover:bg-blush-50/60 transition"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blush-100 text-mauve-700">
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.22em] text-ink-muted">
          {label}
        </span>
        <span className="block text-ink mt-0.5">{value}</span>
      </span>
    </a>
  );
}
