import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1d2c20", color: "#f3eedf", padding: 64, borderRight: "84px solid #708b28" }}>
      <div style={{ display: "flex", fontSize: 25, letterSpacing: 6, color: "#bdcf6a" }}>SHELBYVILLE, KENTUCKY</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 900, lineHeight: .95, maxWidth: 850 }}><span>THE CIPRIANS</span><span style={{ display: "flex", color: "#bdcf6a" }}>TREE SERVICE</span></div>
      <div style={{ display: "flex", fontSize: 28 }}>Clear the risk. Keep the beauty.</div>
    </div>,
    size,
  );
}
