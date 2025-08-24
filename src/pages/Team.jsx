import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Team = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Medical Officer',
      specialty: 'Fertility Specialist',
      image: '/images/team/doctor-1.jpg',
      description: 'Dr. Johnson is a renowned fertility specialist with over 15 years of experience in reproductive medicine.',
      education: 'MBChB, FRCOG',
      experience: '15+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Head of Gynecology',
      specialty: 'Women\'s Health',
      image: '/images/team/doctor-2.jpg',
      description: 'Dr. Chen specializes in women\'s health and gynecological surgery with expertise in minimally invasive procedures.',
      education: 'MBChB, MD',
      experience: '12+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Pediatrician',
      specialty: 'Child Care Expert',
      image: '/images/team/doctor-3.jpg',
      description: 'Dr. Rodriguez is dedicated to providing comprehensive care for children from birth through adolescence.',
      education: 'MBChB, DCH',
      experience: '10+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Dr. David Thompson',
      position: 'Emergency Medicine',
      specialty: 'Emergency Care',
      image: '/images/team/doctor-4.jpg',
      description: 'Dr. Thompson leads our emergency department with expertise in critical care and trauma medicine.',
      education: 'MBChB, FCEM',
      experience: '8+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Dr. Lisa Wang',
      position: 'Laboratory Director',
      specialty: 'Pathology',
      image: '/images/team/doctor-5.jpg',
      description: 'Dr. Wang oversees our state-of-the-art laboratory services and diagnostic testing facilities.',
      education: 'MBChB, FRCPath',
      experience: '14+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Dr. James Osei',
      position: 'General Medicine',
      specialty: 'Internal Medicine',
      image: '/images/team/doctor-6.jpg',
      description: 'Dr. Osei provides comprehensive medical care for adults with a focus on preventive medicine.',
      education: 'MBChB, MRCP',
      experience: '11+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown">Our Team</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Team</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Team Introduction */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Our Team</h6>
            <h1 className="display-6 mb-4">Meet Our Expert Medical Professionals</h1>
            <p className="mb-0">Our team of experienced healthcare professionals is dedicated to providing you with the highest quality medical care. Each member brings unique expertise and a commitment to excellence in patient care.</p>
          </div>
        </div>
      </div>

      {/* Featured Doctor */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid" src="/images/team/featured-doctor.jpg" alt="Featured Doctor" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Featured Doctor</h6>
                <h1 className="display-6 mb-4">Dr. Sarah Johnson</h1>
                <h4 className="text-primary mb-4">Chief Medical Officer & Fertility Specialist</h4>
                <p>Dr. Sarah Johnson is a distinguished fertility specialist with over 15 years of experience in reproductive medicine. She has helped thousands of couples achieve their dream of parenthood through advanced fertility treatments.</p>
                <p>As our Chief Medical Officer, Dr. Johnson leads our medical team with a vision of excellence and innovation in healthcare delivery. Her expertise in IVF, IUI, and reproductive surgery has made Mount Carmel Hospital a leading fertility center in Ghana.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">15+ Years Experience</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Fertility Specialist</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">IVF Expert</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Reproductive Surgery</h6>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" href="/appointment">Book Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src={member.image} alt={member.name} />
                    <div className="team-social">
                      <a className="btn btn-square mx-1" href={member.social.facebook} style={{backgroundColor: '#0066CC', borderColor: '#0066CC'}}>
                        <i className="fab fa-facebook-f" style={{color: 'white'}}></i>
                      </a>
                      <a className="btn btn-square mx-1" href={member.social.twitter} style={{backgroundColor: '#0066CC', borderColor: '#0066CC'}}>
                        <i className="fab fa-twitter" style={{color: 'white'}}></i>
                      </a>
                      <a className="btn btn-square mx-1" href={member.social.linkedin} style={{backgroundColor: '#0066CC', borderColor: '#0066CC'}}>
                        <i className="fab fa-linkedin-in" style={{color: 'white'}}></i>
                      </a>
                      <a className="btn btn-square mx-1" href={member.social.instagram} style={{backgroundColor: '#0066CC', borderColor: '#0066CC'}}>
                        <i className="fab fa-instagram" style={{color: 'white'}}></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">{member.name}</h5>
                    <small className="text-primary">{member.position}</small>
                    <p className="mb-2">{member.specialty}</p>
                    <p className="text-muted small">{member.description}</p>
                    <div className="d-flex justify-content-center">
                      <small className="text-muted me-3">
                        <i className="fa fa-graduation-cap me-1"></i>
                        {member.education}
                      </small>
                      <small className="text-muted">
                        <i className="fa fa-clock me-1"></i>
                        {member.experience}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Staff Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Support Team</h6>
            <h1 className="display-6 mb-4">Dedicated Healthcare Support</h1>
            <p className="mb-0">Behind every successful medical team is a dedicated support staff committed to ensuring smooth operations and excellent patient care.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-nurse text-primary mb-4"></i>
                  <h5 className="mb-3">Nursing Staff</h5>
                  <p>Experienced nurses providing compassionate care and support to patients throughout their healthcare journey.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                  <h5 className="mb-3">Administrative Staff</h5>
                  <p>Professional administrative team ensuring smooth operations and excellent patient service.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cogs text-primary mb-4"></i>
                  <h5 className="mb-3">Technical Staff</h5>
                  <p>Skilled technicians maintaining our advanced medical equipment and ensuring optimal performance.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                  <h5 className="mb-3">Support Services</h5>
                  <p>Dedicated support staff providing essential services to maintain a comfortable patient environment.</p>
                </div>
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
                    <span>Meet with our experts</span>
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
                    <h4>Contact Us</h4>
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

export default Team; 