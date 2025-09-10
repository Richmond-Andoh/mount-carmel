import { useState, useEffect } from 'react';

const AppointmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.appointment-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Appointment form submitted:', formData);
    alert('Thank you! Your appointment request has been submitted. We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      service: '',
      message: ''
    });
  };

  const services = [
    'Fertility Treatment',
    'Maternity Care',
    'Gynecology',
    'Pediatrics',
    'Laboratory Services',
    'Emergency Care',
    'General Medicine',
    'Surgical Procedures'
  ];

  return (
    <div className="container-fluid py-5 position-relative overflow-hidden appointment-section">
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
        background: 'linear-gradient(135deg, rgba(111, 51, 72, 0.9) 0%, rgba(75, 20, 56, 0.8) 100%)',
        zIndex: 2
      }}></div>

      {/* Floating Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{zIndex: 2}}>
        <div className="position-absolute" style={{
          top: '15%',
          right: '15%',
          width: '100px',
          height: '100px',
          background: 'rgba(218, 165, 32, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div className="position-absolute" style={{
          bottom: '20%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
        <div className="position-absolute" style={{
          top: '50%',
          right: '5%',
          width: '80px',
          height: '80px',
          background: 'rgba(111, 51, 72, 0.2)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container position-relative" style={{zIndex: 3}}>
        <div className="row g-5 align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div style={{
              animation: isVisible ? 'slideInLeft 1s ease-out' : 'none'
            }}>
              <div className="mb-3">
                <span className="badge bg-light px-3 py-2 mb-2" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#6f3348',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Book Appointment
                </span>
              </div>
              <h1 className="display-4 fw-bold text-white mb-4" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                animation: isVisible ? 'slideInLeft 1s ease-out 0.2s both' : 'none'
              }}>
                We Ensure You Will Always Get The Best Healthcare
              </h1>
              <p className="lead text-white-50 mb-4" style={{
                animation: isVisible ? 'slideInLeft 1s ease-out 0.4s both' : 'none'
              }}>
                At Mount Carmel Hospital, we are committed to providing exceptional healthcare services 
                with the highest standards of medical excellence. Our team of experienced healthcare 
                professionals is dedicated to your well-being and recovery.
              </p>
              <p className="text-white-50 mb-4" style={{
                animation: isVisible ? 'slideInLeft 1s ease-out 0.6s both' : 'none'
              }}>
                We combine advanced medical technology with compassionate care to ensure the best 
                possible outcomes for our patients. Your health and satisfaction are our top priorities.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4" style={{
                animation: isVisible ? 'slideInLeft 1s ease-out 0.8s both' : 'none'
              }}>
                <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.3s">
                  <div className="icon-box me-3 d-flex align-items-center justify-content-center" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #6f3348, #4B1438)',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}>
                    <i className="bi bi-geo-alt text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="text-white mb-1">Hospital Address</h5>
                    <span className="text-white-50">Ashfoam Junction, Tema Com.25, Accra, Ghana</span>
                  </div>
                </div>
                
                <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.4s">
                  <div className="icon-box me-3 d-flex align-items-center justify-content-center" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #DAA520, #B8860B)',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}>
                    <i className="bi bi-clock text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="text-white mb-1">Hospital Hours</h5>
                    <span className="text-white-50">Mon-Sat 08:00-18:00, Sun 09:00-15:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="position-relative" style={{
              animation: isVisible ? 'slideInRight 1s ease-out 0.3s both' : 'none'
            }}>
              <div className="bg-white p-3 p-md-4 p-lg-5 rounded-4" style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h2 className="mb-4 text-center fw-bold" style={{color: '#6f3348'}}>Online Appointment</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            borderColor: '#6f3348',
                            borderRadius: '10px',
                            minHeight: '58px'
                          }}
                        />
                        <label htmlFor="name" style={{color: '#6f3348'}}>Your Name</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            borderColor: '#6f3348',
                            borderRadius: '10px',
                            minHeight: '58px'
                          }}
                        />
                        <label htmlFor="email" style={{color: '#6f3348'}}>Your Email</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input 
                          type="tel" 
                          className="form-control" 
                          id="mobile" 
                          name="mobile"
                          placeholder="Your Mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          style={{
                            borderColor: '#6f3348',
                            borderRadius: '10px',
                            minHeight: '58px'
                          }}
                        />
                        <label htmlFor="mobile" style={{color: '#6f3348'}}>Your Mobile</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <select 
                          className="form-select" 
                          id="service" 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          style={{
                            borderColor: '#6f3348',
                            borderRadius: '10px',
                            minHeight: '58px'
                          }}
                        >
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                        <label htmlFor="service" style={{color: '#6f3348'}}>Choose A Service</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea 
                          className="form-control form-textarea" 
                          placeholder="Leave a message here" 
                          id="message" 
                          name="message"
                          style={{ 
                            height: '130px',
                            borderColor: '#6f3348',
                            borderRadius: '10px',
                            minHeight: '130px'
                          }}
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="message" style={{color: '#6f3348'}}>Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button 
                        className="btn btn-primary w-100 py-3 fw-bold" 
                        type="submit"
                        style={{
                          backgroundColor: '#6f3348',
                          borderColor: '#6f3348',
                          borderRadius: '25px',
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
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
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
        
        .wow {
          visibility: hidden;
        }
        
        .wow.animated {
          visibility: visible;
        }
        
        .space-y-4 > * + * {
          margin-top: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
          
          .lead {
            font-size: 1rem;
          }
        }
        
        /* Small screen form improvements */
        @media (max-width: 450px) {
          .form-floating {
            margin-bottom: 1rem;
          }
          
          .form-control, .form-select {
            font-size: 16px !important; /* Prevents zoom on iOS */
            padding: 0.75rem 1rem !important;
            min-height: 56px !important;
          }
          
          .form-floating > label {
            font-size: 14px;
            padding: 0.5rem 1rem;
          }
          
          .btn {
            padding: 0.875rem 1.5rem !important;
            font-size: 16px !important;
          }
          
          .row.g-3 {
            --bs-gutter-y: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AppointmentSection; 