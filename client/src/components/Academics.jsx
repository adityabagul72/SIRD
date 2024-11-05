import React from 'react';
import Navbar from './Navbar';
import image1 from '../assets/event-images/img_1.png';
import image2 from '../assets/event-images/img_2.png';
import image3 from '../assets/event-images/img_3.png';
import image4 from '../assets/event-images/img_4.png';
import image5 from '../assets/event-images/img_5.png';
import image6 from '../assets/event-images/img_6.png';
import Footer from './Footer';

const programs = [
  {
    image1: image4,
    image2: image5,
  },
  {
    image1: image1,
    image2: image3,
  },
  {
    image1: image2,
    image2: image6,
  }
];

function Academics() {
  return (
    <>
      <Navbar />
      <div className="mt-24 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Academic Programs & Collaborations</h2>

        {/* Carousel Section with Two Images per Item */}
        <div className="py-1 carousel carousel-center rounded-box max-w-6xl mx-auto mb-10 border-[1px] border-gray-200">
          {programs.map((program, index) => (
            <div key={index} className="carousel-item w-full flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 p-4 items-center justify-center"> {/* Centering Images */}
                {/* First Image */}
                <img
                  src={program.image1}
                  alt={`Image 1`}
                  className="w-full sm:w-1/2 h-72 object-cover rounded-lg"
                />
                {/* Second Image */}
                <img
                  src={program.image2}
                  alt={`Image 2`}
                  className="w-full sm:w-1/2 h-72 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Academics;
