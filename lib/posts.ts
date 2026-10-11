import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { Post, PostMeta } from "./types";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

type PostModule = { default: ComponentType; metadata: PostMeta };

function readingTime(source: string): string {
  const prose = source.replace(/```[\s\S]*?```/g, " ").replace(/export const metadata[\s\S]*?\};/, " ");
  const words = prose.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function loadPost(slug: string): Promise<{ post: Post; Content: ComponentType } | null> {
  if (!getPostSlugs().includes(slug)) return null;
  const mod = (await import(`@/content/posts/${slug}.mdx`)) as PostModule;
  const source = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
  return {
    post: { ...mod.metadata, slug, readingTime: readingTime(source) },
    Content: mod.default,
  };
}

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const loaded = await Promise.all(getPostSlugs().map((slug) => loadPost(slug)));
  return loaded
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null && !entry.post.draft)
    .map((entry) => entry.post)
    .sort((a, b) => b.date.localeCompare(a.date));
}
