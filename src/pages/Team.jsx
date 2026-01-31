import React, { useEffect } from 'react';
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
      image: '/images/team/doc3.jpg',
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
      image: '/images/team/doc2.jpg',
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
      image: '/images/team/doc3.jpg',
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
      image: '/images/team/doc4.jpg',
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
      image: '/images/team/doc5.jpg',
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
      image: '/images/team/doc6.jpg',
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
      image: '/images/team/doc5.jpg',
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
      image: '/images/team/doc7.jpg',
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
      image: '/images/team/doc8.jpg',
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
      
      {/* Hero Section - Modern Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-mount-carmel-primary/90 to-mount-carmel-secondary/90">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/general_surgery.png" 
            alt="Medical professionals team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/90 to-mount-carmel-secondary/90 mix-blend-multiply"></div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(40px)',
                transform: `scale(${Math.random() * 2 + 1})`,
                opacity: 0.2 + Math.random() * 0.3,
                animation: `pulse ${15 + Math.random() * 20}s infinite`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-mount-carmel-primary bg-white/20 backdrop-blur-sm rounded-full border border-white/10">
              Meet Our Experts
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              World-Class Healthcare <span className="text-mount-carmel-accent">Professionals</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Our dedicated team of specialists is committed to providing exceptional care with the latest medical advancements and compassionate service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/appointment" 
                className="px-8 py-4 bg-white text-mount-carmel-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Book an Appointment
              </a>
              <a 
                href="#our-team" 
                className="px-8 py-4 text-white font-semibold border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              <div className="py-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm font-medium text-white/80">Specialists</div>
              </div>
              <div className="py-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-sm font-medium text-white/80">Specialties</div>
              </div>
              <div className="py-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm font-medium text-white/80">Years Experience</div>
              </div>
              <div className="py-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm font-medium text-white/80">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Brands Section */}
      <div className="relative bg-white py-8 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        <div className="relative
          before:absolute before:left-0 before:top-0 before:bottom-0 before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10
          after:absolute after:right-0 after:top-0 after:bottom-0 after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          <div className="flex items-center space-x-16 py-4 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {['Medical Excellence', 'Patient First', 'Cutting-Edge Care', 'Trusted Specialists', 'Compassionate Team', '24/7 Support'].map((text, idx) => (
                  <div key={`${i}-${idx}`} className="flex items-center space-x-16">
                    <span className="text-xl font-semibold text-gray-700">{text}</span>
                    <div className="w-2 h-2 rounded-full bg-mount-carmel-primary"></div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>


      {/* Jumbotron Section - Glassmorphism & Animation */}
      <section className="jumbotron-section py-5 mt-5" style={{background: 'linear-gradient(90deg, #4B1438 0%, #6f3348 100%)', color: '#fff', position: 'relative'}}>
        <div className="container text-center" style={{backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.10)', borderRadius: '24px', boxShadow: '0 4px 32px rgba(111,34,72,0.12)', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <h1 className="display-4 fw-bold mb-3 wow fadeInDown" data-wow-delay="0.1s" style={{textShadow: '0 2px 16px rgba(0,0,0,0.18)'}}>Meet Our World-Class Medical Team</h1>
          <p className="lead mb-4 wow fadeInUp" data-wow-delay="0.2s">Compassionate, innovative, and dedicated to your health and well-being.</p>
          <a href="/appointment" className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow wow fadeInUp" data-wow-delay="0.3s" style={{color: '#6f3348', fontWeight: 'bold', boxShadow: '0 2px 12px #6f334833'}}>Book an Appointment</a>
        </div>
      </section>

      {/* Featured Doctor - Modern Design */}
      <section className="md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#6f3348_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10"></div>
        </div>
        
        <div className="relative w-full">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row">
              {/* Doctor Image */}
              <div className="lg:w-1/2 relative group">
                <div className="relative z-10 overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <img 
                    src="/images/team/doc3.jpg" 
                    alt="Dr. Philip Anning-Kuffour" 
                    className="w-full h-full object-cover"
                    style={{ minHeight: '500px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">Dr. Philip Anning-Kuffour</h3>
                    <p className="text-mount-carmel-accent font-medium">Chief Medical Officer & Fertility Specialist</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-mount-carmel-accent/20 rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              
              {/* Doctor Info */}
              <div className="lg:w-6/12 container">
                <div className="inline-block px-8 py-1.5 mb-4 text-xs font-semibold tracking-wider text-mount-carmel-primary uppercase rounded-full bg-mount-carmel-primary/10">
                  Featured Specialist
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Leading the Way in <span className="text-mount-carmel-primary">Reproductive Health</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Dr. Philip Anning-Kuffour is a distinguished fertility specialist with over 15 years of experience in reproductive medicine. 
                  His expertise in IVF, IUI, and reproductive surgery has helped thousands of couples achieve their dream of parenthood.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: 'fa-award', title: '15+ Years Experience', desc: 'Specialized in reproductive medicine' },
                    { icon: 'fa-graduation-cap', title: 'Education', desc: 'MBChB, FRCOG, Subspecialty in Reproductive Medicine' },
                    { icon: 'fa-stethoscope', title: 'Specialties', desc: 'IVF, IUI, Reproductive Surgery' },
                    { icon: 'fa-hospital', title: 'Department', desc: 'Fertility & Reproductive Health' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-mount-carmel-primary/10 flex items-center justify-center text-mount-carmel-primary text-xl">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/appointment" 
                    className="px-8 py-4 bg-mount-carmel-primary text-white font-semibold rounded-lg hover:bg-mount-carmel-primary-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  >
                    <i className="far fa-calendar-alt"></i>
                    <span>Book Consultation</span>
                  </a>
                  {/* <a 
                    href="#meet-our-team" 
                    className="px-8 py-4 bg-white text-mount-carmel-primary font-semibold border border-mount-carmel-primary/20 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <i className="far fa-user-md"></i>
                    <span>View All Doctors</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Grid Section */}
      <section id="our-team" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#6f3348_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-mount-carmel-primary uppercase rounded-full bg-mount-carmel-primary/10">
              Our Specialists
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our <span className="text-mount-carmel-primary">Expert Team</span></h2>
            <p className="text-lg text-gray-600">
              Our team of board-certified specialists brings together decades of experience and a shared commitment to excellence in patient care.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-5 py-2.5 rounded-full bg-mount-carmel-primary text-white font-medium text-sm transition-all hover:bg-mount-carmel-primary-dark">
              All Specialists
            </button>
            {/* {['Cardiology', 'Neurology', 'Pediatrics', 'Surgery', 'Radiology', 'Dermatology'].map((specialty, index) => (
              <button 
                key={index}
                className="px-5 py-2.5 rounded-full bg-white text-gray-700 border border-gray-200 font-medium text-sm transition-all hover:bg-mount-carmel-primary hover:text-white hover:border-mount-carmel-primary"
              >
                {specialty}
              </button>
            ))} */}
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-mount-carmel-accent font-medium">{member.position}</p>
                    <div className="h-0.5 w-12 bg-mount-carmel-accent my-3"></div>
                    <p className="text-sm text-white/90">{member.specialty}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{member.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-graduation-cap mr-2 text-mount-carmel-primary"></i>
                      <span>{member.education}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-briefcase mr-2 text-mount-carmel-primary"></i>
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <a 
                      href="/appointment" 
                      className="text-sm font-medium text-mount-carmel-primary hover:text-mount-carmel-primary-dark flex items-center"
                    >
                      <span>Book Appointment</span>
                      <i className="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                    
                    <div className="flex space-x-2">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a 
                          key={platform}
                          href={url} 
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-mount-carmel-primary text-gray-600 hover:text-white flex items-center justify-center transition-colors"
                          aria-label={`${member.name}'s ${platform}`}
                        >
                          <i className={`fab fa-${platform} text-sm`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-mount-carmel-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-lg font-semibold mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {['IVF', 'Fertility', 'Reproductive Health', 'IUI'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <a 
              href="/doctors" 
              className="inline-flex items-center px-8 py-4 bg-mount-carmel-primary text-white font-semibold rounded-lg hover:bg-mount-carmel-primary-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <span>View All Doctors</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div> */}
        </div>
      </section>


      {/* Support Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#6f3348_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-mount-carmel-primary uppercase rounded-full bg-mount-carmel-primary/10">
              Our Support Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Exceptional <span className="text-mount-carmel-primary">Support Staff</span></h2>
            <p className="text-lg text-gray-600">
              Our dedicated support team works tirelessly behind the scenes to ensure every patient receives the highest standard of care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fa-user-nurse',
                title: 'Nursing Staff',
                description: 'Compassionate and highly skilled nurses providing around-the-clock care with expertise and empathy.',
                stats: '50+ Registered Nurses'
              },
              {
                icon: 'fa-user-tie',
                title: 'Administrative Team',
                description: 'Professional staff managing appointments, records, and ensuring smooth hospital operations.',
                stats: '30+ Administrative Staff'
              },
              {
                icon: 'fa-cogs',
                title: 'Technical Staff',
                description: 'Certified technicians maintaining our advanced medical equipment and technical infrastructure.',
                stats: '24/7 Technical Support'
              },
              {
                icon: 'fa-hands-helping',
                title: 'Patient Care',
                description: 'Dedicated professionals providing essential support services for patient comfort and care.',
                stats: '40+ Care Specialists'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-mount-carmel-primary/10 flex items-center justify-center text-3xl text-mount-carmel-primary group-hover:bg-mount-carmel-primary group-hover:text-white transition-colors duration-300">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg inline-flex items-center text-sm font-medium text-mount-carmel-primary">
                    <i className="fas fa-chart-line mr-2"></i>
                    <span>{item.stats}</span>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary to-mount-carmel-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="mb-6">{item.description}</p>
                    <div className="w-16 h-1 bg-white/30 mx-auto mb-6"></div>
                    <p className="text-sm opacity-90 mb-6">{item.stats}</p>
                    <div className="flex flex-col space-y-3">
                      <a 
                        href="/careers" 
                        className="inline-block px-6 py-2.5 bg-white text-mount-carmel-primary rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
                      >
                        <i className="far fa-briefcase mr-2"></i>
                        View Open Positions
                      </a>
                      <a 
                        href="/contact" 
                        className="inline-block px-6 py-2.5 bg-transparent border-2 border-white text-white rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
                      >
                        <i className="far fa-envelope mr-2"></i>
                        Contact HR
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-mount-carmel-primary to-mount-carmel-secondary overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Exceptional Healthcare?</h2>
            <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
              Schedule an appointment with our specialists today and take the first step towards better health and wellness.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex-1 max-w-md">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center text-2xl text-white">
                  <i className="far fa-calendar-alt"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Book an Appointment</h3>
                <p className="text-white/80 mb-4 text-sm">Schedule a consultation with our specialists at your convenience.</p>
                <a 
                  href="/appointment" 
                  className="inline-block px-6 py-3 bg-white text-mount-carmel-primary font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  Book Now
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex-1 max-w-md">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center text-2xl text-white">
                  <i className="far fa-phone-alt"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Emergency Contact</h3>
                <p className="text-white/80 mb-4 text-sm">Immediate assistance available 24/7 for urgent medical needs.</p>
                <a 
                  href="tel:+233592411108" 
                  className="inline-flex items-center px-6 py-3 bg-white text-mount-carmel-primary font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  <i className="fas fa-phone-alt mr-2"></i>
                  +233 59 241 1108
                </a>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/80 mb-4">Prefer to visit us in person?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/locations" 
                  className="px-6 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm flex items-center"
                >
                  <i className="far fa-map-marker-alt mr-2"></i>
                  Our Locations
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm flex items-center"
                >
                  <i className="far fa-envelope mr-2"></i>
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(40px)',
                transform: `scale(${Math.random() * 2 + 1})`,
                opacity: 0.1 + Math.random() * 0.2,
                animation: `pulse ${15 + Math.random() * 20}s infinite`
              }}
            ></div>
          ))}
        </div>
      </section>
      
      {/* Add Keyframes for Animation */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-marquee {
          animation: marquee var(--duration, 20s) linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - var(--gap, 1rem))); }
        }
      `}</style>

      <Footer />
    </>
  );
};

export default Team; 