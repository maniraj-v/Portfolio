import type { MetadataRoute } from "next";
import { siteMetaData } from "./app/_constants/siteMetaData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${siteMetaData.siteUrl}.sitemap.xml"`,
  };
}
