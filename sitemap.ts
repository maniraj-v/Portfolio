import type { MetadataRoute } from "next";
import { siteMetaData } from "./app/_constants/siteMetaData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMetaData.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}