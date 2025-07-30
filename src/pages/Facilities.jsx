import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('departments');

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const departments = [
    {
      name: "Fertility Center",
      image: "/images/gallery/fertility-center.jpg",
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
      image: "/images/gallery/emergency.jpg",
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
      image: "/images/gallery/diagnostic.jpeg",
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
      image: "/images/gallery/surgical.jpeg",
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
      image: "/images/gallery/room-facility.jpg",
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
      image: "/images/gallery/01.jpg",
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
    <>
      <Header />
      
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown">Our Facilities</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Facilities</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Facilities</h6>
            <h1 className="display-6 mb-4">World-Class Hospital Infrastructure</h1>
            <p className="mb-0">Experience healthcare excellence in our state-of-the-art facilities, designed to provide the highest quality medical care in a comfortable and healing environment.</p>
          </div>

          {/* Tabs */}
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn ${activeTab === 'departments' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab('departments')}
              >
                <i className="fa fa-hospital me-2"></i>Departments
              </button>
              <button
                type="button"
                className={`btn ${activeTab === 'infrastructure' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab('infrastructure')}
              >
                <i className="fa fa-building me-2"></i>Infrastructure
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="row g-5">
            {activeTab === 'departments' ? (
              departments.map((dept, index) => (
                <div key={dept.name} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                  <div className="service-item d-flex h-100 p-5">
                    <div className="flex-shrink-0">
                      <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                        <i className="fa fa-hospital text-white fa-2x"></i>
                      </div>
                    </div>
                    <div className="ms-4">
                      <h4 className="mb-3">{dept.name}</h4>
                      <p className="mb-4">{dept.description}</p>
                      <ul className="list-unstyled">
                        {dept.features.map((feature, i) => (
                          <li key={i} className="mb-2">
                            <i className="fa fa-check text-primary me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              infrastructure.map((item, index) => (
                <div key={item.name} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                  <div className="service-item d-flex h-100 p-5">
                    <div className="flex-shrink-0">
                      <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                        <i className="fa fa-building text-white fa-2x"></i>
                      </div>
                    </div>
                    <div className="ms-4">
                      <h4 className="mb-3">{item.name}</h4>
                      <p className="mb-4">{item.description}</p>
                      <ul className="list-unstyled">
                        {item.features.map((feature, i) => (
                          <li key={i} className="mb-2">
                            <i className="fa fa-check text-primary me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CTA Section */}
          <div className="row g-5 mt-5">
            <div className="col-12">
              <div className="bg-primary rounded p-5 text-center text-white wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-4">Experience Our Facilities</h3>
                <p className="mb-4">Schedule a visit to our hospital and experience our world-class facilities firsthand. Our team is ready to provide you with exceptional care.</p>
                <Link to="/visitation-form" className="btn btn-light">
                  <i className="fa fa-calendar me-2"></i>Schedule a Visit
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="row g-5 mt-5">
            <div className="col-12">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-5">Why Choose Our Facilities?</h3>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-shield-alt text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Safety First</h4>
                  <p className="mb-4">State-of-the-art safety protocols and emergency systems.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-cogs text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Modern Equipment</h4>
                  <p className="mb-4">Latest medical technology and equipment for accurate diagnosis.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-users text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Expert Staff</h4>
                  <p className="mb-4">Highly trained medical professionals and support staff.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item d-flex h-100 p-5">
                <div className="flex-shrink-0">
                  <div className="bg-primary rounded-3" style={{width: '60px', height: '60px'}}>
                    <i className="fa fa-heart text-white fa-2x"></i>
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="mb-3">Patient Comfort</h4>
                  <p className="mb-4">Comfortable and welcoming environment for patients and families.</p>
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

export default Facilities; 