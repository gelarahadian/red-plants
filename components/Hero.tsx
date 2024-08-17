import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section
      className="flex items-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex justify-between items-center w-full">
        <div className="space-y-12 w-1/2">
          <h2 className={`text-6xl ${playPairDisplay.className}`}>
            Find perfect plants for your home
          </h2>
          <p className="text-xl">
            Beautiful plants that encourage you to get creative.
          </p>
          <button className="px-16 h-16 bg-black text-white">Buy Now</button>
        </div>
        <div className="w-1/2">
          <Image
            src={"/img/hero.png"}
            alt="Hero"
            width={500}
            height={700}
            className="ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
