import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle md:col-span-3 md:pt-2">
              <span className="text-blue-soft">{index}</span>
              <span aria-hidden="true"> — </span>
              {eyebrow}
            </p>
            <div className="md:col-span-9">
              <h2
                id={headingId}
                className="text-3xl font-semibold tracking-tight text-fg text-balance sm:text-4xl"
              >
                {title}
              </h2>
              {intro ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
            </div>
          </div>
        </Reveal>
        <div className="mt-12 md:mt-16">{children}</div>
      </Container>
    </section>
  );
}
