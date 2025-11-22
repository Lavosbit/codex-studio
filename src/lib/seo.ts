// src/lib/seo.ts
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type CreatePageMetadataOptions = {
  title: string; // Page-specific title (without the "| Codex Studio")
  description?: string; // Optional, falls back to default
  path?: string; // e.g. "/idea-factory"
};

export function createPageMetadata(
  options: CreatePageMetadataOptions
): Metadata {
  const { title, description, path } = options;

  const fullDescription = description ?? siteConfig.defaultDescription;
  const url = path ? `${siteConfig.baseUrl}${path}` : siteConfig.baseUrl;

  return {
    // This title will go into the layout template: "%s | Codex Studio"
    title,
    description: fullDescription,
    openGraph: {
      title,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: fullDescription,
    },
  };
}
