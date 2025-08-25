import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const faqs = [
    {
      question: "What services does Mount Carmel Hospital offer?",
      answer: "Mount Carmel Hospital offers comprehensive healthcare services including fertility treatment, maternity care, general medicine, gynecology, pediatrics, emergency care, laboratory services, and specialized medical care. We provide both outpatient and inpatient services with state-of-the-art facilities."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling us at +233 30 393 9896, visiting our hospital in person, or using our online appointment booking system. We recommend booking in advance to ensure availability with your preferred doctor."
    },
    {
      question: "What are your operating hours?",
      answer: "Our regular operating hours are Monday to Saturday from 8:00 AM to 6:00 PM, and Sundays from 9:00 AM to 3:00 PM. Our emergency department is open 24/7 for urgent medical care."
    },
    {
      question: "Do you accept health insurance?",
      answer: "Yes, we accept most major health insurance plans. Please contact our billing department to verify your specific insurance coverage and benefits. We also offer flexible payment plans for patients without insurance."
    },
    {
      question: "What should I bring for my first appointment?",
      answer: "For your first appointment, please bring your ID, insurance card (if applicable), list of current medications, medical history, and any relevant medical records or test results from previous healthcare providers."
    },
    {
      question: "How successful are your fertility treatments?",
      answer: "Our fertility treatments have high success rates, with IVF success rates averaging 60-70% depending on various factors including age and medical conditions. We provide personalized treatment plans and comprehensive support throughout the fertility journey."
    },
    {
      question: "Do you provide emergency care?",
      answer: "Yes, our emergency department is staffed 24/7 with experienced emergency medicine specialists. We handle all types of medical emergencies and provide rapid response care. For emergencies, call +233 30 393 9896 immediately."
    },
    {
      question: "What makes Mount Carmel Hospital different?",
      answer: "Mount Carmel Hospital stands out for our patient-centered approach, experienced medical team, modern facilities, and commitment to excellence. We combine advanced medical technology with compassionate care to provide the best healthcare experience for our patients."
    },
    {
      question: "Can I get laboratory tests done without a doctor's appointment?",
      answer: "Yes, we offer walk-in laboratory services for many common tests. However, some specialized tests may require a doctor's referral. Please contact our laboratory department to confirm test requirements and availability."
    },
    {
      question: "Do you provide pediatric care?",
      answer: "Yes, we have a dedicated pediatric department with experienced pediatricians who provide comprehensive care for children from birth through adolescence. Our child-friendly environment ensures a comfortable experience for young patients."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      
      {/* Parallax Page Header with Overlay and Background Image */}
      <div className="w-100 mb-5" style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: `linear-gradient(rgba(111,34,72,0.7), rgba(168,92,122,0.7)), url('/images/about-bg.jpg') center/cover no-repeat, url('/images/hospital-background.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0 0 32px 32px',
        height: '400px'
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

      {/* FAQ Introduction */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">FAQ</h6>
            <h1 className="display-6 mb-4">Frequently Asked Questions</h1>
            <p className="mb-0">Find answers to common questions about our services, appointments, and healthcare procedures. If you don't find what you're looking for, please contact us directly.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
              <button
                        className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={activeIndex === index ? 'true' : 'false'}
                        aria-controls={`collapse${index}`}
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      id={`collapse${index}`} 
                      className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded p-5">
                <h4 className="mb-4">Still Have Questions?</h4>
                <p className="mb-4">If you couldn't find the answer to your question in our FAQ, we're here to help. Contact us directly and we'll get back to you as soon as possible.</p>
                
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-phone fa-2x text-primary me-3"></i>
                  <div>
                    <h6 className="mb-0">Call Us</h6>
                    <p className="mb-0">+233 30 393 9896</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-envelope fa-2x text-primary me-3"></i>
                  <div>
                    <h6 className="mb-0">Email Us</h6>
                    <p className="mb-0">mountcarmelhospital@outlook.com</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-4">
                  <i className="fa fa-clock fa-2x text-primary me-3"></i>
                  <div>
                    <h6 className="mb-0">Business Hours</h6>
                    <p className="mb-0">Mon-Sat: 8:00 AM - 6:00 PM<br/>Sun: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>
                
                <a className="btn btn-primary w-100 py-3" href="/contact">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Quick Links Section with Parallax, Overlay, and Background Image */}
      <div className="w-100 py-5" style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: `linear-gradient(rgba(111,34,72,0.7), rgba(168,92,122,0.7)), url('/images/about-bg.jpg') center/cover no-repeat, url('/images/hospital-background.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '32px'
      }}>
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px', color: '#fff'}}>
            <h6 className="section-title bg-white text-center px-3" style={{color: '#6f2248'}}>Quick Links</h6>
            <h1 className="display-6 mb-4">Find What You Need</h1>
            <p className="mb-0">Explore our services and resources to get the information you need about your healthcare journey.</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-calendar" style={{color: '#6f2248'}}></i>
                  <h5 className="mb-3">Book Appointment</h5>
                  <p>Schedule your visit with our expert medical team for comprehensive healthcare services.</p>
                  <a className="btn btn-primary py-2 px-4" href="/appointment">Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-md" style={{color: '#6f2248'}}></i>
                  <h5 className="mb-3">Our Team</h5>
                  <p>Meet our experienced medical professionals dedicated to providing exceptional care.</p>
                  <a className="btn btn-primary py-2 px-4" href="/team">Meet Team</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-stethoscope" style={{color: '#6f2248'}}></i>
                  <h5 className="mb-3">Our Services</h5>
                  <p>Explore our comprehensive range of medical services and specialized treatments.</p>
                  <a className="btn btn-primary py-2 px-4" href="/services">View Services</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-map-marker-alt" style={{color: '#6f2248'}}></i>
                  <h5 className="mb-3">Visit Us</h5>
                  <p>Find our location and get directions to Mount Carmel Hospital for your appointment.</p>
                  <a className="btn btn-primary py-2 px-4" href="/contact">Get Directions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Stats/Call to Action Section with Updated Background Color */}
      <div className="container-fluid fact py-5 pt-lg-0" style={{background: 'linear-gradient(135deg, #6f2248, #a85c7a)'}}>
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-calendar" style={{color: '#6f2248'}}></i>
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
                    <i className="fa fa-phone" style={{color: '#6f2248'}}></i>
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

export default FAQ; 