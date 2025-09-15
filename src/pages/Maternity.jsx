import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Maternity = () => {
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

    const element = document.querySelector('.maternity-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const maternityServices = [
    {
      icon: "bi bi-heart-pulse-fill",
      title: "Prenatal Care",
      description: "Comprehensive care throughout your pregnancy journey",
      features: ["Regular Checkups", "Ultrasound Scans", "Blood Tests", "Nutrition Counseling"],
      color: "#e91e63"
    },
    {
      icon: "bi bi-hospital",
      title: "Delivery Services",
      description: "Safe and comfortable delivery with experienced obstetricians",
      features: ["Natural Delivery", "Cesarean Section", "Pain Management", "24/7 Support"],
      color: "#9c27b0"
    },
    {
      icon: "bi bi-people-fill",
      title: "Postnatal Care",
      description: "Complete care for mother and baby after delivery",
      features: ["Newborn Care", "Breastfeeding Support", "Recovery Monitoring", "Family Planning"],
      color: "#673ab7"
    },
    {
      icon: "bi bi-shield-check",
      title: "High-Risk Pregnancy",
      description: "Specialized care for high-risk pregnancies and complications",
      features: ["Fetal Monitoring", "Specialist Consultations", "Advanced Diagnostics", "Emergency Care"],
      color: "#3f51b5"
    },
    {
      icon: "bi bi-gender-female",
      title: "Gynecology Services",
      description: "Comprehensive women's health and reproductive care",
      features: ["Annual Exams", "Family Planning", "Fertility Services", "Menopause Care"],
      color: "#2196f3"
    },
    {
      icon: "bi bi-heart-fill",
      title: "Neonatal Care",
      description: "Specialized care for newborns and premature babies",
      features: ["NICU Services", "Premature Baby Care", "Developmental Monitoring", "Parent Education"],
      color: "#00bcd4"
    }
  ];

  const maternityProcess = [
    {
      step: "1",
      title: "Prenatal Registration",
      description: "Early registration and comprehensive health assessment",
      icon: "bi bi-person-plus-fill"
    },
    {
      step: "2", 
      title: "Regular Checkups",
      description: "Scheduled visits with your obstetrician throughout pregnancy",
      icon: "bi bi-calendar-check-fill"
    },
    {
      step: "3",
      title: "Delivery Planning",
      description: "Birth plan development and delivery preparation",
      icon: "bi bi-clipboard-check-fill"
    },
    {
      step: "4",
      title: "Postnatal Support",
      description: "Ongoing care for mother and baby after delivery",
      icon: "bi bi-heart-fill"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Background Image */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url("/images/extra/hero1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
        loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'url("/images/extra/hero2.jpg")';
                }}
        ></div>
        
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.9) 0%, rgba(111, 51, 72, 0.8) 100%)',
          zIndex: 2
        }}></div>

        {/* Floating Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{zIndex: 2}}>
          <div className="position-absolute" style={{
            top: '20%',
            right: '10%',
            width: '100px',
            height: '100px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
          <div className="position-absolute" style={{
            bottom: '30%',
            left: '5%',
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite reverse'
          }}></div>
        </div>

        <div className="container position-relative" style={{zIndex: 3, paddingTop: '120px', paddingBottom: '80px'}}>
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-8 mx-auto text-center text-white">
              <div className="mb-4" style={{
                animation: isVisible ? 'slideInDown 1s ease-out' : 'none'
              }}>
                <span className="badge px-4 py-2 mb-3" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)'
                }}>
                  Maternity Services
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4" style={{
                animation: isVisible ? 'slideInDown 1s ease-out 0.2s both' : 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Caring for Mother and Baby
              </h1>
              <p className="lead mb-5" style={{
                animation: isVisible ? 'slideInDown 1s ease-out 0.4s both' : 'none',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                Mount Carmel Hospital provides comprehensive maternity care with experienced obstetricians, 
                modern facilities, and compassionate support throughout your pregnancy journey.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3" style={{
                animation: isVisible ? 'slideInUp 1s ease-out 0.6s both' : 'none'
              }}>
                <Link to="/appointment" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }}>
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Appointment
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#e91e63';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maternity Services Section */}
      <section className="py-5 maternity-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
              Maternity Services
            </h2>
            <p className="lead text-muted">
              Comprehensive care for every stage of your pregnancy and beyond
            </p>
          </div>

          <div className="row g-4">
            {maternityServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-lg" style={{
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  animation: isVisible ? `slideInUp 1s ease-out ${0.2 + index * 0.1}s both` : 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}>
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="mx-auto d-flex align-items-center justify-content-center" style={{
                        width: '80px',
                        height: '80px',
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
                        <i className={`${service.icon} fs-2 text-white`}></i>
                      </div>
                    </div>
                    <h5 className="fw-bold mb-3 text-center" style={{ color: '#6f3348' }}>
                      {service.title}
                    </h5>
                    <p className="text-muted mb-4 text-center">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <h6 className="fw-bold mb-3" style={{ color: service.color }}>Services Include:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="badge px-3 py-2" style={{
                            backgroundColor: `${service.color}20`,
                            color: service.color,
                            fontSize: '0.8rem'
                          }}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity Process Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
              Your Maternity Journey
            </h2>
            <p className="lead text-muted">
              From prenatal care to postnatal support, we're with you every step of the way
            </p>
          </div>

          <div className="row g-4">
            {maternityProcess.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="position-relative mb-4">
                    <div className="mx-auto d-flex align-items-center justify-content-center" style={{
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #e91e63, #6f3348)',
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      boxShadow: '0 10px 30px rgba(233, 30, 99, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.boxShadow = '0 15px 40px rgba(233, 30, 99, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 10px 30px rgba(233, 30, 99, 0.3)';
                    }}>
                      {step.step}
                    </div>
                    <div className="position-absolute top-0 end-0" style={{
                      width: '40px',
                      height: '40px',
                      background: '#9c27b0',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem'
                    }}>
                      <i className={step.icon}></i>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#6f3348' }}>
                    {step.title}
                  </h5>
                  <p className="text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity Information Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="/images/hero22.jpg" 
                alt="Maternity Care"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/extra/hero2.jpg';
                }}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
                Why Choose Our Maternity Care?
              </h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #e91e63, #c2185b)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-heart-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Experienced Team</h6>
                      <p className="text-muted small mb-0">Skilled obstetricians and midwives</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #9c27b0, #7b1fa2)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-shield-check"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Safe Delivery</h6>
                      <p className="text-muted small mb-0">Modern facilities and safety protocols</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #673ab7, #512da8)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-people-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Family-Centered</h6>
                      <p className="text-muted small mb-0">Involve your family in the journey</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #3f51b5, #303f9f)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-hospital"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Comfortable Rooms</h6>
                      <p className="text-muted small mb-0">Private and comfortable accommodations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maternity CTA */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #e91e63, #6f3348)',
        color: 'white'
      }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Start Your Maternity Journey?
              </h2>
              <p className="lead mb-5">
                Book your prenatal appointment today and let us provide you with the best 
                maternity care throughout your pregnancy and beyond.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <Link to="/appointment" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.3rem',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }}>
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Prenatal Appointment
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.3rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#e91e63';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact Maternity Ward
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          
          .display-5 {
            font-size: 2rem;
          }
          
          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Maternity;
