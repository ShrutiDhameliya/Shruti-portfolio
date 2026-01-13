import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientHeaderGate from "@/components/ClientHeaderGate";
import BodyClassGate from "@/components/BodyClassGate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

// Enhanced metadata for SEO and social sharing
export const metadata: Metadata = {
  title: {
    default: "Shruti Dhameliya | Frontend Developer & React.js Specialist",
    template: "%s | Shruti Dhameliya"
  },
  description: "Frontend Developer with 3+ years of experience building dynamic, responsive web applications. Specialized in React.js, Next.js, TypeScript, and real-time communication systems using WebSockets and Socket.io.",
  keywords: ["Frontend Developer", "React.js Developer", "Next.js", "TypeScript", "JavaScript", "Web Development", "UI/UX", "Socket.io", "Redux", "Software Developer"],
  authors: [{ name: "Shruti Dhameliya" }],
  creator: "Shruti Dhameliya",
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_ENDPOINT || 'https://shrutidhameliya.com'),

  // Open Graph tags for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Shruti Dhameliya | Frontend Developer & React.js Specialist",
    description: "Frontend Developer specializing in React.js, Next.js, and modern web technologies. Built 15+ production-ready applications with performance optimization and clean architecture.",
    siteName: "Shruti Dhameliya Portfolio",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Shruti Dhameliya - Frontend Developer",
      },
    ],
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "Shruti Dhameliya | Frontend Developer & React.js Specialist",
    description: "Frontend Developer specializing in React.js, Next.js, and modern web technologies.",
    images: ["/profile.webp"],
    creator: "@shrutidhameliya", // Update with actual Twitter handle
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAFAFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          /* High-performance scroll optimization */
          overscrollBehavior: 'none',
          WebkitOverflowScrolling: 'touch'
        } as React.CSSProperties}
      >
        <BodyClassGate />
        <ClientHeaderGate />
        {children}
      </body>
    </html>
  );
}