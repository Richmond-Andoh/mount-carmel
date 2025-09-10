import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Team = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Philip Anning-Kuffour',
      position: 'Chief Medical Officer',
      specialty: 'Fertility Specialist',
      image: '/images/team/doctor-1.jpg',
      description: 'Dr. Philip Aning-Kuffour is a renowned fertility specialist with over 15 years of experience in reproductive medicine.',
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
      name: 'Dr. Gerald Osei-Owusu',
      position: 'Gynecology Specialist',
      specialty: 'Women\'s Health',
      image: '/images/team/doctor-2.jpg',
      description: 'Dr. Osei-Owusu specializes in women\'s health and gynecological surgery with expertise in minimally invasive procedures.',
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
      name: 'Dr. Abigail Danso',
      position: 'Pediatrician',
      specialty: 'Child Care Expert',
      image: '/images/team/doctor-3.jpg',
      description: 'Dr. Danso is dedicated to providing comprehensive care for children from birth through adolescence.',
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
      name: 'Dr. Kazima Kwame Kpesese',
      position: 'Emergency Medicine',
      specialty: 'Emergency Care',
      image: '/images/team/doctor-4.jpg',
      description: 'Dr. Kpesese leads our emergency department with expertise in critical care and trauma medicine.',
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
      name: 'Dr. Bernard Seshie',
      position: 'General Surgeon',
      specialty: 'Surgical Care',
      image: '/images/team/doctor-6.jpg',
      description: 'Dr. Seshie provides comprehensive surgical care with a focus on minimally invasive techniques.',
      education: 'MBChB, FRCS',
      experience: '11+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
        {
      name: 'Dr. Selasie Mawuko',
      position: 'Anaesthesiologist',
      specialty: 'Anaesthesia',
      image: '/images/team/doctor-6.jpg',
      description: 'Dr. Mawuko provides comprehensive anaesthetic care with a focus on patient safety and comfort.',
      education: 'MBChB, FRCA',
      experience: '11+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Mr. Isaac Addo',
      position: 'Laboratory Director',
      specialty: 'Pathology',
      image: '/images/team/doctor-5.jpg',
      description: 'Mr. Addo oversees our state-of-the-art laboratory services and diagnostic testing facilities.',
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
      name: 'Dr. Robert Acquah',
      position: 'General Medicine',
      specialty: 'Internal Medicine',
      image: '/images/team/doctor-6.jpg',
      description: 'Dr. Acquah provides comprehensive medical care for adults with a focus on preventive medicine.',
      education: 'MBChB, MRCP',
      experience: '11+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
        {
      name: 'Dr. Lemuel Ato Bray',
      position: 'Urology Specialist',
      specialty: 'Urology',
      image: '/images/team/doctor-6.jpg',
      description: 'Dr. Bray specializes in urology and provides comprehensive care for patients with urinary tract disorders.',
      education: 'MBChB, FRCS',
      experience: '11+ Years',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with Parallax Background Image, Brand Overlay, and Glassmorphism */}
      <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s" style={{
        background: `linear-gradient(rgba(111,51,72,0.8), rgba(111,51,72,0.8)), url('/images/about-bg.jpg') center/cover no-repeat`,
        position: 'relative',
        // borderRadius: '0 0 32px 32px',
        boxShadow: '0 10px 38px rgba(0,0,0,0.16)',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        minHeight: '450px'
      }}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown fw-bold" style={{letterSpacing: '2px', textShadow: '0 2px 16px rgba(0,0,0,0.18)'}}>Our Team</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            {/* <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Team</li>
            </ol> */}
          </nav>
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
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Physicians</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Advanced Diagnostics</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient-Centered</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Global Standards</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted Team</span>
            {/* duplicate for seamless loop */}
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Physicians</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Advanced Diagnostics</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient-Centered</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Global Standards</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted Team</span>
          </div>
        </div>
      </section>


      {/* Jumbotron Section - Glassmorphism & Animation */}
      <section className="jumbotron-section py-5 mt-5" style={{background: 'linear-gradient(90deg, #4B1438 0%, #6f3348 100%)', color: '#fff', position: 'relative'}}>
        <div className="container text-center" style={{backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.10)', borderRadius: '24px', boxShadow: '0 4px 32px rgba(111,34,72,0.12)', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <h1 className="display-4 fw-bold mb-3 wow fadeInDown" data-wow-delay="0.1s" style={{textShadow: '0 2px 16px rgba(0,0,0,0.18)'}}>Meet Our World-Class Medical Team</h1>
          <p className="lead mb-4 wow fadeInUp" data-wow-delay="0.2s">Compassionate, innovative, and dedicated to your health and well-being.</p>
          <a href="/appointment" className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow wow fadeInUp" data-wow-delay="0.3s" style={{color: '#6f3348', fontWeight: 'bold', boxShadow: '0 2px 12px #6f334833'}}>Book an Appointment</a>
        </div>
      </section>

      {/* Featured Doctor */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid" src="https://plus.unsplash.com/premium_photo-1702598515169-289c3362c8ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Doctor" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start pe-3" style={{color:'#6f3348'}}>Featured Doctor</h6>
                <h1 className="display-6 mb-4">Dr. Philip Anning-Kuffour</h1>
                <h4 className="mb-4" style={{color:'#6f3348'}}>Chief Medical Officer & Fertility Specialist</h4>
                <p>Dr. Sarah Johnson is a distinguished fertility specialist with over 15 years of experience in reproductive medicine. He has helped thousands of couples achieve their dream of parenthood through advanced fertility treatments.</p>
                <p>As our Chief Medical Officer, Dr. Johnson leads our medical team with a vision of excellence and innovation in healthcare delivery. Her expertise in IVF, IUI, and reproductive surgery has made Mount Carmel Hospital a leading fertility center in Ghana.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{color:'#6f3348'}}></i>
                      <h6 className="mb-0">15+ Years Experience</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{color:'#6f3348'}}></i>
                      <h6 className="mb-0">Fertility Specialist</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{color:'#6f3348'}}></i>
                      <h6 className="mb-0">IVF Expert</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x me-3" style={{color:'#6f3348'}}></i>
                      <h6 className="mb-0">Reproductive Surgery</h6>
                    </div>
                  </div>
                </div>
                <a className="btn book-btn py-3 px-5" href="/appointment">Schedule a Consultation</a>
                <style>{`
                  .book-btn { background: #6f3348; border-color: #6f3348; color: #fff; }
                  .book-btn:hover { background: #4B1438; border-color: #4B1438; color: #fff; }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Team Members Carousel - Modern Auto-Scrolling, Glassmorphism, Hover Effects */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #f8f9fa, #fff)'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{color: '#6f3348'}}>Meet Our Team</h2>
            <p className="lead">Our dedicated professionals are here to serve you.</p>
          </div>
          <Slider
            dots={true}
            infinite={true}
            speed={700}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2600}
            cssEase="ease-in-out"
            swipeToSlide={true}
            centerMode={true}
            centerPadding="24px"
            adaptiveHeight={true}
            arrows={true}
            responsive={[
              { breakpoint: 1200, settings: { slidesToShow: 2, centerPadding: '24px' } },
              { breakpoint: 992, settings: { slidesToShow: 2, arrows: true } },
              { breakpoint: 768, settings: { slidesToShow: 1, arrows: false, centerPadding: '16px' } },
              { breakpoint: 576, settings: { slidesToShow: 1, arrows: false, centerPadding: '8px' } }
            ]}
          >
            {teamMembers.map((member, idx) => (
              <div key={idx} style={{padding: '24px 12px'}}>
                <div className="card border-0 shadow-lg rounded-4 text-center p-4 team-card" style={{background: 'rgba(255,255,255,0.85)', transition: 'transform 0.3s, box-shadow 0.3s'}}>
                  <img src={member.image} alt={member.name} className="rounded-circle mx-auto mb-3" style={{width: '120px', height: '120px', objectFit: 'cover', boxShadow: '0 4px 24px #a85c7a22'}} />
                  <h5 className="mb-1" style={{color: '#6f3348'}}>{member.name}</h5>
                  <span className="text-muted mb-2">{member.position}</span>
                  <p className="mb-2">{member.specialty}</p>
                  <p className="text-muted small">{member.description}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <small className="text-muted me-3">
                      <i className="fa fa-graduation-cap me-1"></i>
                      {member.education}
                    </small>
                    <small className="text-muted">
                      <i className="fa fa-clock me-1"></i>
                      {member.experience}
                    </small>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-square mx-1" href={member.social.facebook} style={{backgroundColor: '#6f3348', borderColor: '#6f3348', transition: 'background 0.3s'}}>
                      <i className="fab fa-facebook-f" style={{color: 'white'}}></i>
                    </a>
                    <a className="btn btn-square mx-1" href={member.social.twitter} style={{backgroundColor: '#6f3348', borderColor: '#6f3348', transition: 'background 0.3s'}}>
                      <i className="fab fa-twitter" style={{color: 'white'}}></i>
                    </a>
                    <a className="btn btn-square mx-1" href={member.social.linkedin} style={{backgroundColor: '#6f3348', borderColor: '#6f3348', transition: 'background 0.3s'}}>
                      <i className="fab fa-linkedin-in" style={{color: 'white'}}></i>
                    </a>
                    <a className="btn btn-square mx-1" href={member.social.instagram} style={{backgroundColor: '#6f3348', borderColor: '#6f3348', transition: 'background 0.3s'}}>
                      <i className="fab fa-instagram" style={{color: 'white'}}></i>
                    </a>
                  </div>
                </div>
                <style>{`
                  .team-card:hover {
                    transform: translateY(-8px) scale(1.03);
                    box-shadow: 0 8px 32px rgba(111,51,72,0.4);
                  }
                  .team-card .btn-square:hover {
                    background: #6f3348 !important;
                  }
                  /* slick dots brand styling */
                  .slick-dots li button:before { color: #6f3348; opacity: .5; }
                  .slick-dots li.slick-active button:before { color: #6f3348; opacity: 1; }
                `}</style>
              </div>
            ))}
          </Slider>
        </div>
      </section>


      {/* Support Staff Section with Parallax and Overlay */}
      <div className="w-100 py-5" style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: `linear-gradient(rgba(111,34,72,0.7), rgba(168,92,122,0.7)), url('/images/about-bg.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px', color: '#fff'}}>
            <h6 className="section-title bg-white text-center px-3" style={{color: '#6f2248'}}>Support Team</h6>
            <h1 className="display-6 mb-4">Dedicated Healthcare Support</h1>
            <p className="mb-0">Behind every successful medical team is a dedicated support staff committed to ensuring smooth operations and excellent patient care.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-nurse" style={{color: '#6f3348'}}></i>
                  <h5 className="mb-3">Nursing Staff</h5>
                  <p>Experienced nurses providing compassionate care and support to patients throughout their healthcare journey.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie" style={{color: '#6f3348'}}></i>
                  <h5 className="mb-3">Administrative Staff</h5>
                  <p>Professional administrative team ensuring smooth operations and excellent patient service.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-cogs" style={{color: '#6f3348'}}></i>
                  <h5 className="mb-3">Technical Staff</h5>
                  <p>Skilled technicians maintaining our advanced medical equipment and ensuring optimal performance.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3 rounded-4 shadow-lg bg-white h-100">
                <div className="p-4">
                  <i className="fa fa-3x fa-hands-helping" style={{color: '#6f3348'}}></i>
                  <h5 className="mb-3">Support Services</h5>
                  <p>Dedicated support staff providing essential services to maintain a comfortable patient environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-fluid fact py-5 pt-lg-0" style={{background: 'linear-gradient(#6f2248)'}}>
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-calendar" style={{color:'#6f3348'}}></i>
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
                    <i className="fa fa-phone-alt me-2" style={{color:'#6f3348'}}></i>
                  </div>
                  <div className="ps-3">
                    <h4>Contact Us</h4>
                    <span>+233 592 411 108</span>
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