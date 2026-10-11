import { projects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <Section id="projects" index="04" eyebrow="Projects" title="Featured work.">
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
