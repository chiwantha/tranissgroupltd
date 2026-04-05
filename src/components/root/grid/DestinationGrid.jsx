import Button from "@/components/common/button/Button";
import React from "react";
import DestinationCard from "../card/DestinationCard";

const DestinationGrid = () => {
  const destinations = [
    {
      title: "Sigiriya",
      image: "sigiriya.png",
      desc: "Ancient rock fortress and palace ruins surrounded by lush gardens and stunning frescoes, often called the Eighth Wonder of the World.",
      slug: "sigiriya",
    },
    {
      title: "Polonnaruwa",
      image: "polonnaruwa.png",
      desc: "Medieval capital of Sri Lanka known for its well-preserved archaeological treasures, massive stone sculptures, and ancient irrigation systems.",
      slug: "polonnaruwa",
    },
    {
      title: "Unawatuna Beach",
      image: "unawatuna-beach.png",
      desc: "Picturesque crescent-shaped beach with golden sands, turquoise waters, vibrant coral reefs, and excellent snorkeling opportunities.",
      slug: "unawatuna-beach",
    },
    {
      title: "Dambulla",
      image: "dambulla.png",
      desc: "Largest and best-preserved cave temple complex in Sri Lanka, featuring stunning Buddhist murals and over 150 Buddha statues.",
      slug: "dambulla",
    },
    {
      title: "Yala",
      image: "yala.png",
      desc: "Famous wildlife sanctuary with the highest leopard density in the world, also home to elephants, sloth bears, and diverse bird species.",
      slug: "yala",
    },
    {
      title: "Haputale",
      image: "haputhale.png",
      desc: "Scenic hill country town offering breathtaking views of the southern plains, lush tea plantations, and the famous Lipton's Seat viewpoint.",
      slug: "haputale",
    },
    {
      title: "Ravana's Cave (Ravana Ella)",
      image: "ravanastan.png",
      desc: "Mysterious cave linked to the epic Ramayana, situated near the stunning Ravana Falls and surrounded by dense forest and legends.",
      slug: "ravanastan",
    },
    {
      title: "Horton Plains",
      image: "horton-plains.png",
      desc: "Breathtaking cloud forest with rare wildlife, dramatic cliffs at World's End, and the beautiful Baker's Falls on a high-altitude plateau.",
      slug: "horton-plains",
    },
  ];
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between gap-4  flex-wrap">
        <span className="font-hnd font-bold text-theme-light-blue text-4xl flex gap-2 items-center flex-nowrap">
          Popular <span className="md:block hidden">Destinations</span>
        </span>
        <Button title={`View All`} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((des, index) => (
          <DestinationCard
            key={index}
            desc={des.desc}
            image={des.image}
            slug={des.slug}
            title={des.title}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationGrid;
