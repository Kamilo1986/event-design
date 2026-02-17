import "../styles/Hero.css";
import heroImages from "../assets/hero/hero.js"; 
const Hero = () => {
  return (
    <section className="hero">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade hero-carousel"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {heroImages.map((img, index) => (
            <div
              key={img}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-inner">
          <h1 className="hero-title">
            Diseñamos experiencias gastronómicas y corporativas que elevan marcas
          </h1>
          <p className="hero-subtitle">
            Eventos corporativos Premium
          </p>
          <a href="#contact" className="hero-btn">
            Agenda asesoría estratégica.
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
