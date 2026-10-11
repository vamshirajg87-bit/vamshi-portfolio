import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200";

const variants = {
  primary: "bg-fg text-bg hover:bg-blue-soft",
  secondary: "border border-line-strong text-fg hover:border-blue/60 hover:bg-surface-2",
};

export function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const className = `${base} ${variants[variant]}`;
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
