import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://finitemachines.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Finite Machines — Equipment Intelligence for Fabrication Labs",
    template: "%s | Finite Machines",
  },
  description:
    "Connect printers, CNCs, lasers, mills, and legacy equipment in one operational view. Understand machine state, utilization, downtime, maintenance, and operating history.",
  keywords: [
    "fabrication lab monitoring",
    "equipment observability",
    "machine utilization software",
    "makerspace analytics",
    "machine downtime tracking",
  ],
  authors: [{ name: "Finite Machines" }],
  creator: "Finite Machines",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Finite Machines",
    title: "Make every machine observable.",
    description: "The equipment intelligence layer for fabrication labs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make every machine observable.",
    description: "The equipment intelligence layer for fabrication labs.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#222831",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
