import { companyLogos } from "../constants";
import { useEffect, useRef } from "react";

const CompanyLogos = ({ className }) => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logos = logosRef.current;
    const logosCopy = logos.innerHTML;
    logos.innerHTML += logosCopy; // Duplicate the logos for infinite scroll effect

    let start = Date.now();
    const speed = 100; // Speed of the animation

    const step = () => {
      const timePassed = Date.now() - start;
      logos.scrollLeft = (timePassed / speed) % (logos.scrollWidth / 2);

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <div className={className}>
       <h4 className="tagline mb-9 text-center text-n-1/50 text-2xl">
        Helping businesses to grow
       </h4>
      <div className="overflow-hidden">
        <ul className="flex w-max" ref={logosRef}>
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-none h-[8.5rem] mx-4"
              key={index}
            >
              <img src={logo} width={134} height={28} alt={`Company logo ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyLogos;
