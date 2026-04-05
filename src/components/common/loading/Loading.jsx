import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="relative w-50 h-50 bg-white aspect-square">
      <Image
        src={`/assets/loading.gif`}
        alt="loading.fig"
        unoptimized
        fill
        className="object-center object-cover"
      />
    </div>
  );
};

export default Loading;
