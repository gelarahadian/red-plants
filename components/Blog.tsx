import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

const Blog = () => {
  const blogs = [
    {
      title:
        "How to water your freaking plants so they don't die after one week",
      img: "/img/blog-1.png",
      author: "Mellissa Bail",
      edition: "291",
    },
    {
      title: "How to repot a Monstera without killing it and foster its growth",
      img: "/img/blog-2.png",
      author: "Jesse Rowe",
      edition: "292",
    },
  ];
  return (
    <section>
      <ul className="flex justify-between space-x-8 mt-36">
        {blogs.map((blog, i) => (
          <li
            key={blog.title}
            data-aos="fade-left"
            data-aos-delay={`${100 * i}`}
          >
            <div className="relative w-full h-80">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-8 right-0 p-4 w-40 bg-white text-sm">
                <p className="text-xs text-gray-400">Written by</p>
                <p className={`  mt-1 ${playPairDisplay.className} `}>
                  {blog.author}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Edition: {blog.edition}
            </p>
            <h3 className={`text-2xl mt-1 ${playPairDisplay.className} `}>
              {blog.title}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
