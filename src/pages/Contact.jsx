import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />

      {/* Parallax Page Header with Overlay and Background Image (brand) */}
      <div
        className="w-100"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          background: `linear-gradient(rgba(75,20,56,0.8), rgba(111,51,72,0.8)), url('/images/about-bg.jpg') center/cover no-repeat, url('/images/hospital-background.jpg') center/cover no-repeat`,
          backgroundAttachment: "fixed",
          position: "relative",
          overflow: "hidden",
          height: "400px"
        }}
      >
        <div className="container py-5">
          <h1
            className="display-3 text-white animated slideInDown"
            style={{ textShadow: "0 2px 16px #000" }}
          >
            Contact Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </nav>
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

      {/* Contact Information */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="section-title bg-white text-center px-3" style={{color:'#6f3348'}}>
              Contact Us
            </h6>
            <h1 className="display-6 mb-4">Get In Touch With Us</h1>
            <p className="mb-0">
              We're here to help and answer any questions you might have. We
              look forward to hearing from you.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-map-marker-alt mb-4" style={{color:'#6f3348'}}></i>
                  <h5 className="mb-3">Our Location</h5>
                  <p>Ashfoam Junction, Tema Com.25, Accra, Ghana</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-phone mb-4" style={{color:'#6f3348'}}></i>
                  <h5 className="mb-3">Call Us</h5>
                  <p>+233 30 393 9896</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-envelope mb-4" style={{color:'#6f3348'}}></i>
                  <h5 className="mb-3">Email Us</h5>
                  <p>mountcarmelhospital@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Contact Form & Map */}
  <div className="container-xxl py-5 mb-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start pe-3" style={{color:'#6f3348'}}>
                  Contact Us
                </h6>
                <h1 className="display-6 mb-4">Send Us A Message</h1>
                <p>
                  Have a question or need to schedule an appointment? Fill out
                  the form below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 bg-light px-4"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0 bg-light px-4"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 bg-light px-4"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Subject"
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0 bg-light px-4 py-3"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Leave a message here"
                          style={{ height: "150px" }}
                          required
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn brand-btn w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start pe-3" style={{color:'#6f3348'}}>
                  Our Location
                </h6>
                <h1 className="display-6 mb-4">Find Us On Map</h1>
                <p>
                  Visit us at our convenient location in Tema, Accra. We're
                  easily accessible and provide ample parking for our patients.
                </p>
                <div
                  className="position-relative rounded overflow-hidden"
                  style={{ height: "500px", minHeight: "500px" }}
                >
                  <iframe
                    className="position-absolute w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d0.0334405!3d5.7468091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020806191475a19:0x3a98d53c6cad5eab!2sMount%20Carmel%20General%20Hospital%20%26%20Fertility%20Center%20Dawhanya!5e0!3m2!1sen!2sgh!4v1692979200000!5m2!1sen!2sgh"
                    style={{ border: 0, height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Business Hours Section with Parallax, Overlay, and Background Image */}
  <div className="w-100 py-5 mt-5 mb-5" style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: `linear-gradient(rgba(75,20,56,0.7), rgba(111,51,72,0.7)), url('/images/about-bg.jpg') center/cover no-repeat, url('/images/hospital-background.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100" style={{color: '#fff'}}>
                <h6 className="section-title bg-white text-start px-3" style={{color: '#6f3348'}}>Business Hours</h6>
                <h1 className="display-6 mb-4">When We're Open</h1>
                <p>We understand that healthcare needs don't follow a 9-to-5 schedule. That's why we offer flexible hours to accommodate our patients' busy lives.</p>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                        <i className="fa fa-clock" style={{color: '#6f3348'}}></i>
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
                        <i className="fa fa-clock" style={{color: '#6f3348'}}></i>
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
                        <i className="fa fa-ambulance" style={{color: '#6f3348'}}></i>
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
                        <i className="fa fa-calendar" style={{color: '#6f3348'}}></i>
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
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100 bg-white rounded-4 shadow-lg p-4" style={{minHeight: '400px'}}>
                <h6 className="section-title bg-white text-start px-3" style={{color: '#6f3348'}}>Emergency Contact</h6>
                <h1 className="display-6 mb-4" style={{color: '#6f3348'}}>24/7 Emergency Services</h1>
                <p style={{color: '#6f3348'}}>For medical emergencies, please call our emergency hotline immediately. Our emergency department is staffed 24/7 with experienced medical professionals.</p>
                <div className="bg-light p-4 rounded">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-phone fa-2x me-3" style={{color: '#6f3348'}}></i>
                    <div>
                      <h5 className="mb-0">Emergency Hotline</h5>
                      <h3 className="mb-0">+233 30 393 9896</h3>
                    </div>
                  </div>
                  <p className="mb-0">Our emergency team is ready to respond to your medical needs at any time of day or night.</p>
                </div>
                <div className="mt-4">
                  <h6 style={{color: '#6f3348'}}>What to do in an emergency:</h6>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-check me-2" style={{color: '#6f3348'}}></i>Call our emergency number immediately</li>
                    <li><i className="fa fa-check me-2" style={{color: '#6f3348'}}></i>Stay calm and follow instructions</li>
                    <li><i className="fa fa-check me-2" style={{color: '#6f3348'}}></i>Provide clear location and symptoms</li>
                    <li><i className="fa fa-check me-2" style={{color: '#6f3348'}}></i>Our team will guide you through next steps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section with Updated Background Color (brand) */}
      <div
        className="container-fluid fact py-5 pt-lg-0"
        style={{ background: "linear-gradient(90deg, #4B1438 0%, #6f3348 100%)" }}
      >
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 p-5"
                style={{ minHeight: "160px" }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-calendar" style={{color: '#6f3348'}}></i>
                  </div>
                  <div className="ps-3">
                    <h4>Book Appointment</h4>
                    <span>Schedule your visit today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 p-5"
                style={{ minHeight: "160px" }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-phone" style={{color: '#6f3348'}}></i>
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
      </div>

      <Footer />
    </>
  );
};

export default Contact;
