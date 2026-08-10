import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          fontWeight: 800,
          background: "#0F0F11",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#06B6D4",
          borderRadius: "6px",
          fontFamily: "sans-serif",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
