import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

function MdxLink({ href = "", children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const className = "text-blue-soft underline decoration-blue/40 underline-offset-4 hover:decoration-blue-soft";
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

const components: MDXComponents = {
  h2: (props) => <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-fg sm:text-[1.7rem]" {...props} />,
  h3: (props) => <h3 className="mt-10 mb-3 text-xl font-semibold tracking-tight text-fg" {...props} />,
  p: (props) => <p className="my-5 leading-[1.8] text-muted" {...props} />,
  a: MdxLink,
  ul: (props) => <ul className="my-5 list-disc space-y-2 pl-6 leading-[1.8] text-muted marker:text-blue" {...props} />,
  ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-6 leading-[1.8] text-muted marker:font-mono marker:text-subtle" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => <strong className="font-semibold text-fg" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-8 border-l-2 border-violet pl-5 text-fg [&>p]:text-fg" {...props} />
  ),
  hr: () => <hr className="my-12 border-line" />,
  pre: (props) => (
    <pre
      className="my-7 overflow-x-auto rounded-xl border border-line bg-bg-deep p-5 font-mono text-[13px] leading-relaxed text-fg [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-blue-soft" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
