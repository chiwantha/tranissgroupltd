import Button from "@/components/common/button/Button";
import Image from "next/image";
import React from "react";

const DestinationCard = ({ title, desc, image, slug }) => {
  const message = encodeURIComponent(
    `Hello Traniss Group Ltd, I’m interested in the destination "${title}" featured on your website. Could you please provide more information?`,
  );

  return (
    <article
      className="flex flex-col rounded-xl overflow-hidden h-full bg-white shadow-md hover:scale-102 transition-transform duration-300"
      itemScope
      itemType="https://schema.org/TouristDestination"
    >
      {/* Image */}
      <div className="relative aspect-16/12 z-10" itemProp="image">
        <Image
          src={`/destination/${image}`}
          alt={`${title} - featured destination by Traniss Group Ltd`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="eager"
          className="object-center object-cover"
          priority={true} // if above-the-fold
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 bg-white -mt-5 rounded-xl z-20 gap-2">
        <h3
          className="line-clamp-1 capitalize font-bold text-xl text-theme-light-green"
          itemProp="name"
        >
          {title}
        </h3>

        <p
          className="text-gray-500 font-light mb-1 capitalize line-clamp-3 leading-5.5 text-lg"
          itemProp="description"
        >
          {desc}
        </p>

        <Button
          title={`More`}
          pd="px-4 py-1"
          link={`https://wa.me/447570779744?text=${message}`}
        />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              name: title,
              description: desc,
              image: `/destination/${image}`,
              url: slug,
              provider: {
                "@type": "Organization",
                name: "Traniss Group Ltd",
                url: "https://tranissgroupltd.uk",
              },
            }),
          }}
        />
      </div>
    </article>
  );
};

export default DestinationCard;
