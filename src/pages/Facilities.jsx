import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('departments');

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const departments = [
    {
      name: "Fertility Center",
      image: "/images/gallery/fertility-center.jpg",
      description: "State-of-the-art fertility treatment center with advanced reproductive technology.",
      features: [
        "IVF Treatment",
        "Fertility Counseling",
        "Advanced Lab Services",
        "Specialized Care Teams"
      ]
    },
    {
      name: "Emergency Department",
      image: "/images/gallery/emergency.jpg",
      description: "24/7 emergency care facility equipped to handle all medical emergencies.",
      features: [
        "24/7 Emergency Services",
        "Rapid Response Team",
        "Advanced Life Support",
        "Critical Care Units"
      ]
    },
    {
      name: "Diagnostic Center",
      image: "/images/gallery/diagnostic.jpeg",
      description: "Comprehensive diagnostic services with modern imaging technology.",
      features: [
        "Advanced Imaging",
        "Laboratory Services",
        "Quick Results",
        "Expert Analysis"
      ]
    }
  ];

  const infrastructure = [
    {
      name: "Operation Theaters",
      image: "/images/gallery/surgical.jpeg",
      description: "Modern operation theaters equipped with latest surgical technology.",
      features: [
        "Advanced Medical Equipment",
        "Sterile Environment",
        "Digital Integration",
        "Recovery Rooms"
      ]
    },
    {
      name: "Patient Facilities",
      image: "/images/gallery/room-facility.jpg",
      description: "Comfortable patient areas designed for recovery and healing.",
      features: [
        "Private Rooms",
        "Modern Amenities",
        "24/7 Nursing Care",
        "Family Accommodation"
      ]
    },
    {
      name: "Hospital Infrastructure",
      image: "/images/gallery/01.jpg",
      description: "Modern hospital building with state-of-the-art facilities.",
      features: [
        "Modern Architecture",
        "Spacious Environment",
        "Easy Navigation",
        "Parking Facilities"
      ]
    }
  ];

  return (
    <>
      <Header />
  {/* Local styles: modern card hover, focus, parallax, carousel and responsive tweaks (burgundy palette) */}
  <style>{`
        .service-item {
          background: #ffffff;
          border-radius: 14px;
          transition: transform .28s ease, box-shadow .28s ease, background .28s ease;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .service-item:hover,
        .service-item:focus-within {
          transform: translateY(-8px);
          box-shadow: 0 12px 36px rgba(111,34,72,0.12);
          background: linear-gradient(90deg, #6f2248, #a85c7a);
          color: #fff;
        }

        .service-item .bg-primary {
          background: #6f2248 !important;
          transition: background .28s ease, transform .28s ease;
        }

        .service-item:hover .bg-primary,
        .service-item:focus-within .bg-primary {
          background: linear-gradient(90deg, #6f2248, #a85c7a) !important;
        }

        .service-item h4,
        .service-item p,
        .service-item ul li {
          transition: color .28s ease;
        }

        .service-item:hover h4,
        .service-item:hover p,
        .service-item:hover ul li {
          color: #fff !important;
        }

        .service-item ul li i {
          color: #6f2248;
          transition: color .28s ease;
        }

        .service-item:hover ul li i {
          color: rgba(255,255,255,0.95) !important;
        }

        /* Images inside featured sections */
        .img-border img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        /* Focus visible for keyboard users */
        .btn:focus-visible {
          outline: 3px solid rgba(111,34,72,0.24);
          outline-offset: 2px;
        }

        /* Parallax hero adjustments - full width handled inline */
        .parallax-content {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .gallery-grid {
          display: none; /* replaced by carousel */
        }

        /* Carousel styles */
        .carousel-wrap { overflow: hidden; }
  .carousel-track { display:flex; gap:16px; align-items:stretch; width:200%; animation: scroll-left 22s linear infinite; }
        .carousel-item { flex: 0 0 calc(25% - 16px); box-sizing:border-box; }
        .carousel-item img { width:100%; height:220px; object-fit:cover; border-radius:12px; display:block; }

        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          display:flex;
          align-items:center;
          justify-content:center;
          background: linear-gradient(180deg, rgba(111,34,72,0.0), rgba(0,0,0,0.35));
          color: #fff;
          opacity: 0;
          transition: opacity .28s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        /* Override bootstrap primary color on this page to match About palette */
        .bg-primary { background: linear-gradient(90deg, #6f2248, #a85c7a) !important; }
      `}</style>

      {/* Page Header - match About page styling with background image + overlay */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s" style={{
        background: `linear-gradient(rgba(111,34,72,0.85), rgba(111,34,72,0.85)), url('/images/about-bg.jpg') center/cover no-repeat`,
        position: 'relative',
        borderRadius: '0 0 32px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        backgroundAttachment: 'fixed',
        height: '400px'
      }}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown fw-bold" style={{letterSpacing: '2px'}}>Our Facilities</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Facilities</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Facilities</h6>
            <h1 className="display-6 mb-4">World-Class Hospital Infrastructure</h1>
            <p className="mb-0">Experience healthcare excellence in our state-of-the-art facilities, designed to provide the highest quality medical care in a comfortable and healing environment.</p>
          </div>

          {/* Tabs */}
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn ${activeTab === 'departments' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab('departments')}
              >
                <i className="fa fa-hospital me-2"></i>Departments
              </button>
              <button
                type="button"
                className={`btn ${activeTab === 'infrastructure' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab('infrastructure')}
              >
                <i className="fa fa-building me-2"></i>Infrastructure
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="row g-5">
            {activeTab === 'departments' ? (
              departments.map((dept, index) => (
                <div key={dept.name} className="col-lg-4 col-md-6" data-wow-delay={`${0.1 + index * 0.1}s`}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="service-item d-flex h-100 p-5" tabIndex={0}>
                      <div className="flex-shrink-0">
                        <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                          <i className="fa fa-hospital text-white fa-2x"></i>
                        </div>
                      </div>
                      <div className="ms-4">
                        <h4 className="mb-3">{dept.name}</h4>
                        <p className="mb-4">{dept.description}</p>
                        <ul className="list-unstyled">
                          {dept.features.map((feature, i) => (
                            <li key={i} className="mb-2">
                              <i className="fa fa-check text-primary me-2"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))
            ) : (
              infrastructure.map((item, index) => (
                <div key={item.name} className="col-lg-4 col-md-6" data-wow-delay={`${0.1 + index * 0.1}s`}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="service-item d-flex h-100 p-5" tabIndex={0}>
                      <div className="flex-shrink-0">
                        <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                          <i className="fa fa-building text-white fa-2x"></i>
                        </div>
                      </div>
                      <div className="ms-4">
                        <h4 className="mb-3">{item.name}</h4>
                        <p className="mb-4">{item.description}</p>
                        <ul className="list-unstyled">
                          {item.features.map((feature, i) => (
                            <li key={i} className="mb-2">
                              <i className="fa fa-check text-primary me-2"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))
            )}
          </div>

          {/* Parallax Fertility Spotlight */}
          <motion.section
            className="parallax-hero my-5"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{duration:0.8}}
            style={{
              background: `linear-gradient(rgba(111,34,72,0.35), rgba(111,34,72,0.55)), url('/images/gallery/fertility-center.jpg') center/cover no-repeat`,
              backgroundAttachment: 'fixed',
              borderRadius: 0,
              width: '100vw',
              position: 'relative',
              left: '50%',
              right: '50%',
              transform: 'translateX(-50%)',
              overflowX: 'hidden'
            }}
          >
            <div className="parallax-content text-center">
              <motion.h2 initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.1}}>Fertility Care Spotlight</motion.h2>
              <motion.p className="lead" initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.2}}>Our fertility center blends compassionate care with advanced reproductive technology to guide you on your family-building journey.</motion.p>

              <div className="row mt-4">
                <div className="col-md-4">
                  <motion.div initial={{scale:0.92,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.25}} className="bg-white text-center p-4 rounded">
                    <h3 className="mb-0">95%</h3>
                    <small>Patient Satisfaction</small>
                  </motion.div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <motion.div initial={{scale:0.92,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.35}} className="bg-white text-center p-4 rounded">
                    <h3 className="mb-0">20+</h3>
                    <small>Years Experience</small>
                  </motion.div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <motion.div initial={{scale:0.92,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.45}} className="bg-white text-center p-4 rounded">
                    <h3 className="mb-0">3000+</h3>
                    <small>Successful Treatments</small>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Gallery Section */}
          <div className="mt-5">
            <div className="text-center mb-4">
              <h3>Facilities Gallery</h3>
              <p className="mb-0">Explore our hospital through recent images showcasing care, comfort, and technology.</p>
            </div>
            <div className="carousel-wrap">
              <div className="carousel-track" aria-hidden="false">
                {["01.jpg","02.jpg","04.jpg","diagnostic.jpeg","emergency.jpg","fertility-center.jpg","room-facility.jpg","surgical.jpeg"].concat(["01.jpg","02.jpg","04.jpg","diagnostic.jpeg","emergency.jpg","fertility-center.jpg","room-facility.jpg","surgical.jpeg"]).map((img, i) => (
                  <div key={i} className="carousel-item">
                    <motion.div whileHover={{scale:1.02}} transition={{duration:0.28}} className="gallery-item">
                      <img src={`/images/gallery/${img}`} alt={`gallery-${i}`} loading="lazy" />
                      <div className="gallery-overlay">
                        <div className="text-center">
                          <h5 className="mb-1">{i % 2 === 0 ? 'Medical Care' : 'Patient Comfort'}</h5>
                          <small>View Details</small>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="row g-5 mt-5">
            <div className="col-12">
              <div className="bg-primary rounded p-5 text-center text-white wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-4">Experience Our Facilities</h3>
                <p className="mb-4">Schedule a visit to our hospital and experience our world-class facilities firsthand. Our team is ready to provide you with exceptional care.</p>
                <Link to="/visitation-form" className="btn btn-light">
                  <i className="fa fa-calendar me-2"></i>Schedule a Visit
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="row g-5 mt-5">
            <div className="col-12">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-5">Why Choose Our Facilities?</h3>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-shield-alt text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Safety First</h4>
                  <p className="mb-4">State-of-the-art safety protocols and emergency systems.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-cogs text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Modern Equipment</h4>
                  <p className="mb-4">Latest medical technology and equipment for accurate diagnosis.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-users text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Expert Staff</h4>
                  <p className="mb-4">Highly trained medical professionals and support staff.</p>
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
                  <h4 className="mb-3">Patient Comfort</h4>
                  <p className="mb-4">Comfortable and welcoming environment for patients and families.</p>
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

export default Facilities; 