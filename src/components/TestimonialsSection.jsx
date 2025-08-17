import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah and Michael Osei",
      profession: "Fertility Treatment Success",
      image: "/images/testimonial-1.jpg",
      text: "After years of trying to conceive, Mount Carmel Hospital gave us hope. The fertility treatment was successful and we now have beautiful twins. The doctors and staff were incredibly supportive throughout our journey.",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Grace Mensah",
      profession: "Pediatric Care",
      image: "/images/testimonial-2.jpg",
      text: "As a fellow healthcare professional, I can attest to the exceptional quality of care at Mount Carmel Hospital. The pediatric department provided excellent care for my daughter when she was ill.",
      rating: 5
    },
    {
      id: 3,
      name: "Kwame Addo",
      profession: "Emergency Care",
      image: "/images/testimonial-1.jpg",
      text: "The emergency care team at Mount Carmel Hospital saved my life. Their quick response and professional treatment made all the difference. I'm forever grateful for their expertise and compassion.",
      rating: 5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.testimonials-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <i key={i} className="bi bi-star-fill" style={{color: '#DAA520'}}></i>
    ));
  };

  return (
    <div className="container-fluid py-5 position-relative overflow-hidden testimonials-section">
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
          top: '20%',
          left: '15%',
          width: '100px',
          height: '100px',
          background: 'rgba(218, 165, 32, 0.2)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div className="position-absolute" style={{
          bottom: '30%',
          right: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>
        <div className="position-absolute" style={{
          top: '60%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'rgba(111, 51, 72, 0.2)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container position-relative" style={{zIndex: 3}}>
        <div className="row gy-5 gx-0 align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
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
                  Patient Stories
                </span>
              </div>
              <h1 className="display-4 fw-bold text-white mb-4" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                animation: isVisible ? 'slideInLeft 1s ease-out 0.2s both' : 'none'
              }}>
                What Patients Say About Our Healthcare Services!
              </h1>
              <p className="lead text-white-50 mb-5" style={{
                animation: isVisible ? 'slideInLeft 1s ease-out 0.4s both' : 'none'
              }}>
                Our patients' satisfaction and success stories are our greatest achievements. 
                Read what our patients have to say about their experience at Mount Carmel Hospital.
              </p>
              <div style={{
                animation: isVisible ? 'slideInLeft 1s ease-out 0.6s both' : 'none'
              }}>
                <a href="/testimonials" className="btn btn-light btn-lg px-5 py-3 fw-bold" style={{
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
                  More Testimonials
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.5s">
            <div className="position-relative" style={{
              animation: isVisible ? 'slideInRight 1s ease-out 0.3s both' : 'none'
            }}>
              <div className="bg-white p-5 rounded-4" style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div className="testimonial-carousel wow fadeIn" data-wow-delay="0.1s">
                  <div className="testimonial-item">
                    <div className="text-center mb-4">
                      <div className="icon-box mb-3 mx-auto d-flex align-items-center justify-content-center" style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #6f3348, #4B1438)',
                        borderRadius: '50%'
                      }}>
                        <i className="bi bi-chat-left-quote fs-3" style={{color: 'white'}}></i>
                      </div>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="text-center mb-3">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    
                    <p className="fs-5 mb-4 text-muted text-center" style={{fontStyle: 'italic'}}>
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="flex-shrink-0 me-3">
                        <img 
                          className="rounded-circle" 
                          src={testimonials[currentTestimonial].image} 
                          alt={testimonials[currentTestimonial].name}
                          style={{
                            width: '60px',
                            height: '60px',
                            objectFit: 'cover',
                            border: '3px solid #6f3348'
                          }}
                        />
                      </div>
                      <div className="text-start">
                        <h5 className="mb-1 fw-bold" style={{color: '#6f3348'}}>
                          {testimonials[currentTestimonial].name}
                        </h5>
                        <span className="text-muted small">
                          {testimonials[currentTestimonial].profession}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <div className="d-flex justify-content-between mt-4">
                  <button 
                    className="btn btn-outline-primary rounded-circle" 
                    onClick={prevTestimonial}
                    style={{ 
                      width: '50px', 
                      height: '50px',
                      borderColor: '#6f3348',
                      color: '#6f3348',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#6f3348';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#6f3348';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  
                  {/* Testimonial Indicators */}
                  <div className="d-flex align-items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className="btn p-0"
                        onClick={() => setCurrentTestimonial(index)}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          border: '2px solid #6f3348',
                          backgroundColor: index === currentTestimonial ? '#6f3348' : 'transparent',
                          transition: 'all 0.3s ease'
                        }}
                      ></button>
                    ))}
                  </div>
                  
                  <button 
                    className="btn btn-outline-primary rounded-circle" 
                    onClick={nextTestimonial}
                    style={{ 
                      width: '50px', 
                      height: '50px',
                      borderColor: '#6f3348',
                      color: '#6f3348',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#6f3348';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#6f3348';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
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

export default TestimonialsSection; 