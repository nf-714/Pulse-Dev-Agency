import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pulse Studio - Website for Club Branding and Events",
  description:
    "Pulse Studio is a dynamic, creative agency specializing in club branding and event management. We design innovative websites that capture the essence of your brand while providing seamless event promotion and management tools. Whether you're looking to create a standout online presence for your nightclub or promote your next big event, Pulse Studio delivers tailor-made solutions to engage your audience and elevate your brand experience.",
  openGraph: {
    title: "My Awesome App",
    description: "Discover amazing content and experiences on My Awesome App",
    url: "https://myawesomeapp.com",
    siteName: "My Awesome App",
    images: [
      {
        url: "/og-img.jpg", // This image should be in your public directory
        width: 1200,
        height: 630,
        alt: "Pulse BD",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/src/public/icon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-100`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
