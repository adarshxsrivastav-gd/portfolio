import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Adarsh Srivastav | Graphic Designer & Video Editor";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F0F11",
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(6, 182, 212, 0.25) 0%, rgba(15, 15, 17, 0) 50%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header / Branding */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Adarsh Srivastav
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#06B6D4",
              marginBottom: 12,
            }}
          >
            Graphic Designer & Video Editor
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#9CA3AF",
            }}
          >
            AI-Powered Creative Production
          </div>
        </div>

        {/* Footer / Domain Badge */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#06B6D4",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "rgba(6, 182, 212, 0.1)",
              border: "1px solid rgba(6, 182, 212, 0.3)",
            }}
          >
            adarshsrivastav.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
