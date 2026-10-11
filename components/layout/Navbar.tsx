import Link from "next/link";
import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/75 backdrop-blur-md supports-[backdrop-filter]:bg-bg/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg border border-line-strong bg-surface-2 font-mono text-[11px] font-semibold tracking-wider text-blue-soft transition-colors group-hover:border-blue/60"
          >
            {site.initials}
          </span>
          <span className="text-sm font-medium tracking-tight text-fg">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu items={navItems} />
      </Container>
    </header>
  );
}
