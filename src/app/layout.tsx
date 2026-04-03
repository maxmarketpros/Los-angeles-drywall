import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://losangelesdrywallandframing.com"),
  title:
    "Los Angeles Drywall & Framing | Licensed Drywall Contractor in Los Angeles, CA",
  description:
    "Los Angeles Drywall & Framing is a licensed drywall contractor and framing specialist serving Los Angeles, CA and the surrounding metro area. Expert drywall installation, repair, finishing, texturing, wall framing, and stucco services. CA License #1141917. Call (310) 730-9832 for a free estimate.",
  keywords: [
    "drywall contractor Los Angeles CA",
    "drywall installation Los Angeles",
    "framing contractor Los Angeles",
    "drywall repair Los Angeles CA",
    "stucco contractor Los Angeles",
    "residential framing Los Angeles",
    "commercial drywall Los Angeles",
  ],
  openGraph: {
    title: "Los Angeles Drywall & Framing | Licensed Drywall Contractor in Los Angeles, CA",
    description:
      "Licensed and insured drywall and framing services in Los Angeles, CA. Expert installation, repair, finishing, texturing, framing, stucco, and exterior painting. Free estimates available.",
    url: "https://losangelesdrywallandframing.com",
    siteName: "Los Angeles Drywall & Framing",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Los Angeles Drywall & Framing Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Angeles Drywall & Framing | Licensed Drywall Contractor in Los Angeles, CA",
    description:
      "Licensed and insured drywall and framing services in Los Angeles, CA. Expert installation, repair, finishing, texturing, framing, stucco, and exterior painting. Free estimates available.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://losangelesdrywallandframing.com",
      name: "Los Angeles Drywall & Framing",
      description:
        "Licensed drywall contractor and framing specialist serving Los Angeles, CA and the surrounding metro area. Specializing in drywall installation, repair, finishing, texturing, wall framing, residential and commercial framing, stucco, and exterior painting.",
      url: "https://losangelesdrywallandframing.com",
      telephone: "+13107309832",
      email: "sales@losangelesdrywallandframing.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.0522,
        longitude: -118.2437,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "08:00",
          closes: "18:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Los Angeles" },
        { "@type": "City", name: "Beverly Hills" },
        { "@type": "City", name: "Santa Monica" },
        { "@type": "City", name: "Pasadena" },
        { "@type": "City", name: "Glendale" },
        { "@type": "City", name: "Burbank" },
      ],
      sameAs: [],
      priceRange: "$$",
      image: "https://losangelesdrywallandframing.com/images/logo.png",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://losangelesdrywallandframing.com/#website",
      url: "https://losangelesdrywallandframing.com",
      name: "Los Angeles Drywall & Framing",
      description: "Licensed Drywall Contractor and Framing Specialist in Los Angeles, CA.",
      publisher: {
        "@id": "https://losangelesdrywallandframing.com",
      }
    }
  ];

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
