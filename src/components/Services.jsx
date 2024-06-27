import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { fbtServices1, fbtServicesIcons1 } from "../constants";
import { fbtServices2, fbtServicesIcons2 } from "../constants";
import { fbtServices3, fbtServicesIcons3 } from "../constants";

import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services";
import TestimonialSlider from "./TestimonialSlider";

const iconInfo = [
  "How to get started",
  "Join our Newsletter",
  "Welcome to FBT",
  "How our Analytics works",
  "Our Future Plans"
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Section id="how-to-use">
      <div className="container mx-auto px-4">
        <Heading
          title="Do Less. Gain More. Grow Faster."
          text="fbt unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="relative border border-light-border dark:border-dark-border rounded-3xl overflow-hidden">
              <img
                src={service1}
                className="object-cover w-full h-64 md:h-80 lg:h-96"
                alt="Smartest AI"
              />
              <div className="p-8 lg:p-20">
                <h4 className="h4 mb-4 font-bold text-modern">WhatsApp Marketing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Broadcast Promotional Messages (Officially)
                </p>
                <ul className="body-2">
                  {fbtServices1.map((item, index) => (
                    <li key={index} className="flex items-start py-4 border-t border-n-6">
                      <img width={24} height={24} src={check} alt="check" />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative border border-light-border dark:border-dark-border rounded-3xl overflow-hidden">
              <img
                src={service2}
                className="object-cover w-full h-64 md:h-80 lg:h-96"
                alt="Smartest AI"
              />
              <div className="p-8 lg:p-20">
                <h4 className="h4 mb-4 font-bold text-modern">Bulk SMS Marketing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Efficiently deliver targeted messages to a large audience instantly
                </p>
                <ul className="body-2">
                  {fbtServices2.map((item, index) => (
                    <li key={index} className="flex items-start py-4 border-t border-n-6">
                      <img width={24} height={24} src={check} alt="check" />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col lg:flex-row bg-n-7 rounded-3xl overflow-hidden mt-5 md:mt-0">
            <div className="w-full lg:w-1/2 relative">
              <img
                src={service3}
                className="object-cover w-full h-full md:h-auto lg:h-full"
                alt="Marketing Manager"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15">
                <h4 className="h4 mb-4 hidden md:block">Fast Business Technologies</h4>
                <p className="body-2 mb-[2rem] text-n-3 hidden md:block">
                  <span className="font-bold">Discover Success Stories from Our Clients!</span> Learn how businesses like yours have thrived with our comprehensive marketing solutions.
                </p>
                <ul className="flex items-center justify-between space-x-2">
                  {fbtServicesIcons1.map((item, index) => (
                    <li
                      key={index}
                      className="relative flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:animate-bounce"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-full p-2 bg-gradient-to-r from-dark-blue-500 to-dark-blue-700 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                      {hoveredIndex === index && (
                        <div className="absolute bottom-full mb-2 w-48 p-2 bg-white dark:bg-purple-800 text-gray-800 dark:text-white rounded-full shadow-lg text-center">
                          {iconInfo[index]}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
              <TestimonialSlider />
            </div>
            <VideoChatMessage />
            <VideoBar />
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
