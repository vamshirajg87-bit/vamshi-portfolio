import type { SocialLink } from "@/lib/types";

export const site = {
  name: "Vamshi Raj",
  shortName: "Vamshi",
  initials: "VR",
  headline: ["Data Engineer", "Cloud Data Platforms", "AI Systems"],
  description:
    "Vamshi Raj is a Data Engineer with 5+ years of experience building scalable data platforms, distributed data processing, and cloud architecture across Azure, AWS, and GCP.",
  intro:
    "I design and build scalable data platforms — distributed processing, reliable pipelines, and the cloud architecture underneath them — with a growing focus on AI systems.",
  yearsOfExperience: "5+",
  clouds: ["Azure", "AWS", "GCP"],
  focusAreas: [
    "Scalable data platforms",
    "Distributed data processing",
    "Cloud architecture",
    "Pipeline optimization",
    "AI systems",
  ],
  about: [
    "I'm a data engineer with 5+ years of experience across financial services and professional services organizations, including Synchrony Financial, EY, and MassMutual.",
    "My work centers on the foundations that analytics and AI depend on: data platforms that scale, distributed processing with Spark and Databricks, warehouse modeling in Snowflake and dbt, and orchestration that keeps pipelines dependable. I work across Azure, AWS, and GCP.",
    "Lately I've been spending more time on AI engineering — in particular, how to observe and debug agentic AI systems, which is the motivation behind my current project, AgentOps Intelligence Platform.",
  ],
  /**
   * Contact links. Leave empty until verified — the Contact section and its
   * nav item are hidden automatically when there is nothing to show.
   * Example: { label: "Email", href: "mailto:you@example.com", display: "you@example.com" }
   */
  contact: [
    { label: "Email", href: "mailto:vamshirajg87@gmail.com", display: "vamshirajg87@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vamshi-raj-84b374302/", display: "in/vamshi-raj-84b374302" },
    { label: "GitHub", href: "https://github.com/vamshirajg87-bit", display: "vamshirajg87-bit" },
  ] as SocialLink[],
  /** Address used by the "Contact Me" button. */
  email: "vamshirajg87@gmail.com",
  /** Path to a résumé in /public, e.g. "/resume.pdf". Leave null to hide the button. */
  resumePath: null as string | null,
};

export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const hasContact = site.contact.length > 0;
