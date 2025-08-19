import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Services = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const MAIN_COLOR = '#6f3348';
  const HERO_BG = '/images/about-bg.jpg';

  const services = [
    {
      icon: 'fa fa-baby',
      title: 'Fertility Treatment',
      description: 'Advanced fertility treatments including IVF, IUI, and reproductive medicine with high success rates.',
      features: ['In Vitro Fertilization (IVF)', 'Intrauterine Insemination (IUI)', 'Fertility Assessment', 'Hormone Therapy']
    },
    {
      icon: 'fa fa-heartbeat',
      title: 'Maternity Care',
      description: 'Comprehensive prenatal, delivery, and postnatal care for expectant mothers and their babies.',
      features: ['Prenatal Care', 'Safe Delivery', 'Postnatal Care', 'Neonatal Care']
    },
    {
      icon: 'fa fa-stethoscope',
      title: 'General Medicine',
      description: 'Complete medical care for all ages with experienced physicians and modern diagnostic facilities.',
      features: ['Health Check-ups', 'Diagnostic Services', 'Treatment Plans', 'Preventive Care']
    },
    {
      icon: 'fa fa-user-md',
      title: 'Gynecology',
      description: 'Specialized women\'s health care including routine check-ups and advanced gynecological procedures.',
      features: ['Women\'s Health', 'Gynecological Surgery', 'Family Planning', 'Menopause Care']
    },
    {
      icon: 'fa fa-child',
      title: 'Pediatrics',
      description: 'Expert care for children from birth through adolescence with child-friendly environment.',
      features: ['Child Health', 'Vaccinations', 'Growth Monitoring', 'Child Development']
    },
    {
      icon: 'fa fa-flask',
      title: 'Laboratory Services',
      description: 'State-of-the-art laboratory with comprehensive diagnostic testing and quick results.',
      features: ['Blood Tests', 'Urine Analysis', 'Microbiology', 'Pathology']
    },
    {
      icon: 'fa fa-ambulance',
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response and critical care facilities.',
      features: ['Emergency Response', 'Critical Care', 'Trauma Care', 'Emergency Surgery']
    },
    {
      icon: 'fa fa-eye',
      title: 'Specialized Care',
      description: 'Specialized medical services including cardiology, orthopedics, and other specialties.',
      features: ['Cardiology', 'Orthopedics', 'Dermatology', 'Neurology']
    }
  ];

  return (
    <>
      <Header />
      {/* Page Hero Section */}
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
            <h1 className="display-3 text-white animated slideInDown" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Our Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb" style={{ background: 'transparent', color: 'white' }}>
                <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </motion.div>

      {/* Services Overview */}
      <div className="container-xxl py-5">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mx-auto mb-5 fw-bold" style={{ color: MAIN_COLOR, maxWidth: '600px' }}>
            <h6 className="section-title bg-white text-center" style={{ color: MAIN_COLOR }}>Services</h6>
            <h1 className="display-6 mb-4">Comprehensive Healthcare Services</h1>
            <p className="mb-0">Mount Carmel Hospital offers a wide range of medical services designed to meet all your healthcare needs. From fertility treatment to emergency care, we provide expert medical care with compassion and excellence.</p>
          </motion.div>
          <div className="row g-4">
            {services.map((service, index) => (
              <motion.div key={index} className="col-lg-4 col-sm-6" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05, y: -6 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                <div className="service-item text-center pt-3" style={{ background: 'transparent', transition: 'background 0.3s, color 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = MAIN_COLOR; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'inherit'; }}>
                  <div className="p-4">
                    <i className={`${service.icon} fa-3x mb-4`} style={{ color: '#DAA520' }}></i>
                    <h5 className="mb-3">{service.title}</h5>
                    <p>{service.description}</p>
                    <ul className="list-unstyled text-start">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="mb-2">
                          <i className="fa fa-check me-2" style={{ color: '#DAA520' }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="w-100 py-5" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Parallax Background Image & Main Color Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "linear-gradient(rgba(111, 51, 72, 0.85), rgba(75, 20, 56, 0.8)), url('https://images.unsplash.com/photo-1511174511562-5f7f18b874f8')",
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
                <h6 className="section-title bg-white text-start" style={{ color: MAIN_COLOR }}>Fertility Treatment</h6>
                <h1 className="display-6 mb-4" style={{ color: 'white', textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>Advanced Fertility Care</h1>
                <p style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Our fertility center is equipped with the latest technology and staffed by experienced reproductive medicine specialists. We offer comprehensive fertility treatments with personalized care plans.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>IVF Treatment</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>IUI Procedures</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Fertility Assessment</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Hormone Therapy</h6>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" style={{ backgroundColor: MAIN_COLOR, borderColor: MAIN_COLOR }} href="/appointment">Book Consultation</a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <motion.div
                className="img-border d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center"
                initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateY: 10, boxShadow: '0 8px 32px rgba(111,51,72,0.25)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ perspective: '800px', minHeight: '340px' }}
              >
                <img
                  className="img-fluid rounded-4 shadow-lg"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Doctor with patient"
                  style={{ height: '320px', width: '48%', objectFit: 'cover', background: '#fff', minWidth: '220px' }}
                />
                <img
                  className="img-fluid rounded-4 shadow-lg"
                  src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8"
                  alt="Ultrasound scan"
                  style={{ height: '320px', width: '48%', objectFit: 'cover', background: '#fff', minWidth: '220px' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
            </div>
            
      {/* Maternity Care Section */}
      <div className="w-100 py-5" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Parallax Background Image & Main Color Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "linear-gradient(rgba(111, 51, 72, 0.85), rgba(75, 20, 56, 0.8)), url('https://images.unsplash.com/photo-1519864600265-abb23847ef2c')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <motion.div
                className="img-border d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center"
                initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateY: 10, boxShadow: '0 8px 32px rgba(111,51,72,0.25)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ perspective: '800px', minHeight: '340px' }}
              >
                <img
                  className="img-fluid rounded-4 shadow-lg"
                  src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c"
                  alt="Pregnant woman"
                  style={{ height: '320px', width: '48%', objectFit: 'cover', background: '#fff', minWidth: '220px' }}
                />
                <img
                  className="img-fluid rounded-4 shadow-lg"
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b"
                  alt="Mother and baby"
                  style={{ height: '320px', width: '48%', objectFit: 'cover', background: '#fff', minWidth: '220px' }}
                />
              </motion.div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start" style={{ color: MAIN_COLOR }}>Maternity Care</h6>
                <h1 className="display-6 mb-4" style={{ color: 'white', textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>Complete Maternity Services</h1>
                <p style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Experience the joy of motherhood with our comprehensive maternity care services. From prenatal care to safe delivery and postnatal support, we ensure the best care for you and your baby.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Prenatal Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Safe Delivery</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Postnatal Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0" style={{ color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>Neonatal Care</h6>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" style={{ backgroundColor: MAIN_COLOR, borderColor: MAIN_COLOR }} href="/appointment">Schedule Visit</a>
              </div>
            </div>
          </div>
        </div>
            </div>
            
      {/* Emergency Care Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start" style={{ color: MAIN_COLOR }}>Emergency Care</h6>
                <h1 className="display-6 mb-4" style={{ color: MAIN_COLOR }}>24/7 Emergency Services</h1>
                <p>Our emergency department is staffed 24/7 with experienced emergency medicine specialists and equipped with state-of-the-art facilities to handle all types of medical emergencies.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0">Rapid Response</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0">Critical Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0">Trauma Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{ color: '#DAA520' }}></i>
                      <h6 className="mb-0">Emergency Surgery</h6>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa fa-phone fa-2x me-3" style={{ color: '#DAA520' }}></i>
                  <div>
                    <h6 className="mb-0">Emergency Hotline</h6>
                    <h4 className="mb-0">+233 30 393 9896</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <motion.div
                className="img-border d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center"
                initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateY: 10, boxShadow: '0 8px 32px rgba(111,51,72,0.25)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ perspective: '800px', minHeight: '340px' }}
              >
                <img
                  className="img-fluid rounded-4 shadow-lg"
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
                  alt="Ambulance"
                  style={{ height: '320px', width: '48%', objectFit: 'cover', background: '#fff', minWidth: '220px' }}
                />
                <img
                  className="img-fluid rounded-4 shadow-lg"
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29"
                  alt="Hospital emergency room"
                  style={{ height: '320px', width: '48%', objectFit: 'cover', background: '#fff', minWidth: '220px' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
            </div>
            
      {/* Call to Action */}
  <div className="container-fluid fact py-5 pt-lg-0" style={{background: MAIN_COLOR}}>
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
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
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Call Us</h4>
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

export default Services; 