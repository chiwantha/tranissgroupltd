import Button from "@/components/common/button/Button";
import Image from "next/image";
import React from "react";

const DestinationCard = ({ title, desc, image, slug }) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden h-full bg-white shadow-md">
      <div className="relative aspect-16/12 z-10">
        <Image
          src={`/destination/${image}`}
          alt={title}
          fill
          sizes="30vw"
          loading="eager"
          className="object-center object-cover"
        />
      </div>
      <div className="flex flex-col p-4 bg-white -mt-5 rounded-xl z-20 gap-2">
        <h2 className="line-clamp-1 capitalize font-bold text-xl text-theme-light-green">
          {title}
        </h2>
        <p className="text-gray-500 font-light mb-1 capitalize line-clamp-3 leading-5.5 text-lg">
          {desc}
        </p>
        <Button title={`More`} pd={`px-4 py-1 self-end`} />
      </div>
    </div>
  );
};

export default DestinationCard;
