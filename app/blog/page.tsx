import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import { Container } from "@/components/ui/Container";
import { PostList } from "@/components/ui/PostList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing on data engineering, cloud data platforms, and AI systems.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const posts = await getPosts();
  return (
    <Container className="py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
        <span className="text-blue-soft">Blog</span>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">Technical writing</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Notes on data engineering, cloud data platforms, and AI systems.
      </p>
      <div className="mt-14">
        {posts.length > 0 ? <PostList posts={posts} /> : <p className="text-muted">No articles yet.</p>}
      </div>
    </Container>
  );
}
