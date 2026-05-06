export type Metric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  brand: string;
  tagline: string;
  intro: string;
  services: string[];
  status?: string;
  link?: string;
  metrics: Metric[];
  story: string[];
  imageAlt: string;
  galleryAlts: string[];
  accent: "blush" | "mauve" | "cream";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "marzelle-sweets",
    brand: "MarzelleSweets",
    tagline: "Content creation for an artisan sweets brand.",
    intro:
      "Shooting and editing scroll-stopping content that captures the warmth and craft of MarzelleSweets — frame by delicious frame.",
    services: ["Content creation", "Photo & video direction", "Editing"],
    link: "https://marzellesweets.com",
    metrics: [
      { value: "Brand", label: "Visual identity refresh" },
      { value: "100%", label: "Original content shot in-studio" },
      { value: "Daily", label: "Posting cadence supported" },
    ],
    story: [
      "MarzelleSweets needed content that felt as crafted as the product itself. The work focused on shooting and editing photo and video that translates the texture, color, and care behind every batch.",
      "From quick reels to evergreen brand stills, every asset is designed to feel handheld, warm and human — never staged.",
    ],
    imageAlt:
      "Hero image placeholder for MarzelleSweets — overhead shot of pastel sweets on a soft cream backdrop.",
    galleryAlts: [
      "MarzelleSweets product photography placeholder — close-up of a single sweet on a pink linen.",
      "MarzelleSweets behind-the-scenes placeholder — hands plating sweets in natural light.",
      "MarzelleSweets reel still placeholder — top-down pour shot in motion.",
    ],
    accent: "blush",
  },
  {
    slug: "clearcruit",
    brand: "ClearCruit",
    tagline: "1,200+ followers in 3 weeks. 500K+ views. 50 organic sign-ups.",
    intro:
      "An organic-growth playbook for a recruiting platform — built on tight content loops, sharp hooks, and a clear point of view.",
    services: [
      "Social media management",
      "Organic growth strategy",
      "Short-form content",
    ],
    status: "Now dissolved",
    metrics: [
      { value: "1,200+", label: "New followers in 3 weeks" },
      { value: "500K+", label: "Instagram views generated" },
      { value: "50", label: "Organic sign-ups to the platform" },
    ],
    story: [
      "ClearCruit wanted to validate that an organic-first social strategy could meaningfully drive sign-ups. The work focused on a tight test-and-learn loop on Instagram — strong hooks, fast iteration, and content tied to a clear product narrative.",
      "Within three weeks, the account had picked up 1,200+ followers, surpassed 500K views, and converted 50 sign-ups directly from social — proof that the right voice in the right format moves real numbers.",
    ],
    imageAlt:
      "Hero image placeholder for ClearCruit — clean editorial composition on a mauve gradient backdrop.",
    galleryAlts: [
      "ClearCruit content placeholder — short-form video thumbnail with bold quote overlay.",
      "ClearCruit metric chart placeholder — follower growth curve over three weeks.",
      "ClearCruit content placeholder — talking-head reel still with caption type.",
    ],
    accent: "mauve",
  },
  {
    slug: "amr-arquitectura",
    brand: "Amr Arquitectura",
    tagline: "Social media management that turned followers into inbound leads.",
    intro:
      "Managed end-to-end social for an architecture studio — growing the audience and, more importantly, the inbound social-media leads.",
    services: [
      "Social media management",
      "Editorial direction",
      "Lead-driven content strategy",
    ],
    metrics: [
      { value: "Growing", label: "Following month over month" },
      { value: "Inbound", label: "Social-media leads driven" },
      { value: "Editorial", label: "Visual language for the studio" },
    ],
    story: [
      "Amr Arquitectura needed a social presence as considered as their architectural work. The strategy paired a calm, editorial visual language with content sequenced to bring qualified prospects into DMs.",
      "The result: a steadily growing following and a meaningful uptick in inbound leads — the kind that ask about projects, not just like posts.",
    ],
    imageAlt:
      "Hero image placeholder for Amr Arquitectura — soft architectural interior with warm light.",
    galleryAlts: [
      "Amr Arquitectura grid placeholder — three-up architectural detail composition.",
      "Amr Arquitectura reel placeholder — slow tracking shot of a finished space.",
      "Amr Arquitectura post placeholder — typographic project announcement.",
    ],
    accent: "cream",
  },
  {
    slug: "clearscaler",
    brand: "ClearScaler",
    tagline: "Branding, content, and marketing strategy on social.",
    intro:
      "Shaping brand voice, social content, and marketing strategy for ClearScaler — an ongoing partnership focused on positioning and consistent presence.",
    services: [
      "Brand & voice direction",
      "Content production",
      "Social marketing strategy",
    ],
    status: "Current client",
    metrics: [
      { value: "Ongoing", label: "Strategic partnership" },
      { value: "End-to-end", label: "Branding + content + strategy" },
      { value: "Social-first", label: "Marketing approach" },
    ],
    story: [
      "ClearScaler is a current, ongoing engagement spanning brand expression, content production, and social marketing strategy. The focus is consistency: a recognizable point of view across every post, story, and campaign.",
      "Together we sharpen positioning, run the social channel, and build a content engine that grows alongside the company.",
    ],
    imageAlt:
      "Hero image placeholder for ClearScaler — modern editorial composition in mauve and cream.",
    galleryAlts: [
      "ClearScaler brand placeholder — logo and color system layout.",
      "ClearScaler campaign placeholder — campaign hero image with type lockup.",
      "ClearScaler content placeholder — carousel post first slide.",
    ],
    accent: "mauve",
  },
];

export const findCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
