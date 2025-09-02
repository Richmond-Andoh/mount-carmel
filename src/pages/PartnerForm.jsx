import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpwrdbyr';

const PartnerForm = () => {
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
      const data = new FormData(e.target);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
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
      {/* Hero Section with Background Image and Overlay (brand) */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{
        background: `linear-gradient(rgba(75,20,56,0.8), rgba(111,51,72,0.8)), url('/images/gallery/partners-insurance.jpg') center/cover no-repeat`,
        position: 'relative',
        borderRadius: '0 0 32px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        backgroundAttachment: 'fixed',
        height: '400px'
      }}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown fw-bold" style={{letterSpacing: '2px'}}>Become a Partner</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Partner Form</li>
            </ol>
          </nav>
          <p className="lead text-white mt-4" style={{maxWidth: '600px'}}>Partner with Mount Carmel Hospital to provide better healthcare services to our community.</p>
        </div>
      </div>

      {/* Partner Form Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center px-3" style={{color:'#6f3348'}}>Partnership</h6>
            <h1 className="display-6 mb-4">Join Our Network</h1>
            <p className="mb-0">Fill out the form below to start your partnership journey with us.</p>
          </div>

          <div className="row g-5 justify-content-center">
            <div className="col-lg-8">
              {submitted ? (
                <div className="bg-light rounded-4 p-5 text-center shadow-lg wow fadeInUp" data-wow-delay="0.1s">
                  <i className="fa fa-check-circle fa-4x mb-4" style={{color:'#6f3348'}}></i>
                  <h2 className="mb-3" style={{color:'#6f3348'}}>Thank You!</h2>
                  <p className="mb-4">Thank you for your interest in partnering with us. We will contact you soon to discuss the partnership opportunities.</p>
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
                        <label htmlFor="organization" className="form-label fw-semibold">Organization/Company</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg rounded-3 border-2" 
                          id="organization" 
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Organization" 
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
                        <label htmlFor="message" className="form-label fw-semibold">Partnership Goals & Message</label>
                        <textarea 
                          className="form-control form-control-lg rounded-3 border-2" 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message" 
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
                              <i className="fa fa-handshake me-2"></i>
                              Submit Partnership Request
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

          {/* Partnership Benefits with Improved Background (brand) */}
          <div className="container-fluid px-0 mt-5" style={{width: '100vw', marginLeft: 'calc(-50vw + 50%)', background: 'linear-gradient(90deg, #F8FBFF 0%, #ffffff 100%)', borderRadius: '32px', boxShadow: '0 4px 24px rgba(111,51,72,0.10)', padding: '32px 0'}}>
            <div className="container">
              <div className="row g-4">
                <div className="col-12">
                  <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h3 className="mb-5 fw-bold text-primary">Why Partner With Us?</h3>
                  </div>
                </div>
                {/* Responsive, animated, lazy-loaded benefit cards */}
                {[
                  {
                    icon: 'fa-users',
                    title: 'Network Access',
                    desc: 'Connect with our extensive network of healthcare professionals and patients.',
                    delay: '0.1s',
                  },
                  {
                    icon: 'fa-chart-line',
                    title: 'Growth Opportunities',
                    desc: 'Expand your business reach and grow with our expanding healthcare network.',
                    delay: '0.3s',
                  },
                  {
                    icon: 'fa-shield-alt',
                    title: 'Quality Assurance',
                    desc: 'Maintain high standards with our quality-focused healthcare approach.',
                    delay: '0.5s',
                  },
                  {
                    icon: 'fa-heart',
                    title: 'Community Impact',
                    desc: 'Make a positive impact on healthcare delivery in our community.',
                    delay: '0.7s',
                  },
                ].map((benefit, idx) => (
                  <div key={benefit.title} className="col-12 col-sm-6 col-lg-3 d-flex align-items-stretch wow fadeInUp" data-wow-delay={benefit.delay}>
                    <div className="benefit-card bg-white rounded-4 shadow-lg p-4 w-100 d-flex flex-column align-items-center justify-content-center text-center h-100" style={{transition: 'transform .3s, box-shadow .3s'}}>
                      <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '64px', height: '64px', boxShadow: '0 2px 12px rgba(111,51,72,0.15)', background:'#6f3348'}}>
                        <i className={`fa ${benefit.icon} text-white fa-2x`} loading="lazy"></i>
                      </div>
                      <h4 className="mb-2 fw-bold" style={{color:'#6f3348'}}>{benefit.title}</h4>
                      <p className="mb-0 small" style={{color:'#4B1438'}}>{benefit.desc}</p>
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
        </div>
      </div>
      <Footer />
    </>
    );
  };

  export default PartnerForm;