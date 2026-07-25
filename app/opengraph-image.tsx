import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Camille Lin — Technical Program Manager, Data & Product Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f9f8f5",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <div style={{ width: 16, height: 16, borderRadius: 4, background: "#3a7373" }} />
          <span style={{ fontSize: 28, fontWeight: 700, color: "#1e2530" }}>Camille Lin</span>
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#3a7373",
            marginBottom: 20,
          }}
        >
          Technical Program Manager &amp; Product Operations
        </div>
        <div style={{ fontSize: 52, fontWeight: 600, color: "#1e2530", lineHeight: 1.2, maxWidth: 950 }}>
          I build data systems, operational tools, and programs that help teams make clearer decisions.
        </div>
      </div>
    ),
    { ...size }
  );
}
