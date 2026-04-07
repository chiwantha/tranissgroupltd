import React from "react";
import WidthWrap from "../widthwrap/WidthWrap";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { contact_info } from "@/constant/Company";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="bg-gray-100 ">
        <WidthWrap>
          <div className="text-center py-12">
            <p className="text-lg font-light text-gray-600">
              Proud to be Sri Lanka’s trusted travel partner — thank you for
              visiting Traniss Group Ltd
            </p>
          </div>
        </WidthWrap>
      </div>
      <div className="bg-theme-blue">
        <WidthWrap>
          <div className="flex flex-col gap-2">
            <div className="py-6 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* company */}
              <div className="bg-white p-4 md:p-6 rounded-xl flex flex-col gap-4 text-center">
                <h1 className="font-hnd text-5xl font-bold tracking-tight text-theme-light-blue">
                  Traniss
                </h1>
                <hr className="border-gray-200" />
                <p className="text-lg font-light leading-6">
                  Delivering safe, comfortable, and personalized travel
                  experiences across Sri Lanka
                </p>
                <hr className="border-gray-200" />
                <div className="flex justify-evenly items-center text-2xl">
                  <span className="text-blue-500 hover:scale-105 transition-transform duration-300">
                    <FaFacebookSquare />{" "}
                  </span>
                  <span className="text-pink-500 hover:scale-105 transition-transform duration-300">
                    <FaSquareInstagram />
                  </span>
                  <span className="text-blue-500 hover:scale-105 transition-transform duration-300">
                    <FaLinkedin />
                  </span>
                </div>
              </div>
              {/* QUICK LINKS */}
              <div className="flex flex-col gap-3 sm:text-right">
                <h3 className="text-2xl text-theme-light-blue font-bold">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-lg text-gray-200 font-light">
                  <li className="hover:text-white cursor-pointer">Home ~</li>
                  <li className="hover:text-white cursor-pointer">
                    About Us ~
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Services ~
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Destinations ~
                  </li>
                  <li className="hover:text-white cursor-pointer">Tours ~</li>
                  <li className="hover:text-white cursor-pointer">Contact ~</li>
                </ul>
              </div>

              {/* SERVICES */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl text-theme-light-green font-bold">
                  Our Services
                </h3>
                <ul className="space-y-2 text-lg font-light text-gray-200">
                  <li>~ Airport Transfers</li>
                  <li>~ Private Tours</li>
                  <li>~ Hotel Bookings</li>
                  <li>~ Car Rentals</li>
                  <li>~ Custom Travel Plans</li>
                  <li>~ Travel Tickets</li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl text-theme-light-blue font-bold">
                  Contact Us
                </h3>

                {contact_info.slice(0, 5).map((info, index) => (
                  <div
                    className="flex items-start gap-3  text-gray-200 group"
                    key={index}
                  >
                    <span className="mt-1.5 group-hover:text-theme-light-green group-hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </span>
                    <p className="text-lg transition-colors cursor-pointer">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/20 py-4 text-sm text-gray-300 flex flex-col md:flex-row items-center justify-between gap-2">
              <p>
                © {new Date().getFullYear()} Traniss Group Ltd. All Rights
                Reserved.
              </p>

              <p>
                Design & Developed By{" "}
                <span className="text-theme-light-green font-medium">
                  K-Chord Pvt Ltd
                </span>
              </p>
            </div>
          </div>
        </WidthWrap>
      </div>
    </div>
  );
};

export default Footer;
