import React from "react";

const partners = [
  {
    title: "Codener is Google Developer Certified Agency",
    subtitle: "Google developer certified agency",
    image: "tech1.png",
  },
  {
    title: "Adobe Solution Partner Program",
    subtitle: "",
    image: "tech2.png",
  },
  {
    title: "Codener is Microsoft Certified Consulting Partner",
    subtitle: "Microsoft certified consulting partner",
    image: "tech3.png",
  },
  {
    title: "Codener is Shopify Certified Partner",
    subtitle: "Shopify certified partner",
    image: "tech4.png",
  },
];

function TechnologyPartners() {
  return (
    <div className="bg-sky-50 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Technology Partner</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Developing a successful digital product is a complex process that
            requires choosing the right partner, applying innovative solutions,
            and following reliable processes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {partners.map((item, index) => (
            <div key={index} className="space-y-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[120px] mx-auto object-contain"
              />
              <div className="space-y-1">
                <h3 className="text-base font-medium">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologyPartners;
