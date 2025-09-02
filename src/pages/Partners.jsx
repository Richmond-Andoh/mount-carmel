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

  const insuranceCompanies = [
    { name: "Apex Mutual Health", logo: "/images/partners/apex-mutual.png" },
    { name: "Nationwide Insurance", logo: "/images/partners/nationwide.png" },
    { name: "Acacia Insurance", logo: "/images/partners/acacia.png" },
    { name: "Phoenix Insurance", logo: "/images/partners/phoenix.png" },
    { name: "Glico Insurance", logo: "/images/partners/glico.png" },
    { name: "Premier Health Insurance", logo: "/images/partners/premier-health.png" },
    { name: "Liberty Medical Health", logo: "/images/partners/liberty-medical.png" },
    { name: "Kaiser Global Health Insurance Limited", logo: "/images/partners/kaiser-global.png" },
    { name: "Vitality Health Insurance", logo: "/images/partners/vitality-health.png" },
    { name: "Metropolitan Health Insurance", logo: "/images/partners/metropolitan.png" }
  ];

  const pharmaceuticalCompanies = [
    { name: "Doty Pharmacy", logo: "/images/partners/doty-pharmacy.png" },
    { name: "East Cantonment Pharmacy", logo: "/images/partners/east-cantonment.png" },
    { name: "Ernest Chemist", logo: "/images/partners/ernest-chemist.png" },
    { name: "Mega Life Science", logo: "/images/partners/mega-life.png" },
    { name: "Tobinco/Entrance Pharmaceuticals", logo: "/images/partners/tobinco.png" },
    { name: "Worldwide Pharmacy", logo: "/images/partners/worldwide.png" },
    { name: "Gokals Pharmacy", logo: "/images/partners/gokals.png" },
    { name: "Lymens Pharmaceuticals", logo: "/images/partners/lymens.png" },
    { name: "Wayne Health Products", logo: "/images/partners/wayne-health.png" },
    { name: "Oak Brothers Ltd", logo: "/images/partners/oak-brothers.png" },
    { name: "Kosak Ventures", logo: "/images/partners/kosak.png" },
    { name: "Capa Chemist", logo: "/images/partners/capa.png" },
    { name: "Kofikorm Pharmacy", logo: "/images/partners/kofikorm.png" },
    { name: "Top Up Pharmacy", logo: "/images/partners/top-up.png" }
  ];

  const governmentPartners = [
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
      
      {/* Page Header - Modern Hero with Background Image, Overlay, and Animation (brand) */}
      <div className="container-fluid page-header position-relative py-5" style={{
        background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`,
        minHeight: '440px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        overflow: 'hidden'
      }}>
        {/* Animated Gradient Overlay & Blur */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(120deg, rgba(75,20,56,0.82) 0%, rgba(111,51,72,0.65) 60%, rgba(0,0,0,0.55) 100%)',
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

      {/* Partners Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '800px'}}>
            <h6 className="section-title bg-white text-center px-3" style={{color:'#6f3348'}}>Partnerships</h6>
            <h1 className="display-6 mb-4">Working Together for Better Healthcare</h1>
            <p className="mb-0">We collaborate with leading healthcare organizations, insurance companies, and pharmaceutical partners to provide comprehensive care for our patients.</p>
          </div>

          {/* Insurance Companies Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="bg-light rounded-3 p-5 wow fadeInUp shadow-sm" data-wow-delay="0.1s">
                <div className="text-center mb-4">
                  <h3 className="mb-3" style={{color:'#6f3348'}}>
                    <i className="fa fa-shield-alt me-2"></i>
                    Insurance Companies MCHFC Works With
                  </h3>
                  <p className="lead mb-4">MCHFC is an accredited service provider for major private health insurance companies</p>
                </div>
                <div className="row g-4">
                  {insuranceCompanies.map((company, index) => (
                    <div key={company.name} className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.05}s`}>
                      <div className="insurance-card text-center p-3 bg-white rounded-3 shadow-sm h-100 transition-all hover-lift">
                        <div className="insurance-logo mb-3" style={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <i className="fa fa-shield-alt fa-2x" style={{color:'#6f3348'}}></i>
                        </div>
                        <h6 className="mb-0 small fw-semibold" style={{fontSize: '0.85rem', lineHeight: '1.2'}}>{company.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pharmaceutical Companies Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="rounded-3 p-5 wow fadeInUp shadow-sm text-white" data-wow-delay="0.2s" style={{background: 'linear-gradient(135deg, #6f3348 0%, #4B1438 100%)'}}>
                <div className="text-center mb-4">
                  <h3 className="mb-3 text-white">
                    <i className="fa fa-pills me-2"></i>
                    Pharmaceutical Companies on Our Portfolio
                  </h3>
                  <p className="lead mb-4 text-white opacity-75">Trusted pharmaceutical partners ensuring quality medication and healthcare products</p>
                </div>
                <div className="row g-4">
                  {pharmaceuticalCompanies.map((company, index) => (
                    <div key={company.name} className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.05}s`}>
                      <div className="pharmacy-card text-center p-3 bg-white rounded-3 shadow-sm h-100 transition-all hover-lift">
                        <div className="pharmacy-logo mb-3" style={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <i className="fa fa-prescription-bottle-alt fa-2x" style={{color:'#6f3348'}}></i>
                        </div>
                        <h6 className="mb-0 small fw-semibold text-dark" style={{fontSize: '0.85rem', lineHeight: '1.2'}}>{company.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Government Partners Grid */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="text-center mb-4 wow fadeInUp" data-wow-delay="0.3s">
                <h3 className="mb-3" style={{color:'#6f3348'}}>
                  <i className="fa fa-university me-2"></i>
                  Government & Regulatory Partners
                </h3>
                <p className="mb-4">Collaborating with regulatory bodies to maintain the highest standards of healthcare</p>
              </div>
              <div className="row g-4">
                {governmentPartners.map((partner, index) => (
                  <div key={partner.name} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`} data-wow-duration="0.6s">
                    <div className="service-item d-flex h-100 p-4 rounded-3 transition-all hover-lift shadow-sm border">
                      <div className="flex-shrink-0">
                        <div className="rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{width: '60px', height: '60px', background:'#6f3348'}}>
                          <i className="fa fa-handshake text-white fa-2x animate-float"></i>
                        </div>
                      </div>
                      <div className="ms-4">
                        <h5 className="mb-3">{partner.name}</h5>
                        <p className="mb-0 text-muted">{partner.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                    <div className="rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{width: '60px', height: '60px', background:'#6f3348'}}>
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
              <div className="rounded-3 p-5 text-center text-white wow fadeInUp shadow-sm" data-wow-delay="0.4s" style={{background:'#6f3348'}}>
                <h3 className="mb-5">Our Partnership Impact</h3>
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-shield-alt fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold"><AnimatedCounter end={10} suffix="" /></h2>
                      <p className="mb-0">Insurance Partners</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-prescription-bottle-alt fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold"><AnimatedCounter end={14} suffix="" /></h2>
                      <p className="mb-0">Pharmaceutical Partners</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-university fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold"><AnimatedCounter end={4} suffix="" /></h2>
                      <p className="mb-0">Government Partners</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-item">
                      <i className="fa fa-users fa-3x mb-3"></i>
                      <h2 className="display-4 fw-bold"><AnimatedCounter end={10} suffix="K+" /></h2>
                      <p className="mb-0">Patients Served</p>
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
                <Link to="/partner-form" className="btn brand-btn btn-lg transition-transform hover-scale">
                  <i className="fa fa-handshake me-2"></i>Become a Partner
                </Link>
                <style>{`
                  .brand-btn { background: #6f3348; border-color: #6f3348; color: #fff; }
                  .brand-btn:hover { background: #4B1438; border-color: #4B1438; color: #fff; }
                `}</style>
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

      <style>{`
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        .insurance-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(111,51,72,0.2) !important;
        }
        .pharmacy-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
        }
        .insurance-card, .pharmacy-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .counter-item {
          transition: all 0.3s ease;
        }
        .counter-item:hover {
          transform: scale(1.05);
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .service-item:hover {
          transform: translateY(-2px);
        }
        .insurance-logo, .pharmacy-logo {
          transition: all 0.3s ease;
        }
        .insurance-card:hover .insurance-logo i,
        .pharmacy-card:hover .pharmacy-logo i {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>

      <Footer />
    </>
  );
};

export default Partners;
