import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Support = () => {
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

    const element = document.querySelector('.support-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const supportServices = [
    {
      icon: "bi bi-headset",
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your healthcare needs",
      features: ["Phone Support", "Live Chat", "Email Support", "Emergency Assistance"],
      color: "#17a2b8"
    },
    {
      icon: "bi bi-question-circle",
      title: "Patient Education",
      description: "Comprehensive resources to help you understand your health",
      features: ["Health Guides", "Video Tutorials", "FAQ Database", "Educational Materials"],
      color: "#28a745"
    },
    {
      icon: "bi bi-people-fill",
      title: "Family Support",
      description: "Support services for patients and their families",
      features: ["Counseling Services", "Support Groups", "Family Planning", "Caregiver Resources"],
      color: "#6f42c1"
    },
    {
      icon: "bi bi-shield-check",
      title: "Insurance Support",
      description: "Help with insurance claims and billing questions",
      features: ["Claims Processing", "Billing Inquiries", "Coverage Verification", "Payment Plans"],
      color: "#fd7e14"
    },
    {
      icon: "bi bi-geo-alt",
      title: "Transportation",
      description: "Assistance with getting to and from appointments",
      features: ["Ambulance Services", "Transport Coordination", "Wheelchair Access", "Home Visits"],
      color: "#dc3545"
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Health Monitoring",
      description: "Ongoing support for chronic conditions and recovery",
      features: ["Remote Monitoring", "Medication Management", "Follow-up Care", "Health Tracking"],
      color: "#e83e8c"
    }
  ];

  const supportProcess = [
    {
      step: "1",
      title: "Contact Us",
      description: "Reach out through phone, email, or live chat",
      icon: "bi bi-telephone-fill"
    },
    {
      step: "2", 
      title: "Describe Your Need",
      description: "Tell us how we can help you or your family",
      icon: "bi bi-chat-dots-fill"
    },
    {
      step: "3",
      title: "Get Assistance",
      description: "Receive personalized support and guidance",
      icon: "bi bi-hand-thumbs-up-fill"
    },
    {
      step: "4",
      title: "Follow-up",
      description: "We ensure your needs are fully addressed",
      icon: "bi bi-check-circle-fill"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Background Image */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url("/images/extra/hero3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}></div>
        
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.9) 0%, rgba(111, 51, 72, 0.8) 100%)',
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
                  Patient Support
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4" style={{
                animation: isVisible ? 'slideInDown 1s ease-out 0.2s both' : 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                We're Here to Support You
              </h1>
              <p className="lead mb-5" style={{
                animation: isVisible ? 'slideInDown 1s ease-out 0.4s both' : 'none',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                Mount Carmel Hospital provides comprehensive support services to ensure you and your family 
                receive the care and assistance you need throughout your healthcare journey.
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
                  Call Support: +233 592 411 108
                </a>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#17a2b8';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <i className="bi bi-envelope-fill me-2"></i>
                  Email Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-5 support-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
              Support Services
            </h2>
            <p className="lead text-muted">
              Comprehensive assistance to help you navigate your healthcare journey
            </p>
          </div>

          <div className="row g-4">
            {supportServices.map((service, index) => (
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
                      <h6 className="fw-bold mb-3" style={{ color: service.color }}>What We Offer:</h6>
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

      {/* Support Process Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
              How to Get Support
            </h2>
            <p className="lead text-muted">
              Simple steps to access the support you need
            </p>
          </div>

          <div className="row g-4">
            {supportProcess.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="position-relative mb-4">
                    <div className="mx-auto d-flex align-items-center justify-content-center" style={{
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #17a2b8, #6f3348)',
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      boxShadow: '0 10px 30px rgba(23, 162, 184, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.boxShadow = '0 15px 40px rgba(23, 162, 184, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 10px 30px rgba(23, 162, 184, 0.3)';
                    }}>
                      {step.step}
                    </div>
                    <div className="position-absolute top-0 end-0" style={{
                      width: '40px',
                      height: '40px',
                      background: '#28a745',
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

      {/* Support Information Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Support Team"
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
                Why Choose Our Support?
              </h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #17a2b8, #138496)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-headset"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>24/7 Availability</h6>
                      <p className="text-muted small mb-0">Always here when you need us</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #28a745, #1e7e34)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-people-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Expert Team</h6>
                      <p className="text-muted small mb-0">Trained support professionals</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #6f42c1, #5a32a3)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-heart-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Compassionate Care</h6>
                      <p className="text-muted small mb-0">Understanding and empathetic support</p>
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
                        <i className="bi bi-lightning-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Quick Response</h6>
                      <p className="text-muted small mb-0">Fast and efficient assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #17a2b8, #6f3348)',
        color: 'white'
      }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                Need Support Right Now?
              </h2>
              <p className="lead mb-5">
                Don't hesitate to reach out. Our support team is ready to help you 
                with any questions or concerns you may have.
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
                  Call Now: +233 592 411 108
                </a>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.3rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#17a2b8';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <i className="bi bi-envelope-fill me-2"></i>
                  Send Message
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

export default Support;
