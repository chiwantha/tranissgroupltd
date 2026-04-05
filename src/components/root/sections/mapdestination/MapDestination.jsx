"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Dynamically import MapContainer and other react-leaflet components
const MapContainerWrapper = dynamic(
  () => import("../../../common/leafletmap/MapContainerClient"), // move your MapContainer JSX into a separate client component
  { ssr: false },
);

const destinationsList = [
  {
    id: 1,
    title: "Sigiriya",
    image: "sigiriya.png",
    desc: "Ancient rock fortress and palace ruins surrounded by lush gardens and stunning frescoes, often called the Eighth Wonder of the World.",
    slug: "sigiriya",
    lat: 7.9571,
    lng: 80.7573,
  },
  {
    id: 2,
    title: "Polonnaruwa",
    image: "polonnaruwa.png",
    desc: "Medieval capital of Sri Lanka known for its well-preserved archaeological treasures, massive stone sculptures, and ancient irrigation systems.",
    slug: "polonnaruwa",
    lat: 7.9403,
    lng: 81.0188,
  },
  {
    id: 3,
    title: "Unawatuna Beach",
    image: "unawatuna-beach.png",
    desc: "Picturesque crescent-shaped beach with golden sands, turquoise waters, vibrant coral reefs, and excellent snorkeling opportunities.",
    slug: "unawatuna-beach",
    lat: 6.0081,
    lng: 80.2478,
  },
  {
    id: 4,
    title: "Dambulla",
    image: "dambulla.png",
    desc: "Largest and best-preserved cave temple complex in Sri Lanka, featuring stunning Buddhist murals and over 150 Buddha statues.",
    slug: "dambulla",
    lat: 7.8742,
    lng: 80.6511,
  },
  {
    id: 5,
    title: "Yala",
    image: "yala.png",
    desc: "Famous wildlife sanctuary with the highest leopard density in the world, also home to elephants, sloth bears, and diverse bird species.",
    slug: "yala",
    lat: 6.6207,
    lng: 81.3775,
  },
  {
    id: 6,
    title: "Haputale",
    image: "haputhale.png",
    desc: "Scenic hill country town offering breathtaking views of the southern plains, lush tea plantations, and the famous Lipton's Seat viewpoint.",
    slug: "haputale",
    lat: 6.7678,
    lng: 80.9586,
  },
  {
    id: 7,
    title: "Ravana's Cave (Ravana Ella)",
    image: "ravanastan.png",
    desc: "Mysterious cave linked to the epic Ramayana, situated near the stunning Ravana Falls and surrounded by dense forest and legends.",
    slug: "ravanastan",
    lat: 6.8508,
    lng: 81.0523,
  },
  {
    id: 8,
    title: "Horton Plains",
    image: "horton-plains.png",
    desc: "Breathtaking cloud forest with rare wildlife, dramatic cliffs at World's End, and the beautiful Baker's Falls on a high-altitude plateau.",
    slug: "horton-plains",
    lat: 6.8,
    lng: 80.8,
  },
];

const MapDestination = () => {
  const [destination, setDestination] = useState(destinationsList[4]);

  return (
    <div className="relative h-screen flex justify-center">
      <div className="absolute w-full h-full ">
        <Image
          src={`/destination/${destination.image}`}
          alt={destination.title}
          fill
          className="object-center object-cover transition-all duration-500"
        />
      </div>

      <div className="absolute  w-full flex flex-col justify-center items h-full  max-w-7xl mx-auto space-y-4 self-start  py-1 px-4">
        <div className="flex flex-col text-shadow-md bg-white rounded-xl p-4 md:p-6 w-full max-w-100 space-y-4 shadow-lg">
          <h4 className="text-4xl text-theme-light-green">
            {destination.title}
          </h4>
          <hr className="border-gray-200 w-full" />
          <p className="text-gray-600 leading-5.5 text-lg font-light">
            {destination.desc}
          </p>
        </div>

        <div className="max-w-100">
          <Carousel
            className="rounded-xl shadow-lg overflow-hidden"
            autoplayDelay={4000}
            slidesToShow={2}
          >
            <CarouselContent>
              {destinationsList.map((des, index) => (
                <CarouselItem
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden"
                >
                  <Image
                    src={`/destination/${des.image}`}
                    alt={des.slug}
                    fill
                    sizes="30vw"
                    loading="eager"
                    className="object-center object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <MapContainerWrapper
          destinationsList={destinationsList}
          setDestination={setDestination}
        />
      </div>
    </div>
  );
};

export default MapDestination;
