import { experience } from "@/content/experience";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've worked."
      intro="Data engineering roles across consumer finance, professional services, and insurance."
    >
      <ol className="md:ml-[25%]">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 80} className="relative border-l border-line pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-blue bg-bg"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-semibold tracking-tight text-fg">{job.company}</h3>
              {job.period ? <p className="font-mono text-xs text-subtle">{job.period}</p> : null}
            </div>
            <p className="mt-1 text-blue-soft">{job.role}</p>
            {job.industry ? <p className="mt-1 text-sm text-subtle">{job.industry}</p> : null}
            {job.summary ? <p className="mt-4 max-w-2xl leading-relaxed text-muted">{job.summary}</p> : null}
            {job.stack && job.stack.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies at ${job.company}`}>
                {job.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            ) : null}
            {job.highlights && job.highlights.length > 0 ? (
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
