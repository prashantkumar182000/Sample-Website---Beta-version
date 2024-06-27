import React from "react";
import { socials } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-0">
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 px-5 lg:px-15">
          {/* First Column */}
          <div className="col-span-1 lg:pr-10"> {/* Add padding-right on large screens */}
            <div className="logo">
              <h1 className="text-3xl font-bold">FBT .</h1>
              <p className="mt-6">Questions? Reach us Monday – Friday from 9 am to 6 pm</p>
              <p className="mt-5">+1 001 234 5678</p>
              <p className="mt-5">
                <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">
                  info@fbt.com
                </a>
              </p>
              <div className="mt-10 space-y-5">
                <Button className="w-full">Request for quote</Button>
                <Button className="w-full">Get a Callback</Button>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-span-1">
            <h3 className="font-semibold">COMPANY</h3>
            <ul className="mt-9">
              <li className="mt-3">About agency</li>
              <li className="mt-3">Our team</li>
              <li className="mt-3">Showcase</li>
              <li className="mt-3">Blog</li>
              <li className="mt-3">Demo design system</li>
              <li className="mt-3">Contact</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-span-1">
            <h3 className="font-semibold">SERVICES</h3>
            <ul className="mt-9">
              <li className="mt-3">Bulk SMS Marketing</li>
              <li className="mt-3">Bulk Email Marketing (EMM)</li>
              <li className="mt-3">Bulk Whatsapp Marketing</li>
              <li className="mt-3">Digital Marketing</li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="col-span-1">
            <h3 className="font-semibold">CONNECT</h3>
            <div className="mt-6 flex gap-5">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors duration-300 hover:bg-color-1 group"
                >
                  <img
                    src={item.iconUrl}
                    width={22}
                    height={22}
                    alt={item.title}
                    className="transition-colors duration-300 group-hover:filter group-hover:invert group-hover:brightness-150"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="container mx-auto mt-16 flex flex-wrap justify-between px-5 lg:px-15">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p className="caption text-n-4 lg:block">
              © {new Date().getFullYear()} Fast Bizz Technologies.
              <br /> All Rights Reserved.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <p className="caption text-n-4 lg:block">
              FAST BUSINESS TECHNOLOGIES | TERMS & CONDITIONS
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
