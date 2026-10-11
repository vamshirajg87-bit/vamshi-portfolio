import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.headline.join(" | ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "radial-gradient(circle at 80% 0%, #1b2550 0%, #070b14 55%)",
          color: "#e6ebf5",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#8ab8ff", letterSpacing: 4 }}>
          {site.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ marginTop: 20, fontSize: 34, color: "#9aa6bb" }}>{site.headline.join("  /  ")}</div>
        </div>
        <div style={{ display: "flex", height: 4, width: 220, background: "linear-gradient(90deg, #5b9dff, #9d84ff)" }} />
      </div>
    ),
    size,
  );
}
