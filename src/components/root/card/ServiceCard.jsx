import Button from "@/components/common/button/Button";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ name, image, desc, state, slug }) => {
  const message = encodeURIComponent(
    `Hello Traniss Group Ltd, I’d like to inquire about your ${name} services!`,
  );

  return (
    <article
      className="grid grid-cols-1 sm:grid-cols-3 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Image */}
      <div className="relative aspect-square w-full h-full" itemProp="image">
        <Image
          src={image}
          alt={`${name} service by Traniss Group Ltd`}
          className="object-cover object-center"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={true} // if above the fold
        />
      </div>

      {/* Content */}
      <div className="sm:col-span-2 col-span-1 flex flex-col gap-3 p-4 md:p-6">
        {/* Service Name */}
        <h3
          className="line-clamp-1 text-2xl font-bold text-theme-blue"
          itemProp="name"
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="text-gray-600 mb-2 font-light text-lg leading-5"
          itemProp="description"
        >
          {desc}
        </p>

        {/* Action Button */}
        {state ? (
          <Button
            title={`Explore`}
            link={`https://wa.me/447570779744?text=${message}`}
          />
        ) : (
          <span
            className="mt-auto inline-block bg-red-400 text-white px-4 py-2 rounded cursor-not-allowed"
            aria-disabled="true"
          >
            Not Available
          </span>
        )}

        {/* Optional: Structured Data for JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: name,
              description: desc,
              provider: {
                "@type": "Organization",
                name: "Traniss Group Ltd",
                url: "https://tranissgroupltd.uk", // your main domain
              },
            }),
          }}
        />
      </div>
    </article>
  );
};

export default ServiceCard;
