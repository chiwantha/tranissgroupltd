"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const slides = [
    {
      id: 0,
      image: `/hero/natural.png`,
      title: "Sri Lanka",
      description:
        "Golden sands and turquoise waters perfect for relaxation and whale watching.",
    },
    {
      id: 1,
      image: `/hero/slide/beach.png`,
      title: "Mirissa Beach",
      description:
        "Golden sands and turquoise waters perfect for relaxation and whale watching.",
    },
    {
      id: 2,
      image: `/hero/slide/festival.png`,
      title: "Kandy Perahara",
      description:
        "A magnificent cultural procession with traditional dancers and majestic elephants.",
    },
    {
      id: 6,
      image: `/hero/slide/safari.png`,
      title: "Yala Safari",
      description:
        "Spot leopards, elephants, and exotic wildlife in their natural habitat.",
    },
    {
      id: 4,
      image: `/hero/slide/temple.png`,
      title: "Ancient Buddhist Temple",
      description:
        "Discover centuries-old architecture and serene spiritual atmosphere.",
    },
    {
      id: 5,
      image: `/hero/slide/ella.png`,
      title: "Ella",
      description:
        "Breathtaking hill country views, lush tea plantations, and scenic hiking trails.",
    },

    {
      id: 7,
      image: `/hero/slide/sigiriya.png`,
      title: "Sigiriya Rock Fortress",
      description:
        "Ancient sky fortress with stunning frescoes and panoramic views.",
    },
  ];

  const [selectedSlide, setSelectedSlide] = useState(slides[0]); // default safari

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        {/* Fade transition layer */}
        <div key={selectedSlide.id} className="absolute inset-0 animate-fade">
          <Image
            src={selectedSlide?.image || "/hero/natural.png"}
            alt="hero_image"
            fill
            sizes="100vw"
            loading="eager"
            className="object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 z-10 flex flex-col">
        {/* Title + Description */}
        <div className="flex items-center sm:justify-between justify-end py-4 md:py-6 text-shadow-md">
          <h1 className="text-5xl font-hnd text-theme-light-blue font-bold sm:block hidden">
            Traniss Group
          </h1>

          <div className="text-white text-right space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold font-hnd text-theme-light-blue">
              {selectedSlide?.title || "Sri Lanka"}
            </h1>

            <p className="text-lg sm:text-xl max-w-md font-light leading-5 text-shadow-lg">
              {selectedSlide?.description ||
                "Discover the Island of Serendipity"}
            </p>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          autoplayDelay={3000}
          slidesToShow={3}
          gapSize={16}
          showGap
          className="overflow-hidden rounded-xl"
          breakpoints={{ xs: 1, sm: 2, md: 3 }}
        >
          <CarouselContent>
            {slides.map((slide) => {
              return (
                <CarouselItem
                  key={slide.id}
                  value={slide}
                  onClick={(s) => setSelectedSlide(s)}
                  className={cn(
                    "relative rounded-xl overflow-hidden h-40 sm:h-48 md:h-52  cursor-pointer transition-all duration-300",
                  )}
                >
                  <Image
                    src={slide.image}
                    alt={`slide-${slide.id}`}
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-300 hover:scale-110"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Fade animation */}
      <style jsx>{`
        .animate-fade {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0.5;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
