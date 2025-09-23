import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Heart,
  Stethoscope,
  Calendar,
  Phone,
  ArrowDown,
  Shield,
  Award,
  Clock
} from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaBaby,
  FaHeartbeat,
  FaUserMd,
  FaStethoscope,
  FaClinicMedical,
  FaFlask,
  FaAmbulance,
  FaProcedures,
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    { key: "all", label: "All Services" },
    { key: "general", label: "General" },
    { key: "fertility", label: "Fertility" },
    { key: "specialist", label: "Specialist" },
    { key: "screening", label: "Screening" },
    { key: "emergency", label: "Emergency" },
    { key: "support", label: "Support" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      category: "general",
      icon: (
        <FaStethoscope className="text-4xl text-mount-carmel-primary mb-4" />
      ),
      title: "General Out-patient & In-patient",
      description:
        "Comprehensive care including general consultancy, 24-hour emergency services, and antenatal/postnatal consultations.",
      features: [
        "General Consultancy",
        "24-Hour Emergency",
        "Antenatal & Postnatal Care",
        "Immunization",
      ],
      image: "/images/services/general-medicine.jpg",
    },
    {
      id: 2,
      category: "fertility",
      icon: <FaBaby className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "In-Vitro Fertilization (IVF)",
      description:
        "Advanced Assisted Reproductive Technology to help you on your journey to parenthood.",
      features: [
        "Fertility Assessment",
        "Embryo Culture",
        "Embryo Transfer",
        "High Success Rates",
      ],
      image: "/images/services/fertility.jpg",
    },
    {
      id: 3,
      category: "specialist",
      icon: <FaUserMd className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "Obstetrics & Gynecology",
      description:
        "Specialized consultancy and care for women's health at every stage of life.",
      features: [
        "Routine Checkups",
        "Maternity Care",
        "Surgical Procedures",
        "Menopause Management",
      ],
      image: "/images/services/gynecology.jpg",
    },
    {
      id: 4,
      category: "specialist",
      icon: (
        <FaProcedures className="text-4xl text-mount-carmel-primary mb-4" />
      ),
      title: "General Surgery",
      description:
        "A wide range of surgical procedures performed by our team of experienced surgeons.",
      features: [
        "Minimally Invasive Surgery",
        "Laparoscopy",
        "Emergency Surgery",
        "Post-operative Care",
      ],
      image: "/images/services/general-surgery.jpg",
    },
    {
      id: 5,
      category: "specialist",
      icon: <FaHeartbeat className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "Orthopedic Services",
      description:
        "Treatment for musculoskeletal issues, including bones, joints, ligaments, tendons, and muscles.",
      features: [
        "Fracture Care",
        "Joint Replacement",
        "Sports Medicine",
        "Physical Therapy",
      ],
      image: "/images/services/orthopedics.jpg",
    },
    {
      id: 6,
      category: "specialist",
      icon: (
        <FaClinicMedical className="text-4xl text-mount-carmel-primary mb-4" />
      ),
      title: "Pediatric Services",
      description:
        "Comprehensive healthcare for infants, children, and adolescents.",
      features: [
        "Well-child Visits",
        "Vaccinations",
        "Sick-child Care",
        "Developmental Screenings",
      ],
      image: "/images/services/peditrics.jpg",
    },
    {
      id: 7,
      category: "screening",
      icon: <FaFlask className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "Health Screening",
      description:
        "Pre-employment and annual health screenings to ensure a healthy and productive workforce.",
      features: [
        "Pre-employment Checks",
        "Annual Physicals",
        "Visa Medicals",
        "Bi-annual Exams",
      ],
      image: "/images/services/general-medicine.jpg",
    },
    {
      id: 8,
      category: "fertility",
      icon: <FaUserMd className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "Family Planning",
      description:
        "Comprehensive family planning and reproductive health services in collaboration with international specialists.",
      features: [
        "Counseling & Assistance",
        "Modern Equipment",
        "Qualified Professionals",
        "Confidential Services",
      ],
      image: "/images/services/fertility.jpg",
    },
    {
      id: 9,
      category: "emergency",
      icon: <FaAmbulance className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "Emergency & Ambulance",
      description:
        "Life-threatening condition management and emergency transportation services.",
      features: [
        "24/7 Urgent Care",
        "Rapid Response",
        "Ambulance Services",
        "Emergency Transportation",
      ],
      image: "/images/services/general-medicine.jpg",
    },
    {
      id: 10,
      category: "support",
      icon: <FaFlask className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "Diagnostic & Laboratory",
      description:
        "Advanced diagnostic procedures including blood tests, X-rays, and ultrasounds.",
      features: [
        "Clinical Biochemistry",
        "Microbiology",
        "Haematology",
        "Radiology & Imaging",
      ],
      image: "/images/services/general-medicine.jpg",
    },
    {
      id: 11,
      category: "support",
      icon: <FaHeartbeat className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "Intensive Care Units (ICU)",
      description:
        "Specialized intensive care for neonatal patients requiring critical monitoring.",
      features: [
        "Neonatal ICU",
        "Continuous Monitoring",
        "Advanced Life Support",
        "Specialized Nursing",
      ],
      image: "/images/services/general-medicine.jpg",
    },
    {
      id: 12,
      category: "support",
      icon: <FaUserMd className="text-4xl text-mount-carmel-primary mb-4" />,
      title: "Pharmacy Services",
      description:
        "In-house pharmacy for medication dispensing and administration of drugs.",
      features: [
        "Medication Dispensing",
        "Drug Administration",
        "Pharmaceutical Counseling",
        "Prescription Fulfillment",
      ],
      image: "/images/services/general-medicine.jpg",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-mount-carmel-light">
      <Header />
      {/* Enhanced Hero Section - Modern and Responsive */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-110"
            style={{
              backgroundImage: `url('/images/gallery/fertility-center.jpg')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/90 via-mount-carmel-primary/80 to-mount-carmel-secondary/85" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-32 right-16 w-24 h-24 bg-mount-carmel-accent/20 rounded-full blur-xl"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30"
              >
                <Stethoscope className="h-5 w-5 text-white mr-3" />
                <span className="text-white font-semibold text-sm tracking-wide">COMPREHENSIVE HEALTHCARE SERVICES</span>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Our <span className="text-mount-carmel-accent">Medical</span>
                <br className="hidden sm:block" />
                Services
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Explore our comprehensive range of fertility, maternity, surgical, and specialized 
                medical services delivered with compassion, innovation, and excellence.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <motion.a
                  href="/appointment"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-mount-carmel-primary font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Book Appointment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.a>
                
                <motion.a
                  href="#services-grid"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-mount-carmel-primary transition-all duration-300"
                >
                  <Heart className="mr-3 h-5 w-5" />
                  Explore Services
                </motion.a>
              </motion.div>
              
              {/* Service Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">12+</div>
                  <div className="text-white/80 text-sm font-medium">Specialized Services</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-white/80 text-sm font-medium">Years of Excellence</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/80 text-sm font-medium">Emergency Care</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* Brand Marquee Section - Enhanced */}
      <section className="bg-gradient-to-r from-mount-carmel-secondary to-mount-carmel-primary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 text-white font-semibold text-sm sm:text-base lg:text-lg">
              <span className="opacity-95">🏥 Compassionate Care</span>
              <span className="opacity-95">👨‍👩‍👧‍👦 Trusted by Families</span>
              <span className="opacity-95">👩‍⚕️ Expert Team</span>
              <span className="opacity-95">❤️ Patient First</span>
              <span className="opacity-95">🏢 World-Class Facilities</span>
              <span className="opacity-95">⭐ Exceptional Outcomes</span>
              <span className="opacity-95">🔬 Advanced Technology</span>
              <span className="opacity-95">🌟 Excellence in Care</span>
              <span className="mx-8">•</span>
            </div>
          ))}
        </div>
      </section>

      <main id="services-grid" className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-mount-carmel-primary/10 rounded-full mb-6">
            <Heart className="h-5 w-5 text-mount-carmel-primary mr-2" />
            <span className="text-mount-carmel-primary font-semibold text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-mount-carmel-primary">Healthcare Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From fertility treatments to emergency care, we provide a full spectrum of medical services 
            tailored to meet your healthcare needs.
          </p>
        </motion.div>
        
        {/* Service Categories - Enhanced Responsive Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="container my-8"
        >
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="flex flex-wrap justify-center gap-3 p-4 bg-gray-50 rounded-2xl">
                {serviceCategories.map((category) => (
                  <motion.button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${
                      activeCategory === category.key
                        ? "bg-mount-carmel-primary text-white shadow-lg"
                        : "bg-white text-mount-carmel-primary border border-mount-carmel-primary/20 hover:border-mount-carmel-primary hover:shadow-md"
                    } rounded-full px-6 py-3 font-semibold transition-all duration-300`}
                    style={{ minWidth: "120px" }}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid - Modern Responsive Cards */}
        <div className="container pb-5">
          <div className="row g-4">
            {filteredServices.map((service) => (
              <div key={service.id} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                  <div
                    className="position-relative"
                    style={{ height: "220px", overflow: "hidden" }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(111,34,72,0.25) 0%, rgba(0,0,0,0.45) 100%)",
                      }}
                    ></div>
                    <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle shadow p-2">
                      {service.icon}
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2 text-mount-carmel-primary">
                      {service.title}
                    </h5>
                    <p className="card-text text-muted mb-3 flex-grow-1">
                      {service.description}
                    </p>
                    <ul className="list-unstyled mb-3">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="d-flex align-items-center mb-2">
                          <span
                            className="me-2"
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor: "#6f3348",
                            }}
                          ></span>
                          <span className="small text-mount-carmel-secondary">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/services/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="rounded-pill mt-auto border border-mount-carmel-primary text-mount-carmel-primary px-3 py-2 text-sm fw-semibold hover:bg-mount-carmel-primary hover:text-white transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* CTA Section - Modern Full Width */}
      <section
        className="container-fluid w-100 py-5"
        style={{
          background: "linear-gradient(90deg, #4B1438 0%, #6f3348 100%)",
          color: "#fff",
          margin: 0,
          padding: 0,
        }}
      >
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-3">
            Ready to Start Your Journey?
          </h2>
          <p className="lead mb-4">
            Our fertility specialists are here to guide you every step of the
            way.
          </p>
          <a
            href="/appointment"
            className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
            style={{ color: "#6f3348", fontWeight: "bold" }}
          >
            Book a Consultation
          </a>
          <a
            href="/contact"
            className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill shadow ms-3"
          >
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
      {/* Enhanced CSS for animations and styling */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Enhanced card hover effects */
        .card {
          transition: all 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(111, 51, 72, 0.15) !important;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar for category buttons */
        .overflow-auto::-webkit-scrollbar {
          height: 6px;
        }
        
        .overflow-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .overflow-auto::-webkit-scrollbar-thumb {
          background: #6f3348;
          border-radius: 3px;
        }
        
        .overflow-auto::-webkit-scrollbar-thumb:hover {
          background: #4B1438;
        }
        
        /* Parallax effect for hero background */
        .transform.scale-110 {
          transition: transform 0.3s ease;
        }
        
        /* Button hover effects */
        .btn.active, .btn:active {
          background: #6f3348 !important; 
          color: #fff !important;
          border-color: #6f3348 !important;
        }
        
        /* Glass morphism effects */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  );
};

export default Services;
