import React from 'react';

const services = [
  {
    id: 1,
   
    heading: 'Website Development',
    text: 'We specialize in crafting custom, visually appealing, and functional websites that cater to your specific business requirements.'
  },
  {
    id: 2,
    
    heading: 'iOS App Development',
    text: 'Our iOS app developers specialize in developing applications that optimize the user experience and maximize business value.'
  },
  {
    id: 3,
    
    heading: 'iOS App Development',
    text: 'Our iOS app developers specialize in developing applications that optimize the user experience and maximize business value.'
  },
  {
    id: 4,
    logo: '/shopify.png',
    heading: 'Shopify Development',
    text: 'We specialize in customized Shopify solutions for corporations, startups, and small businesses, using the latest Shopify techniques.'
  },
  {
    id: 5,
    
    heading: 'Android App Development',
    text: 'Develop a quality Android App that helps to reach a broader audience and compete in a highly competitive mobile market.'
  },
  {
    id: 6,
    
    heading: 'UI/UX Design',
    text: 'Our expert UI/UX design team creates user-centered digital experiences that leave a lasting impression of your brand.'
  },
  {
    id: 7,
    
    heading: 'React.js Development',
    text: 'React.js is a powerful framework for building dynamic and interactive web applications that transform your ideas into reality.'
  },
  {
    id: 8,

    heading: 'Flutter App Development',
    text: 'Develop cross-platform apps using Flutter to target audiences effectively, improve user experience, and drive business growth.'
  },
  {
    id: 9,
   
    heading: 'SEO Services',
    text: 'Our experts use the best Search Engine Optimization strategies that ensure your business grows organically, gains visibility, and drives conversions.'
  }
];

const OurServices = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-36 text-blue-900">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 justify-center mx-auto">
      {services.map(service => (
        <div
          key={service.id}
          className="w-full max-w-[230px] p-5 flex flex-col items-start text-left hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out rounded-xl"
        >
         
          <h3 className="text-lg font-semibold mb-2">{service.heading}</h3>
          <p className="text-sm font-medium mb-3">{service.text}</p>
          <button className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
            View More →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default OurServices;
