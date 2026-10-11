const stages = [
  { label: "ingest", tools: "Kafka · Python" },
  { label: "process", tools: "PySpark · Databricks" },
  { label: "model", tools: "Snowflake · dbt" },
  { label: "serve", tools: "Power BI · AI systems" },
];

/** Decorative schematic of a data platform, built from the skills list. */
export function PlatformDiagram() {
  return (
    <figure
      role="img"
      aria-label="Schematic of a data platform: ingest, process, model, and serve stages, orchestrated with Airflow on Azure, AWS, and GCP."
      className="relative rounded-2xl border border-line bg-surface/80 p-5 shadow-[0_0_0_1px_rgb(0_0_0/0.4),0_30px_80px_-20px_rgb(0_0_0/0.8)] sm:p-6"
    >
      <div aria-hidden="true" className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        <span className="font-mono text-[11px] text-subtle">platform.dag</span>
      </div>

      <ol aria-hidden="true" className="relative mt-5 space-y-3">
        <svg className="absolute left-[15px] top-4 h-[calc(100%-2rem)] w-px overflow-visible" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="0" y2="100%" stroke="url(#flow-gradient)" strokeWidth="1.5" className="flow-line" />
          <defs>
            <linearGradient id="flow-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5b9dff" />
              <stop offset="100%" stopColor="#9d84ff" />
            </linearGradient>
          </defs>
        </svg>
        {stages.map((stage, i) => (
          <li key={stage.label} className="relative flex items-center gap-4">
            <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong bg-bg font-mono text-[11px] text-blue-soft">
              {i + 1}
            </span>
            <div className="flex flex-1 items-center justify-between gap-3 rounded-lg border border-line bg-bg/60 px-4 py-3">
              <span className="font-mono text-sm text-fg">{stage.label}</span>
              <span className="text-right font-mono text-[11px] text-subtle sm:text-xs">{stage.tools}</span>
            </div>
          </li>
        ))}
      </ol>

      <div aria-hidden="true" className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 font-mono text-[11px] sm:text-xs">
        <div>
          <p className="text-subtle">orchestration</p>
          <p className="mt-1 text-violet-soft">Airflow</p>
        </div>
        <div className="text-right">
          <p className="text-subtle">clouds</p>
          <p className="mt-1 text-blue-soft">Azure · AWS · GCP</p>
        </div>
      </div>
    </figure>
  );
}
