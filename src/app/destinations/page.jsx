import DestinationGrid from "@/components/root/grid/DestinationGrid";
import WidthWrap from "@/components/root/layout/widthwrap/WidthWrap";
import PageTop from "@/components/root/sections/pagetop/PageTop";

// SEO metadata for Destinations page
export const metadata = {
  title: "Destinations",
  description:
    "Explore the most amazing destinations in Sri Lanka with Traniss Group Ltd. Discover curated tours, activities, and travel experiences from a trusted UK-based travel company.",
  alternates: {
    canonical: "https://tranissgroupltd.uk/destinations",
  },
  openGraph: {
    title: "Destinations | Traniss Group Ltd",
    description:
      "Explore the most amazing destinations in Sri Lanka with Traniss Group Ltd. Discover curated tours, activities, and travel experiences from a trusted UK-based travel company.",
    url: "https://tranissgroupltd.uk/destinations",
    siteName: "Traniss Group Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destinations | Traniss Group Ltd",
    description:
      "Explore the most amazing destinations in Sri Lanka with Traniss Group Ltd. Discover curated tours, activities, and travel experiences from a trusted UK-based travel company.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const DestinationsPage = async () => {
  return (
    <div className="flex flex-col">
      <PageTop />
      <main
        className="py-12 md:py-20"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <WidthWrap>
          <DestinationGrid header={false} />
        </WidthWrap>

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Sri Lanka Destinations",
              itemListElement: [
                {
                  "@type": "TouristDestination",
                  position: 1,
                  name: "Colombo",
                  url: "https://tranissgroupltd.uk/destinations#colombo",
                },
                {
                  "@type": "TouristDestination",
                  position: 2,
                  name: "Kandy",
                  url: "https://tranissgroupltd.uk/destinations#kandy",
                },
                {
                  "@type": "TouristDestination",
                  position: 3,
                  name: "Galle",
                  url: "https://tranissgroupltd.uk/destinations#galle",
                },
                {
                  "@type": "TouristDestination",
                  position: 4,
                  name: "Sigiriya",
                  url: "https://tranissgroupltd.uk/destinations#sigiriya",
                },
              ],
            }),
          }}
        />
      </main>
    </div>
  );
};

export default DestinationsPage;
