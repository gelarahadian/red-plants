import Image from "next/image";
import React from "react";

const PlantItem = () => {
  return (
    <section>
      <div className="flex">
        <div data-aos="fade-up" className="w-1/2 z-10">
          <div className="flex">
            <div className="w-1/5 flex flex-col justify-between">
              <Image
                className="object-cover w-full"
                src="/img/plant-3.png"
                alt="Plant 3"
                width={100}
                height={200}
              />
              <Image
                className="object-cover w-full"
                src="/img/plant-2.png"
                alt="Plant 2"
                width={100}
                height={200}
              />{" "}
              <Image
                className="object-cover w-full"
                src="/img/plant-1.png"
                alt="Plant 1"
                width={100}
                height={200}
              />
            </div>
            <div className="w-4/5">
              <Image
                className="object-cover w-full pl-4"
                src="/img/plant-3.png"
                alt="Plant 3"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className="w-1/2 pl-10">
          <span className="px-4 py-1 bg-black text-white">Sold Out</span>
          <h2 className="text-4xl mt-28">Plant 3</h2>
          <h2 className="text-5xl mt-4">$90</h2>
          <div className="flex items-center mt-16">
            <p className="flex-1">Quantity:</p>
            <div className="w-3/4 flex justify-between p-4 border border-black ">
              <button>-</button>1<button>+</button>
            </div>
          </div>
          <button className="w-full bg-black h-12 text-white mt-8 ">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlantItem;
