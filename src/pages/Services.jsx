import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBaby, FaHeartbeat, FaUserMd, FaStethoscope, FaClinicMedical, FaFlask, FaAmbulance, FaProcedures } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    { key: 'all', label: 'All Services' },
    { key: 'fertility', label: 'Fertility' },
    { key: 'maternity', label: 'Maternity' },
    { key: 'gynecology', label: 'Gynecology' },
    { key: 'ivf', label: 'IVF & ART' },
    { key: 'urology', label: 'Male Infertility' },
    { key: 'surgical', label: 'Surgical' },
    { key: 'diagnostics', label: 'Diagnostics' },
    { key: 'emergency', label: 'Emergency' },
    { key: 'specialized', label: 'Specialized' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [isHovered, setIsHovered] = useState(null);

  const services = [
    {
      id: 1,
      category: 'fertility',
      icon: <FaBaby className="text-4xl text-pink-600 mb-4" />,
      title: 'Fertility Assessment',
      description: 'Comprehensive evaluation to understand your fertility potential and identify any underlying issues.',
      features: ['Hormone Testing', 'Ovarian Reserve Testing', 'Semen Analysis', 'Fertility Ultrasound'],
      image: '/images/services/fertility-assessment.jpg'
    },
    {
      id: 2,
      category: 'ivf',
      icon: <FaHeartbeat className="text-4xl text-pink-600 mb-4" />,
      title: 'IVF Treatment',
      description: 'Advanced In Vitro Fertilization with high success rates using the latest reproductive technologies.',
      features: ['Egg Retrieval', 'Embryo Culture', 'Embryo Transfer', 'Blastocyst Culture'],
      image: '/images/services/ivf-treatment.jpg'
    },
    {
      id: 3,
      category: 'maternity',
      icon: <FaClinicMedical className="text-4xl text-pink-600 mb-4" />,
      title: 'Prenatal & Postnatal Care',
      description: 'Comprehensive care for expectant mothers from conception through delivery and beyond.',
      features: ['Prenatal Checkups', 'Ultrasound Scans', 'Nutrition Counseling', 'Postpartum Care'],
      image: '/images/services/prenatal-care.jpg'
    },
    {
      id: 4,
      category: 'gynecology',
      icon: <FaUserMd className="text-4xl text-pink-600 mb-4" />,
      title: 'Gynecological Services',
      description: 'Specialized care for women\'s health needs at every stage of life.',
      features: ['Women\'s Health', 'Gynecological Surgery', 'Family Planning', 'Menopause Care'],
      image: '/images/services/gynecology.jpg'
    },
    {
      id: 5,
      category: 'urology',
      icon: <FaUserMd className="text-4xl text-blue-600 mb-4" />,
      title: 'Male Infertility',
      description: 'Comprehensive evaluation and treatment for male factor infertility issues.',
      features: ['Semen Analysis', 'Hormone Testing', 'Surgical Sperm Retrieval', 'Varicocele Treatment'],
      image: '/images/services/male-fertility.jpg'
    },
    {
      id: 6,
      category: 'ivf',
      icon: <FaFlask className="text-4xl text-pink-600 mb-4" />,
      title: 'Advanced ART',
      description: 'Cutting-edge Assisted Reproductive Technologies for complex fertility cases.',
      features: ['ICSI', 'PGT Testing', 'Egg/Embryo Freezing', 'Donor Programs'],
      image: '/images/services/art.jpg'
    },
    {
      id: 7,
      category: 'surgical',
      icon: <FaProcedures className="text-4xl text-pink-600 mb-4" />,
      title: 'Fertility Surgeries',
      description: 'Minimally invasive surgical procedures to treat various fertility issues.',
      features: ['Laparoscopy', 'Hysteroscopy', 'Myomectomy', 'Tubal Surgery'],
      image: '/images/services/fertility-surgery.jpg'
    },
    {
      id: 8,
      category: 'fertility',
      icon: <FaHeartbeat className="text-4xl text-pink-600 mb-4" />,
      title: 'Fertility Preservation',
      description: 'Options for preserving fertility before medical treatments or for future family planning.',
      features: ['Egg Freezing', 'Sperm Freezing', 'Embryo Freezing', 'Ovarian Tissue Freezing'],
      image: '/images/services/fertility-preservation.jpg'
    },
    {
      id: 9,
      category: 'diagnostics',
      icon: <FaFlask className="text-4xl text-blue-600 mb-4" />,
      title: 'Laboratory Services',
      description: 'State-of-the-art laboratory with comprehensive diagnostic testing and quick results.',
      features: ['Blood Tests', 'Urine Analysis', 'Microbiology', 'Pathology'],
      image: '/images/services/laboratory.jpg'
    },
    {
      id: 10,
      category: 'emergency',
      icon: <FaAmbulance className="text-4xl text-red-600 mb-4" />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response and critical care facilities.',
      features: ['Emergency Response', 'Critical Care', 'Trauma Care', 'Emergency Surgery'],
      image: '/images/services/emergency-care.jpg'
    },
    {
      id: 11,
      category: 'specialized',
      icon: <FaStethoscope className="text-4xl text-purple-600 mb-4" />,
      title: 'Specialized Care',
      description: 'Specialized medical services including cardiology, orthopedics, and other specialties.',
      features: ['Cardiology', 'Orthopedics', 'Dermatology', 'Neurology'],
      image: '/images/services/specialized-care.jpg'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section with Background Image and Overlay (About Page Style) */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s" style={{
        background: `linear-gradient(rgba(111,34,72,0.85), rgba(111,34,72,0.85)), url('/images/gallery/fertility-center.jpg') center/cover no-repeat`,
        position: 'relative',
        borderRadius: '0 0 32px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        backgroundAttachment: 'fixed',
        height: '400px'
      }}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown fw-bold" style={{letterSpacing: '2px'}}>Our Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
            </ol>
          </nav>
          <p className="lead text-white mt-4" style={{maxWidth: '600px'}}>Explore our comprehensive range of fertility, maternity, surgical, and specialized medical services delivered with compassion and excellence.</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* Service Categories - Responsive Horizontal Scroll */}
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 py-3 px-2" style={{scrollbarWidth: 'none'}}>
                {serviceCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={`btn rounded-pill px-4 py-2 fw-semibold shadow-sm transition-all ${
                      activeCategory === category.key
                        ? 'btn-primary text-white'
                        : 'btn-outline-primary text-primary bg-white'
                    }`}
                    style={{minWidth: '140px', whiteSpace: 'nowrap'}}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - Modern Responsive Cards */}
        <div className="container pb-5">
          <div className="row g-4">
            {filteredServices.map((service) => (
              <div key={service.id} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                  <div className="position-relative" style={{height: '220px', overflow: 'hidden'}}>
                    <img src={service.image} alt={service.title} className="w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}} />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(180deg, rgba(111,34,72,0.25) 0%, rgba(0,0,0,0.45) 100%)'}}></div>
                    <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle shadow p-2">
                      {service.icon}
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2 text-primary">{service.title}</h5>
                    <p className="card-text text-muted mb-3 flex-grow-1">{service.description}</p>
                    <ul className="list-unstyled mb-3">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="d-flex align-items-center mb-2">
                          <span className="badge bg-primary me-2" style={{width: '8px', height: '8px', borderRadius: '50%'}}></span>
                          <span className="text-secondary small">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-outline-primary rounded-pill mt-auto">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* CTA Section - Modern Full Width */}
      <section className="container-fluid w-100 py-5" style={{background: 'linear-gradient(90deg, #6f2248 0%, #a85c7a 100%)', color: '#fff', margin: 0, padding: 0}}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-3">Ready to Start Your Journey?</h2>
          <p className="lead mb-4">Our fertility specialists are here to guide you every step of the way.</p>
          <a href="/appointment" className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow" style={{color: '#6f2248', fontWeight: 'bold'}}>Book a Consultation</a>
          <a href="/contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill shadow ms-3">Contact Us</a>
        </div>
      </section>
      <Footer />
      <style>{`
        .comparison-slider input[type=range]::-webkit-slider-thumb {
          width: 16px; height: 32px; background: #a85c7a; border-radius: 8px; cursor: ew-resize;
        }
        .comparison-slider input[type=range]::-moz-range-thumb {
          width: 16px; height: 32px; background: #a85c7a; border-radius: 8px; cursor: ew-resize;
        }
        .comparison-slider input[type=range]::-ms-thumb {
          width: 16px; height: 32px; background: #a85c7a; border-radius: 8px; cursor: ew-resize;
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
    </div>
  );
};

export default Services;