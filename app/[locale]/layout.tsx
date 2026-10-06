import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import "../globals.css";

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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isNe = locale === 'ne';

  const siteName = isNe ? "AIPL नेपाल" : "AIPL Nepal";
  const defaultTitle = isNe 
    ? "AIPL नेपाल — मल, जैविक विषादी र बाली हेरचाह उत्पादनहरू" 
    : "AIPL Nepal — Fertilizers, Bio Pesticides & Crop Care Products";
  const titleTemplate = isNe 
    ? "%s | AIPL नेपाल — Agricultural Investment Pvt. Ltd." 
    : "%s | AIPL Nepal — Agricultural Investment Pvt. Ltd.";
  const defaultDesc = isNe 
    ? "AIPL नेपाल एक अग्रणी कृषि कम्पनी हो जसले नेपालका सबै ७ प्रदेशहरूमा किसान र डिलरहरूद्वारा विश्वास गरिएका उच्च-गुणस्तरका मलहरू, जैविक विषादीहरू, माटो उत्तेजकहरू र बाली हेरचाह उत्पादनहरू प्रदान गर्दछ।" 
    : "AIPL Nepal is a leading agricultural company providing high-quality fertilizers, bio pesticides, soil stimulants, and crop care products trusted by farmers and dealers across all 7 provinces of Nepal.";

  return {
    metadataBase: new URL("https://aipl.com.np"),
    title: {
      default: defaultTitle,
      template: titleTemplate,
    },
    description: defaultDesc,
    keywords: [
      "AIPL Nepal",
      "AIPL",
      "Agricultural Investment Pvt Ltd",
      "Nepal fertilizer",
      "fertilizer Nepal",
      "bio pesticide Nepal",
      "crop care Nepal",
      "soil stimulant Nepal",
      "organic farming Nepal",
      "agriculture Nepal",
      "farming products Nepal",
      "Nepali fertilizer company",
      "AIPL fertilizer",
      "AIPL bio pesticide",
      "Nepal agriculture company",
      "best fertilizer in Nepal",
      "farmer products Nepal",
      "dealer network Nepal",
      "agricultural investment Nepal",
      "crop protection Nepal",
      "plant growth Nepal",
      "micronutrient fertilizer Nepal",
      "Kathmandu fertilizer",
      "AIPL Kathmandu",
      "Nepal dealer fertilizer",
    ],
    authors: [{ name: "Agricultural Investment Pvt. Ltd. (AIPL)" }],
    creator: "AIPL Nepal",
    publisher: "Agricultural Investment Pvt. Ltd.",
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
    openGraph: {
      type: "website",
      locale: isNe ? "ne_NP" : "en_US",
      alternateLocale: isNe ? "en_US" : "ne_NP",
      url: "https://aipl.com.np",
      siteName: siteName,
      title: defaultTitle,
      description: defaultDesc,
      images: [
        {
          url: "https://aipl.com.np/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "AIPL Nepal — Agricultural Investment Pvt. Ltd.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDesc,
      images: ["https://aipl.com.np/opengraph-image.jpg"],
    },
    alternates: {
      canonical: isNe ? "https://aipl.com.np" : "https://aipl.com.np/en",
      languages: {
        'en': 'https://aipl.com.np/en',
        'ne': 'https://aipl.com.np/',
        'x-default': 'https://aipl.com.np/',
      },
    },
    category: "Agriculture",
  };
}

// JSON-LD Structured Data for Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AIPL Nepal — Agricultural Investment Pvt. Ltd.",
  alternateName: "AIPL",
  url: "https://aipl.com.np",
  logo: "https://aipl.com.np/logo.png",
  description:
    "Nepal's trusted agricultural company providing high-quality fertilizers, bio pesticides, soil stimulants, and crop care products for farmers and dealers across all 7 provinces.",
  foundingLocation: {
    "@type": "Place",
    name: "Kathmandu, Nepal",
  },
  areaServed: {
    "@type": "Country",
    name: "Nepal",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9863186533",
    contactType: "customer service",
    areaServed: "NP",
    availableLanguage: ["English", "Nepali"],
  },
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
