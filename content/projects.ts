import type { Project } from "@/lib/types";

/**
 * Keep descriptions factual. Do not add metrics, users, or deployment
 * claims until they are real; only add links that work.
 */
export const projects: Project[] = [
  {
    slug: "agentops-intelligence-platform",
    title: "AgentOps Intelligence Platform",
    status: "Public technical preview",
    summary:
      "AgentOps Intelligence Platform is a locally validated AI-agent observability and diagnosis system built with OpenTelemetry, Kafka, PostgreSQL, and dbt. It supports trace investigation, anomaly detection, and evidence-backed root-cause analysis through a local Trace Viewer. The public repository includes four screenshots using synthetic demonstration data and precomputed anomaly and RCA records—not live detection or automated RCA results. The application is not publicly hosted or production-ready.",
    stack: ["OpenTelemetry", "Kafka", "PostgreSQL", "dbt", "Python", "FastAPI", "Docker Compose"],
    // List only capabilities that are built and working today.
    implemented: [
      "Deterministic synthetic workload and instrumented demo agent that emit OpenTelemetry spans over OTLP",
      "OTLP Collector, Kafka and a stream processor that validates spans and routes invalid records to a dead-letter topic",
      "PostgreSQL storage with dbt models for trace reconstruction and trace-level metrics",
      "One-shot anomaly detection for latency, error-rate and tool-failure anomalies",
      "RCA analyzer that investigates one anomaly by id and stores ranked evidence; its confidence label is not a measured accuracy",
      "Role-based database permissions, with a read-only role for the Trace Viewer",
      "Read-only, unauthenticated, loopback-only Trace Viewer for traces, anomalies, and root-cause investigations",
      "Local end-to-end validation on one Windows and Docker Desktop machine, using synthetic data",
    ],
    planned: [
      "A CI workflow (deferred from the initial public release)",
    ],
    links: [
      { label: "Source on GitHub", href: "https://github.com/vamshirajg87-bit/agentops-observability-platform" },
    ],
    screenshots: [
      {
        src: "/screenshots/agentops-dashboard-overview.png",
        alt: "Trace Viewer dashboard listing 14 synthetic traces, each tagged as synthetic demo data, with status, duration, service and span counts.",
        caption: "Dashboard overview: 14 synthetic traces with status, duration and span counts.",
      },
      {
        src: "/screenshots/agentops-trace-investigation.png",
        alt: "Trace Viewer execution tree of a failed synthetic trace, with the failed tool.execute span selected and its error details open.",
        caption: "Trace investigation: execution tree and span details for a failed tool call.",
      },
      {
        src: "/screenshots/agentops-anomaly-detection.png",
        alt: "Trace Viewer anomaly list showing a synthetic tool-failure anomaly and a synthetic latency anomaly.",
        caption: "Anomaly detection: two synthetic anomaly events (precomputed demonstration records).",
      },
      {
        src: "/screenshots/agentops-rca-evidence.png",
        alt: "Trace Viewer root-cause analysis for the synthetic tool-failure anomaly, with a confidence label, limitations and five ranked evidence spans.",
        caption: "Evidence-backed root-cause analysis: summary, limitations and ranked evidence for a synthetic anomaly (precomputed).",
      },
    ],
    screenshotsNote:
      "Screenshots use synthetic demonstration data. Displayed anomaly events and RCA investigations are precomputed records, not results of a live anomaly-detection or automated RCA execution.",
  },
  {
    slug: "insurance-claims-pipeline",
    title: "Insurance Claims Data Engineering Pipeline",
    summary:
      "A data pipeline that takes raw insurance claims data through ingestion, validation, and transformation into a Snowflake warehouse, with Power BI for reporting.",
    stack: ["Python", "Snowflake", "SQL", "Power BI"],
    stages: [
      { name: "Ingestion", description: "Python loads raw claims data into Snowflake." },
      { name: "Validation", description: "Incoming data is validated before it moves downstream." },
      { name: "Transformation", description: "SQL transforms raw data into clean, consistent tables." },
      { name: "Warehousing", description: "Curated data is stored in Snowflake for analysis." },
      { name: "Analytics", description: "Power BI reports are built on the curated data." },
    ],
  },
];
