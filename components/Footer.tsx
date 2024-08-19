import React from "react";
import { Playfair_Display } from "next/font/google";

const playPairDisplay = Playfair_Display({ subsets: ["latin"] });

const Footer = () => {
  const links = [
    {
      title: "Connect",
      lists: ["Instagram", "Facebook", "Pinterest", "YouTube"],
    },
    {
      title: "Resources",
      lists: ["Return Policy", "TrackAn Order", "FAQs", "Privacy Policy"],
    },
    {
      title: "Company",
      lists: ["Our Story", "Careers", "Press"],
    },
  ];
  return (
    <footer className="max-w-6xl mx-auto px-4 mt-24 pt-20">
      <div className="flex w-full">
        <div className="w-1/5">
          <h3 className={`text-xl font-bold  ${playPairDisplay.className}`}>
            Red Plants
          </h3>
        </div>
        <div className="w-3/5">
          <div className="flex flex-col sm:flex-row text-center sm:text-left space-y-8 sm:space-y-0  justify-around">
            {links.map((link) => (
              <div key={link.title}>
                <h4
                  data-aos="fade-right"
                  className="text-xs text-gray-400 mb-5"
                >
                  {link.title}
                </h4>
                <ul>
                  {link.lists.map((list, i) => (
                    <li
                      data-aos="fade-left"
                      data-aos-delay={(i + 1) * 100}
                      key={list}
                      className={`${playPairDisplay.className}`}
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/5">
          <div className="flex justify-end">
            <select name="currency" id="currency" className="bg-gray-200 p-2">
              <option value="euro">EUR</option>
              <option value="urd">USD</option>
            </select>
          </div>
        </div>
      </div>
      <p className="mt-24 mb-8 text-center text-sm text-gray-400">
        Designed by Radoslav Bali & Slicing by Gelar Rahadian Fajar
      </p>
    </footer>
  );
};

export default Footer;
