import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ServicesSection = () => {
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

    const element = document.querySelector('.services-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "bi bi-hospital",
      title: "General Out-patient & In-patient",
      description: "Comprehensive care including consultancy, 24-hour emergency services, and antenatal/postnatal consultations.",
      link: "https://www.aucmed.edu/blog/inpatient-vs-outpatient",
      color: "#6f3348"
    },
    {
      icon: "bi bi-heart-pulse",
      title: "In-Vitro Fertilization (IVF)",
      description: "Advanced Assisted Reproductive Technology to help you on your journey to parenthood.",
      link: "https://www.webmd.com/infertility-and-reproduction/in-vitro-fertilization",
      color: "#DAA520"
    },
    {
      icon: "bi bi-gender-female",
      title: "Obstetrics & Gynecology",
      description: "Specialized consultancy and care for women's health at every stage of life.",
      link: "https://journals.lww.com/greenjournal/pages/default.aspx",
      color: "#4B1438"
    },
    {
      icon: "bi bi-scissors",
      title: "General Surgery",
      description: "A wide range of surgical procedures with minimally invasive techniques.",
      link: "https://en.wikipedia.org/wiki/General_surgery",
      color: "#B8860B"
    },
    {
      icon: "bi bi-heart",
      title: "Orthopedic Services",
      description: "Treatment for musculoskeletal issues including bones, joints, and muscles.",
      link: "https://en.wikipedia.org/wiki/Orthopedic_surgery",
      color: "#6f3348"
    },
    {
      icon: "bi bi-emoji-smile",
      title: "Pediatric Services",
      description: "Comprehensive healthcare for infants, children, and adolescents.",
      link: "https://en.wikipedia.org/wiki/Pediatrics",
      color: "#DAA520"
    },
    {
      icon: "bi bi-clipboard2-check",
      title: "Health Screening",
      description: "Pre-employment and annual screenings to ensure a healthy workforce.",
      link: "https://medical-dictionary.thefreedictionary.com/health+screening",
      color: "#4B1438"
    },
    {
      icon: "bi bi-people",
      title: "Family Planning",
      description: "Comprehensive family planning and reproductive health services.",
      link: "https://www.who.int/news-room/fact-sheets/detail/family-planning-contraception",
      color: "#B8860B"
    },
    {
      icon: "bi bi-truck",
      title: "Emergency & Ambulance",
      description: "Life-threatening condition management and emergency transportation.",
      link: "/services/emergency-&-ambulance",
      color: "#6f3348"
    },
    {
      icon: "bi bi-flask",
      title: "Diagnostic & Laboratory",
      description: "Advanced diagnostics including blood tests, X-rays, and ultrasounds.",
      link: "https://medical-dictionary.thefreedictionary.com/Laboratory+diagnostics",
      color: "#DAA520"
    },
    {
      icon: "bi bi-heart-pulse-fill",
      title: "Intensive Care Units (ICU)",
      description: "Specialized intensive care with continuous monitoring and advanced support.",
      link: "https://en.wikipedia.org/wiki/Intensive_care_unit",
      color: "#4B1438"
    },
    {
      icon: "bi bi-capsule",
      title: "Pharmacy Services",
      description: "In-house pharmacy for dispensing medication and pharmaceutical counseling.",
      link: "/services/pharmacy-services",
      color: "#B8860B"
    }
  ];

  return (
    <div className="container-fluid py-5 position-relative overflow-hidden services-section">
      {/* Background Image with Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: 1
      }}></div>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 251, 255, 0.9) 100%)',
        zIndex: 2
      }}></div>

      {/* Floating Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{zIndex: 2}}>
        <div className="position-absolute" style={{
          top: '10%',
          right: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(111, 51, 72, 0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div className="position-absolute" style={{
          bottom: '15%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'rgba(218, 165, 32, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
        <div className="position-absolute" style={{
          top: '50%',
          right: '5%',
          width: '80px',
          height: '80px',
          background: 'rgba(75, 20, 56, 0.1)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container position-relative" style={{zIndex: 3}}>
        {/* Section Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <div className="mb-3" style={{
            animation: isVisible ? 'slideInDown 1s ease-out' : 'none'
          }}>
            <span className="badge brand-btn px-3 py-2 mb-2" style={{
              backgroundColor: '#6f3348',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              Our Services
            </span>
          </div>
          <h1 className="display-4 fw-bold mb-4" style={{
            color: '#6f3348',
            animation: isVisible ? 'slideInDown 1s ease-out 0.2s both' : 'none'
          }}>
            Reliable & High-Quality Healthcare Services
          </h1>
          <p className="lead text-muted mb-0" style={{
            animation: isVisible ? 'slideInDown 1s ease-out 0.4s both' : 'none'
          }}>
            Mount Carmel Hospital provides comprehensive medical services with state-of-the-art technology 
            and experienced healthcare professionals dedicated to your well-being.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
              <div className="service-item h-100 p-4 rounded-4" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(111, 51, 72, 0.1)',
                boxShadow: '0 8px 32px rgba(111, 51, 72, 0.1)',
                transition: 'all 0.3s ease',
                animation: isVisible ? `slideInUp 1s ease-out ${0.6 + index * 0.1}s both` : 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.boxShadow = '0 15px 40px rgba(250, 248, 248, 0.2)';
                e.target.style.borderColor = service.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 32px rgba(111, 51, 72, 0.1)';
                e.target.style.borderColor = 'rgba(111, 51, 72, 0.1)';
              }}>
                <div className="text-center mb-4" style={{animation: isVisible ? `fadeInUp 0.8s ease-out ${0.5 + index * 0.05}s both` : 'none'}}>
                  <div className="icon-box mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
                    width: '70px',
                    height: '70px',
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    borderRadius: '50%',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1) rotate(0deg)';
                  }}>
                    <i className={`${service.icon} fs-2`} style={{color: 'white'}}></i>
                  </div>
                </div>
                <h5 className="text-center mb-2 fw-bold" style={{color: '#6f3348', transition: 'color .3s'}}>{service.title}</h5>
                <p className="text-center mb-4 text-muted small" style={{animation: isVisible ? `fadeInUp 0.8s ease-out ${0.7 + index * 0.05}s both` : 'none'}}>{service.description}</p>
                <div className="text-center">
                  <Link 
                    className="btn btn-outline-primary px-4 py-2" 
                    to={service.link}
                    style={{
                      borderColor: service.color,
                      color: service.color,
                      borderRadius: '25px',
                      transition: 'transform .25s ease, box-shadow .25s ease, background-color .2s ease, color .2s ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = service.color;
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = `0 10px 24px ${service.color}44`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = service.color;
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}>
                    Read More
                    <i className="bi bi-chevron-double-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center" style={{
            animation: isVisible ? 'fadeInUp 1s ease-out 1.5s both' : 'none'
          }}>
            <div className="p-5 rounded-4" style={{
              background: 'linear-gradient(135deg, #6f3348, #4B1438)',
              boxShadow: '0 10px 30px rgba(111, 51, 72, 0.3)'
            }}>
              <h3 className="text-white mb-3">Need a Specific Service?</h3>
              <p className="text-white-50 mb-4">Our team of specialists is ready to provide personalized care for your specific healthcare needs.</p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="/appointment" className="btn btn-light btn-lg px-4 py-2 fw-bold" style={{
                  borderRadius: '25px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                  Book Appointment
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg px-4 py-2 fw-bold" style={{
                  borderRadius: '25px',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#6f3348';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  Contact Us
                </a>
              </div>
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

export default ServicesSection; 