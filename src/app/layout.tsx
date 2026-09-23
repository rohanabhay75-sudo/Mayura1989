import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "MAYURA 1989 Bar & Kitchen | Andhra • Biryani • Rooftop Dining | Rajajinagar, Bengaluru",
  description:
    "MAYURA 1989 Bar & Kitchen in Rajajinagar, Bengaluru — Authentic Andhra cuisine, signature biryani, North Indian & Chinese favourites in a premium rooftop setting. ★ 4.0/5 rated. Dine-in, takeaway & delivery. Open until 11:30 PM.",
  keywords: [
    "Mayura 1989 Bar & Kitchen",
    "Mayura 1989 Rajajinagar",
    "Andhra restaurant Rajajinagar",
    "Biryani Rajajinagar Bangalore",
    "Rooftop restaurant Rajajinagar",
    "Bar and Kitchen Rajajinagar",
    "Andhra food Bangalore",
    "Biryani near me Bangalore",
    "Best restaurant Rajajinagar",
  ],
  openGraph: {
    title: "MAYURA 1989 Bar & Kitchen | Authentic Flavours. Modern Rooftop Experience.",
    description:
      "Bold Andhra flavours, aromatic biryani, North Indian & Chinese dishes in a stylish rooftop dining environment in Rajajinagar, Bengaluru.",
    url: "https://mayura1989.com",
    siteName: "MAYURA 1989 Bar & Kitchen",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-rooftop.jpg",
        width: 1200,
        height: 630,
        alt: "MAYURA 1989 rooftop restaurant in Rajajinagar, Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAYURA 1989 Bar & Kitchen | Rajajinagar, Bengaluru",
    description:
      "Authentic Andhra cuisine, signature biryani & rooftop dining. ★ 4.0/5 on Google.",
    images: ["/images/hero-rooftop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mayura1989.com",
  },
};

// Restaurant structured data (JSON-LD)
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "MAYURA 1989 Bar & Kitchen",
  alternateName: "ಮಯೂರ ೧೯೮೯ ಬಾರ್ ಮತ್ತು ಕಿಚನ್",
  description:
    "Authentic Andhra cuisine, signature biryani, North Indian and Chinese dishes in a premium rooftop dining setting.",
  url: "https://mayura1989.com",
  telephone: "+918023506361",
  servesCuisine: ["Andhra", "Biryani", "North Indian", "Chinese", "Indian"],
  priceRange: "₹400–₹1600",
  address: {
    "@type": "PostalAddress",
    streetAddress: "46/3, Dr. Rajkumar Rd, 6th Block",
    addressLocality: "Rajajinagar",
    addressRegion: "Karnataka",
    postalCode: "560010",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.99,
    longitude: 77.55,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    reviewCount: "7255",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:00",
    closes: "23:30",
  },
  hasMenu: "https://mayura1989.com/#menu",
  acceptsReservations: "True",
  image: "/images/hero-rooftop.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0d0d0d" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
