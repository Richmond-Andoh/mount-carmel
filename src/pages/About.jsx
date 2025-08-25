import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCarousel from '../components/TeamCarousel';

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
      

      {/* Hero Section with Background Image and Overlay */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s" style={{
        background: `linear-gradient(rgba(111,34,72,0.85), rgba(111,34,72,0.85)), url('/images/about-bg.jpg') center/cover no-repeat`,
        position: 'relative',
        borderRadius: '0 0 32px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        backgroundAttachment: 'fixed',
        height: '400px'
      }}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown fw-bold" style={{letterSpacing: '2px'}}>About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>



        {/* About Section - Modernized with Animation and Image */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                <div className="img-border rounded-4 shadow-lg overflow-hidden">
                  <img className="img-fluid" src="/images/about-1.jpg" alt="Mount Carmel Hospital" style={{borderRadius: '24px', objectFit: 'cover', minHeight: '320px'}} />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.5s">
                <div className="h-100 p-4 rounded-4 bg-white shadow-sm">
                  <h6 className="section-title bg-white text-start pe-3" style={{color: '#6f2248'}}>About Us</h6>
                  <h1 className="display-6 mb-4 fw-bold">Mount Carmel Hospital & Fertility Center</h1>
                  <p className="lead">Mount Carmel Hospital and Fertility Center is a leading healthcare institution in Ghana, dedicated to providing exceptional medical care with compassion and excellence. Established with a vision to transform healthcare delivery, we have been serving our community with state-of-the-art medical facilities and expert healthcare professionals.</p>
                  <p>Our commitment to excellence extends beyond traditional healthcare services. We specialize in fertility treatments, maternity care, and comprehensive medical services, ensuring that every patient receives personalized care in a comfortable and supportive environment.</p>
                  <a className="btn btn-primary py-3 px-5 rounded-pill shadow" href="/services">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jumbotron Section */}
        <section className="jumbotron-section py-5" style={{background: 'linear-gradient(90deg, #6f2248 0%, #a85c7a 100%)', color: '#fff'}}>
          <div className="container text-center">
            <h1 className="display-4 fw-bold mb-3 wow fadeInDown" data-wow-delay="0.1s">Experience Excellence in Healthcare</h1>
            <p className="lead mb-4 wow fadeInUp" data-wow-delay="0.2s">At Mount Carmel Hospital & Fertility Center, we combine compassion, innovation, and expertise to deliver world-class medical services for you and your family.</p>
            <a href="/appointment" className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow wow fadeInUp" data-wow-delay="0.3s" style={{color: '#6f2248', fontWeight: 'bold'}}>Book an Appointment</a>
          </div>
        </section>



      {/* Mission & Vision - Parallax Background Section 1 (Full Width, Overflow Fix) */}
      <div className="w-100 py-5" style={{
        background: `linear-gradient(rgba(111,34,72,0.7), rgba(111,34,72,0.7)), url('/images/feature.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        borderRadius: 0,
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        transform: 'translateX(-50%)',
        overflowX: 'hidden',
      }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="h-100 p-4 rounded-4 bg-white shadow-sm">
                <h6 className="section-title bg-white text-start pe-3" style={{color: '#6f2248'}}>Our Mission</h6>
                <h1 className="display-6 mb-4 fw-bold">Providing Exceptional Healthcare</h1>
                <p>Our mission is to provide comprehensive, high-quality healthcare services that improve the health and well-being of our patients and communities. We are committed to:</p>
                <ul className="mb-4">
                  <li>Delivering patient-centered care with compassion and respect</li>
                  <li>Utilizing advanced medical technology and evidence-based practices</li>
                  <li>Maintaining the highest standards of medical excellence</li>
                  <li>Supporting families through their healthcare journey</li>
                  <li>Contributing to the advancement of medical knowledge</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.5s">
              <div className="img-border rounded-4 shadow-lg overflow-hidden mb-4">
                <img className="img-fluid" src="/images/feature.jpg" alt="Mission" style={{borderRadius: '24px', objectFit: 'cover', minHeight: '320px'}} />
              </div>
              <div className="h-100 p-4 rounded-4 bg-white shadow-sm mt-3">
                <h6 className="section-title bg-white text-start pe-3" style={{color: '#6f2248'}}>Our Vision</h6>
                <h1 className="display-6 mb-4 fw-bold">Leading Healthcare Innovation</h1>
                <p>We envision Mount Carmel Hospital as the premier healthcare institution in Ghana, recognized for:</p>
                <ul className="mb-4">
                  <li>Excellence in medical care and patient outcomes</li>
                  <li>Innovation in healthcare delivery and technology</li>
                  <li>Leadership in fertility and reproductive medicine</li>
                  <li>Community health improvement and education</li>
                  <li>Partnerships that advance healthcare in Africa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Values Section - Modern Cards with Animation */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center px-3" style={{color: '#6f2248'}}>Our Values</h6>
            <h1 className="display-6 mb-4">The Foundation of Our Care</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow bounceIn" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <img src="/images/about-2.jpg" alt="Compassion" className="mb-3 rounded-circle" style={{width: '64px', height: '64px', objectFit: 'cover'}} />
                  <h5 className="mb-3">Compassion</h5>
                  <p>We treat every patient with kindness, empathy, and understanding, recognizing the emotional aspects of healthcare.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow bounceIn" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <img src="/images/about-3.jpg" alt="Excellence" className="mb-3 rounded-circle" style={{width: '64px', height: '64px', objectFit: 'cover'}} />
                  <h5 className="mb-3">Excellence</h5>
                  <p>We maintain the highest standards of medical care, continuously improving our practices and outcomes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow bounceIn" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <img src="/images/feature.jpg" alt="Integrity" className="mb-3 rounded-circle" style={{width: '64px', height: '64px', objectFit: 'cover'}} />
                  <h5 className="mb-3">Integrity</h5>
                  <p>We conduct ourselves with honesty, transparency, and ethical behavior in all our interactions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow bounceIn" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <img src="/images/team-1.jpg" alt="Teamwork" className="mb-3 rounded-circle" style={{width: '64px', height: '64px', objectFit: 'cover'}} />
                  <h5 className="mb-3">Teamwork</h5>
                  <p>We collaborate effectively as a team, valuing each member's contribution to patient care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* History Section - Parallax Background Section 2 (Full Width, Overflow Fix) */}
      <div className="w-100 py-5" style={{
        background: `linear-gradient(rgba(111,34,72,0.7), rgba(111,34,72,0.7)), url('/images/carousel-2.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        borderRadius: 0,
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        transform: 'translateX(-50%)',
        overflowX: 'hidden',
      }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="h-100 p-4 rounded-4 bg-white shadow-sm">
                <h6 className="section-title bg-white text-start pe-3" style={{color: '#6f2248'}}>Our History</h6>
                <h1 className="display-6 mb-4 fw-bold">A Legacy of Care</h1>
                <p>Mount Carmel Hospital was founded with a vision to provide exceptional healthcare services to the people of Ghana. Our journey began with a simple yet powerful mission: to make quality healthcare accessible to all.</p>
                <p>Over the years, we have grown from a small medical facility to a comprehensive healthcare institution, expanding our services to include specialized fertility treatments, advanced maternity care, and a wide range of medical specialties.</p>
                <p>Today, we continue to build on our legacy of excellence, embracing new technologies and medical advancements while maintaining the compassionate care that has defined us from the beginning.</p>
              </div>
            </div>
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.5s">
              <div className="img-border rounded-4 shadow-lg overflow-hidden">
                <img className="img-fluid" src="/images/about-bg.jpg" alt="Mount Carmel Hospital Building" style={{borderRadius: '24px', objectFit: 'cover', minHeight: '320px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Team Carousel Section - Modern Auto-Scrolling */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #f8f9fa, #fff)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{color: '#6f2248'}}>Meet Our Team</h2>
            <p className="lead">Our dedicated professionals are here to serve you.</p>
          </div>
          <TeamCarousel />
        </div>
      </section>

      {/* Stats Section - Modernized */}
      <div className="container-fluid fact py-5 pt-lg-0" style={{background: 'linear-gradient(#6f2248)'}}>
        <div className="container py-5 pt-lg-0">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white shadow-lg rounded-4 d-flex align-items-center h-100 p-5" style={{minHeight: '180px'}}>
                <div className="d-flex align-items-center">
                  <img src="/images/testimonial.jpg" alt="Happy Patients" className="rounded-circle me-3" style={{width: '56px', height: '56px', objectFit: 'cover'}} />
                  <div>
                    <h4 className="fw-bold">5000+</h4>
                    <span>Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-white shadow-lg rounded-4 d-flex align-items-center h-100 p-5" style={{minHeight: '180px'}}>
                <div className="d-flex align-items-center">
                  <img src="/images/carousel-1.jpg" alt="Successful Births" className="rounded-circle me-3" style={{width: '56px', height: '56px', objectFit: 'cover'}} />
                  <div>
                    <h4 className="fw-bold">1000+</h4>
                    <span>Successful Births</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-white shadow-lg rounded-4 d-flex align-items-center h-100 p-5" style={{minHeight: '180px'}}>
                <div className="d-flex align-items-center">
                  <img src="/images/team-2.jpg" alt="Expert Doctors" className="rounded-circle me-3" style={{width: '56px', height: '56px', objectFit: 'cover'}} />
                  <div>
                    <h4 className="fw-bold">50+</h4>
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
  );
};

export default About; 