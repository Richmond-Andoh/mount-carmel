import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: "bi bi-heart-pulse",
      title: "Fertility Treatment",
      description: "Advanced fertility treatments including IVF, IUI, and fertility counseling with high success rates.",
      link: "/services/fertility"
    },
    {
      icon: "bi bi-lungs",
      title: "Maternity Care",
      description: "Comprehensive prenatal, delivery, and postnatal care for expectant mothers and newborns.",
      link: "/services/maternity"
    },
    {
      icon: "bi bi-virus",
      title: "Gynecology",
      description: "Specialized women's health care including preventive screenings and gynecological procedures.",
      link: "/services/gynecology"
    },
    {
      icon: "bi bi-capsule-pill",
      title: "Pediatrics",
      description: "Expert care for children from birth through adolescence with specialized pediatric services.",
      link: "/services/pediatrics"
    },
    {
      icon: "bi bi-capsule",
      title: "Laboratory Services",
      description: "Comprehensive diagnostic testing with state-of-the-art equipment and quick results.",
      link: "/services/laboratory"
    },
    {
      icon: "bi bi-prescription2",
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response teams and critical care facilities.",
      link: "/services/emergency"
    },
    {
      icon: "bi bi-clipboard2-pulse",
      title: "General Medicine",
      description: "Primary healthcare services including preventive care, chronic disease management, and health screenings.",
      link: "/services/general"
    },
    {
      icon: "bi bi-file-medical",
      title: "Surgical Procedures",
      description: "Advanced surgical procedures with minimally invasive techniques and expert surgical teams.",
      link: "/services/surgery"
    }
  ];

  return (
    <div className="container-fluid container-service py-5">
      <div className="container pt-5">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h1 className="display-6 mb-3">Reliable & High-Quality Healthcare Services</h1>
          <p className="mb-5">
            Mount Carmel Hospital provides comprehensive medical services with state-of-the-art technology 
            and experienced healthcare professionals dedicated to your well-being.
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="service-item">
                <div className="icon-box-primary mb-4">
                  <i className={`${service.icon} text-dark`}></i>
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className="mb-4">{service.description}</p>
                <Link className="btn btn-light px-3" to={service.link}>
                  Read More<i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection; 