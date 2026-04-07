import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/root/layout/navbar/Navbar";
import "leaflet/dist/leaflet.css";
import Footer from "@/components/root/layout/footer/Footer";
import Maintenance from "@/components/common/maintenance/Maintenance";
import Cta from "@/components/root/sections/calltoaction/Cta";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const hnd = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hnd",
});

export const metadata = {
  metadataBase: new URL("https://tranissgroupltd.uk"),
  title: {
    default: "Traniss Group Ltd | Sri Lanka Travel Experts from the UK",
    template: "%s | Traniss Group Ltd",
  },
  description:
    "Plan your dream holiday to Sri Lanka with Traniss Group Ltd, a UK-based travel company offering curated tours, transport, accommodation, and full travel planning services.",
  keywords: [
    "Sri Lanka travel",
    "Sri Lanka tours from UK",
    "UK travel agency Sri Lanka",
    "Sri Lanka holiday packages",
    "private tours Sri Lanka",
    "Sri Lanka transport services",
    "Sri Lanka travel planning",
    "best Sri Lanka travel agency UK",
  ],
  authors: [{ name: "Traniss Group Ltd", url: "https://tranissgroupltd.uk" }],
  creator: "Traniss Group Ltd",
  publisher: "Traniss Group Ltd",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Traniss Group Ltd | Travel to Sri Lanka from the UK",
    description:
      "Discover Sri Lanka with expert planning, guided tours, and seamless travel services from a trusted UK-based company.",
    url: "https://tranissgroupltd.uk",
    siteName: "Traniss Group Ltd",
    images: [
      {
        url: "/hero/golden_hero.png",
        width: 1200,
        height: 630,
        alt: "Sri Lanka Travels with Traniss Group Ltd",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Traniss Group Ltd | Sri Lanka Travel Experts",
    description:
      "Plan your Sri Lanka trip from the UK with complete travel services and curated experiences.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tranissgroupltd.uk" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${hnd.variable}`}>
      <body className="min-h-full flex flex-col">
        {/* Maintenance Mode */}
        {process.env.SITE_MODE == 1 ? (
          <Maintenance />
        ) : (
          <>
            <Navbar />
            {children}
            <Cta />
            <Footer />

            {/* JSON-LD Organization Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Traniss Group Ltd",
                  url: "https://tranissgroupltd.uk",
                  logo: "https://tranissgroupltd.uk/favicon.png",
                  sameAs: [
                    "https://www.facebook.com/TranissGroupLtd",
                    "https://www.instagram.com/TranissGroupLtd",
                    "https://www.linkedin.com/company/traniss-group-ltd",
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+44 7570 779744",
                      contactType: "Customer Service",
                      areaServed: "GB",
                    },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Cambridge",
                    addressCountry: "GB",
                  },
                }),
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
