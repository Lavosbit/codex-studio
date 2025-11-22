import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

import type { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;

  // Turn "idea-factory" → "Idea Factory"
  const title = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : siteConfig.name;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "#050509",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.7, marginBottom: 20 }}>
          {siteConfig.name}
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            lineHeight: 1.1,
            maxWidth: "90%",
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
