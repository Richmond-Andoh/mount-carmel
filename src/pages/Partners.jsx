import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Small, self-contained count-up component that animates when visible
const AnimatedCounter = ({ end, duration = 1200, suffix = '', prefix = '' }) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const current = Math.floor(progress * end);
          setValue(current);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={spanRef}>{prefix}{value.toLocaleString()}{suffix}</span>
  );
};

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
      
      {/* Page Header - Modern Hero with Background Image, Overlay, and Animation */}
      <div className="container-fluid page-header position-relative py-5 mb-5" style={{
        background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`,
        minHeight: '440px',
        borderRadius: '0 0 32px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        overflow: 'hidden'
      }}>
        {/* Animated Gradient Overlay & Blur */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(120deg, rgba(111,34,72,0.82) 0%, rgba(168,92,122,0.65) 60%, rgba(0,0,0,0.55) 100%)',
          backdropFilter: 'blur(4px)',
          zIndex: 1,
          animation: 'gradientMove 8s linear infinite alternate'
        }}></div>
        {/* Floating Partner Icons */}
        <div className="position-absolute w-100 h-100" style={{zIndex:2, pointerEvents:'none'}}>
          <i className="fa fa-handshake" style={{position:'absolute',top:'18%',left:'8%',fontSize:'2.8rem',color:'#fff',opacity:0.18,animation:'floatIcon 4s ease-in-out infinite alternate'}}></i>
          <i className="fa fa-users" style={{position:'absolute',top:'60%',left:'12%',fontSize:'2.2rem',color:'#fff',opacity:0.14,animation:'floatIcon 5s 1.2s ease-in-out infinite alternate'}}></i>
          <i className="fa fa-flask" style={{position:'absolute',top:'30%',right:'10%',fontSize:'2.6rem',color:'#fff',opacity:0.16,animation:'floatIcon 3.5s 0.7s ease-in-out infinite alternate'}}></i>
          <i className="fa fa-shield-alt" style={{position:'absolute',top:'70%',right:'14%',fontSize:'2.4rem',color:'#fff',opacity:0.13,animation:'floatIcon 4.5s 0.3s ease-in-out infinite alternate'}}></i>
        </div>
        <div className="container py-5 position-relative" style={{zIndex:3}}>
          <h1 className="display-3 text-white fw-bold mb-3" style={{letterSpacing: '2px', animation: 'fadeSlideIn 1.2s cubic-bezier(.77,0,.18,1)'}}>
            Our Partners
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb animated" style={{animation: 'fadeSlideIn 1.6s 0.3s cubic-bezier(.77,0,.18,1) both'}}>
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Partners</li>
            </ol>
          </nav>
        </div>
        <style>{`
          @keyframes fadeSlideIn {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          @keyframes floatIcon {
            0% { transform: translateY(0px) scale(1); }
            100% { transform: translateY(-18px) scale(1.08); }
          }
        `}</style>
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
              <div key={partner.name} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`} data-wow-duration="0.6s">
                <div className="service-item d-flex h-100 p-5 rounded-3 transition-all hover-lift shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{width: '60px', height: '60px'}}>
                      <i className="fa fa-handshake text-white fa-2x animate-float"></i>
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
              <div key={benefit.title} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`} data-wow-duration="0.6s">
                <div className="service-item d-flex h-100 p-5 rounded-3 transition-all hover-lift shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{width: '60px', height: '60px'}}>
                      <i className={`${benefit.icon} text-white fa-2x animate-float`}></i>
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
              <div className="bg-primary rounded-3 p-5 text-center text-white wow fadeInUp shadow-sm" data-wow-delay="0.1s">
                <h3 className="mb-5">Our Partnership Impact</h3>
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-hospital fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold"><AnimatedCounter end={15} suffix="+" /></h2>
                      <p className="mb-0">Partner Organizations</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-users fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold"><AnimatedCounter end={10} suffix="K+" /></h2>
                      <p className="mb-0">Patients Served</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-certificate fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold"><AnimatedCounter end={100} suffix="%" /></h2>
                      <p className="mb-0">Quality Standards</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-heart fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold"><AnimatedCounter end={5} suffix="+" /></h2>
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
                <Link to="/partner-form" className="btn btn-primary btn-lg transition-transform hover-scale">
                  <i className="fa fa-handshake me-2"></i>Become a Partner
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="row g-5 mt-5">
            <div className="col-12">
              <div className="bg-light rounded-3 p-5 wow fadeInUp shadow-sm transition-all hover-lift" data-wow-delay="0.1s">
                <div className="row g-4">
                  <div className="col-md-4 text-center py-3">
                    <i className="fa fa-phone fa-2x text-primary mb-3 animate-float"></i>
                    <h5>Call Us</h5>
                    <p className="mb-0">+233 30 393 9896</p>
                  </div>
                  <div className="col-md-4 text-center py-3">
                    <i className="fa fa-envelope fa-2x text-primary mb-3 animate-float"></i>
                    <h5>Email Us</h5>
                    <p className="mb-0">mountcarmelhospital@outlook.com</p>
                  </div>
                  <div className="col-md-4 text-center py-3">
                    <i className="fa fa-map-marker-alt fa-2x text-primary mb-3 animate-float"></i>
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
