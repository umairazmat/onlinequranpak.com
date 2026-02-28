import { ImageResponse } from "next/og";

export const alt = "OnlineQuranPak.com – Learn Quran Online";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          color: "#e5e7eb",
          fontSize: 64,
          fontWeight: 600,
        }}
      >
        OnlineQuranPak.com
      </div>
    ),
    {
      ...size,
    }
  );
}

