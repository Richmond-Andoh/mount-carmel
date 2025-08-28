import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const serviceCategories = [
    { key: 'all', label: 'All' },
    { key: 'fertility', label: 'Fertility' },
    { key: 'maternity', label: 'Maternity' },
    { key: 'general', label: 'General Medicine' },
    { key: 'gynecology', label: 'Gynecology' },
    { key: 'pediatrics', label: 'Pediatrics' },
    { key: 'lab', label: 'Lab' },
    { key: 'emergency', label: 'Emergency' },
    { key: 'specialized', label: 'Specialized' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

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

  // Before/after slider demo images
  const beforeAfterImages = {
    before: '/images/fertility-treatment.jpg',
    after: '/images/fertility-center.jpg'
  };

  // Equipment showcase
  const equipment = [
    { name: 'Ultrasound Machine', img: '/images/gallery/diagnostic.jpeg', desc: 'High-res imaging for diagnostics.' },
    { name: 'IVF Incubator', img: '/images/gallery/fertility-center.jpg', desc: 'Advanced embryo culture system.' },
    { name: 'Surgical Robot', img: '/images/gallery/surgical.jpeg', desc: 'Precision-assisted surgery.' }
  ];

  // Pricing table
  const pricing = [
    { name: 'Consultation', price: '₵150', highlight: false },
    { name: 'IVF Cycle', price: '₵12,000', highlight: true },
    { name: 'Lab Tests', price: '₵300', highlight: false },
    { name: 'Emergency Care', price: '₵500', highlight: false }
  ];

  // Service flow steps
  const flowSteps = [
    'Book Appointment',
    'Initial Consultation',
    'Diagnostic Tests',
    'Treatment Plan',
    'Follow-up Care'
  ];

  // Filtered services
  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.title.toLowerCase().includes(activeCategory));

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

      {/* Service Category Filtering */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
            <h1 className="display-6 mb-4">Comprehensive Healthcare Services</h1>
            <p className="mb-0">Mount Carmel Hospital offers a wide range of medical services designed to meet all your healthcare needs. From fertility treatment to emergency care, we provide expert medical care with compassion and excellence.</p>
          </div>
          <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
            {serviceCategories.map(cat => (
              <button
                key={cat.key}
                className={`btn btn-outline-primary px-3 py-2${activeCategory === cat.key ? ' active' : ''}`}
                style={{ borderRadius: '20px', fontWeight: 500, transition: 'background .2s' }}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="row g-4">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="col-lg-4 col-sm-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Before/After Comparison Slider */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="mb-2">Fertility Center Transformation</h2>
            <p>See the difference our advanced technology makes.</p>
          </div>
          <div className="comparison-slider mx-auto" style={{maxWidth:'600px', position:'relative', height:'320px'}}>
            <input type="range" min="0" max="100" defaultValue="50" className="w-100 position-absolute top-0" style={{zIndex:2, opacity:0.7, height:'320px'}} onInput={e => {
              const slider = e.target;
              const before = slider.parentNode.querySelector('.before-img');
              before.style.width = slider.value + '%';
            }} />
            <div className="before-img" style={{position:'absolute',top:0,left:0,height:'320px',width:'50%',overflow:'hidden',transition:'width .3s'}}>
              <img src={beforeAfterImages.before} alt="Before" style={{height:'320px',width:'600px',objectFit:'cover'}} />
            </div>
            <div className="after-img" style={{position:'absolute',top:0,left:0,height:'320px',width:'100%',overflow:'hidden'}}>
              <img src={beforeAfterImages.after} alt="After" style={{height:'320px',width:'600px',objectFit:'cover',opacity:0.85}} />
            </div>
            <div className="slider-labels position-absolute w-100 d-flex justify-content-between px-3" style={{top:'8px',zIndex:3}}>
              <span className="badge bg-primary">Before</span>
              <span className="badge bg-success">After</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Service Flow Diagram */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="mb-2">How Our Service Works</h2>
            <p>Follow the steps for a seamless healthcare experience.</p>
          </div>
          <div className="flow-diagram d-flex justify-content-center align-items-center gap-4 flex-wrap">
            {flowSteps.map((step, i) => (
              <motion.div
                key={step}
                className="flow-step bg-white shadow rounded px-4 py-3 text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px rgba(111,34,72,0.18)' }}
                style={{ minWidth: '160px', fontWeight: 500, color: '#6f2248', border: '2px solid #a85c7a' }}
              >
                {step}
                {i < flowSteps.length - 1 && <span style={{fontSize:'2rem',color:'#a85c7a',marginLeft:'12px'}}>&rarr;</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Showcase 3D-like Presentation */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="mb-2">Featured Equipment</h2>
            <p>Explore our advanced medical equipment.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {equipment.map((eq, i) => (
              <motion.div
                key={eq.name}
                className="col-md-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.18 }}
                whileHover={{ scale: 1.12, rotateY: 8, boxShadow: '0 12px 40px rgba(111,34,72,0.18)' }}
                style={{ perspective: '800px' }}
              >
                <div className="equipment-card bg-white rounded shadow p-4 text-center" style={{border:'2px solid #a85c7a'}}>
                  <img src={eq.img} alt={eq.name} style={{width:'100%',height:'180px',objectFit:'cover',borderRadius:'12px',boxShadow:'0 2px 12px rgba(111,34,72,0.10)'}} />
                  <h5 className="mt-3 mb-1" style={{color:'#6f2248'}}>{eq.name}</h5>
                  <p className="mb-0 text-muted" style={{fontSize:'1rem'}}>{eq.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table with Highlight Animation */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="mb-2">Service Pricing</h2>
            <p>Transparent pricing for our most popular services.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <table className="table table-bordered pricing-table text-center">
                <thead>
                  <tr className="bg-primary text-white">
                    <th>Service</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((item, i) => (
                    <motion.tr
                      key={item.name}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.12 }}
                      whileHover={item.highlight ? { backgroundColor: '#a85c7a', color: '#fff', scale: 1.04 } : { scale: 1.03 }}
                      style={item.highlight ? { background: '#a85c7a', color: '#fff', fontWeight: 700 } : {}}
                    >
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
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
      {/* Modern styles for new features */}
      <style>{`
        .comparison-slider input[type=range]::-webkit-slider-thumb {
          width: 16px; height: 320px; background: #a85c7a; border-radius: 8px; cursor: ew-resize;
        }
        .comparison-slider input[type=range]::-moz-range-thumb {
          width: 16px; height: 320px; background: #a85c7a; border-radius: 8px; cursor: ew-resize;
        }
        .comparison-slider input[type=range]::-ms-thumb {
          width: 16px; height: 320px; background: #a85c7a; border-radius: 8px; cursor: ew-resize;
        }
        .comparison-slider input[type=range] {
          appearance: none;
          background: transparent;
        }
        .flow-step {
          box-shadow: 0 2px 12px rgba(111,34,72,0.10);
        }
        .equipment-card {
          transition: box-shadow .3s, transform .3s;
        }
        .pricing-table tr {
          transition: background .3s, color .3s, transform .3s;
        }
        .pricing-table tr:hover {
          background: #a85c7a; color: #fff;
        }
        .btn.active, .btn:active {
          background: #a85c7a !important; color: #fff !important;
          border-color: #a85c7a !important;
        }
      `}</style>
    </>
  );
};

export default Services; 