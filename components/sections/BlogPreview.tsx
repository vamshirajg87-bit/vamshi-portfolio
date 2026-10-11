import Link from "next/link";
import type { Post } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { PostList } from "@/components/ui/PostList";

export function BlogPreview({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <Section id="blog" index="05" eyebrow="Writing" title="Notes on data engineering.">
      <Reveal>
        <PostList posts={posts} />
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-soft underline-offset-4 hover:underline"
        >
          All articles <ArrowIcon />
        </Link>
      </Reveal>
    </Section>
  );
}
