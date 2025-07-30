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
      
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown">Become a Partner</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Partner Form</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Partner Form Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Partnership</h6>
            <h1 className="display-6 mb-4">Join Our Network</h1>
            <p className="mb-0">Partner with Mount Carmel Hospital to provide better healthcare services to our community.</p>
          </div>

          <div className="row g-5 justify-content-center">
            <div className="col-lg-8">
              {submitted ? (
                <div className="bg-light rounded p-5 text-center wow fadeInUp" data-wow-delay="0.1s">
                  <i className="fa fa-check-circle fa-4x text-primary mb-4"></i>
                  <h2 className="text-primary mb-3">Thank You!</h2>
                  <p className="mb-4">Thank you for your interest in partnering with us. We will contact you soon to discuss the partnership opportunities.</p>
                  <Link to="/" className="btn btn-primary">
                    <i className="fa fa-home me-2"></i>Go Back to Home
                  </Link>
                </div>
              ) : (
                <div className="bg-light rounded p-5 wow fadeInUp" data-wow-delay="0.1s">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {error && (
                        <div className="col-12">
                          <div className="alert alert-danger" role="alert">
                            <i className="fa fa-exclamation-triangle me-2"></i>
                            {error}
                          </div>
                        </div>
                      )}
                      
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control border-0 bg-white px-4" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name" 
                            required
                          />
                          <label htmlFor="name">Full Name</label>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input 
                            type="email" 
                            className="form-control border-0 bg-white px-4" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email" 
                            required
                          />
                          <label htmlFor="email">Email Address</label>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control border-0 bg-white px-4" 
                            id="organization" 
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Organization" 
                            required
                          />
                          <label htmlFor="organization">Organization/Company</label>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input 
                            type="tel" 
                            className="form-control border-0 bg-white px-4" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number" 
                            required
                          />
                          <label htmlFor="phone">Phone Number</label>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea 
                            className="form-control border-0 bg-white px-4 py-3" 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message" 
                            style={{height: '150px'}}
                            required
                          ></textarea>
                          <label htmlFor="message">Partnership Goals & Message</label>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <button 
                          className="btn btn-primary w-100 py-3" 
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

          {/* Partnership Benefits */}
          <div className="row g-5 mt-5">
            <div className="col-12">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-5">Why Partner With Us?</h3>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-users text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Network Access</h4>
                  <p className="mb-4">Connect with our extensive network of healthcare professionals and patients.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-chart-line text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Growth Opportunities</h4>
                  <p className="mb-4">Expand your business reach and grow with our expanding healthcare network.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-shield-alt text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Quality Assurance</h4>
                  <p className="mb-4">Maintain high standards with our quality-focused healthcare approach.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-heart text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Community Impact</h4>
                  <p className="mb-4">Make a positive impact on healthcare delivery in our community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PartnerForm; 