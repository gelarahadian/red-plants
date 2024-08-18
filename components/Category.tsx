import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { title } from "process";
import React from "react";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

const Category = () => {
  const categories = [
    { title: "Jungle Plants", img: "/img/category-1.png" },
    {
      title: "Outdoor Plants",
      img: "/img/category-2.png",
    },
    {
      title: "Bedroom Plants",
      img: "/img/category-3.png",
    },
    {
      title: "Indoor Plants",
      img: "/img/category-4.png",
    },
  ];
  return (
    <section>
      <h3
        data-aos="fade-right"
        className={`text-4xl text-center mb-16 ${playPairDisplay.className} `}
      >
        Categories
      </h3>
      <ul className="flex flex-wrap justify-between">
        {categories.map((category, i) => (
          <li
            key={category.title}
            data-aos="fade-up"
            data-aos-delay={`${100 * i}`}
          >
            <a href="#">
              <Image
                src={category.img}
                alt={category.title}
                width={260}
                height={400}
              />
              <p className={`mt-5 text-2xl ${playPairDisplay.className}`}>
                {category.title}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
