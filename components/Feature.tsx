import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

const Feature = () => {
  const plants = [
    {
      name: "Plant 1",
      price: 70,
      img: "/img/plant-1.png",
    },
    {
      name: "Plant 2",
      price: 80,
      img: "/img/plant-2.png",
    },
    {
      name: "Plant 3",
      price: 90,
      img: "/img/plant-3.png",
    },
  ];
  return (
    <section>
      <h3
        className={`text-4xl text-center my-48 max-w-3xl mx-auto ${playPairDisplay.className} `}
      >
        Love and work are to people what water and sunshine are to plants
      </h3>
      <div className="flex">
        <div className="w-1/4">
          <h3 className={`text-4xl mb-4 ${playPairDisplay.className}`}>
            Featured
          </h3>
          <p className="text-sm mb-4 w-3/4">
            Our plants are 100% organic, we don't use pesticides or harmful
            chemicals.{" "}
          </p>
          <p className="text-sm mb-8">But please don't eat them</p>
          <button className="p-2 border-b border-black">
            Shop all Favourites
          </button>
        </div>
        <div className="w-3/4">
          <ul className="flex flex-wrap justify-between">
            {plants.map((plant) => (
              <li key={plant.name}>
                <Image
                  src={plant.img}
                  alt={plant.name}
                  width={260}
                  height={300}
                />
                <h5>{plant.name}</h5>
                <p>${plant.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
