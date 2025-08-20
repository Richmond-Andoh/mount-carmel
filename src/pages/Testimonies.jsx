import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Testimonies = () => {
  const MAIN_COLOR = '#6f3348';
  const HERO_BG = '/images/about-bg.jpg';
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const testimonials = [
    {
      name: 'Sarah and John Mensah',
      role: 'Fertility Treatment Success',
      image: '/images/testimonial-1.jpg',
      content: 'After years of trying to conceive, Mount Carmel Hospital gave us hope. The fertility treatment was successful and we now have beautiful twins. The doctors and staff were incredibly supportive throughout our journey.',
      rating: 5
    },
    {
      name: 'Grace Addo',
      role: 'Maternity Care Patient',
      image: '/images/testimonial-2.jpg',
      content: 'My experience at Mount Carmel Hospital during my pregnancy was exceptional. The prenatal care was comprehensive, and the delivery was smooth. The postnatal care was also excellent. I highly recommend their maternity services.',
      rating: 5
    },
    {
      name: 'Kwame Osei',
      role: 'General Medicine Patient',
      image: '/images/testimonial-3.jpg',
      content: 'The medical team at Mount Carmel Hospital is professional and caring. They took the time to understand my health concerns and provided effective treatment. The facilities are modern and the staff is very friendly.',
      rating: 5
    },
    {
      name: 'Ama Kufuor',
      role: 'Pediatric Care Parent',
      image: '/images/testimonial-4.jpg',
      content: 'As a parent, I appreciate the child-friendly environment and the expertise of the pediatric team. My children feel comfortable during their visits, and the doctors are excellent with kids.',
      rating: 5
    },
    {
      name: 'Michael Asante',
      role: 'Emergency Care Patient',
      image: '/images/testimonial-5.jpg',
      content: 'When I had a medical emergency, Mount Carmel Hospital responded quickly and professionally. The emergency team was efficient and the care I received was outstanding. Thank you for saving my life.',
      rating: 5
    },
    {
      name: 'Elizabeth Boateng',
      role: 'Laboratory Services Patient',
      image: '/images/testimonial-6.jpg',
      content: 'The laboratory services at Mount Carmel Hospital are top-notch. The tests were done quickly and the results were accurate. The staff was professional and made the process comfortable.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fa fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
      ></i>
    ));
  };

  return (
    <>
      <Header />
      {/* Page Header */}
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
            <h1 className="display-3 text-white animated slideInDown" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Patient Testimonials</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb" style={{ background: 'transparent', color: 'white' }}>
                <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Testimonials</li>
              </ol>
            </nav>
          </div>
        </div>
      </motion.div>
      {/* Testimonials Introduction */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center" style={{ color: MAIN_COLOR }}>Testimonials</h6>
            <h1 className="display-6 mb-4" style={{ color: MAIN_COLOR }}>What Our Patients Say</h1>
            <p className="mb-0">Hear from our patients about their experiences at Mount Carmel Hospital. Their stories reflect our commitment to providing exceptional healthcare with compassion and excellence.</p>
          </div>
        </div>
      </div>
      {/* Testimonials Grid */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
          {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="col-lg-4 col-md-6" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05, y: -6 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                <div className="testimonial-item rounded-4 shadow-lg p-4" style={{ background: 'rgba(111,51,72,0.08)', border: `1px solid ${MAIN_COLOR}` }}>
                  <div className="d-flex align-items-center mb-4">
                    <img 
                      className="flex-shrink-0 rounded-circle me-3" 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      style={{width: '70px', height: '70px', objectFit: 'cover', border: `2px solid ${MAIN_COLOR}`}}
                    />
                <div>
                      <h5 className="mb-1" style={{ color: MAIN_COLOR }}>{testimonial.name}</h5>
                      <small style={{ color: '#DAA520' }}>{testimonial.role}</small>
                    </div>
                  </div>
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="mb-0" style={{ color: '#333', textShadow: '1px 1px 4px rgba(0,0,0,0.08)' }}>
                    "{testimonial.content}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Testimonial Carousel */}

      {/* Featured Testimony Video Section */}
      {/* Combined Carousel + Video Section with one background */}
      <div className="container-xxl py-5 position-relative" style={{ zIndex: 1 }}>
        {/* Single parallax background and overlay for both sections */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '100%',
          backgroundImage: "linear-gradient(rgba(111, 51, 72, 0.7), rgba(75, 20, 56, 0.7)), url('/images/about-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}></div>
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <motion.div
            className="carousel slide bg-white rounded-4 shadow-lg p-4 mb-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ maxWidth: '700px', margin: '0 auto', border: `2px solid ${MAIN_COLOR}` }}
          >
            <h2 className="mb-4 text-center" style={{ color: MAIN_COLOR }}>Featured Testimony</h2>
            <motion.div
              className="d-flex flex-column align-items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img src="/images/testimonial-1.jpg" alt="Featured Testimony" className="rounded-circle mb-3" style={{ width: '90px', height: '90px', objectFit: 'cover', border: `3px solid ${MAIN_COLOR}` }} />
              <blockquote className="blockquote text-center" style={{ color: '#333', fontSize: '1.2rem', fontStyle: 'italic', textShadow: '1px 1px 4px rgba(0,0,0,0.08)' }}>
                "Mount Carmel Hospital changed our lives. The care and support we received was beyond our expectations. We are forever grateful!"
              </blockquote>
              <figcaption className="blockquote-footer mt-2" style={{ color: MAIN_COLOR }}>
                Sarah and John Mensah, <cite title="Source Title">Fertility Treatment Success</cite>
              </figcaption>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-white rounded-4 shadow-lg p-4 mb-5 d-flex flex-column align-items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ maxWidth: '700px', margin: '0 auto', border: `2px solid ${MAIN_COLOR}` }}
          >
            <h2 className="mb-4 text-center" style={{ color: MAIN_COLOR }}>Watch a Patient's Story</h2>
            <div className="ratio ratio-16x9 mb-3" style={{ width: '100%' }}>
              <iframe src="https://www.youtube.com/embed/1qkAupzmF6A" title="Patient Testimony Video" allowFullScreen style={{ borderRadius: '12px', border: `2px solid ${MAIN_COLOR}` }}></iframe>
            </div>
            <p className="text-center" style={{ color: '#333', fontSize: '1rem' }}>
              Hear directly from our patients about their journey to health and happiness at Mount Carmel Hospital.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated Testimony Quote Cards */}
      <div className="container-xxl py-5">
        <div className="container">
          <h2 className="mb-4 text-center" style={{ color: MAIN_COLOR }}>More Patient Voices</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                quote: "The doctors treated me like family. I felt safe and cared for every step of the way.",
                name: "Abigail Owusu",
                role: "Surgical Patient",
                image: "/images/testimonial.jpg"
              },
              {
                quote: "Mount Carmel's pediatric team is simply the best. My son loves coming here!",
                name: "Felicia Mensimah",
                role: "Mother of Patient",
                image: "/images/testimonial-4.jpg"
              },
              {
                quote: "I was amazed by the modern facilities and the kindness of every staff member.",
                name: "Samuel Tetteh",
                role: "Lab Services Patient",
                image: "/images/testimonial-6.jpg"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="col-md-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: `0 8px 32px ${MAIN_COLOR}33` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-4 shadow-lg p-4 h-100 d-flex flex-column align-items-center" style={{ border: `2px solid ${MAIN_COLOR}` }}>
                  <img src={item.image} alt={item.name} className="rounded-circle mb-3" style={{ width: '70px', height: '70px', objectFit: 'cover', border: `2px solid ${MAIN_COLOR}` }} />
                  <blockquote className="blockquote text-center" style={{ color: '#333', fontSize: '1.1rem', fontStyle: 'italic' }}>
                    "{item.quote}"
                  </blockquote>
                  <figcaption className="blockquote-footer mt-2" style={{ color: MAIN_COLOR }}>
                    {item.name}, <cite title="Source Title">{item.role}</cite>
                  </figcaption>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Patient Journey Timeline */}
      <div className="container-xxl py-5">
        <div className="container">
          <h2 className="mb-4 text-center" style={{ color: MAIN_COLOR }}>A Journey to Healing</h2>
          <div className="timeline mx-auto" style={{ maxWidth: '700px' }}>
            {[
              { step: "Initial Consultation", desc: "Warm welcome and thorough assessment by our medical team." },
              { step: "Personalized Care Plan", desc: "Tailored treatment designed for your unique needs." },
              { step: "Expert Treatment", desc: "State-of-the-art procedures and compassionate care." },
              { step: "Recovery & Support", desc: "Continuous support and follow-up for lasting health." }
            ].map((t, i) => (
              <motion.div
                key={i}
                className="timeline-step mb-4 p-3 rounded-3 shadow-sm bg-white"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ borderLeft: `4px solid ${MAIN_COLOR}` }}
              >
                <h5 style={{ color: MAIN_COLOR }}>{t.step}</h5>
                <p style={{ color: '#333' }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Call to Action with Confetti */}
      <div className="container-xxl py-5">
        <div className="container">
          <motion.div
            className="text-center mx-auto wow fadeInUp position-relative"
            data-wow-delay="0.1s"
            style={{maxWidth: '600px'}}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Simple confetti effect using emoji */}
            <div style={{ position: 'absolute', left: 0, right: 0, top: '-2.5em', fontSize: '2em', width: '100%', pointerEvents: 'none' }}>
              <span role="img" aria-label="confetti">🎉✨🎊</span>
            </div>
            <h6 className="section-title bg-white text-center" style={{ color: MAIN_COLOR }}>Share Your Story</h6>
            <h1 className="display-6 mb-4" style={{ color: MAIN_COLOR }}>Become Our Next Success</h1>
            <p className="mb-4">Your journey matters! Join our family of happy patients and let your story inspire others.</p>
            <div className="d-flex justify-content-center gap-3">
              <a className="btn btn-primary py-3 px-5" href="/appointment">Book Appointment</a>
              <a className="btn btn-outline-primary py-3 px-5" href="/contact">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Success Stories Section */}
      <div className="w-100 py-5" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Parallax Background Image & Main Color Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "linear-gradient(rgba(111, 51, 72, 0.85), rgba(75, 20, 56, 0.8)), url('/images/success-stories.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start" style={{ color: MAIN_COLOR }}>Success Stories</h6>
                <h1 className="display-6 mb-4" style={{ color: 'white', textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>Transforming Lives Through Healthcare</h1>
                <p style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>At Mount Carmel Hospital, we believe in the power of healthcare to transform lives. Our success stories are a testament to our commitment to excellence and the trust our patients place in us.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>High Success Rates</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Patient Satisfaction</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Expert Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Modern Technology</h6>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" style={{ backgroundColor: MAIN_COLOR, borderColor: MAIN_COLOR }} href="/appointment">Book Your Appointment</a>
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
                <img className="img-fluid rounded-4 shadow-lg" src="/images/success-stories.jpg" alt="Success Stories" style={{ maxHeight: '340px', objectFit: 'cover', background: '#fff' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div className="container-fluid fact py-5 pt-lg-0" style={{background: MAIN_COLOR}}>
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-heart text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>98%</h4>
                    <span>Patient Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
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
            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
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
            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-star text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>4.9/5</h4>
                    <span>Average Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center" style={{ color: MAIN_COLOR }}>Join Our Success Stories</h6>
            <h1 className="display-6 mb-4" style={{ color: MAIN_COLOR }}>Experience Exceptional Healthcare</h1>
            <p className="mb-4">Join thousands of satisfied patients who have experienced the Mount Carmel difference. Book your appointment today and start your journey to better health.</p>
            <div className="d-flex justify-content-center gap-3">
              <a className="btn btn-primary py-3 px-5" href="/appointment">Book Appointment</a>
              <a className="btn btn-outline-primary py-3 px-5" href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonies; 