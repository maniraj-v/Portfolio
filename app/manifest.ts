import type { MetadataRoute } from "next";
import { siteMetaData } from "./_constants/siteMetaData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetaData.appName,
    short_name: siteMetaData.appName,
    description: siteMetaData.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
