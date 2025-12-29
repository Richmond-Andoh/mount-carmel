// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/hero-img/home-hero1.png",
      title: "Reliable & High-Quality Healthcare Services",
      subtitle: "Excellence in Healthcare",
      description: "Providing exceptional healthcare with compassion and excellence. Advanced fertility treatments and comprehensive medical care in a state-of-the-art facility.",
      buttonText: "Explore More",
      buttonLink: "/about",
      alignment: "start",
      stats: [
        { number: "5000+", label: "Happy Patients" },
        { number: "20+", label: "Expert Doctors" },
        { number: "10+", label: "Years Experience" }
      ]
    },
    {
      id: 2,
      image: "/images/hero-img/home-hero2.png",
      title: "Expert Doctors & Medical Professionals",
      subtitle: "World-Class Care",
      description: "Our team of experienced healthcare professionals is dedicated to providing the highest quality medical care with personalized treatment plans.",
      buttonText: "Meet Our Team",
      buttonLink: "/team",
      alignment: "end",
      stats: [
        { number: "98%", label: "Success Rate" },
        { number: "24/7", label: "Emergency Care" },
        { number: "100+", label: "Medical Services" }
      ]
    },
    {
      id: 3,
      image: "/images/hero-img/home-hero3.png",
      title: "Modern Medical Facilities",
      subtitle: "Modern Technology",
      description: "Experience healthcare at its finest with cutting-edge medical technology and world-class facilities designed for your comfort and recovery.",
      buttonText: "View Facilities",
      buttonLink: "/facilities",
      alignment: "start",
      stats: [
        { number: "100%", label: "Modern Equipment" },
        { number: "5", label: "Specialized Units" },
        { number: "50+", label: "Medical Staff" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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
    <div className="container-fluid header-carousel px-0 mb-5 position-relative">
      {/* Background Pattern */}
      <div className="position-absolute w-100 h-100" style={{
        background: 'linear-gradient(135deg, rgba(111, 51, 72, 0.1) 0%, rgba(218, 165, 32, 0.1) 100%)',
        zIndex: 1
      }}></div>
      
      <div className="carousel slide carousel-fade position-relative" style={{ zIndex: 2 }}>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              style={{ 
                transition: 'opacity 0.8s ease-in-out',
                position: 'relative'
              }}
            >
              {/* Background Image with Overlay */}
              <div 
                className="w-100 position-relative hero-slide"
                style={{ 
                  height: '100vh',
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Floating Elements */}
                <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
                  <div className="position-absolute" style={{
                    top: '20%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(111, 51, 72, 0.1)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite'
                  }}></div>
                  <div className="position-absolute" style={{
                    top: '60%',
                    right: '15%',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(218, 165, 32, 0.1)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite reverse'
                  }}></div>
                </div>

                {/* Content */}
                <div className="carousel-caption d-flex align-items-center h-100 hero-caption">
                  <div className="container">
                    <div className={`row justify-content-${slide.alignment}`}>
                      <div className="col-lg-8 col-xl-7 text-start hero-col">
                        {/* Subtitle */}
                        <div className="mb-3" style={{
                          animation: index === currentSlide ? 'slideInRight 1s ease-out 0.2s both' : 'none'
                        }}>
                          <span className="badge bg-primary px-3 mb-2" style={{
                            backgroundColor: '#6f3348',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}>
                            {slide.subtitle}
                          </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="display-3 text-white mb-4 fw-bold" style={{ 
                          animation: index === currentSlide ? 'slideInRight 1s ease-out 0.4s both' : 'none',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}>
                          {slide.title}
                        </h1>

                        {/* Description */}
                        <p className="lead mb-5 text-white-50" style={{ 
                          animation: index === currentSlide ? 'slideInRight 1s ease-out 0.6s both' : 'none',
                          fontSize: '1.2rem',
                          lineHeight: '1.8'
                        }}>
                          {slide.description}
                        </p>

                        {/* Stats */}
                        <div className="row mb-5" style={{
                          animation: index === currentSlide ? 'slideInRight 1s ease-out 0.8s both' : 'none'
                        }}>
                          {slide.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="col-md-4 mb-3">
                              <div className="text-center p-3 rounded" style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                              }}>
                                <div className="h3 text-white mb-1 fw-bold" style={{color: '#DAA520'}}>
                                  {stat.number}
                                </div>
                                <div className="text-white-50 small">
                                  {stat.label}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="d-flex flex-wrap gap-3 hero-ctas" style={{
                          animation: index === currentSlide ? 'slideInRight 1s ease-out 1s both' : 'none'
                        }}>
                          <Link 
                            to={slide.buttonLink}
                            className="btn btn-primary btn-lg px-5 py-3 fw-bold" 
                            style={{
                              backgroundColor: '#6f3348',
                              borderColor: '#6f3348',
                              borderRadius: '50px',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 4px 15px rgba(111, 51, 72, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 6px 20px rgba(111, 51, 72, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = '0 4px 15px rgba(111, 51, 72, 0.3)';
                            }}
                          >
                            {slide.buttonText}
                          </Link>
                          <Link 
                            to="/appointment"
                            className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                            style={{
                              borderRadius: '50px',
                              borderWidth: '2px',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#6f3348';
                              e.target.style.borderColor = '#6f3348';
                              e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = 'transparent';
                              e.target.style.borderColor = 'white';
                              e.target.style.transform = 'translateY(0)';
                            }}
                          >
                            Book Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Carousel Indicators */}
        <div className="carousel-indicators" style={{ bottom: '30px' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentSlide ? 'active' : ''}
              onClick={() => goToSlide(index)}
              style={{ 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%',
                margin: '0 8px',
                border: '3px solid white',
                backgroundColor: index === currentSlide ? '#6f3348' : 'transparent',
                transition: 'all 0.3s ease'
              }}
            ></button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3" style={{zIndex: 3}}>
        <div className="text-center text-white">
          {/* <div className="mb-2">Scroll Down</div> */}
          <div className="d-flex justify-content-center">
            <div className="w-1 h-8 bg-white rounded-full" style={{
              animation: 'scrollIndicator 2s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes scrollIndicator {
          0%, 100% {
            opacity: 0.3;
            transform: scaleY(0.5);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        
        .carousel-item {
          transition: opacity 0.8s ease-in-out;
        }
        
        .carousel-caption {
          background: transparent;
          padding: 0;
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          
          .lead {
            font-size: 1rem;
          }
          
          .carousel-control-prev,
          .carousel-control-next {
            width: 50px !important;
            height: 50px !important;
            background: #6f3348 !important;
            border-radius: 50% !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
        }

        /* Ultra-small screens: prevent header overlap and bottom clipping */
        @media (max-width: 400px) {
          .hero-slide {
            min-height: 100svh !important;
            height: auto !important;
            padding-bottom: calc(20px + env(safe-area-inset-bottom));
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          .hero-caption { 
            align-items: flex-start !important; 
            padding-left: 1rem; 
            padding-right: 1rem; 
          }
          .hero-caption > .container { height: 100%; display: flex; }
          .hero-col { display: flex; flex-direction: column; flex: 1 1 auto; }
          .display-3 { font-size: 1.9rem; line-height: 1.25; }
          .lead { font-size: 1rem; line-height: 1.6; margin-bottom: 1rem !important; }
          .hero-ctas { margin-top: auto; gap: 0.5rem !important; }
          .hero-ctas .btn { padding: 0.7rem 1.1rem !important; border-radius: 10px; }
          .carousel-indicators { display: none !important; }
          .carousel-control-prev, .carousel-control-next { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Hero;