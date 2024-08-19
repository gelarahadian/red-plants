import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

const Feature = () => {
  const plants = [
    {
      name: "Plant 1",
      price: 70,
      img: "/img/plant-1.png",
      sold: false,
    },
    {
      name: "Plant 2",
      price: 80,
      img: "/img/plant-2.png",
      sold: false,
    },
    {
      name: "Plant 3",
      price: 90,
      img: "/img/plant-3.png",
      sold: true,
    },
  ];
  return (
    <section>
      <h3
        data-aos="fade-right"
        className={`text-4xl text-center my-48 max-w-3xl mx-auto ${playPairDisplay.className} `}
      >
        Love and work are to people what water and sunshine are to plants
      </h3>
      <div className="flex flex-col xl:flex-row  ">
        <div
          data-aos="fade-left"
          data-aos-delay={`${plants.length * 100}`}
          className="w-full xl:w-1/4 text-center xl:text-left"
        >
          <h3 className={`text-4xl mb-4 ${playPairDisplay.className}`}>
            Featured
          </h3>
          <p className="text-sm mb-4 xl:w-3/4">
            Our plants are 100% organic, we don't use pesticides or harmful
            chemicals.{" "}
          </p>
          <p className="text-sm mb-8">But please don't eat them</p>
          <button className="p-2 border-b border-black mb-8">
            Shop all Favourites
          </button>
        </div>
        <div className="w-full xl:w-3/4">
          <ul className="flex flex-wrap justify-center xl:justify-between gap-8 xl:gap-0  ">
            {plants.map((plant, i) => (
              <li
                key={plant.name}
                data-aos="fade-up"
                data-aos-delay={`${100 * i}`}
              >
                <Link href={"/plant"}>
                  <div className="relative">
                    <Image
                      src={plant.img}
                      alt={plant.name}
                      width={260}
                      height={300}
                    />
                    {plant.sold && (
                      <div className="absolute top-4 right-4 bg-black py-1 px-4 text-white">
                        Sold Out
                      </div>
                    )}
                  </div>
                </Link>
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
