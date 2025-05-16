import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 md:px-16 text-blue-900">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 text-center md:text-left">
        
        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-base md:text-lg font-medium">
            Our team combines creativity and technical expertise seamlessly. That’s why we offer seamless and customized digital acceleration solutions that exceed expectations. If you’re looking for flawless product execution and captivating design to engage your audience — well, hi 👋, nice to meet you!
          </p>
        </div>

        {/* Right: Logos */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start items-center gap-6">
          <img src="/choose1.png" alt="Codener Clutch Rating" className="h-14 object-contain" />
          <img src="/choose22.png" alt="Codener Trustpilot Score" className="h-14 object-contain" />
          <img src="/choose33.png" alt="Codener Techreviewer Rating" className="h-14 object-contain" />
          <img src="/choose4.png" alt="Codener on DesignRush" className="h-14 object-contain" />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
