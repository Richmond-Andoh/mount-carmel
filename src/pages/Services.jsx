import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
      {/* Hero Section with Background Image and Overlay (About Page Style) */}
      <div
        className="container-fluid page-header py-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          background: `linear-gradient(rgba(111,51,72,0.85), rgba(111,51,72,0.85)), url('/images/gallery/fertility-center.jpg') center/cover no-repeat`,
          position: "relative",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          backgroundAttachment: "fixed",
          height: "400px",
        }}
      >
        <div className="container py-5">
          <h1
            className="display-3 text-white animated slideInDown fw-bold"
            style={{ letterSpacing: "2px" }}
          >
            Our Services
          </h1>
          {/* <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Services
              </li>
            </ol>
          </nav> */}
          <p className="lead text-white mt-4" style={{ maxWidth: "600px" }}>
            Explore our comprehensive range of fertility, maternity, surgical,
            and specialized medical services delivered with compassion and
            excellence.
          </p>
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
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted by Families</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient First</span>
            <span className="fw-semibold" style={{opacity:0.95}}>World-Class Facilities</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Exceptional Outcomes</span>
            {/* duplicate for seamless loop */}
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted by Families</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient First</span>
            <span className="fw-semibold" style={{opacity:0.95}}>World-Class Facilities</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Exceptional Outcomes</span>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Service Categories - Responsive Horizontal Scroll */}
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <div
                className="d-flex flex-row flex-nowrap overflow-auto gap-3 py-3 px-2"
                style={{ scrollbarWidth: "none" }}
              >
                {serviceCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={`${
                      activeCategory === category.key
                        ? "bg-mount-carmel-primary text-white"
                        : "bg-white text-mount-carmel-primary border border-mount-carmel-primary"
                    } rounded-pill px-4 py-2 fw-semibold shadow-sm transition-all hover:opacity-90`}
                    style={{ minWidth: "140px", whiteSpace: "nowrap" }}
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
      <style>{`
        .comparison-slider input[type=range]::-webkit-slider-thumb {
          width: 16px; height: 32px; background: #6f3348; border-radius: 8px; cursor: ew-resize;
        }
        .comparison-slider input[type=range]::-moz-range-thumb {
          width: 16px; height: 32px; background: #6f3348; border-radius: 8px; cursor: ew-resize;
        }
        .comparison-slider input[type=range]::-ms-thumb {
          width: 16px; height: 32px; background: #6f3348; border-radius: 8px; cursor: ew-resize;
        }
        .comparison-slider input[type=range] {
          appearance: none;
          background: transparent;
        }
        .flow-step {
          box-shadow: 0 2px 12px rgba(111,51,72,0.10);
        }
        .equipment-card {
          transition: box-shadow .3s, transform .3s;
        }
        .pricing-table tr {
          transition: background .3s, color .3s, transform .3s;
        }
        .pricing-table tr:hover {
          background: #6f3348; color: #fff;
        }
        .btn.active, .btn:active {
          background: #6f3348 !important; color: #fff !important;
          border-color: #6f3348 !important;
        }
      `}</style>
    </div>
  );
};

export default Services;
