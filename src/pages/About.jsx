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
      <div 
        className="container-fluid page-header py-5 wow fadeIn relative shadow-lg bg-cover bg-center bg-no-repeat bg-fixed" 
        data-wow-delay="0.1s" 
        style={{ 
          backgroundImage: `url('/images/about-bg.jpg')`,
          height: '400px'
        }}
      >
        <div className="absolute inset-0 bg-mount-carmel-primary/85"></div>
        <div className="container py-5 relative">
          <h1 className="display-3 text-white animated slideInDown fw-bold tracking-wider">About Us</h1>
        </div>
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

        {/* About Section - Modernized with Animation and Image */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                <div className="img-border rounded-2xl shadow-lg overflow-hidden">
                  <img className="img-fluid w-full object-cover min-h-[320px]" src="/images/about-1.jpg" alt="Mount Carmel Hospital" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.5s">
                <div className="h-100 p-4 rounded-2xl bg-white shadow-sm">
                  <h6 className="section-title bg-white text-start text-mount-carmel-primary pe-3">About Us</h6>
                  <h1 className="display-6 mb-4 fw-bold">ABOUT MOUNT CARMEL HOSPITAL AND FERTILITY CENTRE (MCHFC)</h1>
                  <p className="lead">Mount Carmel Hospital and Fertility Centre is a Private Health Care organization located at community 25, ashfoam junction Tema. The center stands at all times for Quality Health Services that you will find most cost efficient. We are set to provide total services that go to ensure the quality of health that fosters Productivity and growth.</p>
                  <a className="btn brand-btn py-3 px-5 rounded-pill shadow" href="/services">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jumbotron Section */}
        <section className="jumbotron-section py-5 text-white bg-gradient-to-r from-mount-carmel-primary to-accent">
          <div className="container text-center">
            <h1 className="display-4 fw-bold mb-3 wow fadeInDown" data-wow-delay="0.1s">Experience Excellence in Healthcare</h1>
            <p className="lead mb-4 wow fadeInUp" data-wow-delay="0.2s">At Mount Carmel Hospital & Fertility Centre, we combine compassion, innovation, and expertise to deliver world-class medical services for you and your family.</p>
            <a href="/appointment" className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow wow fadeInUp text-mount-carmel-primary font-bold" data-wow-delay="0.3s">Book an Appointment</a>
          </div>
        </section>



      {/* Mission & Vision - Parallax Background Section 1 (Full Width, Overflow Fix) */}
      <div 
        className="w-full py-5 bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: `url('/images/feature.jpg')` }}
      >
        <div className="absolute inset-0 bg-mount-carmel-primary/90"></div>
        <div className="container relative">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="h-100 p-4 rounded-2xl bg-white shadow-sm">
                <h6 className="section-title bg-white text-start text-mount-carmel-primary pe-3">Our Mission</h6>
                <h1 className="display-6 mb-4 fw-bold">Our Mission</h1>
                <p>“Our Mission is to collaborate to improve the health status of our clients and community by delivering high quality service that exceeds the expectations of those we serve. We are committed to quality service and competitive pricing”</p>
              </div>
            </div>
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.5s">
              <div className="img-border rounded-2xl shadow-lg overflow-hidden mb-4">
                <img className="img-fluid w-full object-cover min-h-[320px]" src="/images/feature.jpg" alt="Mission" />
              </div>
              <div className="h-100 p-4 rounded-2xl bg-white shadow-sm mt-3">
                <h6 className="section-title bg-white text-start text-mount-carmel-primary pe-3">Our Vision</h6>
                <h1 className="display-6 mb-4 fw-bold">Our Vision</h1>
                <p>“To be A Health Facility with Efficient and Competent Team ready to Deliver Quality Health Care Service that meets Global Standards” at an affordable price.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Values Section - Modern Cards with Animation */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp max-w-2xl" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-mount-carmel-primary px-3">Our Values</h6>
            <h1 className="display-6 mb-4">The Foundation of Our Care</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow bounceIn" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3 rounded-2xl shadow-lg bg-white h-100">
                <div className="p-4">
                  <img src="/images/about-2.jpg" alt="Compassion" className="mb-3 rounded-circle w-16 h-16 object-cover" />
                  <h5 className="mb-3">Compassion</h5>
                  <p>We treat every patient with kindness, empathy, and understanding, recognizing the emotional aspects of healthcare.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow bounceIn" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3 rounded-2xl shadow-lg bg-white h-100">
                <div className="p-4">
                  <img src="/images/about-3.jpg" alt="Excellence" className="mb-3 rounded-circle w-16 h-16 object-cover" />
                  <h5 className="mb-3">Excellence</h5>
                  <p>We maintain the highest standards of medical care, continuously improving our practices and outcomes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow bounceIn" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3 rounded-2xl shadow-lg bg-white h-100">
                <div className="p-4">
                  <img src="/images/feature.jpg" alt="Integrity" className="mb-3 rounded-circle w-16 h-16 object-cover" />
                  <h5 className="mb-3">Integrity</h5>
                  <p>We conduct ourselves with honesty, transparency, and ethical behavior in all our interactions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow bounceIn" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3 rounded-2xl shadow-lg bg-white h-100">
                <div className="p-4">
                  <img src="/images/team-1.jpg" alt="Teamwork" className="mb-3 rounded-circle w-16 h-16 object-cover" />
                  <h5 className="mb-3">Teamwork</h5>
                  <p>We collaborate effectively as a team, valuing each member's contribution to patient care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* History Section - Parallax Background Section 2 (Full Width, Overflow Fix) */}
      <div 
        className="w-full py-5 bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{ backgroundImage: `url('/images/carousel-2.jpg')` }}
      >
        <div className="absolute inset-0 bg-mount-carmel-primary/90"></div>
        <div className="container relative">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="h-100 p-4 rounded-2xl bg-white shadow-sm">
                <h6 className="section-title bg-white text-start text-mount-carmel-primary pe-3">Our History</h6>
                <h1 className="display-6 mb-4 fw-bold">A Legacy of Care</h1>
                <p>Mount Carmel Hospital was founded with a vision to provide exceptional healthcare services to the people of Ghana. Our journey began with a simple yet powerful mission: to make quality healthcare accessible to all.</p>
                <p>Over the years, we have grown from a small medical facility to a comprehensive healthcare institution, expanding our services to include specialized fertility treatments, advanced maternity care, and a wide range of medical specialties.</p>
                <p>Today, we continue to build on our legacy of excellence, embracing new technologies and medical advancements while maintaining the compassionate care that has defined us from the beginning.</p>
              </div>
            </div>
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.5s">
              <div className="img-border rounded-2xl shadow-lg overflow-hidden">
                <img className="img-fluid w-full object-cover min-h-[320px]" src="/images/about-bg.jpg" alt="Mount Carmel Hospital Building" />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Team Carousel Section - Modern Auto-Scrolling */}
      <section className="py-5 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-mount-carmel-primary">Meet Our Team</h2>
            <p className="lead">Our dedicated professionals are here to serve you.</p>
          </div>
          <TeamCarousel />
        </div>
      </section>

      {/* Stats Section - Modernized */}
      <div className="container-fluid fact py-5 pt-lg-0 bg-mount-carmel-primary">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white shadow-lg rounded-2xl d-flex align-items-center h-100 p-5 min-h-[180px]">
                <div className="d-flex align-items-center">
                  <img src="/images/testimonial.jpg" alt="Happy Patients" className="rounded-circle me-3 w-14 h-14 object-cover" />
                  <div>
                    <h4 className="fw-bold">5000+</h4>
                    <span>Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-white shadow-lg rounded-2xl d-flex align-items-center h-100 p-5 min-h-[180px]">
                <div className="d-flex align-items-center">
                  <img src="/images/carousel-1.jpg" alt="Successful Births" className="rounded-circle me-3 w-14 h-14 object-cover" />
                  <div>
                    <h4 className="fw-bold">1000+</h4>
                    <span>Successful Births</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-white shadow-lg rounded-2xl d-flex align-items-center h-100 p-5 min-h-[180px]">
                <div className="d-flex align-items-center">
                  <img src="/images/team-2.jpg" alt="Expert Doctors" className="rounded-circle me-3 w-14 h-14 object-cover" />
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