import './LogoMarquee.css';

const LogoMarquee = () => {
  const logos = Array.from({ length: 15 }, (_, i) => `/logo${i + 1}.png`);

  return (
    <div className="logo-marquee-container">
      <div className="logo-marquee-track">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index % 14 + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
