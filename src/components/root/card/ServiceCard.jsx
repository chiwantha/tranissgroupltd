import Button from "@/components/common/button/Button";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ name, image, desc, state, slug }) => {
  const message = encodeURIComponent(
    `Hello Traniss Group Ltd, I’d like to inquire about your ${name} services !`,
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative aspect-square w-full h-full">
        <Image
          src={image}
          alt={image}
          className="object-cover object-center"
          fill
        />
      </div>

      <div className="sm:col-span-2 col-span-1 flex flex-col gap-2 p-4 md:p-6">
        <h2 className="line-clamp-1 text-2xl font-bold text-theme-blue">
          {name}
        </h2>
        <p className="text-gray-600 mb-2 font-light text-lg leading-5">
          {desc}
        </p>
        {state ? (
          <Button
            title={`More`}
            link={slug ? slug : `https://wa.me/447570779744?text=${message}`}
          />
        ) : (
          <Button
            title={`Not Available !`}
            bg={`bg-red-400 hover:bg-red-600 text-white cursor-not-allowed`}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
