import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Software Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "software developer",
    "custom software development",
    "ERP developer",
    "Odoo developer",
    "mobile app developer",
    "Flutter developer",
    "web developer",
    "Next.js developer",
    "business management system",
    "M-Pesa integration",
    "payment integration",
    "KRA eTIMS",
    "Android app development",
    "business software",
    "Finey Otieno Akwoyo",
    "Finey Akwoyo",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} | Software Developer`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: `${DATA.url}logo.png`,
        width: 1024,
        height: 1024,
        alt: `${DATA.name} | Software Developer`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${DATA.name} | Software Developer`,
    description: DATA.description,
    images: [`${DATA.url}logo.png`],
    creator: "@finey_otieno",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-8 sm:py-14 px-5 sm:px-8",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
