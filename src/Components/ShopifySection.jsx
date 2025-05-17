export default function ShopifySection() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center items-center">
        {/* First Section */}
        <div className="md:w-[30%] bg-white p-6 rounded-2xl shadow min-h-[320px] flex flex-col items-center justify-center text-center">
          <img src="/tech4.png" alt="Logo" className="w-20 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Access certified Shopify experts</h2>
          <p className="text-sm text-gray-700 mb-4">
            As a Shopify Partner, Codener specializes in creating high-performing e-commerce stores for major brands. Our experienced Shopify experts help businesses unlock the full potential of the platform’s features and functionality.
          </p>
          <a href="#" className="text-blue-600 font-medium underline">Learn More →</a>
        </div>

        {/* Second Section */}
        <div className="md:w-[50%] bg-white p-6 rounded-2xl shadow min-h-[320px] flex flex-col items-center justify-center text-center">
          <div className="flex justify-center gap-6 mb-4">
            <img src="/tech2.png" alt="Logo 2" className="w-16" />
            <img src="/tech1.png" alt="Logo 3" className="w-16" />
            <img src="/tech3.png" alt="Logo 4" className="w-16" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Technology-Driven Solutions for Your Business</h2>
          <p className="text-sm text-gray-700 mb-4 max-w-md">
            We offer technology-driven solutions for businesses to optimize their online presence. Our team of experts can help businesses design and develop custom websites, ensuring they are user-friendly, responsive, and optimized for search engines. We also provide access to the latest Adobe tools and technologies for creative design and digital marketing. Our cloud linking services ensure a seamless and secure connection between their website and cloud services, resulting in maximum performance and efficiency.
          </p>
          <a href="#" className="text-blue-600 font-medium underline">Let's work together →</a>
        </div>
      </div>
    </div>
  );
}
