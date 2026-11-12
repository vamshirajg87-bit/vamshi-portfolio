export type SocialLink = {
  label: string;
  href: string;
  /** Shown next to the label, e.g. the handle or address. */
  display?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  industry?: string;
  /** One-sentence description of the focus of the role. */
  summary?: string;
  /** Main technologies used in the role. */
  stack?: string[];
  /** Optional, verified details only. Omitted from the page when empty. */
  period?: string;
  highlights?: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ProjectStatus = "In development" | "Completed" | "Public technical preview";

export type ProjectScreenshot = {
  /** Path under /public, e.g. "/screenshots/example.png". */
  src: string;
  /** Descriptive alternative text for the image. */
  alt: string;
  /** Short visible caption shown under the image. */
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  /** Only set when known. */
  status?: ProjectStatus;
  stack: string[];
  /** Capabilities that exist today. Section is hidden when empty. */
  implemented?: string[];
  /** Capabilities that are planned but not built yet. */
  planned?: string[];
  /** Named stages of a pipeline-style project. */
  stages?: { name: string; description: string }[];
  /** Only real, working links. Omit rather than guessing. */
  links?: { label: string; href: string }[];
  /** Optional gallery, shown collapsed. Section is hidden when empty. */
  screenshots?: ProjectScreenshot[];
  /** Visible disclosure shown next to the gallery (for example, that the data is synthetic). */
  screenshotsNote?: string;
};

export type PostMeta = {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-10-11". */
  date: string;
  tags?: string[];
  draft?: boolean;
};

export type Post = PostMeta & {
  slug: string;
  readingTime: string;
};
