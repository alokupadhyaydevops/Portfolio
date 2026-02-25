import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alok Upadhyay | DevOps Engineer | AWS Docker CI/CD",
  description:
    "DevOps Engineer skilled in AWS, Docker, Kubernetes, CI/CD. Explore my projects and portfolio.",

  keywords: [
    "Alok Upadhyay",
    "DevOps Engineer",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],

  openGraph: {
    title: "Alok Upadhyay | DevOps Engineer",
    description:
      "DevOps Engineer skilled in AWS, Docker, Kubernetes, CI/CD",
    url: "https://alokupadhyay.dev",
    siteName: "Alok Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
