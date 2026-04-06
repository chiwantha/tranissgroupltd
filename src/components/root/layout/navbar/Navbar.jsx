"use client";
import { useEffect, useState } from "react";
import Links from "./links/Links";
import NextTopLoader from "nextjs-toploader";

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
        <h1 className="font-hnd text-5xl font-bold tracking-tight text-theme-light-blue">
          Traniss
        </h1>
        <Links />
        <NextTopLoader />
      </div>
    </div>
  );
};

export default Navbar;
