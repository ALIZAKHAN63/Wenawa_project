import { useState } from "react";

const testimonials = [
  { logo: "/logo1.png", company: "Bright Labs", role: "CEO" },
  { logo: "/logo2.png", company: "NovaTech", role: "Marketing Consultant" },
  { logo: "/logo3.png", company: "SyncPro", role: "CTO" },
  { logo: "/logo4.png", company: "Codexify", role: "Product Manager" },
  { logo: "/logo5.png", company: "TechNest", role: "UX Designer" },
  { logo: "/logo6.png", company: "BrandHive", role: "Creative Director" },
  { logo: "/logo7.png", company: "Growthify", role: "CMO" },
  { logo: "/logo8.png", company: "ScaleRight", role: "Strategy Lead" },
  { logo: "/logo9.png", company: "PixelPush", role: "Frontend Engineer" },
  { logo: "/logo10.png", company: "LaunchLane", role: "Project Consultant" },
];

export default function TestimonialSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = testimonials.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < testimonials.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div className="bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visible.map((item, index) => (
            <div
              key={index}
              className="bg-white px-4 py-3 rounded-xl shadow flex items-center gap-4 w-[250px]"
            >
              <img
                src={item.logo}
                alt={item.company}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-semibold text-sm">{item.company}</h3>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between w-full max-w-4xl px-4">
        <button
          onClick={handlePrev}
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
