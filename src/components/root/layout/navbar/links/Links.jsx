"use client";

import { useState } from "react";
import Button from "@/components/common/button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Destinations", path: "/destinations" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Links = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const message = encodeURIComponent(
    "Hello Traniss Group Ltd, I’d like to inquire about your travel services !",
  );

  return (
    <div className="flex items-center ">
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 items-center">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`tracking-tight hover:tracking-normal ${
              pathName === link.path
                ? "tracking-normal text-theme-light-blue font-medium text-2xl"
                : "font-light text-white hover:text-2xl text-xl"
            } transition-all duration-300 capitalize`}
          >
            {link.name}
          </Link>
        ))}
        <Button
          title={"WhatsApp"}
          bg="bg-green-500 text-white"
          link={`https://wa.me/447570779744?text=${message}`}
        />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden mt-1">
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <X size={35} className="text-white  font-bold" />
          ) : (
            <Menu className="text-white font-black" size={35} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white  z-50 flex flex-col items-center gap-6  py-6 transition-all duration-300  md:hidden ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            onClick={() => setOpen(false)}
            className={`capitalize ${
              pathName === link.path
                ? "text-theme-light-blue text-2xl font-medium"
                : "text-theme-blue text-xl"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Button
          title={"WhatsApp"}
          bg="bg-green-500 text-white"
          link={`https://wa.me/447570779744?text=${message}`}
        />
      </div>
    </div>
  );
};

export default Links;
