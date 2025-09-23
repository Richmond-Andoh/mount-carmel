import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Laboratory = () => {
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

    const element = document.querySelector('.laboratory-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const labServices = [
    {
      icon: "bi bi-droplet-fill",
      title: "Blood Tests",
      description: "Complete blood count, chemistry panels, and specialized blood work",
      tests: ["CBC", "Lipid Panel", "Liver Function", "Kidney Function"],
      color: "#6f3348"
    },
    {
      icon: "bi bi-shield-check",
      title: "Microbiology",
      description: "Bacterial cultures, sensitivity testing, and infectious disease diagnostics",
      tests: ["Culture & Sensitivity", "Stool Analysis", "Urine Culture", "Blood Culture"],
      color: "#6f3348"
    },
    {
      icon: "bi bi-heart-pulse-fill",
      title: "Cardiac Markers",
      description: "Heart health assessment and cardiovascular risk evaluation",
      tests: ["Troponin", "CK-MB", "BNP", "Cholesterol"],
      color: "#6f3348"
    },
    {
      icon: "bi bi-gender-female",
      title: "Hormone Testing",
      description: "Endocrine function and reproductive health assessment",
      tests: ["Thyroid Function", "Sex Hormones", "Cortisol", "Insulin"],
      color: "#6f3348"
    },
    {
      icon: "bi bi-activity",
      title: "Tumor Markers",
      description: "Cancer screening and monitoring for various malignancies",
      tests: ["PSA", "CEA", "CA 125", "AFP"],
      color: "#6f3348"
    },
    {
      icon: "bi bi-shield-check",
      title: "Immunology",
      description: "Immune system function and autoimmune disease testing",
      tests: ["Autoantibodies", "Allergy Testing", "Immunoglobulins", "Rheumatoid Factor"],
      color: "#6f3348"
    }
  ];

  const labProcess = [
    {
      step: "1",
      title: "Sample Collection",
      description: "Professional sample collection by trained phlebotomists",
      icon: "bi bi-collection-fill"
    },
    {
      step: "2",
      title: "Sample Processing",
      description: "Careful handling and preparation of samples for analysis",
      icon: "bi bi-gear-fill"
    },
    {
      step: "3",
      title: "Laboratory Analysis",
      description: "Advanced testing using state-of-the-art equipment",
      icon: "bi bi-cpu-fill"
    },
    {
      step: "4",
      title: "Results Delivery",
      description: "Secure and timely delivery of accurate results",
      icon: "bi bi-file-medical-fill"
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Background Image */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}></div>

        {/* Background Pattern */}
        {/* <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}></div> */}

        <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/90 via-mount-carmel-primary/80 to-mount-carmel-secondary/85" />


        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(135deg, rgba(111, 51, 72, 0.8) 100%)',
          zIndex: 2
        }}></div>

        {/* Floating Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 2 }}>
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

        <div className="container position-relative" style={{ zIndex: 3, paddingTop: '120px', paddingBottom: '80px' }}>
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
                  Laboratory Services
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4" style={{
                animation: isVisible ? 'slideInDown 1s ease-out 0.2s both' : 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Advanced Diagnostic Laboratory
              </h1>
              <p className="lead mb-5" style={{
                animation: isVisible ? 'slideInDown 1s ease-out 0.4s both' : 'none',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                Mount Carmel Hospital's state-of-the-art laboratory provides comprehensive diagnostic testing
                with rapid turnaround times and accurate results for better patient care.
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
                  Book Lab Test
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#0d6efd';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact Lab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Services Section */}
      <section className="py-5 laboratory-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
              Laboratory Services
            </h2>
            <p className="lead text-muted">
              Comprehensive diagnostic testing with advanced technology and expert analysis
            </p>
          </div>

          <div className="row g-4">
            {labServices.map((service, index) => (
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
                      <h6 className="fw-bold mb-3" style={{ color: service.color }}>Available Tests:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {service.tests.map((test, testIndex) => (
                          <span key={testIndex} className="badge px-3 py-2" style={{
                            backgroundColor: `${service.color}20`,
                            color: service.color,
                            fontSize: '0.8rem'
                          }}>
                            {test}
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

      {/* Laboratory Process Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#6f3348' }}>
              Our Laboratory Process
            </h2>
            <p className="lead text-muted">
              From sample collection to results delivery, we ensure accuracy and efficiency
            </p>
          </div>

          <div className="row g-4">
            {labProcess.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="position-relative mb-4">
                    <div className="mx-auto d-flex align-items-center justify-content-center" style={{
                      width: '100px',
                      height: '100px',
                      // background: 'linear-gradient(135deg, #0d6efd, #6f3348)',
                      background: "#6f3348",
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      boxShadow: '0 10px 30px rgba(13, 110, 253, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 15px 40px rgba(13, 110, 253, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 10px 30px rgba(13, 110, 253, 0.3)';
                      }}>
                      {step.step}
                    </div>
                    <div className="position-absolute top-0 end-0" style={{
                      width: '40px',
                      height: '40px',
                      // background: '#198754',
                      background: "#6f3348",
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

      {/* Laboratory Information Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/images/gallery/02.jpg"
                alt="Laboratory Equipment"
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
                Why Choose Our Laboratory?
              </h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="d-flex align-items-center justify-content-center" style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #0d6efd, #0056b3)',
                        borderRadius: '50%',
                        color: 'white'
                      }}>
                        <i className="bi bi-award-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Accredited Lab</h6>
                      <p className="text-muted small mb-0">Internationally certified standards</p>
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
                        <i className="bi bi-speedometer2"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Fast Results</h6>
                      <p className="text-muted small mb-0">Quick turnaround times</p>
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
                        <i className="bi bi-cpu-fill"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Advanced Technology</h6>
                      <p className="text-muted small mb-0">State-of-the-art equipment</p>
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
                        <i className="bi bi-shield-check"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#6f3348' }}>Quality Assurance</h6>
                      <p className="text-muted small mb-0">Rigorous quality control</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory CTA */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #0d6efd, #6f3348)',
        color: 'white'
      }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                Ready for Your Lab Tests?
              </h2>
              <p className="lead mb-5">
                Schedule your laboratory tests with us for accurate, reliable results
                and professional service you can trust.
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
                  Book Lab Test
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold" style={{
                  borderRadius: '50px',
                  fontSize: '1.3rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#0d6efd';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact Laboratory
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

export default Laboratory;
