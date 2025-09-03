import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We operate 24 hours a day, 7 days a week to ensure patients have access to care and emergency services anytime."
    },
    {
      question: "Are all services available 24/7?",
      answer: "Most of our services are available around the clock. However: Laboratory services close at 9:00 pm daily. X-ray services close at 5:00 pm daily."
    },
    {
      question: "Do you provide emergency services?",
      answer: "Yes. We provide 24-hour emergency care, with doctors and nurses always available to handle urgent medical needs."
    },
    {
      question: "Do you provide pediatric services?",
      answer: "Yes, we have pediatric care services to look after the health of children and newborns."
    },
    {
      question: "Is medical staff available at night?",
      answer: "Absolutely. Our team of doctors, nurses, and support staff are available 24/7."
    },
    {
      question: "Do you provide fertility and IVF services?",
      answer: "Yes. We offer advanced reproductive treatments, including In Vitro Fertilization (IVF), to support couples on their journey to parenthood."
    },
    {
      question: "Do you offer counseling for couples undergoing fertility treatments?",
      answer: "Yes. We provide professional counseling and emotional support to individuals and couples throughout their fertility journey."
    },
    {
      question: "Do you also provide maternity and women’s health services?",
      answer: "Yes, we offer comprehensive maternity and gynecology services alongside our fertility and IVF care."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling our hospital’s front desk, visiting us in person, or using our online appointment system (if available)."
    },
    {
      question: "Can I walk in without an appointment?",
      answer: "Yes. Walk-ins are always welcome, especially in emergencies. However, for specialized services such as IVF consultations, we recommend booking ahead."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes. We provide flexible payment plans to make healthcare and fertility services more affordable for our clients."
    },
    {
      question: "Do you accept health insurance?",
      answer: "Yes. We accept the majority of private health insurance policies. If you’re unsure about your provider, please check with our front desk team."
    },
    {
      question: "What documents should I bring for insurance claims?",
      answer: "You will need: your insurance card, a valid photo ID, and any referral forms required by your insurer."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const normalizedQuery = query.trim().toLowerCase();
  const filteredFaqs = normalizedQuery
    ? faqs.filter((item) =>
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery)
      )
    : faqs;

  return (
    <>
      <Header />
      
      {/* Parallax Page Header with Overlay and Background Image (brand) */}
      <div className="w-100" style={{
        marginLeft: 'calc(-50vw + 50%)',
        background: `linear-gradient(rgba(75,20,56,0.8), rgba(111,51,72,0.8)), url('/images/about-bg.jpg') center/cover no-repeat, url('/images/hospital-background.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        height: '400px',
        margin: 0
      }}>
        <div className="container py-5 justify-center align-center my-auto">
          <h1 className="display-3 text-white pt-6 animated slideInDown" style={{textShadow: '0 2px 16px #000'}}>Frequently Asked Questions</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">FAQ</li>
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
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted Answers</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Clear Guidance</span>
            <span className="fw-semibold" style={{opacity:0.95}}>24/7 Emergency</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient Support</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            {/* duplicate for seamless loop */}
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted Answers</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Clear Guidance</span>
            <span className="fw-semibold" style={{opacity:0.95}}>24/7 Emergency</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient Support</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
          </div>
        </div>
      </section>

      {/* FAQ Introduction */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center px-3" style={{color:'#6f3348'}}>FAQ</h6>
            <h1 className="display-6 mb-4">Frequently Asked Questions</h1>
            <p className="mb-0">Find answers to common questions about our services, appointments, and healthcare procedures. If you don't find what you're looking for, please contact us directly.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-xxl py-5 faq-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="faq-surface rounded-5 p-3 p-md-4 position-relative">
              <div className="mb-4">
                <label htmlFor="faq-search" className="form-label fw-semibold" style={{color:'#6f3348'}}>Search FAQs</label>
                <div className="position-relative">
                  <input
                    id="faq-search"
                    type="search"
                    className="form-control form-control-lg rounded-4 shadow-sm faq-search-input"
                    placeholder="Search by question or keywords..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search frequently asked questions"
                  />
                  <i className="fa fa-search position-absolute" style={{right:'16px', top:'50%', transform:'translateY(-50%)', color:'#6f3348', opacity:0.75}} aria-hidden="true"></i>
                </div>
              </div>

              <div className="accordion faq-accordion" id="faqAccordion">
                {filteredFaqs.length === 0 && (
                  <div className="alert alert-light border rounded-4" role="status">
                    No results found. Try different keywords.
                  </div>
                )}
                {filteredFaqs.map((faq, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div key={index} className={`accordion-item rounded-4 shadow-sm mb-3 border-0 overflow-hidden animate-faq-item ${isActive ? 'is-open' : ''}`} style={{animationDelay: `${index * 60}ms`}}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className={`accordion-button d-flex align-items-center gap-3 ${isActive ? '' : 'collapsed'}`}
                          type="button"
                          aria-expanded={isActive ? 'true' : 'false'}
                          aria-controls={`collapse${index}`}
                          onClick={() => toggleFAQ(index)}
                        >
                          <span className={`chevron-icon transition-rotate ${isActive ? 'rotated' : ''}`} aria-hidden="true">
                            <i className="fa fa-chevron-down"></i>
                          </span>
                          <span className="flex-grow-1 text-start">{faq.question}</span>
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse ${isActive ? 'show' : ''}`}
                        aria-labelledby={`heading${index}`}
                        aria-hidden={isActive ? 'false' : 'true'}
                      >
                        <div className="accordion-body pt-0">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
            </div>
            
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded p-5">
                <h4 className="mb-4">Still Have Questions?</h4>
                <p className="mb-4">If you couldn't find the answer to your question in our FAQ, we're here to help. Contact us directly and we'll get back to you as soon as possible.</p>
                
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-phone fa-2x me-3" style={{color:'#6f3348'}}></i>
                  <div>
                    <h6 className="mb-0">Call Us</h6>
                    <p className="mb-0">+233 30 393 9896</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-envelope fa-2x me-3" style={{color:'#6f3348'}}></i>
                  <div>
                    <h6 className="mb-0">Email Us</h6>
                    <p className="mb-0">mountcarmelhospital@outlook.com</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-4">
                  <i className="fa fa-clock fa-2x me-3" style={{color:'#6f3348'}}></i>
                  <div>
                    <h6 className="mb-0">Business Hours</h6>
                    <p className="mb-0">Mon-Sat: 8:00 AM - 6:00 PM<br/>Sun: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>
                
                <a className="btn brand-btn w-100 py-3" href="/contact">Contact Us</a>
                <style>{`
                  .brand-btn { background: #6f3348; border-color: #6f3348; color: #fff; }
                  .brand-btn:hover { background: #4B1438; border-color: #4B1438; color: #fff; }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Quick Links Section with Parallax, Overlay, and Background Image (brand) */}
      <div className="w-100 py-5" style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: `linear-gradient(rgba(75,20,56,0.7), rgba(111,51,72,0.7)), url('/images/about-bg.jpg') center/cover no-repeat, url('/images/hospital-background.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '32px'
      }}>
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px', color: '#fff'}}>
            <h6 className="section-title bg-white text-center px-3" style={{color: '#6f3348'}}>Quick Links</h6>
            <h1 className="display-6 mb-4">Find What You Need</h1>
            <p className="mb-0">Explore our services and resources to get the information you need about your healthcare journey.</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-calendar" style={{color: '#6f3348'}}></i>
                  <h5 className="mb-3">Book Appointment</h5>
                  <p>Schedule your visit with our expert medical team for comprehensive healthcare services.</p>
                  <a className="btn brand-btn py-2 px-4" href="/appointment">Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-md" style={{color: '#6f3348'}}></i>
                  <h5 className="mb-3">Our Team</h5>
                  <p>Meet our experienced medical professionals dedicated to providing exceptional care.</p>
                  <a className="btn brand-btn py-2 px-4" href="/team">Meet Team</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-stethoscope" style={{color: '#6f3348'}}></i>
                  <h5 className="mb-3">Our Services</h5>
                  <p>Explore our comprehensive range of medical services and specialized treatments.</p>
                  <a className="btn brand-btn py-2 px-4" href="/services">View Services</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-map-marker-alt" style={{color: '#6f3348'}}></i>
                  <h5 className="mb-3">Visit Us</h5>
                  <p>Find our location and get directions to Mount Carmel Hospital for your appointment.</p>
                  <a className="btn brand-btn py-2 px-4" href="/contact">Get Directions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Stats/Call to Action Section with Updated Background Color (brand) */}
      <div className="container-fluid fact py-5 pt-lg-0" style={{background: 'linear-gradient(90deg, #4B1438 0%, #6f3348 100%)'}}>
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
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
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
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
      <style>{`
        /* Section background and surface */
        .faq-section { 
          background: radial-gradient(1200px 400px at 50% 0%, rgba(111,51,72,0.08), transparent 60%);
        }
        .faq-surface::before { 
          content: '';
          position: absolute; inset: 0; 
          background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.65));
          backdrop-filter: blur(6px);
          border-radius: 28px; 
          pointer-events: none;
        }
        .faq-surface { position: relative; }
        
        .faq-search-input:focus { box-shadow: 0 0 0 0.25rem rgba(111,51,72,0.15) !important; border-color: #6f3348; }
        .faq-accordion .accordion-item { transition: box-shadow .25s ease, transform .12s ease; }
        .faq-accordion .accordion-item:hover { box-shadow: 0 10px 24px rgba(0,0,0,0.06); }
        .faq-accordion .accordion-button { padding: 1.25rem 1.25rem; font-weight: 600; font-size: 1.1rem; }
        @media (max-width: 576px) {
          .faq-accordion .accordion-button { padding: 1.1rem 1rem; font-size: 1.05rem; }
          .faq-accordion .accordion-body { font-size: 0.975rem; }
        }
        .faq-accordion .accordion-button:not(.collapsed) { color: #4B1438; background-color: #fdf7f9; box-shadow: inset 0 -1px 0 rgba(0,0,0,.125); }
        .faq-accordion .accordion-button::after { display: none; }
        .faq-accordion .chevron-icon { width: 1.25rem; height: 1.25rem; display: inline-flex; align-items: center; justify-content: center; color: #6f3348; }
        .transition-rotate { transition: transform .25s ease; }
        .transition-rotate.rotated { transform: rotate(180deg); }
        .faq-accordion .accordion-body { line-height: 1.7; color: #333; padding: 0 1.25rem 1.25rem 3rem; }
        .faq-accordion .accordion-item.is-open { border-left: 4px solid #6f3348; }
        .faq-accordion .accordion-button:focus { box-shadow: 0 0 0 0.2rem rgba(111,51,72,0.15); }
        .faq-accordion .accordion-item:active { transform: translateY(1px); }
        .faq-accordion .accordion-button:hover { background-color: #fdf1f5; }

        /* Smooth expand/collapse without Bootstrap JS */
        .accordion-collapse { overflow: hidden; max-height: 0; transition: max-height .35s ease; }
        .accordion-collapse.show { max-height: 500px; }
        @media (prefers-reduced-motion: reduce) {
          .accordion-collapse { transition: none; }
        }

        /* Staggered entrance animation */
        @keyframes faqItemIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-faq-item { animation: faqItemIn .45s ease both; }
      `}</style>
    </>
  );
};

export default FAQ; 