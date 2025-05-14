const LogoMarquee = () => {
  // Array of logo paths (assuming they're in public folder as logo1.png to logo15.png)
  const logos = Array.from({ length: 15 }, (_, i) => `/logo${i + 1}.png`);

  return (
    <div className="h-40 overflow-hidden bg-gray-50">
      <div className="flex flex-col items-center animate-scroll">
        {/* Render logos twice for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="p-4 h-20 flex items-center">
            <img src={logo} alt={`Logo ${index % 15 + 1}`} className="h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;