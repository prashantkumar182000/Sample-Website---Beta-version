import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import pic1 from "../assets/People/pic1.jpg";
import pic2 from "../assets/People/pic2.jpg";
import pic3 from "../assets/People/pic3.jpg";
import pic4 from "../assets/People/pic4.jpg";
import pic5 from "../assets/People/pic5.jpg";

const testimonials = [
  {
    image: pic1,
    rating: 5,
    review: 'This service is amazing! It has significantly improved our marketing efforts.',
    name: 'John Doe',
    designation: 'Marketing Manager',
    company: 'ABC Corp',
  },
  {
    image: pic2,
    rating: 4,
    review: 'Great tool for mass messaging. Highly recommended!',
    name: 'Jane Smith',
    designation: 'Sales Director',
    company: 'XYZ Ltd',
  },
  {
    image: pic3,
    rating: 5,
    review: 'A must-have for any marketing team!',
    name: 'Alice Johnson',
    designation: 'Marketing Specialist',
    company: 'Marketing Solutions',
  },
  {
    image: pic4,
    rating: 4,
    review: 'Efficient and easy to use.',
    name: 'Michael Brown',
    designation: 'Product Manager',
    company: 'Tech Innovations',
  },
  {
    image: pic5,
    rating: 5,
    review: 'It has streamlined our communication process significantly.',
    name: 'Emma Davis',
    designation: 'Operations Manager',
    company: 'Global Corp',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsRef = useRef(null);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [autorotate]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, [current]);

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* Testimonial image */}
      <div className="relative h-32 mb-5">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={current === index}
              className="absolute inset-0 h-full w-full"
              enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
              enterFrom="opacity-0 -rotate-[60deg]"
              enterTo="opacity-100 rotate-0"
              leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
              leaveFrom="opacity-100 rotate-0"
              leaveTo="opacity-0 rotate-[60deg]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
            </Transition>
          ))}
        </div>
      </div>
      {/* Semi-circle gradient background */}
      <div className="relative mb-12 mt-6">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-indigo-500/35 via-indigo-500/7 to-transparent rounded-full -z-10"></div>
        </div>
        <div className="transition-all duration-150 delay-300 ease-in-out relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={current === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-2xl font-bold text-purple-700 dark:text-gray-100 before:content-['\201C'] after:content-['\201D'] mt-4">
                {testimonial.review}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center -m-1.5">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
              current === index
                ? 'bg-indigo-500 text-white shadow-indigo-950/10'
                : 'bg-white hover:bg-indigo-100 text-slate-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
            onClick={() => {
              setCurrent(index);
              setAutorotate(false);
            }}
          >
            <span>{testimonial.name}</span>{' '}
            <span
              className={`${current === index ? 'text-indigo-200' : 'text-slate-300'}`}
            >
              -
            </span>{' '}
            <span>{testimonial.designation}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
