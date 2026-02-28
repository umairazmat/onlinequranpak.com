import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          color: "#e5e7eb",
          fontSize: 72,
          fontWeight: 700,
        }}
      >
        OQ
      </div>
    ),
    {
      ...size,
    }
  );
}

