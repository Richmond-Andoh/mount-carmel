import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { name: 'All Services', path: '/services' },
      { name: 'Our Facilities', path: '/facilities' },
      { name: 'Book Appointment', path: '/appointment' }
    ]
  },
  { name: 'Team', path: '/team' },
  { name: 'Testimonies', path: '/testimonies' },
  { name: 'FAQ', path: '/faq' },
  { 
    name: 'Partners', 
    path: '/partners',
    dropdown: [
      { name: 'Our Partners', path: '/partners' },
      { name: 'Become a Partner', path: '/partner-form' },
      { name: 'Visit Facility', path: '/visitation-form' }
    ]
  },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on route change
    setActiveDropdown(null); // Close dropdown on route change
  }, [location.pathname]);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid py-2 d-none d-lg-flex" style={{backgroundColor: '#001122', color: '#F8FBFF'}}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <small className="me-3">
                <i className="fa fa-map-marker-alt me-2"></i>
                Ashfoam Junction, Tema Com.25, Accra, Ghana
              </small>
              <small className="me-3">
                <i className="fa fa-clock me-2"></i>
                Mon-Sat 08:00-18:00, Sun 09:00-15:00
              </small>
            </div>
            <nav className="breadcrumb mb-0">
              <a className="breadcrumb-item small" href="#" style={{color: '#F8FBFF'}}>Careers</a>
              <a className="breadcrumb-item small" href="#" style={{color: '#F8FBFF'}}>Support</a>
              <a className="breadcrumb-item small" href="#" style={{color: '#F8FBFF'}}>Terms</a>
              <a className="breadcrumb-item small" href="#" style={{color: '#F8FBFF'}}>FAQs</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="container-fluid pt-4 pb-5 d-none d-lg-flex" style={{backgroundColor: '#0066CC'}}>
        <div className="container pb-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <i className="bi bi-telephone-inbound fs-2" style={{color: '#FFFFFF'}}></i>
              <div className="ms-3">
                <h5 className="text-white mb-0">Call Now</h5>
                <span style={{color: '#F8FBFF'}}>+233 30 393 9896</span>
              </div>
            </div>
            <Link to="/" className="h1 text-white mb-0 text-decoration-none">
              <div className="d-flex align-items-center">
                <img 
                  src="/images/logo.jpg" 
                  alt="Mount Carmel Hospital Logo" 
                  style={{width: '60px', height: '60px', borderRadius: '50%', marginRight: '15px'}}
                />
                <div>
                  <span style={{color: '#F8FBFF'}}>Mount </span>
                  <span style={{color: '#FFFFFF'}}>Carmel</span>
                  <div style={{fontSize: '14px', color: '#F8FBFF', fontWeight: 'normal'}}>
                    Hospital & Fertility Center
                  </div>
                </div>
              </div>
            </Link>
            <div className="d-flex">
              <i className="bi bi-envelope fs-2" style={{color: '#FFFFFF'}}></i>
              <div className="ms-3">
                <h5 className="text-white mb-0">Mail Now</h5>
                <span style={{color: '#F8FBFF'}}>mountcarmelhospital@outlook.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar with Glassmorphism */}
      <div 
        className={`container-fluid sticky-top transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}
        style={{
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 102, 204, 0.1)',
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 102, 204, 0.1)' 
            : '0 4px 16px rgba(0, 102, 204, 0.05)'
        }}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light py-0">
            <Link to="/" className="navbar-brand d-lg-none">
              <div className="d-flex align-items-center">
                <img 
                  src="/images/logo.jpg" 
                  alt="Mount Carmel Hospital Logo" 
                  style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px'}}
                />
                <h1 className="m-0">
                  <span style={{color: '#0066CC'}}>Mount </span>
                  <span style={{color: '#003366'}}>Carmel</span>
                </h1>
              </div>
            </Link>
            <button 
              type="button" 
              className="navbar-toggler me-0" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarCollapse">
              <div className="navbar-nav mx-auto" style={{display: 'flex', flexDirection: 'row', listStyle: 'none', margin: 0, padding: 0}}>
                {navLinks.map((link, index) => (
                  <div key={link.path} className="nav-item position-relative me-4">
                    {link.dropdown ? (
                      <>
                        <button
                          className={`nav-link dropdown-toggle ${location.pathname === link.path ? 'active' : ''}`}
                          onClick={() => handleDropdownToggle(index)}
                          style={{
                            color: '#001122', 
                            textDecoration: 'none', 
                            padding: '12px 16px', 
                            fontWeight: '500',
                            background: 'transparent',
                            border: 'none',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                          onMouseEnter={(e) => {
                            setActiveDropdown(index);
                            e.target.style.padding = '16px 20px';
                            e.target.style.background = 'rgba(0, 102, 204, 0.1)';
                            e.target.style.color = '#0066CC';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.15)';
                          }}
                          onMouseLeave={(e) => {
                            setActiveDropdown(null);
                            e.target.style.padding = '12px 16px';
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#001122';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          {link.name}
                          <span 
                            className="position-absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300"
                            style={{height: '2px'}}
                          ></span>
                        </button>
                        <div 
                          className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}
                          style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(0, 102, 204, 0.1)',
                            borderRadius: '12px',
                            boxShadow: '0 8px 32px rgba(0, 102, 204, 0.15)',
                            padding: '8px 0',
                            marginTop: '8px',
                            minWidth: '200px',
                            animation: activeDropdown === index ? 'slideDown 0.3s ease' : 'none'
                          }}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {link.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="dropdown-item px-4 py-2"
                              style={{
                                color: '#001122',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                borderRadius: '6px',
                                margin: '2px 8px',
                                padding: '8px 16px'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(0, 102, 204, 0.1)';
                                e.target.style.color = '#0066CC';
                                e.target.style.padding = '12px 20px';
                                e.target.style.transform = 'translateX(4px)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = '#001122';
                                e.target.style.padding = '8px 16px';
                                e.target.style.transform = 'translateX(0)';
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        style={{
                          color: '#001122', 
                          textDecoration: 'none', 
                          padding: '12px 16px', 
                          fontWeight: '500',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(0, 102, 204, 0.1)';
                          e.target.style.color = '#0066CC';
                          e.target.style.padding = '16px 20px';
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#001122';
                          e.target.style.padding = '12px 16px';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        {link.name}
                        {location.pathname === link.path && (
                          <span 
                            className="position-absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                            style={{height: '2px'}}
                          ></span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="ms-auto d-none d-lg-flex">
                <a 
                  className="btn btn-sm-square ms-2" 
                  href="#" 
                  style={{
                    backgroundColor: '#0066CC', 
                    borderColor: '#0066CC',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    padding: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.backgroundColor = '#003366';
                    e.target.style.padding = '12px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.backgroundColor = '#0066CC';
                    e.target.style.padding = '8px';
                  }}
                >
                  <i className="fab fa-facebook-f" style={{color: 'white'}}></i>
                </a>
                <a 
                  className="btn btn-sm-square ms-2" 
                  href="#" 
                  style={{
                    backgroundColor: '#0066CC', 
                    borderColor: '#0066CC',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    padding: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.backgroundColor = '#003366';
                    e.target.style.padding = '12px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.backgroundColor = '#0066CC';
                    e.target.style.padding = '8px';
                  }}
                >
                  <i className="fab fa-twitter" style={{color: 'white'}}></i>
                </a>
                <a 
                  className="btn btn-sm-square ms-2" 
                  href="#" 
                  style={{
                    backgroundColor: '#0066CC', 
                    borderColor: '#0066CC',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    padding: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.backgroundColor = '#003366';
                    e.target.style.padding = '12px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.backgroundColor = '#0066CC';
                    e.target.style.padding = '8px';
                  }}
                >
                  <i className="fab fa-linkedin-in" style={{color: 'white'}}></i>
                </a>
                <a 
                  className="btn btn-sm-square ms-2" 
                  href="#" 
                  style={{
                    backgroundColor: '#0066CC', 
                    borderColor: '#0066CC',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    padding: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.backgroundColor = '#003366';
                    e.target.style.padding = '12px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.backgroundColor = '#0066CC';
                    e.target.style.padding = '8px';
                  }}
                >
                  <i className="fab fa-instagram" style={{color: 'white'}}></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .navbar-nav .nav-link:hover {
          transform: translateY(-2px);
        }
        
        .dropdown-menu {
          animation: slideDown 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Header;