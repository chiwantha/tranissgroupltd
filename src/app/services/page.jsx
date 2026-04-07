import ServicesGrid from "@/components/root/grid/ServicesGrid";
import WidthWrap from "@/components/root/layout/widthwrap/WidthWrap";
import PageTop from "@/components/root/sections/pagetop/PageTop";

// SEO metadata for this page
export const metadata = {
  title: "Our Services",
  description:
    "Explore the wide range of travel services offered by Traniss Group Ltd, from curated tours to transportation, accommodation, and full travel planning.",
  alternates: {
    canonical: "https://tranissgroupltd.uk/services",
  },
  openGraph: {
    title: "Our Services | Traniss Group Ltd",
    description:
      "Explore the wide range of travel services offered by Traniss Group Ltd, from curated tours to transportation, accommodation, and full travel planning.",
    url: "https://tranissgroupltd.uk/services",
    siteName: "Traniss Group Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Traniss Group Ltd",
    description:
      "Explore the wide range of travel services offered by Traniss Group Ltd, from curated tours to transportation, accommodation, and full travel planning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ServicesPage = async () => {
  return (
    <div className="flex flex-col">
      <PageTop />
      <main
        className="py-12 md:py-20"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <WidthWrap>
          <ServicesGrid />
        </WidthWrap>

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Traniss Group Services",
              itemListElement: [
                {
                  "@type": "Service",
                  position: 1,
                  name: "Curated Tours",
                  url: "https://tranissgroupltd.uk/services#curated-tours",
                },
                {
                  "@type": "Service",
                  position: 2,
                  name: "Transportation",
                  url: "https://tranissgroupltd.uk/services#transportation",
                },
                {
                  "@type": "Service",
                  position: 3,
                  name: "Accommodation",
                  url: "https://tranissgroupltd.uk/services#accommodation",
                },
                {
                  "@type": "Service",
                  position: 4,
                  name: "Travel Planning",
                  url: "https://tranissgroupltd.uk/services#travel-planning",
                },
              ],
            }),
          }}
        />
      </main>
    </div>
  );
};

export default ServicesPage;
