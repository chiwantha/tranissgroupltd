import React from "react";
import ServiceCard from "../card/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/constant/Company";

const ServicesGrid = ({ header = false }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      {header && (
        <div className="flex items-center justify-between gap-4  flex-wrap">
          <span className="font-hnd font-bold text-theme-light-blue text-4xl flex gap-2 items-center flex-nowrap">
            Our Services
          </span>
          <Button title={`View All`} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((ser, index) => (
          <ServiceCard
            key={index}
            desc={ser.desc}
            image={ser.image}
            state={ser.state}
            name={ser.name}
            slug={ser.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
