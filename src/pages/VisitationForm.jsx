import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_ENDPOINT = '/api/send-email';

const VisitationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  // Check if all fields are filled
  useEffect(() => {
    const allFilled = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(allFilled);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        formType: 'Visitation Request',
        ...formData
      };

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setFormData({ name: '', email: '', organization: '', phone: '', message: '' });
      } else {
        throw new Error(responseData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      {/* Enhanced Hero Section with Improved Styling and Animations */}
      <section className="position-relative overflow-hidden">
        <div 
          className="page-header py-5 d-flex align-items-center min-vh-75 wow fadeIn" 
          data-wow-delay="0.1s"
          style={{
            background: `url('/images/visit.png') center/cover no-repeat fixed`,
            position: 'relative',
            //boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            minHeight: '75vh',
            display: 'flex',
            alignItems: 'center',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
          }}/>

          <div className="container py-5 mt-5 z-50">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <nav aria-label="breadcrumb" className="mb-4">
                  <ol className="breadcrumb justify-content-center bg-transparent p-0">
                    <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Visitation Form</li>
                  </ol>
                </nav>
                
                <h1 className="display-3 text-white fw-bold mb-4 wow fadeInUp" data-wow-delay="0.3s" style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                  letterSpacing: '1.5px',
                  lineHeight: '1.2'
                }}>
                  Schedule Your Visit
                </h1>
                
                <p className="lead text-white mb-5 wow fadeInUp" data-wow-delay="0.5s" style={{
                  maxWidth: '700px',
                  margin: '0 auto',
                  fontSize: '1.25rem',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
                }}>
                  Experience our world-class healthcare facilities firsthand. Schedule a personalized tour to see our state-of-the-art medical equipment and meet our compassionate team of experts.
                </p>
                
                <a 
                  href="#visitation-form"
                  className="btn btn-light btn-lg rounded-pill px-4 py-3 fw-bold text-primary wow fadeInUp cta-pulse" 
                  data-wow-delay="0.7s"
                  style={{
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 1,
                    border: 'none',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    padding: '12px 30px',
                    fontSize: '1rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                  <span className="position-relative z-2">
                    Book Your Visit Now
                    <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center wow fadeInUp" data-wow-delay="1s">
            <div className="text-white mb-2" style={{ fontSize: '0.875rem' }}>Scroll Down</div>
            <div className="d-flex justify-content-center">
              <div className="scroll-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="position-absolute top-0 end-0 w-100 h-100" style={{
            background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.08\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            opacity: 0.7,
            zIndex: 0,
            pointerEvents: 'none'
          }}></div>
        </div>
      </section>

      {/* Brand Marquee Section */}
      <section className="container-fluid py-5" style={{
        background: 'linear-gradient(90deg, #4B1438 0%, #6f3348 100%)',
        color: '#fff',
        margin: 0,
        padding: 0
      }}>
        <div className="container overflow-hidden" style={{'--gap':'48px', '--duration':'22s'}}>
          <div className="d-flex align-items-center gap-4 animate-marquee text-xl" style={{whiteSpace:'nowrap'}}>
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted by Families</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient First</span>
            <span className="fw-semibold" style={{opacity:0.95}}>World-Class Facilities</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Exceptional Outcomes</span>
            {/* duplicate for seamless loop */}
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted by Families</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient First</span>
            <span className="fw-semibold" style={{opacity:0.95}}>World-Class Facilities</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Exceptional Outcomes</span>
          </div>
        </div>
      </section>

      {/* Visitation Form Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center px-3" style={{color:'#6f3348'}}>Visit Us</h6>
            <h1 className="display-6 mb-4">Schedule a Facility Tour</h1>
            <p className="mb-0">Fill out the form below to book your visit and discover our hospital.</p>
          </div>

          <div className="row g-5 justify-content-center">
            <div className="col-lg-8">
              {submitted ? (
                <div className="bg-light rounded-4 p-5 text-center shadow-lg wow fadeInUp" data-wow-delay="0.1s">
                  <i className="fa fa-check-circle fa-4x mb-4" style={{color:'#6f3348'}}></i>
                  <h2 className="mb-3" style={{color:'#6f3348'}}>Thank You!</h2>
                  <p className="mb-4">Thank you for your interest in visiting our facility. We will contact you soon to arrange your tour.</p>
                  <Link to="/" className="btn brand-btn rounded-pill px-4 py-2">
                    <i className="fa fa-home me-2"></i>Go Back to Home
                  </Link>
                  <style>{`
                    .brand-btn { background: #6f3348; border-color: #6f3348; color: #fff; }
                    .brand-btn:hover { background: #4B1438; border-color: #4B1438; color: #fff; }
                  `}</style>
                </div>
              ) : (
                <div className="bg-white rounded-4 p-5 shadow-lg wow fadeInUp" data-wow-delay="0.1s">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {error && (
                        <div className="col-12">
                          <div className="alert alert-danger" role="alert">
                            <i className="fa fa-exclamation-triangle me-2"></i>
                            {error}
                          </div>
                        </div>
                      )}
                      {/* Modernized Form Fields */}
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg rounded-3 border-2" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name" 
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control form-control-lg rounded-3 border-2" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email" 
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="organization" className="form-label fw-semibold">Organization/Family/Individual</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg rounded-3 border-2" 
                          id="organization" 
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Organization/Family/Individual" 
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control form-control-lg rounded-3 border-2" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number" 
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-semibold">Purpose of Visit & Additional Information</label>
                        <textarea 
                          className="form-control form-control-lg rounded-3 border-2" 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Purpose of Visit" 
                          style={{height: '150px'}}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button 
                          className="btn brand-btn w-100 py-3 rounded-pill fw-bold shadow" 
                          type="submit"
                          disabled={!isFormValid || loading}
                        >
                          {loading ? (
                            <>
                              <i className="fa fa-spinner fa-spin me-2"></i>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <i className="fa fa-calendar me-2"></i>
                              Schedule Visit
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Visit Information - Modern Responsive Full Width Section */}
          <div className="container-fluid px-0 mt-5" style={{width: '100vw', marginLeft: 'calc(-50vw + 50%)', background: 'linear-gradient(90deg, #F8FBFF 0%, #ffffff 100%)', borderRadius: '32px', boxShadow: '0 4px 24px rgba(111,51,72,0.10)', padding: '32px 0'}}>
            <div className="container">
              <div className="row g-4">
                <div className="col-12">
                  <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h3 className="mb-5 fw-bold text-primary">What to Expect During Your Visit</h3>
                  </div>
                </div>
                {[
                  {
                    icon: 'fa-map-marker-alt',
                    title: 'Facility Tour',
                    desc: 'Guided tour of our modern facilities and medical equipment.',
                    delay: '0.1s',
                  },
                  {
                    icon: 'fa-users',
                    title: 'Meet Our Team',
                    desc: 'Introduction to our medical professionals and support staff.',
                    delay: '0.3s',
                  },
                  {
                    icon: 'fa-comments',
                    title: 'Q&A Session',
                    desc: 'Opportunity to ask questions about our services and facilities.',
                    delay: '0.5s',
                  },
                ].map((info, idx) => (
                  <div key={info.title} className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch wow fadeInUp" data-wow-delay={info.delay}>
                    <div className="benefit-card bg-white rounded-4 shadow-lg p-4 w-100 d-flex flex-column align-items-center justify-content-center text-center h-100" style={{transition: 'transform .3s, box-shadow .3s'}}>
                      <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '64px', height: '64px', boxShadow: '0 2px 12px rgba(111,51,72,0.15)', background:'#6f3348'}}>
                        <i className={`fa ${info.icon} text-white fa-2x`} loading="lazy"></i>
                      </div>
                      <h4 className="mb-2 fw-bold" style={{color:'#6f3348'}}>{info.title}</h4>
                      <p className="mb-0 small" style={{color:'#4B1438'}}>{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style>{`
              .benefit-card:hover {
                transform: translateY(-8px) scale(1.03);
                box-shadow: 0 8px 32px rgba(111,34,72,0.18);
              }
            `}</style>
          </div>

          {/* Contact Information - Full Width, No Margin, Responsive, Flush with Footer */}
          <div className="container-fluid px-0" style={{ width: '100vw', height: "auto", marginLeft: 'calc(-50vw + 50%)', marginRight: 0, marginBottom: 0, paddingLeft: 0, paddingRight: 0, background: 'linear-gradient(90deg, #4B1438 0%, #6f3348 100%)', borderRadius: 0, boxShadow: 'none', overflow: 'hidden', boxSizing: 'border-box' }}>
            <div className="row g-0 align-items-center justify-content-center text-center" style={{ margin: 0 }}>
              <div className="col-12 py-5" style={{paddingBottom: 0, marginBottom: 0}}>
                <h3 className="fw-bold text-white mb-3">Need Immediate Assistance?</h3>
                <p className="mb-4 text-white">Contact us directly for urgent inquiries or to schedule an immediate visit.</p>
                <div className="row g-0" style={{marginBottom: 0}}>
                  <div className="col-12 col-md-4 mb-4 mb-md-0 px-0">
                    <div className="rounded-0 shadow-sm py-4 px-2 h-100 d-flex flex-column align-items-center justify-content-center w-100" style={{marginBottom: 0, paddingBottom: 0}}>
                      <i className="fa fa-phone fa-3x mb-3 text-white"></i>
                      <h5 className="mb-2 text-primary">Call Us</h5>
                      <p className="mb-0 text-secondary">+233 30 393 9896</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 mb-4 mb-md-0 px-0">
                    <div className="rounded-0 shadow-sm py-4 px-2 h-100 d-flex flex-column align-items-center justify-content-center w-100" style={{marginBottom: 0, paddingBottom: 0}}>
                      <i className="fa fa-envelope fa-3x mb-3 text-white"></i>
                      <h5 className="mb-2 text-primary">Email Us</h5>
                      <p className="mb-0 text-secondary">frontdesk.mchfc@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 px-0">
                    <div className="rounded-0 shadow-sm py-4 px-2 h-100 d-flex flex-column align-items-center justify-content-center w-100" style={{marginBottom: 0, paddingBottom: 0}}>
                      <i className="fa fa-map-marker-alt fa-3x mb-3 text-white"></i>
                      <h5 className="mb-2 text-primary">Visit Us</h5>
                      <p className="mb-0 text-secondary">Ashfoam Junction, Tema Com.25, Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VisitationForm;
