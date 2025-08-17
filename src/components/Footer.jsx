import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Our Services', path: '/services' },
    { name: 'Terms & Condition', path: '/terms' },
    { name: 'Support', path: '/support' }
  ];

  const popularLinks = [
    { name: 'Fertility Treatment', path: '/services/fertility' },
    { name: 'Maternity Care', path: '/services/maternity' },
    { name: 'Emergency Care', path: '/services/emergency' },
    { name: 'Laboratory Services', path: '/services/laboratory' },
    { name: 'Book Appointment', path: '/appointment' }
  ];

  return (
    <>
      {/* Footer */}
      <div className="container-fluid footer position-relative py-5 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor: '#6f3348'}}>
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-6 pe-lg-5">
              <Link to="/" className="navbar-brand">
                <div className="d-flex align-items-center">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Mount Carmel Hospital Logo" 
                    style={{width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px'}}
                  />
                  <h1 className="h1 mb-0">
                    <span style={{color: '#FFFFFF'}}>Mount </span>
                    <span style={{color: '#F8FBFF'}}>Carmel</span>
                  </h1>
                </div>
              </Link>
              <p className="fs-5 mb-4" style={{color: '#F8FBFF'}}>
                Mount Carmel Hospital and Fertility Center is committed to providing exceptional healthcare 
                with compassion and excellence. Our state-of-the-art facilities and expert medical team 
                ensure the highest quality care for our patients.
              </p>
              <p style={{color: '#F8FBFF'}}><i className="fa fa-map-marker-alt me-2" style={{color: '#FFFFFF'}}></i>Ashfoam Junction, Tema Com.25, Accra, Ghana</p>
              <p style={{color: '#F8FBFF'}}><i className="fa fa-phone-alt me-2" style={{color: '#FFFFFF'}}></i>+233 30 393 9896</p>
              <p style={{color: '#F8FBFF'}}><i className="fa fa-envelope me-2" style={{color: '#FFFFFF'}}></i>mountcarmelhospital@outlook.com</p>
              <div className="d-flex mt-4">
                <a className="btn btn-lg-square me-2" href="#" style={{backgroundColor: '#4B1438', borderColor: '#4B1438'}}>
                  <i className="fab fa-facebook-f" style={{color: 'white'}}></i>
                </a>
                <a className="btn btn-lg-square me-2" href="#" style={{backgroundColor: '#4B1438', borderColor: '#4B1438'}}>
                  <i className="fab fa-twitter" style={{color: 'white'}}></i>
                </a>
                <a className="btn btn-lg-square me-2" href="#" style={{backgroundColor: '#4B1438', borderColor: '#4B1438'}}>
                  <i className="fab fa-linkedin-in" style={{color: 'white'}}></i>
                </a>
                <a className="btn btn-lg-square me-2" href="#" style={{backgroundColor: '#4B1438', borderColor: '#4B1438'}}>
                  <i className="fab fa-instagram" style={{color: 'white'}}></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="row g-5">
                <div className="col-sm-6">
                  <h4 className="text-light mb-4" style={{color: '#FFFFFF'}}>Quick Links</h4>
                  {quickLinks.map((link, index) => (
                    <Link key={index} className="btn btn-link" to={link.path} style={{color: '#F8FBFF', textDecoration: 'none'}}>
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="col-sm-6">
                  <h4 className="text-light mb-4" style={{color: '#FFFFFF'}}>Popular Services</h4>
                  {popularLinks.map((link, index) => (
                    <Link key={index} className="btn btn-link" to={link.path} style={{color: '#F8FBFF', textDecoration: 'none'}}>
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="col-sm-12">
                  <h4 className="text-light mb-4" style={{color: '#FFFFFF'}}>Newsletter</h4>
                  <div className="w-100">
                    <div className="input-group">
                      <input 
                        type="text" 
                        className="form-control border-0 py-3 px-4" 
                        style={{ background: 'rgba(255, 255, 255, .1)', color: '#F8FBFF' }} 
                        placeholder="Your Email Address"
                      />
                      <button className="btn px-4" style={{backgroundColor: '#4B1438', borderColor: '#4B1438', color: 'white'}}>Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright py-4" style={{backgroundColor: '#001122'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0" style={{color: '#F8FBFF'}}>
                &copy; <a href="#" style={{color: '#FFFFFF'}}>Mount Carmel Hospital</a>. All Rights Reserved. {currentYear}
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0" style={{color: '#F8FBFF'}}>
                Designed by <a href="https://htmlcodex.com" style={{color: '#FFFFFF'}}>HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-lg-square rounded-circle back-to-top" style={{backgroundColor: '#6f3348', borderColor: '#6f3348'}}>
        <i className="bi bi-arrow-up" style={{color: 'white'}}></i>
      </a>
    </>
  );
};

export default Footer;
