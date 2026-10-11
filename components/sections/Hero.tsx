import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { PlatformDiagram } from "./PlatformDiagram";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(91_157_255/0.16),rgb(157_132_255/0.08)_55%,transparent)] blur-2xl"
      />
      <Container className="relative grid items-center gap-14 pb-20 pt-16 sm:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-28">
        <div className="lg:col-span-7">
          <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {site.headline.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-3">
                {i > 0 ? (
                  <span aria-hidden="true" className="text-blue">
                    /
                  </span>
                ) : null}
                {item}
              </span>
            ))}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">{site.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/#projects">
              View projects <ArrowIcon />
            </Button>
            <Button href="/blog" variant="secondary">
              Read the blog
            </Button>
            {site.resumePath ? (
              <Button href={site.resumePath} variant="secondary" external>
                Résumé
              </Button>
            ) : null}
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-line pt-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Experience</dt>
              <dd className="mt-2 text-fg">{site.yearsOfExperience} years in data engineering</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Cloud</dt>
              <dd className="mt-2 text-fg">{site.clouds.join(" · ")}</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <PlatformDiagram />
        </div>
      </Container>
    </section>
  );
}
