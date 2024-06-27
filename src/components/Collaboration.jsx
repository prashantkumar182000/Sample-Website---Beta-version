import { useState, useEffect } from 'react';
import { fbtSymbolwhite, check } from "../assets";
import { collabApps, collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import "./Hero.css";

const Collaboration = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [typewriterText, setTypewriterText] = useState('');

  const collabText =
  "Whether you’re running a global commercial business or a public sector institution, we develop a solution that supports your mission-critical needs and business outcomes.";  useEffect(() => {
    let index = 0;
    const textLength = collabText.length;

    const interval = setInterval(() => {
      const currentText = collabText.substring(0, index);
      setTypewriterText(currentText);
      index = (index + 1) % (textLength + 1); // Reset index when it reaches end of text
    }, 100); // Adjust the interval for typing speed

    return () => clearInterval(interval);
  }, []);

  const toggleText = (itemId) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Engage With Prospective Clients Across Channels
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li
                className="mb-3 py-3 cursor-pointer transition duration-300 ease-in-out transform hover:shadow-md"
                key={item.id}
                onClick={() => toggleText(item.id)}
              >
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5 hover:text-blue-500">{item.title}</h6>
                </div>
                {expandedItem === item.id && (
                  <p className="body-2 mt-3 text-n-4 transition-all duration-500 transform opacity-100 scale-y-100">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <Button className="w-72">Get a Quote</Button>
        </div>

        <div className="lg:ml-auto xl:w-[45rem] mt-4 flex flex-col items-center">
          <div className="typewriter-container" style={{ height: '8rem' }}> {/* Fixed height for typewriter */}
            <p className="body-2 text-n-4 md:mb-16 lg:mb-32 lg:w-[28rem] lg:mx-auto">
              {typewriterText}
              <span className="cursor blink">|</span> {/* Cursor */}
            </p>
          </div>

          <div className="rotating-component-container mt-20"> {/* Adjust margin as needed */}
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100 bg-gray-800">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full bg-gray-700">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-gray-600 rounded-full">
                    <img
                      src={fbtSymbolwhite}
                      width={50}
                      height={50}
                      alt="Fast Business Technologies"
                    />
                  </div>
                </div>
              </div>

              <div className="rotating-container animate-spin-slow">
                <ul className="relative w-full h-full flex items-center justify-center">
                  {collabApps.map((app, index) => (
                    <li
                      key={app.id}
                      className="absolute flex items-center justify-center"
                      style={{
                        transform: `rotate(${index * (360 / collabApps.length)}deg) translate(11rem)`
                      }}
                    >
                      <div
                        className="counter-rotate-container"
                        style={{
                          transform: `rotate(-${index * (360 / collabApps.length)}deg)`
                        }}
                      >
                        <div className="app-icon-container animate-counter-rotate">
                          <img
                            className="m-auto"
                            width={app.width}
                            height={app.height}
                            alt={app.title}
                            src={app.icon}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
