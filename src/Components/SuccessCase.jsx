import React from "react";

const cases = [
  {
    title: "123ACCESSOIRE.NL",
    description:
      "Innovative technology allows us to create a seamless, mobile-responsive shopping experience. Our collaboration optimizes backend operations, enhancing efficiency, and elevating customer satisfaction.",
    country: "Netherlands",
    duration: "2022 - ongoing",
    industry: "Ecommerce",
    service: "Shopify Web Development",
    image: "laptop1.png",
  },
  {
    title: "LEZZAT.CO.UK",
    description:
      "We believe in the profound impact of website redesign. Dive into our success story and witness how we’ve empowered businesses to thrive, expand, and leave their mark on the digital landscape.",
    country: "United Kingdom",
    duration: "2020 - ongoing",
    industry: "Amazon Marketing",
    service: "WordPress Web Development",
    image: "/laptop2.png",
  },
  {
    title: "123LAPTOPHOEZEN.NL",
    description:
      "It was our commitment to excellence and technology that has enabled us to bring a modern design, intuitive navigation, and strong SEO. This ultimately drives organic traffic and elevates the brand.",
    country: "Netherlands",
    duration: "2021 - ongoing",
    industry: "Ecommerce",
    service: "Shopify Web Development",
    image: "/laptop3.png",
  },
];

function SuccessCases() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-20">
      {cases.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center gap-12`}
        >
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>Country:</strong> {item.country}
              </p>
              <p>
                <strong>Duration:</strong> {item.duration}
              </p>
              <p>
                <strong>Industry:</strong> {item.industry}
              </p>
              <p>
                <strong>Service:</strong> {item.service}
              </p>
            </div>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
              View case
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuccessCases;
