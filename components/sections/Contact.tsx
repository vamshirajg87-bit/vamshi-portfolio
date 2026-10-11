import { hasContact, site } from "@/content/site";
import { Section } from "@/components/ui/Section";

/** Rendered only when at least one verified contact link exists in content/site.ts. */
export function Contact() {
  if (!hasContact) return null;
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's talk data platforms."
      intro="Open to conversations about data engineering, cloud data platforms, and AI systems."
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 md:ml-[25%]">
        {site.contact.map((link) => {
          const external = link.href.startsWith("http");
          return (
            <li key={link.href}>
              <a
                href={link.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-full flex-col gap-1 bg-bg p-6 transition-colors hover:bg-surface"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">{link.label}</span>
                <span className="text-fg">{link.display ?? link.href.replace(/^mailto:|^https?:\/\//, "")}</span>
                {external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
