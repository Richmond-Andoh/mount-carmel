import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Partners = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const partners = [
    {
      name: "Ghana Health Service",
      logo: "/images/partners/ghs-logo.png",
      description: "National healthcare service provider ensuring quality healthcare delivery across Ghana."
    },
    {
      name: "National Health Insurance Authority",
      logo: "/images/partners/nhis-logo.png", 
      description: "Government agency providing health insurance coverage to Ghanaian citizens."
    },
    {
      name: "Medical and Dental Council",
      logo: "/images/partners/mdc-logo.png",
      description: "Regulatory body ensuring professional standards in medical and dental practice."
    },
    {
      name: "Pharmacy Council",
      logo: "/images/partners/pc-logo.png",
      description: "Regulatory authority for pharmaceutical practice and drug safety in Ghana."
    }
  ];

  const benefits = [
    {
      icon: "fa fa-flask",
      title: "Advanced Research",
      description: "Access to cutting-edge medical research and treatments"
    },
    {
      icon: "fa fa-shield-alt", 
      title: "Quality Assurance",
      description: "Maintaining highest standards of healthcare"
    },
    {
      icon: "fa fa-users",
      title: "Expert Network",
      description: "Collaboration with healthcare experts worldwide"
    },
    {
      icon: "fa fa-chart-line",
      title: "Cost Efficiency",
      description: "Better healthcare at optimized costs"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown">Our Partners</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Partners</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Partnerships</h6>
            <h1 className="display-6 mb-4">Working Together for Better Healthcare</h1>
            <p className="mb-0">We collaborate with leading healthcare organizations and institutions to provide the best possible care for our patients.</p>
          </div>

          {/* Partners Grid */}
          <div className="row g-5 mb-5">
            {partners.map((partner, index) => (
              <div key={partner.name} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="service-item d-flex h-100 p-5">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                      <i className="fa fa-handshake text-white fa-2x"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="mb-3">{partner.name}</h4>
                    <p className="mb-4">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="row g-5 mb-5">
            <div className="col-12">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-5">Benefits of Our Partnerships</h3>
              </div>
            </div>
            
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="service-item d-flex h-100 p-5">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                      <i className={`${benefit.icon} text-white fa-2x`}></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4 className="mb-3">{benefit.title}</h4>
                    <p className="mb-4">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Statistics */}
          <div className="row g-5 mb-5">
            <div className="col-12">
              <div className="bg-primary rounded p-5 text-center text-white wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-5">Our Partnership Impact</h3>
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-hospital fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold">15+</h2>
                      <p className="mb-0">Partner Organizations</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-users fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold">10K+</h2>
                      <p className="mb-0">Patients Served</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-certificate fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold">100%</h2>
                      <p className="mb-0">Quality Standards</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-heart fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold">5+</h2>
                      <p className="mb-0">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Become a Partner CTA */}
          <div className="row g-5">
            <div className="col-12">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-4">Interested in Partnering with Us?</h3>
                <p className="mb-4">Join our network of healthcare partners and help us provide better healthcare services to our community.</p>
                <Link to="/partner-form" className="btn btn-primary btn-lg">
                  <i className="fa fa-handshake me-2"></i>Become a Partner
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="row g-5 mt-5">
            <div className="col-12">
              <div className="bg-light rounded p-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-4">
                  <div className="col-md-4 text-center">
                    <i className="fa fa-phone fa-2x text-primary mb-3"></i>
                    <h5>Call Us</h5>
                    <p className="mb-0">+233 30 393 9896</p>
                  </div>
                  <div className="col-md-4 text-center">
                    <i className="fa fa-envelope fa-2x text-primary mb-3"></i>
                    <h5>Email Us</h5>
                    <p className="mb-0">mountcarmelhospital@outlook.com</p>
                  </div>
                  <div className="col-md-4 text-center">
                    <i className="fa fa-map-marker-alt fa-2x text-primary mb-3"></i>
                    <h5>Visit Us</h5>
                    <p className="mb-0">Ashfoam Junction, Tema Com.25, Accra, Ghana</p>
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
};

export default Partners;
