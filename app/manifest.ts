import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Finite Machines",
    short_name: "Finite",
    description: "Equipment intelligence for fabrication labs.",
    start_url: "/",
    display: "standalone",
    background_color: "#222831",
    theme_color: "#00ADB5",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
