import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Emergency = () => {
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

    const element = document.querySelector('.emergency-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const emergencyServices = [
    {
      icon: "bi bi-telephone-fill",
      title: "Emergency Hotline",
      description: "24/7 emergency response for life-threatening conditions",
      contact: "+233 592 411 108",
      color: "#dc3545"
    },
    {
      icon: "bi bi-ambulance",
      title: "Ambulance Services",
      description: "Rapid response emergency transportation",
      contact: "Available 24/7",
      color: "#fd7e14"
    },
    {
      icon: "bi bi-heart-pulse-fill",
      title: "Trauma Center",
      description: "Advanced trauma care and emergency surgery",
      contact: "Immediate Response",
      color: "#6f3348"
    },
    {
      icon: "bi bi-shield-check",
      title: "Emergency Triage",
      description: "Priority assessment and immediate care",
      contact: "No Appointment Needed",
      color: "#198754"
    }
  ];

  const emergencySteps = [
    {
      step: "1",
      title: "Call Emergency",
      description: "Dial our emergency hotline immediately",
      icon: "bi bi-telephone-fill"
    },
    {
      step: "2", 
      title: "Stay Calm",
      description: "Follow instructions from our emergency team",
      icon: "bi bi-shield-check"
    },
    {
      step: "3",
      title: "Provide Details",
      description: "Give clear information about the emergency",
      icon: "bi bi-chat-dots-fill"
    },
    {
      step: "4",
      title: "Get Help",
      description: "Our team will dispatch appropriate assistance",
      icon: "bi bi-ambulance"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Background Image */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url("/images/extra/hero6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}></div>
        
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.9) 0%, rgba(111, 51, 72, 0.8) 100%)',
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
                  Emergency Services
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4" style={{
                animation: isVisible ? 'slideInDown 1s ease-out 0.2s both' : 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Emergency Care When You Need It Most
              </h1>
              <p className="lead mb-5" style={{
                animation: isVisible ? 'slideInDown 1s ease-out 0.4s both' : 'none',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                Mount Carmel Hospital provides 24/7 emergency medical services with rapid response times 
                and expert care for life-threatening conditions.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3" style={{
                animation: isVisible ? 'slideInUp 1s ease-out 0.6s both' : 'none'
              }}>
                <a href="tel:+233592411108" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{
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
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Emergency: +233 592 411 108
                </a>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#dc3545';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Find Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-5 emergency-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
              Emergency Services
            </h2>
            <p className="lead text-muted">
              Comprehensive emergency care with state-of-the-art facilities and expert medical professionals
            </p>
          </div>

          <div className="row g-4">
            {emergencyServices.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
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
                  <div className="card-body text-center p-4">
                    <div className="mb-4">
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
                    <h5 className="fw-bold mb-3" style={{ color: '#6f3348' }}>
                      {service.title}
                    </h5>
                    <p className="text-muted mb-3">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <span className="badge px-3 py-2" style={{
                        backgroundColor: service.color,
                        fontSize: '0.9rem'
                      }}>
                        {service.contact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Process Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
              What to Do in an Emergency
            </h2>
            <p className="lead text-muted">
              Follow these steps to get immediate help during a medical emergency
            </p>
          </div>

          <div className="row g-4">
            {emergencySteps.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="position-relative mb-4">
                    <div className="mx-auto d-flex align-items-center justify-content-center" style={{
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #6f3348, #4B1438)',
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      boxShadow: '0 10px 30px rgba(111, 51, 72, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.boxShadow = '0 15px 40px rgba(111, 51, 72, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 10px 30px rgba(111, 51, 72, 0.3)';
                    }}>
                      {step.step}
                    </div>
                    <div className="position-absolute top-0 end-0" style={{
                      width: '40px',
                      height: '40px',
                      background: '#dc3545',
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

      {/* Emergency Information Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="/images/extra/hero7.jpg" 
                alt="Emergency Medical Team"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/feature.jpg';
                }}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
                Why Choose Mount Carmel Emergency?
              </h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #dc3545, #c82333)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-clock-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>24/7 Availability</h6>
                      <p className="text-muted small mb-0">Round-the-clock emergency care</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #198754, #157347)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-people-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Expert Team</h6>
                      <p className="text-muted small mb-0">Experienced emergency physicians</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #fd7e14, #e55a00)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-gear-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Advanced Equipment</h6>
                      <p className="text-muted small mb-0">State-of-the-art medical technology</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #6f3348, #4B1438)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-heart-pulse-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Rapid Response</h6>
                      <p className="text-muted small mb-0">Quick triage and treatment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #dc3545, #6f3348)',
        color: 'white'
      }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                In Case of Emergency
              </h2>
              <p className="lead mb-5">
                Don't wait - every second counts in a medical emergency. 
                Call us immediately for rapid response and expert care.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <a href="tel:+233592411108" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{
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
                  <i className="bi bi-telephone-fill me-2"></i>
                  Emergency: +233 592 411 108
                </a>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.3rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#dc3545';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Visit Our Location
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

export default Emergency;
