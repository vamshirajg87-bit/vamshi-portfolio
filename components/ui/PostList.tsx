import Link from "next/link";
import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/format";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-3 py-7 transition-colors md:grid-cols-12 md:gap-6"
          >
            <p className="font-mono text-xs text-subtle md:col-span-3 md:pt-1.5">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true"> · </span>
              {post.readingTime}
            </p>
            <div className="md:col-span-9">
              <h3 className="text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-blue-soft">
                {post.title}
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">{post.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
