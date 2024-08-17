import { Playfair_Display } from "next/font/google";
import React from "react";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

const Subscribe = () => {
  return (
    <section>
      <h3
        className={`text-2xl mb-5 mt-28 text-center mx-auto w-96 ${playPairDisplay.className} `}
      >
        Get 15% off your next order, Subscribe to our Newsletter
      </h3>
      <form action="">
        <div className="flex w-[560px] mx-auto">
          <input
            type="email"
            placeholder="Enter your email here"
            className={`bg-gray-100 w-4/6 h-10 pl-4 placeholder:text-gray-700 ${playPairDisplay.className} `}
          />
          <button className="w-2/6 bg-black text-white h-10 uppercase px-8">
            Subcribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
