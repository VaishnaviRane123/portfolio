import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { profile } from "@/data/profile";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-serif",
});

const siteUrl = "https://vaishnavirane.dev"; // change to your domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Computer Engineering Student`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Vaishnavi Rane",
    "Computer Engineering",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: `${profile.name} | Computer Engineering Student`,
    description: profile.summary,
    siteName: profile.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Computer Engineering Student`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Computer Engineering Student`,
    description: profile.summary,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: profile.email,
  jobTitle: profile.headline,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Full Stack Development", "Artificial Intelligence", "Cloud", "Security"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${plexSerif.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <ScrollToTop />
        </ThemeProvider>

        {/* ... */}
        <Analytics />

        <Toaster position="bottom-right" />
        
      </body>
    </html>
  );
}
