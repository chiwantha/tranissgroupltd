import WidthWrap from "@/components/root/layout/widthwrap/WidthWrap";
import PageTop from "@/components/root/sections/pagetop/PageTop";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Traniss Group Ltd | Sri Lanka Travel Experts from the UK",
  description:
    "Learn about Traniss Group Ltd, a UK-based travel company connecting travelers with the beauty, culture, and heritage of Sri Lanka. Discover our vision and mission.",
  keywords: [
    "Traniss Group Ltd",
    "Sri Lanka travel",
    "UK travel company",
    "Sri Lanka culture",
    "Sri Lanka heritage",
    "About Traniss Group Ltd",
  ],
  alternates: { canonical: "https://tranissgroupltd.uk/about" },
  openGraph: {
    title: "About Traniss Group Ltd | Sri Lanka Travel Experts from the UK",
    description:
      "Learn about Traniss Group Ltd, a UK-based travel company connecting travelers with the beauty, culture, and heritage of Sri Lanka.",
    url: "https://tranissgroupltd.uk/about",
    siteName: "Traniss Group Ltd",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Traniss Group Ltd Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Traniss Group Ltd | Sri Lanka Travel Experts",
    description:
      "Discover Traniss Group Ltd, a UK-based travel company connecting travelers with the beauty and culture of Sri Lanka.",
    images: ["/assets/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const AboutUsPage = () => {
  return (
    <div className="flex flex-col">
      <PageTop />
      <WidthWrap>
        <div className="py-12 md:py-20 flex flex-col w-full items-center gap-6 md:gap-10">
          <div className="relative aspect-square w-60">
            <Image
              src={`/assets/logo.jpeg`}
              fill
              className="object-contain object-center"
              alt="Traniss Group Ltd Logo"
            />
          </div>
          <p className="font-light text-xl text-gray-600 leading-6 md:max-w-[75%] text-center">
            Traniss Group Ltd is a UK-based travel company connecting travelers
            with the beauty, culture, and heritage of Sri Lanka. With a passion
            for authentic experiences, we immerse visitors in the country’s rich
            landscapes and vibrant traditions, ensuring every journey is
            memorable and meaningful.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 text-lg font-light">
            <div className="p-4 md:p-6 border-r border-theme-light-blue flex flex-col sm:items-end sm:text-right items-center text-center gap-4">
              <h5 className="font-hnd text-5xl font-bold text-theme-light-blue">
                Our Vision
              </h5>
              <p className="leading-5.5">
                To become a trusted global partner in travel and cultural
                experiences, delivering journeys that empower individuals to
                explore and appreciate the richness of Sri Lanka.
              </p>
            </div>
            <div className="p-4 md:p-6 flex flex-col sm:items-start sm:text-left items-center text-center gap-4">
              <h5 className="font-hnd text-5xl font-bold text-theme-light-blue">
                Our Mission
              </h5>
              <p className="leading-5.5">
                To understand our travelers’ unique interests and provide
                immersive, meaningful experiences that highlight Sri Lanka’s
                beauty, culture, and heritage while ensuring every journey is
                seamless and memorable.
              </p>
            </div>
          </div>
        </div>
      </WidthWrap>
    </div>
  );
};

export default AboutUsPage;
