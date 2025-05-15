import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-4 text-blue-900">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 min-h-[300px]">
        
        {/* Left: Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-base md:text-lg font-medium max-w-xl">
            Our team combines creativity and technical expertise seamlessly. That’s why we offer seamless and customized digital acceleration solutions that exceed expectations. If you’re looking for flawless product execution and captivating design to engage your audience — well, hi 👋, nice to meet you!
          </p>
        </div>

        {/* Right: Logos horizontal, centered vertically and horizontally */}
        <div className="md:w-1/3 flex items-center justify-center gap-6">
          <img src="/clutch.png" alt="Codener Clutch Rating" className="h-16 object-contain" />
          <img src="/trustpilot.png" alt="Codener Trustpilot Score" className="h-16 object-contain" />
          <img src="/techreviewer.png" alt="Codener Techreviewer Rating" className="h-16 object-contain" />
          <img src="/designrush.png" alt="Codener on DesignRush" className="h-16 object-contain" />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
