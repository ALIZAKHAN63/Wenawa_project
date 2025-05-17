export default function FeaturedTestimonial() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6 py-12 gap-8">
      
      {/* Left: Video preview */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div
          onClick={() => window.open("https://www.youtube.com/watch?v=NF-p9lHPz9s", "_blank")}
          className="relative w-full max-w-md cursor-pointer group rounded-xl overflow-hidden shadow-md"
        >
          <img
            src="https://img.youtube.com/vi/NF-p9lHPz9s/hqdefault.jpg"
            alt="Video thumbnail"
            className="block w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-30 rounded-xl opacity-0 group-hover:opacity-100 transition">
            <svg
              className="w-14 h-14 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right: Testimonial */}
      <div className="w-full md:w-1/2 bg-white rounded-xl shadow p-6 flex flex-col gap-4 max-w-xl text-center md:text-left">
        <img src="/tech4.png" alt="Codener Logo" className="w-20 mx-auto md:mx-0" />
        <p className="text-gray-700 text-sm">
          Codener’s knowledge supplements a continued engagement with the customer. Additionally,
          their team thinks unconventionally and delivers high-quality and professional digital content.
          Customers can expect a friendly and communicative partner. Codener is very responsive and polite.
        </p>
        <div>
          <h3 className="font-semibold">Alexandros Karagiannis</h3>
          <p className="text-gray-500 text-sm">Director</p>
        </div>
      </div>
    </div>
  );
}
