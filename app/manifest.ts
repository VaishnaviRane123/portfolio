import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vaishnavi Rane — Portfolio",
    short_name: "Vaishnavi Rane",
    description: "Computer Engineering Student Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f8f6",
    theme_color: "#171717",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
