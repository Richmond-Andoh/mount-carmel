import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, Stethoscope, Microscope, Activity, Shield, Clock, CheckCircle, ChevronRight, Star, MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('departments');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Facility images for gallery - using local assets from /images/facilities/
  const facilityImages = [
    {
      src: "/images/facilities/fac-hero.png",
      caption: "Main Entrance",
      span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      src: "/images/facilities/img1.jpg",
      caption: "Modern Reception",
      span: "col-span-1"
    },
    {
      src: "/images/facilities/02.jpg",
      caption: "Hospital Exterior",
      span: "col-span-1"
    },
    {
      src: "/images/facilities/ambulance.png",
      caption: "Emergency Response",
      span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      src: "/images/facilities/icu.png",
      caption: "Intensive Care Unit",
      span: "col-span-1"
    },
    {
      src: "/images/facilities/04.jpg",
      caption: "Patient Care Units",
      span: "col-span-1"
    },
    {
      src: "/images/facilities/fertility.png",
      caption: "Advanced Fertility Center",
      span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      src: "/images/facilities/visit.png",
      caption: "Patient Experience",
      span: "col-span-1"
    },
    {
      src: "/images/facilities/general_surgery.png",
      caption: "Surgical Theater",
      span: "col-span-1"
    }
  ];

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);



  const departments = [
    {
      name: "Fertility Centre",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80",
      description: "State-of-the-art fertility treatment center with advanced reproductive technology.",
      features: [
        "IVF Treatment",
        "Fertility Counseling",
        "Advanced Lab Services",
        "Specialized Care Teams"
      ]
    },
    {
      name: "Emergency Department",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80",
      description: "24/7 emergency care facility equipped to handle all medical emergencies.",
      features: [
        "24/7 Emergency Services",
        "Rapid Response Team",
        "Advanced Life Support",
        "Critical Care Units"
      ]
    },
    {
      name: "Diagnostic Center",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      description: "Comprehensive diagnostic services with modern imaging technology.",
      features: [
        "Advanced Imaging",
        "Laboratory Services",
        "Quick Results",
        "Expert Analysis"
      ]
    }
  ];

  const infrastructure = [
    {
      name: "Operation Theaters",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      description: "Modern operation theaters equipped with latest surgical technology.",
      features: [
        "Advanced Medical Equipment",
        "Sterile Environment",
        "Digital Integration",
        "Recovery Rooms"
      ]
    },
    {
      name: "Patient Facilities",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      description: "Comfortable patient areas designed for recovery and healing.",
      features: [
        "Private Rooms",
        "Modern Amenities",
        "24/7 Nursing Care",
        "Family Accommodation"
      ]
    },
    {
      name: "Hospital Infrastructure",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      description: "Modern hospital building with state-of-the-art facilities.",
      features: [
        "Modern Architecture",
        "Spacious Environment",
        "Easy Navigation",
        "Parking Facilities"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0">
          <img
          src='/images/facilities/fac-hero.png'
            alt="Hospital Facilities"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              World-Class Healthcare
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our State-of-the-Art <span className="text-primary">Facilities</span>
            </h1>
            <p className="text-xl text-primary/80 mb-8 max-w-2xl">
              Experience exceptional care in our modern, well-equipped medical facilities designed for your comfort and well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#departments"
                className="bg-white text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center"
              >
                Explore Departments
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#gallery"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Departments</h2>
            <p className="text-lg text-gray-600">
              Comprehensive healthcare services delivered with compassion and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {index === 0 ? <HeartPulse className="w-6 h-6" /> :
                        index === 1 ? <Activity className="w-6 h-6" /> :
                          <Microscope className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <ul className="space-y-2 mb-6">
                    {dept.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center">
                    Learn more
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="w-full px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities Gallery</h2>
            <p className="text-lg text-gray-600">
              Take a virtual tour of our state-of-the-art medical facilities and comfortable patient areas.
            </p>
          </div>

          {/* Modern Bento-style Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] w-full">
            {facilityImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-100 ${image.span || ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Clean Sleek Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-white tracking-tight">{image.caption}</h3>
                    <div className="w-12 h-1 bg-primary mt-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="w-full h-full bg-white"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '0%' }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Facilities?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Schedule a tour or book an appointment with our specialists today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-primary/10 font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center"
            >
              Contact Us
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/appointment"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .service-item {
          background: #ffffff;
          border-radius: 14px;
          transition: transform .28s ease, box-shadow .28s ease, background .28s ease;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .service-item:hover,
        .service-item:focus-within {
          transform: translateY(-8px);
          box-shadow: 0 12px 36px rgba(111,51,72,0.12);
          background: linear-gradient(90deg, #4B1438, #6f3348);
          color: #fff;
        }

        .service-item .bg-primary {
          background: #6f3348 !important;
          transition: background .28s ease, transform .28s ease;
        }

        .service-item:hover .bg-primary,
        .service-item:focus-within .bg-primary {
          background: linear-gradient(90deg, #4B1438, #6f3348) !important;
        }

        .service-item h4,
        .service-item p,
        .service-item ul li {
          transition: color .28s ease;
        }

        .service-item:hover h4,
        .service-item:hover p,
        .service-item:hover ul li {
          color: #fff !important;
        }

        .service-item ul li i {
          color: #6f3348;
          transition: color .28s ease;
        }

        .service-item:hover ul li i {
          color: rgba(255,255,255,0.95) !important;
        }

        /* Images inside featured sections */
        .img-border img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        /* Focus visible for keyboard users */
        .btn:focus-visible {
          outline: 3px solid rgba(111,51,72,0.24);
          outline-offset: 2px;
        }

        /* Parallax hero adjustments - full width handled inline */
        .parallax-content {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .gallery-grid {
          display: none; /* replaced by carousel */
        }

        /* Carousel styles */
        .carousel-wrap { overflow: hidden; }
  .carousel-track { display:flex; gap:16px; align-items:stretch; width:200%; animation: scroll-left 22s linear infinite; }
        .carousel-item { flex: 0 0 calc(25% - 16px); box-sizing:border-box; }
        .carousel-item img { width:100%; height:220px; object-fit:cover; border-radius:12px; display:block; }

        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          display:flex;
          align-items:center;
          justify-content:center;
          background: linear-gradient(180deg, rgba(111,51,72,0.0), rgba(0,0,0,0.35));
          color: #fff;
          opacity: 0;
          transition: opacity .28s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        /* Carousel buttons */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 4;
          background: rgba(0,0,0,0.35);
          color: #fff;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .carousel-btn.prev { left: 12px; }
        .carousel-btn.next { right: 12px; }

        .carousel-btn:hover { background: rgba(111,51,72,0.85); }

        /* Override bootstrap primary color on this page to match brand palette */
        .bg-primary { background: linear-gradient(90deg, #4B1438, #6f3348) !important; }
      `}</style>



    </div>
  );
};

export default Facilities; 