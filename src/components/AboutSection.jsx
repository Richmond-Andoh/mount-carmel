import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    cases: 0,
    clients: 0
  });

  useEffect(() => {
    const targetCounts = {
      experience: 10,
      cases: 5000,
      clients: 10000
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        experience: Math.floor(targetCounts.experience * progress),
        awards: Math.floor(targetCounts.experience * progress),
        cases: Math.floor(targetCounts.cases * progress),
        clients: Math.floor(targetCounts.clients * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targetCounts);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid py-5 position-relative overflow-hidden">
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(135deg, rgba(111, 51, 72, 0.05) 0%, rgba(218, 165, 32, 0.05) 100%)',
        zIndex: 1
      }}></div>
      
      {/* Floating Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{zIndex: 1}}>
        <div className="position-absolute" style={{
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'rgba(111, 51, 72, 0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div className="position-absolute" style={{
          bottom: '20%',
          left: '10%',
          width: '150px',
          height: '150px',
          background: 'rgba(218, 165, 32, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
      </div>

      <div className="container position-relative" style={{zIndex: 2}}>
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="mb-3">
              <span className="badge brand-btn px-3 py-2 mb-2" style={{
                backgroundColor: '#6f3348',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                About Us
              </span>
            </div>
            <h1 className="display-4 fw-bold mb-4" style={{color: '#6f3348'}}>
              Trusted Healthcare Experts and Latest Medical Technologies
            </h1>
            <p className="lead text-muted">
              Mount Carmel Hospital and Fertility Centre has been at the forefront of medical excellence for over 15 years. 
              Our commitment to providing exceptional healthcare services is reflected in our state-of-the-art facilities, 
              expert medical staff, and patient-centered approach to care.
            </p>
          </div>
        </div>

        <div className="row g-5 align-items-center">
          {/* Image Gallery */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="position-relative">
              <div className="row g-3">
                <div className="col-6">
                  <div className="position-relative overflow-hidden rounded-4" style={{
                    boxShadow: '0 10px 30px rgba(111, 51, 72, 0.2)',
                    transition: 'all 0.3s ease'
                  }}>
                    <img 
                      className="img-fluid w-100" 
                      src="/images/about-1.jpg" 
                      alt="Hospital Building"
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/feature.jpg';
                      }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                      background: 'linear-gradient(45deg, rgba(111, 51, 72, 0.3), transparent)'
                    }}></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative overflow-hidden rounded-4" style={{
                    boxShadow: '0 10px 30px rgba(111, 51, 72, 0.2)',
                    transition: 'all 0.3s ease'
                  }}>
                    <img 
                      className="img-fluid w-100" 
                      src="/images/about-2.jpg" 
                      alt="Medical Equipment"
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                      background: 'linear-gradient(45deg, rgba(218, 165, 32, 0.3), transparent)'
                    }}></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative overflow-hidden rounded-4" style={{
                    boxShadow: '0 10px 30px rgba(111, 51, 72, 0.2)',
                    transition: 'all 0.3s ease'
                  }}>
                    <img 
                      className="img-fluid w-100" 
                      src="/images/about-3.jpg" 
                      alt="Medical Staff"
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                      background: 'linear-gradient(45deg, rgba(111, 51, 72, 0.3), transparent)'
                    }}></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative overflow-hidden rounded-4" style={{
                    boxShadow: '0 10px 30px rgba(111, 51, 72, 0.2)',
                    transition: 'all 0.3s ease'
                  }}>
                    <img 
                      className="img-fluid w-100" 
                      src="/images/about-4.jpg" 
                      alt="Medical Staff"
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                      background: 'linear-gradient(45deg, rgba(111, 51, 72, 0.3), transparent)'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="ps-lg-5">
              <h2 className="h3 fw-bold mb-4" style={{color: '#6f3348'}}>
                Why Choose Mount Carmel Hospital?
              </h2>
              
              {/* Features List */}
              <div className="row g-4 mb-5">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 rounded-3" style={{
                    background: 'rgba(111, 51, 72, 0.05)',
                    border: '1px solid rgba(111, 51, 72, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(111, 51, 72, 0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(111, 51, 72, 0.05)';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    <div className="me-3">
                      <i className="bi bi-check-circle-fill fs-4" style={{color: '#6f3348'}}></i>
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Expert Medical Team</h6>
                      <small className="text-muted">Highly qualified professionals</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 rounded-3" style={{
                    background: 'rgba(111, 51, 72, 0.05)',
                    border: '1px solid rgba(111, 51, 72, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(111, 51, 72, 0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(111, 51, 72, 0.05)';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    <div className="me-3">
                      <i className="bi bi-check-circle-fill fs-4" style={{color: '#6f3348'}}></i>
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Modern Technology</h6>
                      <small className="text-muted">State-of-the-art equipment</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 rounded-3" style={{
                    background: 'rgba(111, 51, 72, 0.05)',
                    border: '1px solid rgba(111, 51, 72, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(111, 51, 72, 0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(111, 51, 72, 0.05)';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    <div className="me-3">
                      <i className="bi bi-check-circle-fill fs-4" style={{color: '#6f3348'}}></i>
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Patient-Centered Care</h6>
                      <small className="text-muted">Personalized treatment plans</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 rounded-3" style={{
                    background: 'rgba(111, 51, 72, 0.05)',
                    border: '1px solid rgba(111, 51, 72, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(111, 51, 72, 0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(111, 51, 72, 0.05)';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    <div className="me-3">
                      <i className="bi bi-check-circle-fill fs-4" style={{color: '#6f3348'}}></i>
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">24/7 Emergency Care</h6>
                      <small className="text-muted">Round-the-clock support</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="text-center p-4 rounded-4" style={{
                    background: 'linear-gradient(135deg, #6f3348, #4B1438)',
                    boxShadow: '0 8px 25px rgba(111, 51, 72, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                    <div className="mb-2">
                      <i className="bi bi-trophy fs-2" style={{color: '#DAA520'}}></i>
                    </div>
                    <h3 className="text-white fw-bold mb-1">{counts.experience}+</h3>
                    <p className="text-white-50 mb-0">Years of Experience</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="text-center p-4 rounded-4" style={{
                    background: 'linear-gradient(135deg, #DAA520, #B8860B)',
                    boxShadow: '0 8px 25px rgba(218, 165, 32, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                    <div className="mb-2">
                      <i className="bi bi-heart-pulse fs-2" style={{color: 'white'}}></i>
                    </div>
                    <h3 className="text-white fw-bold mb-1">{counts.cases.toLocaleString()}+</h3>
                    <p className="text-white-50 mb-0">Successful Cases</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-center p-4 rounded-4" style={{
                    background: 'linear-gradient(135deg, #4B1438, #2C1810)',
                    boxShadow: '0 8px 25px rgba(75, 20, 56, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                    <div className="mb-2">
                      <i className="bi bi-people fs-2" style={{color: '#DAA520'}}></i>
                    </div>
                    <h3 className="text-white fw-bold mb-1">{counts.clients.toLocaleString()}+</h3>
                    <p className="text-white-50 mb-0">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default AboutSection; 