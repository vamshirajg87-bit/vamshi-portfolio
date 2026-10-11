import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Data foundations for analytics and AI.">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="space-y-5 md:col-span-6 md:col-start-4">
          {site.about.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted text-pretty">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal delay={100} className="md:col-span-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">Focus</h3>
          <ul className="mt-4 space-y-3 text-sm text-fg">
            {site.focusAreas.map((area) => (
              <li key={area} className="border-l border-blue/50 pl-3">
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
