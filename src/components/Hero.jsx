import {
  curve,
  heroBackground,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
} from "../assets";
import Button from "./Button1";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import "./Hero.css";

import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Hero = () => {
  const parallaxRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 40 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] "
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative overflow-visible " ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1rem] md:mb-10 lg:mb-[2.5rem]">
          <h1 className="h1 mb-6">
            Next Generation CRM for &nbsp;Marketing&nbsp;and Sales with {` `}
            <span className="inline-block relative">
              Fast Bizz Tech{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-3 text-n-2 lg:mb-4">
            Leading brands grow cost-efficiently with Bird through personalized
            interactions on Email, SMS, and WhatsApp.
          </p>
          <Button href="/pricing">
            Request a quote
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-12 overflow-visible">
          <div className="hidden md:block relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.0rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={images[currentImageIndex]}
                  className="w-full"
                  width={1024}
                  height={290}
                  alt={`Slide ${currentImageIndex + 1}`}
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.1rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={`Icon ${index}`} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.1rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="2.5x Growth"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>

        {/* Highlights Section */}
        <div className="relative z-10 mt-40 text-center"> {/* Adjusted margin-top */}
          <h4 className="tagline mb-9 text-center text-n-1/50 text-2xl">
            A few Highlights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="h3">
                <CountUp start={0} end={3500000} duration={15} separator="," />+
              </h3>
              <p className="h4 font-bold">Email, SMS & WhatsApp</p>
              <p className="body-2">
                Processed for modern businesses globally
              </p>
            </div>
            <div>
              <h3 className="h3">
                <CountUp start={0} end={1200} duration={15} separator="," />+
              </h3>
              <p className="h4 font-bold">businesses</p>
              <p className="body-2">
                Helping entrepreneurs turn ideas into businesses over 1200 times.
              </p>
            </div>
            <div>
              <h3 className="h3">
                <CountUp start={0} end={5} duration={15} separator="," />+
              </h3>
              <p className="h4 font-bold">leading the industry</p>
              <p className="body-2 mb-20">
                Giving customers access to trusted, affordable legal help for over half a decade.
              </p>
            </div>
          </div>
        </div>

        <CompanyLogos className="relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
