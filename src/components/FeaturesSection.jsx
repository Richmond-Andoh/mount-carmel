import { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.features-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "bi bi-award",
      title: "Award Winning",
      description: "Recognized for excellence in healthcare and fertility treatments with multiple industry awards.",
      color: "#6f3348"
    },
    {
      icon: "bi bi-people",
      title: "Expert Doctors",
      description: "Our team of experienced medical professionals provides the highest quality care and treatment.",
      color: "#DAA520"
    },
    {
      icon: "bi bi-cash-coin",
      title: "Fair Prices",
      description: "Transparent and competitive pricing for all our medical services and treatments.",
      color: "#4B1438"
    },
    {
      icon: "bi bi-headphones",
      title: "24/7 Support",
      description: "Round-the-clock medical support and emergency care services for our patients.",
      color: "#B8860B"
    }
  ];

  return (
    <div className="container-fluid py-5 position-relative overflow-hidden features-section">
      {/* Background Image with Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: 1
      }}></div>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(135deg, rgba(111, 51, 72, 0.9) 0%, rgba(75, 20, 56, 0.8) 100%)',
        zIndex: 2
      }}></div>

      {/* Floating Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{zIndex: 2}}>
        <div className="position-absolute" style={{
          top: '15%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(218, 165, 32, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div className="position-absolute" style={{
          top: '60%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
        <div className="position-absolute" style={{
          bottom: '20%',
          left: '20%',
          width: '80px',
          height: '80px',
          background: 'rgba(111, 51, 72, 0.2)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container position-relative" style={{zIndex: 3}}>
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="mb-3" style={{
              animation: isVisible ? 'slideInDown 1s ease-out' : 'none'
            }}>
              <span className="badge bg-light px-3 py-2 mb-2" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#6f3348',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Why Choose Us
              </span>
            </div>
            <h1 className="display-4 fw-bold mb-4 text-white" style={{
              animation: isVisible ? 'slideInDown 1s ease-out 0.2s both' : 'none',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              Excellence in Healthcare
            </h1>
            <p className="lead text-white-50" style={{
              animation: isVisible ? 'slideInDown 1s ease-out 0.4s both' : 'none'
            }}>
              Mount Carmel Hospital stands out for our commitment to excellence, 
              advanced medical technology, and compassionate patient care.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="feature-item h-100 p-4 rounded-4" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                animation: isVisible ? `slideInUp 1s ease-out ${0.6 + index * 0.1}s both` : 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}>
                <div className="text-center mb-4">
                  <div className="icon-box mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                    borderRadius: '50%',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1) rotate(0deg)';
                  }}>
                    <i className={`${feature.icon} fs-1`} style={{color: 'white'}}></i>
                  </div>
                </div>
                <h5 className="text-center mb-3 fw-bold" style={{color: '#6f3348'}}>{feature.title}</h5>
                <p className="text-center mb-0 text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 text-center" style={{
            animation: isVisible ? 'fadeInUp 1s ease-out 1.2s both' : 'none'
          }}>
            <div className="p-4 rounded-4" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h4 className="text-white mb-3">Ready to Experience Excellence?</h4>
              <p className="text-white-50 mb-4">Book your appointment today and discover why Mount Carmel Hospital is the preferred choice for healthcare.</p>
              <a href="/appointment" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)';
              }}>
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        .wow {
          visibility: hidden;
        }
        
        .wow.animated {
          visibility: visible;
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
          
          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection; 