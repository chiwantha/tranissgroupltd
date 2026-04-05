"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Carousel context
const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within <Carousel />");
  return context;
}

// Main Carousel component
export function Carousel({
  orientation = "horizontal",
  slidesToShow = 1,
  autoplayDelay = 3500,
  breakpoints,
  fade = false,
  showGap = true,
  gapSize = 16,
  className,
  children,
  ...props
}) {
  const autoplayRef = React.useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  );

  const plugins = React.useMemo(() => {
    const list = [autoplayRef.current];
    if (fade) list.push(Fade());
    return list;
  }, [fade]);

  const [carouselRef, api] = useEmblaCarousel(
    {
      axis: fade ? "x" : orientation === "horizontal" ? "x" : "y",
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    plugins,
  );

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  const [currentSlides, setCurrentSlides] = React.useState(slidesToShow);

  // Responsive slides
  React.useEffect(() => {
    if (!breakpoints || fade) return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024 && breakpoints?.lg) setCurrentSlides(breakpoints.lg);
      else if (width >= 768 && breakpoints?.md)
        setCurrentSlides(breakpoints.md);
      else if (width >= 640 && breakpoints?.sm)
        setCurrentSlides(breakpoints.sm);
      else if (breakpoints?.xs) setCurrentSlides(breakpoints.xs);
      else setCurrentSlides(slidesToShow);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints, slidesToShow, fade]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        orientation,
        slidesToShow: fade ? 1 : currentSlides,
        gap: showGap ? gapSize : 0,
        fade,
        scrollPrev,
        scrollNext,
      }}
    >
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

// Carousel content wrapper
export function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation, fade, gap } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        style={!fade ? { marginLeft: `-${gap}px` } : undefined}
        className={cn(
          fade
            ? "flex"
            : orientation === "horizontal"
              ? "flex"
              : "flex flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

// Carousel item
export function CarouselItem({ className, value, onClick, ...props }) {
  const { slidesToShow, gap, fade } = useCarousel();

  const handleClick = () => {
    if (onClick) onClick(value);
  };

  if (fade) {
    return (
      <div
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-full shrink-0 rounded-lg shadow-md bg-background",
          className,
        )}
        onClick={handleClick} // 👈 attach click event
        {...props}
      />
    );
  }

  const totalGap = gap * (slidesToShow - 1);

  return (
    <div
      role="group"
      aria-roledescription="slide"
      style={{
        flex: `0 0 calc((100% - ${totalGap}px) / ${slidesToShow})`,
        marginLeft: `${gap}px`,
      }}
      className={cn(
        "min-w-0 shrink-0 rounded-lg shadow-md bg-background",
        className,
      )}
      onClick={handleClick} // 👈 attach click event
      {...props}
    />
  );
}

// Previous arrow
export function CarouselPrevious({ className, ...props }) {
  const { orientation, scrollPrev } = useCarousel();
  return (
    <Button
      onClick={scrollPrev}
      className={cn(
        "absolute z-10 size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      {...props}
    >
      <ArrowLeft />
    </Button>
  );
}

// Next arrow
export function CarouselNext({ className, ...props }) {
  const { orientation, scrollNext } = useCarousel();
  return (
    <Button
      onClick={scrollNext}
      className={cn(
        "absolute z-10 size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      {...props}
    >
      <ArrowRight />
    </Button>
  );
}
