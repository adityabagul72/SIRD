import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import sanjivaniImg from '../assets/sanjivani-img.jpg';

const SanjivaniPage = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 1.2
      }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen pt-14 font-poppins">
      {/* Left Side: Image with hover effect and rounded corners */}
      <div className="w-full md:w-1/2 h-full" ref={imageRef}>
        <div className="h-full w-full overflow-hidden">
          <img
            src={sanjivaniImg}
            alt="Sanjivani College"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Side: Content block with responsive padding */}
      <div className="w-full md:w-1/2 h-full" ref={textRef}>
        <div className="h-full w-full bg-white p-4 md:p-6 lg:p-12 flex flex-col justify-center transform transition-transform duration-300 ease-in-out">
          <h1
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-10 mt-2 hover:text-blue-600 transition-colors duration-300"
            ref={(el) => (contentRef.current[0] = el)}
          >
            Sanjivani Group Of Institute International Relations Department
          </h1>
          <p
            className="text-sm md:text-lg text-black mb-4 leading-relaxed"
            ref={(el) => (contentRef.current[1] = el)}
          >
            Sanjivani College of Engineering is committed to delivering quality education.
          </p>
          <p
            className="text-sm md:text-md text-black leading-relaxed mb-6"
            ref={(el) => (contentRef.current[2] = el)}
          >
            Our institution thrives on values of excellence, integrity, and teamwork, preparing students for a future of leadership in the engineering world. Explore our programs and be part of a legacy that shapes tomorrow's innovators.
          </p>
          <button
            className="btn glass mt-3 px-4 md:px-6 py-2 md:py-3 bg-slate-900 text-white text-md md:text-lg rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            ref={(el) => (contentRef.current[3] = el)}
          >
            Explore Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SanjivaniPage;
