import { Playfair_Display } from "next/font/google";
import React, { FC } from "react";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

interface SubscribeProps {
  className?: string;
}

const Subscribe: FC<SubscribeProps> = ({ className }) => {
  return (
    <section className={className}>
      <h3
        data-aos="fade-right"
        className={`text-2xl mb-5 text-center mx-auto max-w-96 w-full ${playPairDisplay.className} `}
      >
        Get 15% off your next order, Subscribe to our Newsletter
      </h3>
      <form action="">
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="flex flex-col sm:flex-row max-w-[560px] w-full mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email here"
            className={`bg-gray-100 w-full sm:w-4/6 h-10 pl-4 placeholder:text-gray-700  ${playPairDisplay.className} `}
          />
          <button className="w-full sm:w-2/6 bg-black text-white h-10 uppercase px-8">
            Subcribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
