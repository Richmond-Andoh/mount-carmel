import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const MAIN_COLOR = '#6f3348';
  const CONTACT_BG = '/images/about-bg.jpg';
  const ICONS = [
    { icon: 'fa-map-marker-alt', label: 'Location', value: 'Ashfoam Junction, Tema Com.25, Accra, Ghana' },
    { icon: 'fa-phone', label: 'Phone', value: '+233 30 393 9896' },
    { icon: 'fa-envelope', label: 'Email', value: 'mountcarmelhospital@outlook.com' }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Header />
      {/* Modern Hero Section */}
      <section
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          minHeight: '420px',
          background: `linear-gradient(120deg, rgba(111, 51, 72, 0.85), rgba(75, 20, 56, 0.85)), url(${CONTACT_BG}) center/cover no-repeat`,
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-2" style={{ textShadow: '2px 2px 8px #000', color: '#fff' }}>Contact Us</h1>
          <p className="lead mb-3" style={{ textShadow: '1px 1px 6px #000', color: '#fff', fontSize: '1.25rem' }}>
            Reach out for appointments, inquiries, or feedback. We're here to help!
          </p>
          <div className="d-flex justify-content-center gap-4 mt-4">
            {ICONS.map((item, idx) => (
              <div
                key={item.icon}
                className="rounded-circle shadow-lg d-flex flex-column align-items-center justify-content-center"
                style={{ width: 60, height: 60, background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: 28, backdropFilter: 'blur(4px)', transition: 'transform 0.2s' }}
                aria-label={item.label}
              >
                <i className={`fa ${item.icon}`}></i>
              </div>
            ))}
          </div>
        </div>
        {/* Floating Contact Button */}
        <a
          href="tel:+233303939896"
          className="position-absolute end-0 bottom-0 m-4 btn btn-lg btn-primary rounded-circle shadow"
          style={{ background: MAIN_COLOR, color: '#fff', zIndex: 10 }}
          aria-label="Call Mount Carmel"
        >
          <i className="fa fa-phone"></i>
        </a>
      </section>

      {/* Contact Info & Form Section */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-stretch">
            {/* Info Card */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="rounded-4 shadow-lg p-4 h-100 d-flex flex-column justify-content-center" style={{
                background: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(16px)',
                border: `2px solid ${MAIN_COLOR}33`,
                color: MAIN_COLOR,
                boxShadow: '0 8px 32px rgba(111,51,72,0.10)',
              }}>
                <h3 className="mb-3" style={{ color: MAIN_COLOR }}>Contact Information</h3>
                {ICONS.map((item, idx) => (
                  <div key={item.icon} className="d-flex align-items-center mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 44, height: 44, background: MAIN_COLOR, color: '#fff', fontSize: 22 }}>
                      <i className={`fa ${item.icon}`}></i>
                    </div>
                    <div>
                      <h6 className="mb-0" style={{ color: MAIN_COLOR }}>{item.label}</h6>
                      <p className="mb-0" style={{ color: '#333' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="d-flex mt-4 gap-2">
                  <a className="btn btn-lg-square" href="#" style={{ backgroundColor: MAIN_COLOR, color: '#fff' }} aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-lg-square" href="#" style={{ backgroundColor: MAIN_COLOR, color: '#fff' }} aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-lg-square" href="#" style={{ backgroundColor: MAIN_COLOR, color: '#fff' }} aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-lg-square" href="#" style={{ backgroundColor: MAIN_COLOR, color: '#fff' }} aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Form Card */}
            <div className="col-lg-7">
              <form onSubmit={handleSubmit} className="rounded-4 shadow-lg p-4 h-100" style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(8px)',
                color: MAIN_COLOR,
                boxShadow: '0 8px 32px rgba(111,51,72,0.10)',
              }}>
                <h3 className="mb-3" style={{ color: MAIN_COLOR }}>Send Us a Message</h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0 bg-light px-4" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control border-0 bg-light px-4" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" required />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0 bg-light px-4" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" required />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control border-0 bg-light px-4 py-3" id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Leave a message here" style={{height: '150px'}} required></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn w-100 py-3" type="submit" style={{ backgroundColor: MAIN_COLOR, color: '#fff', fontWeight: 600 }}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Hours Section */}
      <section className="container-fluid py-5" style={{ background: 'none' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="rounded-4 shadow-lg p-4 h-100" style={{
                background: 'rgba(255,255,255,0.20)',
                backdropFilter: 'blur(10px)',
                border: `2px solid #0066CC33`,
                boxShadow: '0 8px 32px rgba(0,102,204,0.10)',
              }}>
                <h6 className="section-title bg-white text-start text-primary pe-3">Our Location</h6>
                <h1 className="display-6 mb-4">Find Us On Map</h1>
                <p>Visit us at our convenient location in Tema, Accra. We're easily accessible and provide ample parking for our patients.</p>
                <div className="position-relative rounded overflow-hidden h-100" style={{minHeight: '320px'}}>
                  <iframe
                    className="position-absolute w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d0.0334405!3d5.7468091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020806191475a19:0x3a98d53c6cad5eab!2sMount%20Carmel%20General%20Hospital%20%26%20Fertility%20Center%20Dawhanya!5e0!3m2!1sen!2sgh!4v1692812345678!5m2!1sen!2sgh"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Add spacing between map and emergency section */}
            <div className="col-12 d-lg-none mb-4"></div>
            <div className="col-lg-6">
              <div className="rounded-4 shadow-lg p-4 h-100" style={{
                background: 'rgba(255,255,255,0.20)',
                backdropFilter: 'blur(10px)',
                border: `2px solid #0066CC33`,
                boxShadow: '0 8px 32px rgba(0,102,204,0.10)',
              }}>
                <h6 className="section-title bg-white text-start text-primary pe-3">Business Hours</h6>
                <h1 className="display-6 mb-4">When We're Open</h1>
                <p>We offer flexible hours to accommodate our patients' busy lives.</p>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                        <i className="fa fa-clock text-primary"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">Monday - Saturday</h6>
                        <span>08:00 AM - 06:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                        <i className="fa fa-clock text-primary"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">Sunday</h6>
                        <span>09:00 AM - 03:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                        <i className="fa fa-ambulance text-primary"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">Emergency Care</h6>
                        <span>24/7 Available</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                        <i className="fa fa-calendar text-primary"></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">Appointments</h6>
                        <span>Call to Schedule</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section
        className="w-100 py-5 position-relative"
        style={{
          background: 'linear-gradient(120deg, #6f3348 0%, #003366 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Decorative SVG Pattern Overlay */}
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.12 }}
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillOpacity="0.3"
            d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,117.3C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="container-fluid position-relative" style={{ zIndex: 1, maxWidth: '100vw' }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="rounded-4 shadow-lg p-4 h-100" style={{
                background: 'rgba(255,255,255,0.22)',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${MAIN_COLOR}33`,
                boxShadow: '0 8px 32px rgba(111,51,72,0.10)',
              }}>
                <h6 className="section-title bg-white text-start text-primary pe-3">Emergency Contact</h6>
                <h1 className="display-6 mb-4">24/7 Emergency Services</h1>
                <p>For medical emergencies, please call our emergency hotline immediately. Our emergency department is staffed 24/7 with experienced medical professionals.</p>
                <div className="bg-light p-4 rounded">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-phone fa-2x text-primary me-3"></i>
                    <div>
                      <h5 className="mb-0">Emergency Hotline</h5>
                      <h3 className="mb-0">+233 30 393 9896</h3>
                    </div>
                  </div>
                  <p className="mb-0">Our emergency team is ready to respond to your medical needs at any time of day or night.</p>
                </div>
                <div className="mt-4">
                  <h6>What to do in an emergency:</h6>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-check text-primary me-2"></i>Call our emergency number immediately</li>
                    <li><i className="fa fa-check text-primary me-2"></i>Stay calm and follow instructions</li>
                    <li><i className="fa fa-check text-primary me-2"></i>Provide clear location and symptoms</li>
                    <li><i className="fa fa-check text-primary me-2"></i>Our team will guide you through next steps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="container-fluid fact py-5 pt-lg-0 position-relative"
        style={{
          background: 'linear-gradient(120deg, #6f3348 0%, #003366 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Decorative SVG Pattern Overlay */}
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.12 }}
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillOpacity="0.3"
            d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,117.3C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="container py-5 pt-lg-0 position-relative" style={{ zIndex: 1 }}>
          <div className="row gx-0">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5 rounded-4" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-calendar text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Book Appointment</h4>
                    <span>Schedule your visit today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5 rounded-4" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Call Us Now</h4>
                    <span>+233 30 393 9896</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact; 