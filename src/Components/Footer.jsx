export default function Footer() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-12 bg-gray-100">
      <footer className="bg-white px-4 py-12 flex justify-center items-start w-full max-w-[1050px] gap-12 flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-6 max-w-[350px] w-full">
          <img src="/codenerLogo.svg" alt="Codener Logo" className="w-32" />

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600 text-xl">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-instagram"></i>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm">Drop us a line:</p>
            <a href="mailto:hello@codener.com" className="text-blue-600 text-sm font-medium">hello@codener.com</a>
          </div>

          {/* Partner Logos */}
          <div className="flex gap-4">
            <img src="/tech1.png" alt="Shopify Partner" className="h-12" />
            <img src="/tech3.png" alt="Adobe Partner" className="h-12" />
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-800 max-w-[700px] w-full">
          {/* Services */}
          <div className="max-w-[350px] w-full">
            <h3 className="font-semibold text-base mb-2">Services</h3>
            <ul className="space-y-1">
              <li>Website Development</li>
              <li>Shopify Web Development</li>
              <li>React Web Development</li>
              <li>IOS App Development</li>
              <li>Android App Development</li>
              <li>Flutter App development</li>
              <li>Graphic Design</li>
              <li>UI/UX Design</li>
              <li>SEO</li>
            </ul>
          </div>

          {/* Company */}
          <div className="max-w-[350px] w-full">
            <h3 className="font-semibold text-base mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Blogs</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Why Codener */}
          <div className="max-w-[350px] w-full">
            <h3 className="font-semibold text-base mb-2">Why Codener</h3>
            <ul className="space-y-1">
              <li>Core Values</li>
              <li>Process</li>
              <li>Technology Partners</li>
              <li>Testimonials</li>
              <li>Case Study</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
