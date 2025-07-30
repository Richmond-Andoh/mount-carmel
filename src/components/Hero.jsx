// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/carousel-1.jpg",
      title: "Award Winning Hospital & Fertility Center",
      description: "Providing exceptional healthcare with compassion and excellence. Advanced fertility treatments and comprehensive medical care in a state-of-the-art facility.",
      buttonText: "Explore More",
      buttonLink: "/about",
      alignment: "start"
    },
    {
      id: 2,
      image: "/images/carousel-2.jpg",
      title: "Expert Doctors & Medical Professionals",
      description: "Our team of experienced healthcare professionals is dedicated to providing the highest quality medical care with personalized treatment plans.",
      buttonText: "Meet Our Team",
      buttonLink: "/team",
      alignment: "end"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="container-fluid header-carousel px-0 mb-5">
      <div className="carousel slide carousel-fade" style={{ position: 'relative' }}>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              style={{ transition: 'opacity 0.6s ease-in-out' }}
            >
              <img 
                className="w-100" 
                src={slide.image} 
                alt={`Slide ${index + 1}`}
                style={{ height: '600px', objectFit: 'cover' }}
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className={`row justify-content-${slide.alignment}`}>
                    <div className="col-lg-7 text-start">
                      <h1 className="display-1 text-white mb-3" style={{ 
                        animation: index === currentSlide ? 'slideInRight 1s ease-out' : 'none' 
                      }}>
                        {slide.title}
                      </h1>
                      <p className="mb-5" style={{ 
                        animation: index === currentSlide ? 'slideInRight 1s ease-out 0.2s both' : 'none' 
                      }}>
                        {slide.description}
                      </p>
                      <Link 
                        to={slide.buttonLink}
                        className="btn btn-primary py-3 px-5" 
        style={{
                          animation: index === currentSlide ? 'slideInRight 1s ease-out 0.4s both' : 'none' 
        }}
      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

        {/* Carousel Controls */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          onClick={goToPrevSlide}
          style={{ width: '5%' }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          onClick={goToNextSlide}
          style={{ width: '5%' }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators" style={{ bottom: '20px' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentSlide ? 'active' : ''}
              onClick={() => goToSlide(index)}
              style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%',
                margin: '0 5px',
                border: '2px solid white',
                backgroundColor: index === currentSlide ? 'white' : 'transparent'
              }}
            ></button>
          ))}
          </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .carousel-item {
          transition: opacity 0.6s ease-in-out;
        }
        
        .carousel-caption {
          background: rgba(0, 0, 0, 0.4);
          padding: 2rem;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Hero;