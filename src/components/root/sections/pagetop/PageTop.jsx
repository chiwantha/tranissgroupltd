"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WidthWrap from "../../layout/widthwrap/WidthWrap";

const PageTop = () => {
  const pathName = usePathname();
  const segment = pathName.split("/")[1] || "home";
  const readableSegment = segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase()); // "about-us" => "About Us"

  return (
    <div
      className="flex flex-col w-full"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div className="relative w-full h-full min-h-100 bg-black">
        <Image
          src={`/pagetop/${segment}.png`}
          alt={`Banner image for ${readableSegment}`}
          fill
          className="object-center object-cover z-10"
          sizes="60vw"
          loading="eager"
        />

        <div className="bg-black/10 w-full h-full absolute z-20" />

        <div className="absolute bottom-0 w-full z-30">
          <WidthWrap>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 z-50 w-full">
              <div className="hidden lg:block bg-transparent "></div>
              <div className="hidden sm:block bg-transparent "></div>
              <div
                className="relative bg-white min-h-22.5 text-center capitalize font-hnd text-5xl flex items-center justify-center rounded-t-xl"
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <Image
                  src={`/assets/perahara.png`}
                  alt={`Decorative image for ${readableSegment}`}
                  fill
                  className="object-cover object-bottom z-30 mask-t-from-0% opacity-20"
                />
                <span
                  className="absolute z-40 text-theme-light-blue text-shadow-sm font-bold"
                  itemProp="headline"
                >
                  {readableSegment}
                </span>
              </div>
            </div>
          </WidthWrap>
        </div>
      </div>

      {/* JSON-LD for breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://tranissgroupltd.uk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: readableSegment,
                item: `https://tranissgroupltd.uk/${segment}`,
              },
            ],
          }),
        }}
      />
    </div>
  );
};

export default PageTop;
