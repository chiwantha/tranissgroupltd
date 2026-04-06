import React from "react";
import Image from "next/image";

const Maintenance = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/slide/safari.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center scale-105 blur-sm brightness-50"
        />
      </div>

      {/* Overlay (gradient for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-2xl">
        {/* Logo / Brand */}
        <h1 className="font-hnd text-5xl md:text-6xl font-bold text-theme-light-blue mb-4">
          Traniss Group
        </h1>

        {/* Main Message */}
        <h2 className="text-white text-2xl hidden md:text-3xl font-light mb-4">
          We’ll Be Back Soon
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-5 font-light  mb-6">
          Our website is currently undergoing scheduled maintenance to improve
          your experience. We’ll be back online shortly.
        </p>

        {/* Optional Contact / Status */}
        <div className="text-sm text-gray-400">
          <p>If this is urgent, please contact us:</p>
          <p className="text-theme-light-blue mt-1">info@tranissgroupltd.uk</p>
        </div>

        {/* Optional Loader */}
        <div className="mt-8 flex justify-center">
          <div className="w-10 h-10 border-4 border-theme-light-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
