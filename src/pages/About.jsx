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
          backgroundImage: `url('/images/hero9.jpg')`,
          height: '530px'
        }}
      >
        <div className="absolute inset-0 bg-mount-carmel-primary/50"></div>
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
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Image Column */}
            <div className="col-lg-6 d-flex">
              <div className="w-100 h-100 min-vh-50">
                <img 
                  className="img-fluid w-100 h-100 object-cover" 
                  src="/images/hero9.jpg" 
                  alt="Mount Carmel Hospital" 
                  style={{ minHeight: '500px' }}
                />
              </div>
            </div>
            
            {/* Content Column */}
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="p-5 w-100 d-flex flex-column justify-content-center">
                <h6 className="section-title bg-white text-start text-mount-carmel-primary pe-3">About Us</h6>
                <h1 className="display-6 mb-4 fw-bold">ABOUT MOUNT CARMEL HOSPITAL AND FERTILITY CENTRE (MCHFC)</h1>
                <p className="lead">Mount Carmel Hospital and Fertility Centre is a Private Health Care organization located at community 25, ashfoam junction Tema. The center stands at all times for Quality Health Services that you will find most cost efficient. We are set to provide total services that go to ensure the quality of health that fosters Productivity and growth.</p>
                <a className="btn brand-btn py-3 px-5 rounded-pill shadow align-self-start" href="/services">Explore More</a>
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



      {/* Mission, Vision & Values Section */}
      <div className="container-fluid p-0" style={{
        background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(147, 51, 142, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }}></div>
        <div className="row g-0">
          {/* Content Column */}
          <div className="col-lg-6 d-flex align-items-stretch" style={{ position: 'relative', zIndex: 1 }}>
            <div className="p-5 w-100 d-flex flex-column justify-content-center bg-white">
              <h6 className="section-title bg-white text-start text-mount-carmel-primary pe-3">Our Mission & Vision</h6>
              <h1 className="display-6 mb-4 fw-bold">Our Guiding Principles</h1>
              
              <div className="mb-5">
                <h3 className="h4 mb-3 text-mount-carmel-primary">Our Mission</h3>
                <p className="lead">"Our Mission is to collaborate to improve the health status of our clients and community by delivering high quality service that exceeds the expectations of those we serve. We are committed to quality service and competitive pricing."</p>
              </div>
              
              <div className="mb-5">
                <h3 className="h4 mb-3 text-mount-carmel-primary">Our Vision</h3>
                <p className="lead">"To be A Health Facility with Efficient and Competent Team ready to Deliver Quality Health Care Service that meets Global Standards" at an affordable price.</p>
              </div>
              
              <div>
                <h3 className="h4 mb-3 text-mount-carmel-primary">Our Core Values</h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-3">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-heart fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Compassion</h5>
                        <p className="mb-0 small">Treating every patient with kindness and understanding.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-3">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-star fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Excellence</h5>
                        <p className="mb-0 small">Maintaining the highest standards in medical care.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-3">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-shield-alt fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Integrity</h5>
                        <p className="mb-0 small">Upholding honesty and transparency in all we do.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-users fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Teamwork</h5>
                        <p className="mb-0 small">Collaborating effectively for better patient outcomes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="col-lg-6 d-flex">
            <div className="w-100 h-100 min-vh-50">
              <img 
                className="img-fluid w-100 h-100 object-cover" 
                src="/images/about4.jpg" 
                alt="Mission and Values" 
                style={{ minHeight: '800px' }}
              />
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

      {/* Why Choose Us Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-mount-carmel-primary px-3">Why Choose Us</h6>
            <h1 className="display-6 mb-5">Your Health is Our Priority</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded overflow-hidden h-100 shadow">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/images/gallery/emergency.jpg" alt="24/7 Emergency Care" />
                </div>
                <div className="p-4">
                  <h5 className="mb-3">24/7 Emergency Services</h5>
                  <p>Our emergency department is staffed round the clock with experienced medical professionals ready to handle any medical emergency.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded overflow-hidden h-100 shadow">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/images/gallery/fertility-center.jpg" alt="Fertility Center" />
                </div>
                <div className="p-4">
                  <h5 className="mb-3">Advanced Fertility Center</h5>
                  <p>State-of-the-art fertility treatments with high success rates, supported by a team of fertility specialists.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded overflow-hidden h-100 shadow">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/images/gallery/room-facility.jpg" alt="Patient Care" />
                </div>
                <div className="p-4">
                  <h5 className="mb-3">Patient-Centered Care</h5>
                  <p>Personalized treatment plans and compassionate care tailored to each patient's unique needs and circumstances.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities & Technology Section */}
      <div className="container-fluid p-0" style={{
        background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 0'
      }}>
        {/* Subtle pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(147, 51, 142, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }}></div>
        
        <div className="">
          <div className="row g-0">
            {/* Content Column */}
            <div className="col-lg-6 d-flex align-items-stretch" style={{ position: 'relative', zIndex: 1 }}>
              <div className="p-5 w-100 d-flex flex-column justify-content-center bg-white">
                <h6 className="section-title bg-white text-start text-mount-carmel-primary pe-3">Our Facilities</h6>
                <h1 className="display-6 mb-4 fw-bold">Modern Healthcare Facilities</h1>
                <p className="lead mb-5">Our hospital is equipped with state-of-the-art medical technology and comfortable patient care areas designed to promote healing and recovery.</p>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-x-ray fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Advanced Imaging</h5>
                        <p className="mb-0 small">Cutting-edge diagnostic imaging for accurate results.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-procedures fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Modern ORs</h5>
                        <p className="mb-0 small">State-of-the-art surgical suites for all procedures.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-flask fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Full Lab Services</h5>
                        <p className="mb-0 small">Comprehensive diagnostic testing and analysis.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-procedures fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Patient Rooms</h5>
                        <p className="mb-0 small">Comfortable and modern patient accommodations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="col-lg-6 d-flex">
              <div className="w-100 h-100 min-vh-50">
                <img 
                  className="img-fluid w-100 h-100 object-cover" 
                  src="/images/gallery/surgical.jpeg" 
                  alt="Modern Healthcare Facilities" 
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-light text-center text-mount-carmel-primary px-3">Community</h6>
            <h1 className="display-6 mb-5">Making a Difference</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-white text-center p-4 rounded shadow h-100">
                <div className="icon-box mx-auto mb-4">
                  <i className="fas fa-heartbeat fa-3x text-mount-carmel-primary"></i>
                </div>
                <h5 className="mb-3">Health Screenings</h5>
                <p>Free community health screenings and awareness programs to promote preventive healthcare.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item bg-white text-center p-4 rounded shadow h-100">
                <div className="icon-box mx-auto mb-4">
                  <i className="fas fa-graduation-cap fa-3x text-mount-carmel-primary"></i>
                </div>
                <h5 className="mb-3">Medical Education</h5>
                <p>Training and development programs for healthcare professionals to improve skills and knowledge.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item bg-white text-center p-4 rounded shadow h-100">
                <div className="icon-box mx-auto mb-4">
                  <i className="fas fa-hands-helping fa-3x text-mount-carmel-primary"></i>
                </div>
                <h5 className="mb-3">Outreach Programs</h5>
                <p>Medical missions and outreach programs to serve underprivileged communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* CTA Section */}
      <div className="container-fluid bg-mount-carmel-primary text-white py-5">
        <div className="container text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="display-6 mb-4">Experience the Mount Carmel Difference</h2>
          <p className="fs-5 mb-4">Schedule an appointment today and take the first step towards better health.</p>
          <a className="btn btn-light btn-lg px-5 py-3 rounded-pill" href="/appointment">Book an Appointment</a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About; 