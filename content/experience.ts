import type { ExperienceEntry } from "@/lib/types";

/**
 * Most recent first. Only add `period` and `highlights` once verified
 * against the résumé — empty fields are simply not rendered.
 */
export const experience: ExperienceEntry[] = [
  {
    company: "Synchrony Financial",
    role: "Senior Data Engineer",
    industry: "Consumer financial services",
    summary:
      "Enterprise data pipelines on Azure, Databricks, and Snowflake, with a focus on PySpark processing and performance optimization.",
    stack: ["Azure", "Databricks", "Snowflake", "PySpark"],
  },
  {
    company: "EY",
    role: "Data Engineer",
    industry: "Professional services",
    summary: "Cloud data architecture and ETL/ELT automation on AWS, using S3, Glue, and Redshift with Python and SQL.",
    stack: ["AWS", "S3", "Glue", "Redshift", "Python", "SQL"],
  },
  {
    company: "MassMutual",
    role: "Data Engineering",
    industry: "Insurance & financial services",
    summary: "Cloud data processing on GCP with BigQuery, Dataflow, and Python.",
    stack: ["GCP", "BigQuery", "Dataflow", "Python"],
  },
];
