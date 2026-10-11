import type { Project } from "@/lib/types";
import { Tag } from "./Tag";

function List({ title, items, tone }: { title: string; items: string[]; tone: "blue" | "violet" }) {
  const dot = tone === "blue" ? "bg-blue" : "bg-violet";
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">{title}</h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const headingId = `project-${project.slug}`;
  const implemented = project.implemented ?? [];
  const planned = project.planned ?? [];
  const stages = project.stages ?? [];
  const links = project.links ?? [];

  return (
    <article
      aria-labelledby={headingId}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 transition-colors duration-300 hover:border-line-strong sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, "0")}</span>
        {project.status ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-xs text-violet-soft">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet" />
            {project.status}
          </span>
        ) : null}
      </div>

      <h3 id={headingId} className="mt-5 text-2xl font-semibold tracking-tight text-fg">
        {project.title}
      </h3>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted">{project.summary}</p>

      {stages.length > 0 ? (
        <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage, i) => (
            <li key={stage.name} className="bg-surface p-4">
              <p className="font-mono text-xs text-blue-soft">
                {String(i + 1).padStart(2, "0")} <span className="text-fg">{stage.name}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{stage.description}</p>
            </li>
          ))}
        </ol>
      ) : null}

      {implemented.length > 0 || planned.length > 0 ? (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {implemented.length > 0 ? <List title="Implemented" items={implemented} tone="blue" /> : null}
          {planned.length > 0 ? <List title="Planned" items={planned} tone="violet" /> : null}
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        {links.length > 0 ? (
          <div className="flex gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-soft underline-offset-4 hover:underline"
              >
                {link.label}
                <span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
