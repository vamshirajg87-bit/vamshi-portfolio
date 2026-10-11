import type { Project } from "@/lib/types";

/**
 * Keep descriptions factual. Do not add metrics, users, or deployment
 * claims until they are real; only add links that work.
 */
export const projects: Project[] = [
  {
    slug: "agentops-intelligence-platform",
    title: "AgentOps Intelligence Platform",
    status: "In development",
    summary:
      "An observability and automated root-cause analysis platform for agentic AI systems. The goal is to make multi-step agent behavior inspectable, so that when an agent run fails or drifts, it is clear what happened and why. The capabilities below are at the development stage; the platform is not deployed to production or publicly available.",
    stack: ["OpenTelemetry", "OpenInference", "Kafka", "PostgreSQL", "dbt"],
    // List only capabilities that are built and working today.
    implemented: [
      "Telemetry pipeline built on OpenTelemetry and OpenInference",
      "Kafka-backed telemetry ingestion and stream processing",
      "PostgreSQL storage with dbt-based analytical models",
      "Trace inspection and anomaly detection workflows",
      "PostgreSQL-backed root-cause investigations, with trace reconstruction and evidence ranking",
      "Persistence of investigation results and their supporting evidence",
      "Role-based database permissions for root-cause analysis",
    ],
    planned: [
      "End-user dashboards for exploring traces, anomalies, and investigation results",
      "Production readiness, security hardening, and deployment automation",
    ],
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
