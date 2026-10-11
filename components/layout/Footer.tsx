import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-xs">{site.headline.join(" · ")}</p>
        </div>
        {site.contact.length > 0 ? (
          <nav aria-label="Social">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {site.contact.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                    >
                      {link.label}
                      <span className="sr-only">
                        {external ? ` — ${site.name} (opens in a new tab)` : ` ${site.name}`}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </Container>
    </footer>
  );
}
