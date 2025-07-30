import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>

        {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid" src="/images/about.jpg" alt="Mount Carmel Hospital" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                <h1 className="display-6 mb-4">Mount Carmel Hospital & Fertility Center</h1>
                <p>Mount Carmel Hospital and Fertility Center is a leading healthcare institution in Ghana, dedicated to providing exceptional medical care with compassion and excellence. Established with a vision to transform healthcare delivery, we have been serving our community with state-of-the-art medical facilities and expert healthcare professionals.</p>
                <p>Our commitment to excellence extends beyond traditional healthcare services. We specialize in fertility treatments, maternity care, and comprehensive medical services, ensuring that every patient receives personalized care in a comfortable and supportive environment.</p>
                <a className="btn btn-primary py-3 px-5" href="/services">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Our Mission</h6>
                <h1 className="display-6 mb-4">Providing Exceptional Healthcare</h1>
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
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Our Vision</h6>
                <h1 className="display-6 mb-4">Leading Healthcare Innovation</h1>
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

      {/* Values Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Our Values</h6>
            <h1 className="display-6 mb-4">The Foundation of Our Care</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-heart text-primary mb-4"></i>
                  <h5 className="mb-3">Compassion</h5>
                  <p>We treat every patient with kindness, empathy, and understanding, recognizing the emotional aspects of healthcare.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-star text-primary mb-4"></i>
                  <h5 className="mb-3">Excellence</h5>
                  <p>We maintain the highest standards of medical care, continuously improving our practices and outcomes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-shield-alt text-primary mb-4"></i>
                  <h5 className="mb-3">Integrity</h5>
                  <p>We conduct ourselves with honesty, transparency, and ethical behavior in all our interactions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-users text-primary mb-4"></i>
                  <h5 className="mb-3">Teamwork</h5>
                  <p>We collaborate effectively as a team, valuing each member's contribution to patient care.</p>
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
              <div className="img-border">
                <img className="img-fluid" src="/images/hospital-building.jpg" alt="Mount Carmel Hospital Building" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container-fluid fact py-5 pt-lg-0" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
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
  );
};

export default About; 