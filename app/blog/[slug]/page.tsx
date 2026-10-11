import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, loadPost } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

type Params = { slug: string };

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Params[]> {
  return (await getPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded) return {};
  const { post } = loaded;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded || loaded.post.draft) notFound();
  const { post, Content } = loaded;

  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-[44rem]">
        <Link
          href="/blog"
          className="font-mono text-xs uppercase tracking-[0.18em] text-subtle transition-colors hover:text-blue-soft"
        >
          <span aria-hidden="true">← </span>All articles
        </Link>
        <header className="mt-8 border-b border-line pb-10">
          <p className="font-mono text-xs text-subtle">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true"> · </span>
            {post.readingTime}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-fg text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.description}</p>
          {post.tags && post.tags.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          ) : null}
        </header>
        <div className="pt-4 text-[1.0625rem]">
          <Content />
        </div>
      </article>
    </Container>
  );
}
