import ChooseCard from "@/components/root/card/ChooseCard";
import DestinationGrid from "@/components/root/grid/DestinationGrid";
import WidthWrap from "@/components/root/layout/widthwrap/WidthWrap";
import Hero from "@/components/root/sections/hero/Hero";
import MapDestination from "@/components/root/sections/mapdestination/MapDestination";
import Image from "next/image";

export default function Home() {
  const we_have = [
    {
      title: `Wild Life`,
      desc: `Sri Lanka’s jungles offer incredible wildlife encounters and breathtaking natural beauty`,
      image: `/Have/wildlife.png`,
      overlay: `from-green-400`,
    },
    {
      title: `Adventure`,
      desc: `Sri Lanka offers exciting adventures across forests, rivers, oceans, and mountains`,
      image: `/Have/rafting.png`,
      overlay: `from-blue-400`,
    },
    {
      title: `Heritage`,
      desc: `Explore timeless heritage sites telling stories of Sri Lanka’s glorious past`,
      image: `/Have/heritage.png`,
      overlay: `from-brown-400`,
    },
    {
      title: `Wellness`,
      desc: `Rejuvenate naturally with yoga, Ayurveda treatments, and serene tropical surroundings`,
      image: `/Have/wellness.png`,
      overlay: `from-yellow-400`,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* hero section */}
      <Hero />
      {/* center section */}
      <section className="py-12 md:py-25 bg-white">
        <WidthWrap>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            {/* FIRST CARD (unchanged style + hover) */}
            <div className="relative bg-red-200 aspect-16/7 rounded-xl md:col-span-2 overflow-hidden group">
              <Image
                src={we_have[0].image}
                alt="WildLife"
                fill
                loading="eager"
                sizes="30vw"
                className="object-cover object-center saturate-50 group-hover:saturate-150 group-hover:scale-105 transition-all duration-300"
              />

              <div className="absolute w-full bg-linear-to-t from-green-500/55 h-full to-transparent" />

              <div className="absolute bottom-4 left-4 md:left-6 md:bottom-6 flex flex-col gap-2">
                <h3 className="text-4xl font-hnd font-bold text-white text-shadow-md">
                  {we_have[0].title}
                </h3>

                <p
                  className="md:w-[50%] text-lg text-white text-shadow-md font-light leading-5
            translate-y-6 opacity-0 line line-clamp-3
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-500"
                >
                  {we_have[0].desc}
                </p>
              </div>
            </div>

            {/* SECOND CARD */}
            <div className="bg-red-200 rounded-xl md:col-span-1 overflow-hidden relative group">
              <Image
                src={we_have[1].image}
                alt="Rafting"
                fill
                loading="eager"
                sizes="30vw"
                className="object-cover object-center saturate-50 group-hover:saturate-150 group-hover:scale-105 transition-all duration-300"
              />

              <div className="absolute w-full bg-linear-to-t from-blue-500/55 h-full to-transparent" />

              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <h3 className="text-4xl font-hnd font-bold text-white text-shadow-md">
                  {we_have[1].title}
                </h3>

                <p
                  className="md:w-[50%] text-lg text-white text-shadow-md font-light leading-5
            translate-y-6 opacity-0 line line-clamp-3
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-500"
                >
                  {we_have[1].desc}
                </p>
              </div>
            </div>

            {/* THIRD CARD */}
            <div className="bg-red-200 aspect-square rounded-xl md:col-span-1 overflow-hidden relative group">
              <Image
                src={we_have[2].image}
                alt="WildLife"
                fill
                loading="eager"
                sizes="30vw"
                className="object-cover object-center saturate-50 group-hover:saturate-150 group-hover:scale-105 transition-all duration-300"
              />

              <div className="absolute w-full bg-linear-to-t from-amber-600/55 h-full to-transparent" />

              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <h3 className="text-4xl font-hnd font-bold text-white text-shadow-md">
                  {we_have[2].title}
                </h3>

                <p
                  className="md:w-[50%] text-lg text-white text-shadow-md font-light leading-5
            translate-y-6 opacity-0 line line-clamp-3
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-500"
                >
                  {we_have[2].desc}
                </p>
              </div>
            </div>

            {/* FOURTH CARD */}
            <div className="bg-red-200 rounded-xl md:col-span-2 overflow-hidden relative group">
              <Image
                src={we_have[3].image}
                alt="WildLife"
                fill
                loading="eager"
                sizes="30vw"
                className="object-cover object-center saturate-50 group-hover:saturate-150 group-hover:scale-105 transition-all duration-300"
              />

              <div className="absolute w-full bg-linear-to-t from-green-500/55 h-full to-transparent" />

              <div className="absolute bottom-4 left-4 md:left-6 md:bottom-6 flex flex-col gap-2">
                <h3 className="text-4xl font-hnd font-bold text-white text-shadow-md">
                  {we_have[3].title}
                </h3>

                <p
                  className="md:w-[50%] text-lg text-white text-shadow-md font-light leading-5
            translate-y-6 opacity-0 line line-clamp-3
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-500"
                >
                  {we_have[3].desc}
                </p>
              </div>
            </div>
          </div>
        </WidthWrap>
      </section>
      {/* why us section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <WidthWrap>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-4xl capitalize font-bold font-hnd text-theme-light-blue">
            <div className="p-6 ">Guides</div>

            <div className="p-6 ">Value</div>

            <div className="p-6 ">Safety</div>

            <div className="p-6 ">Support</div>
          </div>
        </WidthWrap>
      </section>
      {/* destinations section */}
      <section className="py-12 md:py-20 bg-white">
        <WidthWrap>
          <DestinationGrid />
        </WidthWrap>
      </section>
      {/* destinations map */}
      <section className=" bg-white">
        <MapDestination />
      </section>
      {/* why choose us */}
      <section className="py-12 md:py-20 bg-white">
        <WidthWrap>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right p-4 md:p-6 space-y-6">
              <h2 className="font-hnd text-theme-light-blue text-4xl md:text-5xl font-bold">
                Why Choose Us
              </h2>

              <p className="text-gray-600 max-w-xl text-lg leading-6">
                Your journey deserves more than just transportation — it
                deserves reliability, comfort, and unforgettable experiences. At
                Traniss Group Ltd, we make every trip smooth, safe, and
                perfectly tailored for you.
              </p>

              <div className="space-y-4">
                <ChooseCard
                  title={`Trusted & Reliable`}
                  desc={`We ensure punctual service and dependable travel solutions
                    you can always count on`}
                />
                <ChooseCard
                  title={` Comfortable & Modern Fleet`}
                  desc={`Travel in style with well-maintained, clean, and modern
                    vehicles designed for your comfort`}
                />
                <ChooseCard
                  title={`Personalized Travel Experience`}
                  desc={`From airport transfers to full tours, we customize every
                    journey to match your needs`}
                />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-87.5 md:min-h-112.5 w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`/why/chooseus.png`}
                alt="Why choose Traniss Group Ltd"
                className="object-cover object-center"
                fill
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </WidthWrap>
      </section>
    </div>
  );
}
