import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section
      className="flex items-center sm:h-screen-80px"
      // style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="space-y-12 w-full sm:w-1/2 text-center sm:text-left mb-20"
        >
          <h2
            className={`text-4xl sm:text-6xl mt-20 sm:mt-0  ${playPairDisplay.className}`}
          >
            Find perfect plants for your home
          </h2>
          <p className="text-xl">
            Beautiful plants that encourage you to get creative.
          </p>
          <button className="px-16 h-16 bg-black text-white ">Buy Now</button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="bottom-bottom"
          className="w-full sm:w-1/2"
        >
          <Image
            src={"/img/hero.png"}
            alt="Hero"
            width={500}
            height={700}
            className="mx-auto sm:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
