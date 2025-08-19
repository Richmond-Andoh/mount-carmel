import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const galleryImages = [
  '/images/about-1.jpg',
  '/images/about-2.jpg',
  '/images/about-3.jpg',
  '/images/carousel-1.jpg',
  '/images/carousel-2.jpg',
  '/images/feature.jpg',
  '/images/team-1.jpg',
  '/images/team-2.jpg',
  '/images/team-3.jpg',
  '/images/hospital-building.jpg',
  '/images/about-bg.jpg'
];

const MAIN_COLOR = '#6f3348';
const HERO_BG = '/images/about-bg.jpg'; // Use your preferred hero background image

const About = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <>
      <Header />
      {/* Page Hero Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s"
          style={{
            backgroundImage: `linear-gradient(rgba(111, 51, 72, 0.7), rgba(75, 20, 56, 0.7)), url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '600px',
            minHeight: '600px',
            color: 'white',
            border: 'none'
          }}>
          <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-3 text-white animated slideInDown" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb" style={{ background: 'transparent', color: 'white' }}>
                <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <motion.div className="col-lg-6" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="img-border mb-4">
                <img className="img-fluid rounded-4 shadow-lg" src="/images/about.jpg" alt="Mount Carmel Hospital" />
              </div>
              <div className="row g-3">
                {galleryImages.slice(0,4).map((img, idx) => (
                  <motion.div key={idx} className="col-6" whileHover={{ scale: 1.05, y: -6 }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                    <div className="position-relative overflow-hidden rounded-4 shadow-lg bg-white bg-opacity-10" style={{ height: '160px' }}>
                      <img src={img} alt="Gallery" className="w-100 h-100 object-cover" style={{ transition: 'transform 0.3s ease' }} />
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(45deg, rgba(111, 51, 72, 0.3), transparent)' }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="col-lg-6" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="h-100">
                <h6 className="section-title bg-white text-start" style={{ color: MAIN_COLOR }}>About Us</h6>
                <h1 className="display-6 mb-4" style={{ color: MAIN_COLOR }}>Mount Carmel Hospital & Fertility Center</h1>
                <p>Mount Carmel Hospital and Fertility Center is a leading healthcare institution in Ghana, dedicated to providing exceptional medical care with compassion and excellence. Established with a vision to transform healthcare delivery, we have been serving our community with state-of-the-art medical facilities and expert healthcare professionals.</p>
                <p>Our commitment to excellence extends beyond traditional healthcare services. We specialize in fertility treatments, maternity care, and comprehensive medical services, ensuring that every patient receives personalized care in a comfortable and supportive environment.</p>
                <a className="btn btn-primary py-3 px-5" style={{ backgroundColor: MAIN_COLOR, borderColor: MAIN_COLOR }} href="/services">Explore More</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Gallery Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-5 fw-bold" style={{ color: MAIN_COLOR }}>Our Facilities & Team</motion.h2>
          <div className="row g-4">
            {galleryImages.map((img, idx) => (
              <motion.div key={idx} className="col-6 col-md-4 col-lg-3" whileHover={{ scale: 1.05, y: -6 }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                <div className="position-relative overflow-hidden rounded-4 shadow-lg bg-white bg-opacity-10" style={{ height: '180px' }}>
                  <img src={img} alt="Gallery" className="w-100 h-100 object-cover" style={{ transition: 'transform 0.3s ease' }} />
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(45deg, rgba(111, 51, 72, 0.3), transparent)' }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision & Values Section with Parallax Background */}
      <div className="w-100 py-5" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Parallax Background Image & Main Color Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "linear-gradient(rgba(111, 51, 72, 0.85), rgba(75, 20, 56, 0.8)), url('/images/about-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}></div>
        <div className="w-100 px-0" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5 container mx-auto">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start" style={{ color: '#6f3348' }}>Our Mission</h6>
                <h1 className="display-6 mb-4" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Providing Exceptional Healthcare</h1>
                <p style={{ color: 'white' }}>Our mission is to provide comprehensive, high-quality healthcare services that improve the health and well-being of our patients and communities. We are committed to:</p>
                <ul className="mb-4" style={{ color: 'white' }}>
                  <li>Delivering patient-centered care with compassion and respect</li>
                  <li>Utilizing advanced medical technology and evidence-based practices</li>
                  <li>Maintaining the highest standards of medical excellence</li>
                  <li>Supporting families through their healthcare journey</li>
                  <li>Contributing to the advancement of medical knowledge</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start" style={{ color: '#6f3348' }}>Our Vision</h6>
                <h1 className="display-6 mb-4" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Leading Healthcare Innovation</h1>
                <p style={{ color: 'white' }}>We envision Mount Carmel Hospital as the premier healthcare institution in Ghana, recognized for:</p>
                <ul className="mb-4" style={{ color: 'white' }}>
                  <li>Excellence in medical care and patient outcomes</li>
                  <li>Innovation in healthcare delivery and technology</li>
                  <li>Leadership in fertility and reproductive medicine</li>
                  <li>Community health improvement and education</li>
                  <li>Partnerships that advance healthcare in Africa</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center" style={{ color: '#6f3348' }}>Our Values</h6>
            <h1 className="display-6 mb-4" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>The Foundation of Our Care</h1>
          </div>
          <div className="row g-4 mx-0">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3" style={{ background: 'transparent', transition: 'background 0.3s, color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#6f3348'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}>
                <div className="p-4">
                  <i className="fa fa-3x fa-heart mb-4" style={{ color: '#DAA520' }}></i>
                  <h5 className="mb-3" style={{ color: 'white' }}>Compassion</h5>
                  <p style={{ color: 'white' }}>We treat every patient with kindness, empathy, and understanding, recognizing the emotional aspects of healthcare.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3" style={{ background: 'transparent', transition: 'background 0.3s, color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#6f3348'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}>
                <div className="p-4">
                  <i className="fa fa-3x fa-star mb-4" style={{ color: '#DAA520' }}></i>
                  <h5 className="mb-3" style={{ color: 'white' }}>Excellence</h5>
                  <p style={{ color: 'white' }}>We maintain the highest standards of medical care, continuously improving our practices and outcomes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3" style={{ background: 'transparent', transition: 'background 0.3s, color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#6f3348'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}>
                <div className="p-4">
                  <i className="fa fa-3x fa-shield-alt mb-4" style={{ color: '#DAA520' }}></i>
                  <h5 className="mb-3" style={{ color: 'white' }}>Integrity</h5>
                  <p style={{ color: 'white' }}>We conduct ourselves with honesty, transparency, and ethical behavior in all our interactions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3" style={{ background: 'transparent', transition: 'background 0.3s, color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#6f3348'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}>
                <div className="p-4">
                  <i className="fa fa-3x fa-users mb-4" style={{ color: '#DAA520' }}></i>
                  <h5 className="mb-3" style={{ color: 'white' }}>Teamwork</h5>
                  <p style={{ color: 'white' }}>We collaborate effectively as a team, valuing each member's contribution to patient care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Our History</h6>
                <h1 className="display-6 mb-4">A Legacy of Care</h1>
                <p>Mount Carmel Hospital was founded with a vision to provide exceptional healthcare services to the people of Ghana. Our journey began with a simple yet powerful mission: to make quality healthcare accessible to all.</p>
                <p>Over the years, we have grown from a small medical facility to a comprehensive healthcare institution, expanding our services to include specialized fertility treatments, advanced maternity care, and a wide range of medical specialties.</p>
                <p>Today, we continue to build on our legacy of excellence, embracing new technologies and medical advancements while maintaining the compassionate care that has defined us from the beginning.</p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <motion.div
                className="img-border"
                initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateY: 10, boxShadow: '0 8px 32px rgba(111,51,72,0.25)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ perspective: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <img
                  className="img-fluid rounded-4 shadow-lg"
                  src="/images/mount-camel.jpg"
                  alt="Mount Carmel Hospital Building"
                  style={{ maxHeight: '340px', objectFit: 'cover', background: '#fff' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
  <div className="container-fluid fact py-5 pt-lg-0" style={{background: '#6f3348'}}>
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-users text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>5000+</h4>
                    <span>Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-baby text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>1000+</h4>
                    <span>Successful Births</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-user-md text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>50+</h4>
                    <span>Expert Doctors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
};

export default About;