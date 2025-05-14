import React from 'react';
import { FaRegHandPaper } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import LogoMarquee from './LogoMarquee';

const Hero = () => {
  return (
    <section className="bg-sky-50 text-blue-900 py-40">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-lg md:text-xl font-medium mb-6">
          ACCELERATE YOUR DIGITAL SUCCESS
        </h1>

        {/* Bold Lines */}
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          Top-Notch Digital Products.<br />
          Timely. Affordable. Accurate.
        </h2>

        {/* Description Paragraph */}
        <p className="mt-4 text-base font-normal max-w-4xl mx-auto">
          Embrace effortless convenience with personalized digital solutions.Your unique needs take center stage as we deliver seamless
          experiences,offering custom solutions that precisely align with your requirements.Discover a new level of ease and tailored
          excellence.
           
        </p>

      

        <div className="mt-8 flex items-center justify-center gap-6">
  <button className="flex items-center gap-2 bg-white text-blue-800 px-5 py-3 rounded-md shadow-md">
    <span className="font-semibold">Let’s Talk</span>
    <FaRegHandPaper className="text-yellow-400 text-lg" />
  </button>



          {/* Play Video Section */}
         <div className="flex items-center gap-2 cursor-pointer">
  <div className="w-10 h-10 rounded-full border-2 border-blue-900 flex items-center justify-center">
    <FaPlay className="text-blue-900 text-sm" />
  </div>
  <span className="text-blue-900 font-medium">Play Video</span>
</div>

        </div>
      </div>
    </section>
  );
};

 <div>
      <LogoMarquee />
    </div>

export default Hero;
