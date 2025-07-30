import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

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
      
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown">Our Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
            <h1 className="display-6 mb-4">Comprehensive Healthcare Services</h1>
            <p className="mb-0">Mount Carmel Hospital offers a wide range of medical services designed to meet all your healthcare needs. From fertility treatment to emergency care, we provide expert medical care with compassion and excellence.</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className={`${service.icon} fa-3x text-primary mb-4`}></i>
                    <h5 className="mb-3">{service.title}</h5>
                    <p>{service.description}</p>
                    <ul className="list-unstyled text-start">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="mb-2">
                          <i className="fa fa-check text-primary me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Fertility Treatment</h6>
                <h1 className="display-6 mb-4">Advanced Fertility Care</h1>
                <p>Our fertility center is equipped with the latest technology and staffed by experienced reproductive medicine specialists. We offer comprehensive fertility treatments with personalized care plans.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">IVF Treatment</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">IUI Procedures</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Fertility Assessment</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Hormone Therapy</h6>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" href="/appointment">Book Consultation</a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src="/images/fertility-treatment.jpg" alt="Fertility Treatment" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maternity Care Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid" src="/images/maternity-care.jpg" alt="Maternity Care" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Maternity Care</h6>
                <h1 className="display-6 mb-4">Complete Maternity Services</h1>
                <p>Experience the joy of motherhood with our comprehensive maternity care services. From prenatal care to safe delivery and postnatal support, we ensure the best care for you and your baby.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Prenatal Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Safe Delivery</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Postnatal Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Neonatal Care</h6>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" href="/appointment">Schedule Visit</a>
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
                <h6 className="section-title bg-white text-start text-primary pe-3">Emergency Care</h6>
                <h1 className="display-6 mb-4">24/7 Emergency Services</h1>
                <p>Our emergency department is staffed 24/7 with experienced emergency medicine specialists and equipped with state-of-the-art facilities to handle all types of medical emergencies.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Rapid Response</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Critical Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Trauma Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Emergency Surgery</h6>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa fa-phone fa-2x text-primary me-3"></i>
                  <div>
                    <h6 className="mb-0">Emergency Hotline</h6>
                    <h4 className="mb-0">+233 30 393 9896</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src="/images/emergency-care.jpg" alt="Emergency Care" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-fluid fact py-5 pt-lg-0" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
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