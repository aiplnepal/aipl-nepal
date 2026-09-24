import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AIPL — Agricultural Investment Pvt. Ltd.",
    template: "%s | AIPL",
  },
  description:
    "Fertilizers, bio pesticides, and crop care products trusted by farmers and dealers across Nepal.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AIPL",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
