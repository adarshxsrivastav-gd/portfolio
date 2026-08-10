import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          fontWeight: 800,
          background: "#0F0F11",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#06B6D4",
          borderRadius: "36px",
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
