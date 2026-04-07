"use client";
import { useEffect, useState } from "react";
import Links from "./links/Links";
import NextTopLoader from "nextjs-toploader";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrollY > 50px, consider it scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full h-17.5 fixed left-0 z-51 ${scrolled ? "top-0 bg-black/50 backdrop-blur-xs " : "top-8 rounded-xl"} transition-all duration-300 px-4`}
    >
      <div
        className={`max-w-7xl mx-auto h-full flex justify-between items-center  ${!scrolled && `bg-black/10 px-8 rounded-xl backdrop-blur-xs `}  `}
      >
        <div className="relative h-15 w-12.5 ">
          <Image
            src={`/assets/logo.png`}
            alt="logo.png"
            className="object-contain"
            fill
            sizes="50vw"
            priority
          />
        </div>
        <Links />
        <NextTopLoader showSpinner={false} />
      </div>
    </div>
  );
};

export default Navbar;
