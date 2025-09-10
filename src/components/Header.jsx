import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { ScrollProgress } from "./magicui/scroll-progress";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "All Services", path: "/services" },
      { name: "Our Facilities", path: "/facilities" },
      { name: "Book Appointment", path: "/appointment" },
    ],
  },
  { name: "Team", path: "/team" },
  { name: "Testimonies", path: "/testimonies" },
  { name: "FAQ", path: "/faq" },
  {
    name: "Partners",
    path: "/partners",
    dropdown: [
      { name: "Our Partners", path: "/partners" },
      { name: "Become a Partner", path: "/partner-form" },
      { name: "Visit Facility", path: "/visitation-form" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Add/remove body padding to prevent content jumping when navbar becomes fixed
      // if (scrolled) {
      //   document.body.style.paddingTop = '80px'; // Adjust based on navbar height
      // } else {
      //   document.body.style.paddingTop = '50px';
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.paddingTop = "0"; // Cleanup
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Topbar */}
      <div className="hidden lg:block bg-mount-carmel-dark text-mount-carmel-light py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <small className="flex items-center">
                <i className="fa fa-map-marker-alt mr-2"></i>
                Ashfoam Junction, Tema Com.25, Accra, Ghana
              </small>
              <small className="flex items-center">
                <i className="fa fa-clock mr-2"></i>
                Working everyday, 24/7
              </small>
            </div>
            <nav className="flex items-center space-x-4">
              <a
                className="text-mount-carmel-light hover:text-white transition-colors"
                href="#"
              >
                Careers
              </a>
              <a
                className="text-mount-carmel-light hover:text-white transition-colors"
                href="#"
              >
                Support
              </a>
              <a
                className="text-mount-carmel-light hover:text-white transition-colors"
                href="#"
              >
                Terms
              </a>
              <AnimatedThemeToggler />
              <a
                className="text-mount-carmel-light hover:text-white transition-colors"
                href="#"
              >
                FAQs
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="hidden lg:block bg-mount-carmel-primary pt-2 pb-3">
        <div className="container mx-auto px-4 pb-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <i className="bi bi-telephone-inbound text-3xl text-white"></i>
              <div className="ml-3">
                <h5 className="text-white mb-0">Call Now</h5>
                <span className="text-mount-carmel-light">
                  +233 30 393 9896
                </span>
              </div>
            </div>
            <Link to="/" className="text-white no-underline">
              <div className="flex items-center">
                <img
                  src="/images/logo.jpg"
                  alt="Mount Carmel Hospital Logo"
                  className="w-15 h-15 rounded-full mr-4"
                  style={{ height: "80px", width: "80px" }}
                />
                <div>
                  <span className="text-mount-carmel-light">Mount </span>
                  <span className="text-white">Carmel</span>
                  <div className="text-sm text-mount-carmel-light font-normal">
                    Hospital & Fertility Center
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center">
              <i className="bi bi-envelope text-3xl text-white"></i>
              <div className="ml-3">
                <h5 className="text-white mb-0">Mail Now</h5>
                <span className="text-mount-carmel-light">
                  mountcarmelhospital@outlook.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar with Glassmorphism */}
      <div
        className={`${
          isScrolled ? "fixed top-0 left-0 right-0 py-2 z-[100]" : "relative py-3 z-[100]"
        } transition-all duration-300`}
        style={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(111, 51, 72, 0.1)",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(111, 51, 72, 0.1)"
            : "0 4px 16px rgba(111, 51, 72, 0.05)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <Link to="/" className="lg:hidden flex items-center">
              <img
                src="/images/logo.jpg"
                alt="Mount Carmel Hospital Logo"
                className="w-10 h-10 rounded-full mr-3"
              />
              <h1 className="m-0">
                <span className="text-mount-carmel-primarytext-mount-carmel-primary">
                  Mount{" "}
                </span>
                <span className="text-mount-carmel-secondary">Carmel</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {navLinks.map((link, index) => (
                <div key={link.path} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                          location.pathname === link.path
                            ? "text-mount-carmel-primary bg-mount-carmel-primary/10"
                            : "text-mount-carmel-dark hover:text-mount-carmel-primary hover:bg-mount-carmel-primary/10"
                        }`}
                        onClick={() => handleDropdownToggle(index)}
                        onMouseEnter={() => setActiveDropdown(index)}
                      >
                        {link.name}
                        <svg
                          className="ml-1 inline-block w-4 h-4 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`absolute top-full left-0 mt-2 w-56 md:w-64 lg:w-72 rounded-xl shadow-lg transition-all duration-300 z-[90] ${
                          activeDropdown === index
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                        style={{
                          background: "rgba(255, 255, 255, 0.95)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(111, 51, 72, 0.1)",
                          boxShadow: "0 8px 32px rgba(111, 51, 72, 0.15)",
                        }}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {link.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-mount-carmel-dark hover:text-mount-carmel-primary hover:bg-mount-carmel-primary/10 transition-all duration-200 rounded-lg mx-2"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                        location.pathname === link.path
                          ? "text-mount-carmel-primary bg-mount-carmel-primary/10"
                          : "text-mount-carmel-dark hover:text-mount-carmel-primary hover:bg-mount-carmel-primary/10"
                      }`}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mount-carmel-primary"></span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              {[
                { icon: "fab fa-facebook-f", href: "#" },
                { icon: "fab fa-twitter", href: "#" },
                { icon: "fab fa-linkedin-in", href: "#" },
                { icon: "fab fa-instagram", href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-mount-carmel-primary hover:bg-mount-carmel-secondary text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-mount-carmel-primary/10 hover:bg-mount-carmel-primary/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-mount-carmel-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
            style={{
              maxHeight: isMobileMenuOpen ? "80vh" : "0",
              overflowY: isMobileMenuOpen ? "auto" : "hidden",
            }}
          >
            <div
              className="mt-4 rounded-xl p-4"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(111, 51, 72, 0.1)",
                boxShadow: "0 8px 32px rgba(111, 51, 72, 0.1)",
                maxHeight: "70vh",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="space-y-2" style={{ minHeight: "fit-content" }}>
                {navLinks.map((link, index) => (
                  <div key={link.path}>
                    {link.dropdown ? (
                      <div>
                        <button
                          className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            location.pathname === link.path
                              ? "text-mount-carmel-primary bg-mount-carmel-primary/10"
                              : "text-mount-carmel-dark hover:text-mount-carmel-primary hover:bg-mount-carmel-primary/10"
                          }`}
                          onClick={() => handleDropdownToggle(index)}
                        >
                          <div className="flex items-center justify-between">
                            {link.name}
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === index ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeDropdown === index ? "max-h-48" : "max-h-0"
                          }`}
                        >
                          <div className="pl-4 space-y-1">
                            {link.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                className="block px-4 py-2 text-mount-carmel-dark hover:text-mount-carmel-primary hover:bg-mount-carmel-primary/10 rounded-lg transition-all duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          location.pathname === link.path
                            ? "text-mount-carmel-primary bg-mount-carmel-primary/10"
                            : "text-mount-carmel-dark hover:text-mount-carmel-primary hover:bg-mount-carmel-primary/10"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Media Icons - Mobile */}
              <div className="flex items-center justify-center space-x-2 mt-4 pt-4 border-t border-mount-carmel-primary/10">
                {[
                  { icon: "fab fa-facebook-f", href: "#" },
                  { icon: "fab fa-twitter", href: "#" },
                  { icon: "fab fa-linkedin-in", href: "#" },
                  { icon: "fab fa-instagram", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-mount-carmel-primary hover:bg-mount-carmel-secondary text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      {/* <div className={`${isScrolled ? "h-28" : "h-4"}`}></div>  */}

      <ScrollProgress />
    </>
  );
};

export default Header;
