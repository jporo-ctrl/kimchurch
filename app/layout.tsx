import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kingdom Insights Ministries | Serve & Volunteer",
  description:
    "At Kingdom Insights Ministries, we believe that serving is one of the highest expressions of love. Join us to serve, volunteer, and be part of what God is doing.",
  keywords: [
    "Kingdom Insights Ministries",
    "church",
    "serve",
    "volunteer",
    "ministry",
    "Hurst TX",
    "community",
  ],
  openGraph: {
    title: "Kingdom Insights Ministries | Become a New Member",
    description:
      "Serving is one of the highest expressions of love. Step in and step up with Kingdom Insights Ministries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}