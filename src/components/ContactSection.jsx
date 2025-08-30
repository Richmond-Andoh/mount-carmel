import { useState, useEffect } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(".contact-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
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
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    alert(
      "Thank you! Your message has been sent. We will get back to you soon."
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: "bi bi-geo-alt",
      title: "Our Location",
      details: "Ashfoam Junction, Tema Com.25, Accra, Ghana",
      color: "#6f3348",
    },
    {
      icon: "bi bi-telephone",
      title: "Phone Number",
      details: "+233 30 393 9896",
      color: "#DAA520",
    },
    {
      icon: "bi bi-envelope",
      title: "Email Address",
      details: "mountcarmelhospital@outlook.com",
      color: "#4B1438",
    },
    {
      icon: "bi bi-clock",
      title: "Working Hours",
      details: "Mon-Sat 08:00-18:00, Sun 09:00-15:00",
      color: "#B8860B",
    },
  ];

  return (
    <div className="container-fluid py-5 position-relative overflow-hidden contact-section">
      {/* Background Image with Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          zIndex: 1,
        }}
      ></div>
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(111, 51, 72, 0.9) 0%, rgba(75, 20, 56, 0.8) 100%)",
          zIndex: 2,
        }}
      ></div>

      {/* Floating Elements */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
        style={{ zIndex: 2 }}
      >
        <div
          className="position-absolute"
          style={{
            top: "10%",
            right: "10%",
            width: "100px",
            height: "100px",
            background: "rgba(218, 165, 32, 0.2)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite",
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            bottom: "20%",
            left: "15%",
            width: "120px",
            height: "120px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite reverse",
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            top: "60%",
            right: "5%",
            width: "80px",
            height: "80px",
            background: "rgba(111, 51, 72, 0.2)",
            borderRadius: "50%",
            animation: "float 10s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="position-relative" style={{ zIndex: 3 }}>
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div
              className="mb-3"
              style={{
                animation: isVisible ? "slideInDown 1s ease-out" : "none",
              }}
            >
              <span
                className="badge bg-light px-3 py-2 mb-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#6f3348",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                Get In Touch
              </span>
            </div>
            <h1
              className="display-4 fw-bold text-white mb-4"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                animation: isVisible
                  ? "slideInDown 1s ease-out 0.2s both"
                  : "none",
              }}
            >
              Contact Us Today
            </h1>
            <p
              className="lead text-white-50 mb-0"
              style={{
                animation: isVisible
                  ? "slideInDown 1s ease-out 0.4s both"
                  : "none",
              }}
            >
              Have questions or need to schedule an appointment? We're here to
              help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>

        <div className="container justify-content-center align-content-center mx-auto row g-5">
          {/* Contact Information */}
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div
              style={{
                animation: isVisible
                  ? "slideInLeft 1s ease-out 0.6s both"
                  : "none",
              }}
            >
              <h3 className="text-white mb-4 fw-bold">Contact Information</h3>
              <p className="text-white-50 mb-5">
                We're here to provide you with the best healthcare experience.
                Don't hesitate to reach out to us for any inquiries or
                appointments.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start mb-4"
                    style={{
                      animation: isVisible
                        ? `slideInLeft 1s ease-out ${0.8 + index * 0.1}s both`
                        : "none",
                    }}
                  >
                    <div
                      className="icon-box me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`,
                        borderRadius: "50%",
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1) rotate(5deg)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1) rotate(0deg)";
                      }}
                    >
                      <i className={`${info.icon} text-white fs-5`}></i>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-bold">{info.title}</h6>
                      <span className="text-white-50">{info.details}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div
                className="mt-5"
                style={{
                  animation: isVisible
                    ? "slideInLeft 1s ease-out 1.2s both"
                    : "none",
                }}
              >
                <h6 className="text-white mb-3 fw-bold">Follow Us</h6>
                <div className="d-flex gap-3">
                  {[
                    { icon: "fab fa-facebook-f", color: "#1877F2" },
                    { icon: "fab fa-twitter", color: "#1DA1F2" },
                    { icon: "fab fa-linkedin-in", color: "#0077B5" },
                    { icon: "fab fa-instagram", color: "#E4405F" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "45px",
                        height: "45px",
                        background: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = social.color;
                        e.target.style.transform = "translateY(-3px)";
                        e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.1)";
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <i className={`${social.icon} fs-5`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
            <div
              className="position-relative"
              style={{
                animation: isVisible
                  ? "slideInRight 1s ease-out 0.6s both"
                  : "none",
              }}
            >
              <div
                className="bg-white p-5 rounded-4"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <h3
                  className="mb-4 text-center fw-bold"
                  style={{ color: "#6f3348" }}
                >
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            borderColor: "#6f3348",
                            borderRadius: "10px",
                          }}
                        />
                        <label htmlFor="name" style={{ color: "#6f3348" }}>
                          Your Name
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            borderColor: "#6f3348",
                            borderRadius: "10px",
                          }}
                        />
                        <label htmlFor="email" style={{ color: "#6f3348" }}>
                          Your Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          style={{
                            borderColor: "#6f3348",
                            borderRadius: "10px",
                          }}
                        />
                        <label htmlFor="subject" style={{ color: "#6f3348" }}>
                          Subject
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Your Message"
                          id="message"
                          name="message"
                          style={{
                            height: "150px",
                            borderColor: "#6f3348",
                            borderRadius: "10px",
                          }}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                        <label htmlFor="message" style={{ color: "#6f3348" }}>
                          Your Message
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        className="btn btn-primary btn-lg px-5 py-3 fw-bold"
                        type="submit"
                        style={{
                          backgroundColor: "#6f3348",
                          borderColor: "#6f3348",
                          borderRadius: "25px",
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 15px rgba(111, 51, 72, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow =
                            "0 6px 20px rgba(111, 51, 72, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow =
                            "0 4px 15px rgba(111, 51, 72, 0.3)";
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Map Section (matches Contact page) */}
        <div className="mt-4" style={{ width: "100%" }}>
          <div className="py-5">
            <div className="text-center">
              <h2 className="display-6 text-white mb-4 text-center mt-4">
                Find Us On Map
              </h2>
              <p className="lead text-white mb-4">
                Visit us at our convenient location in Tema, Accra. We're easily
                accessible and provide ample parking for our patients.
              </p>
            </div>
            <div
              className="position-relative rounded overflow-hidden"
              style={{ height: "600px", minHeight: "500px" }}
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

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .wow {
          visibility: hidden;
        }

        .wow.animated {
          visibility: visible;
        }

        .space-y-4 > * + * {
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }

          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
