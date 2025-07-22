import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showOthersDropdown, setShowOthersDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/contact', label: 'Contact' }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setShowOthersDropdown(false)
  }

  return (
    <nav className={`fixed w-full z-50 py-5 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="w-full max-w-none px-2 sm:px-4 mx-0">
        <div className="flex flex-row items-center justify-between gap-2 md:gap-0">
          <Link to="/" className="flex items-center gap-2 xs:gap-3 text-left">
            <div className="w-[3.5rem] h-[3.5rem]">
              <img src={logo} alt="Mount Carmel Logo" className="w-full h-full rounded-logo" />
            </div>
            <div>
              <h3 className="text-lg xs:text-xl font-bold text-[#6f2248] mb-1.5 leading-tight">
                Mount Carmel Hospital And Fertility Center
              </h3>
              {/* Contact info only on sm+ */}
              <div className="hidden sm:flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                <a href="mailto:mountcarmelhospital@outlook.com" className="flex items-center hover:text-[#6f2248]">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  mountcarmelhospital@outlook.com
                </a>
                <a href="tel:+233303939896" className="flex items-center hover:text-[#6f2248]">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0592411108
                </a>
              </div>
            </div>
          </Link>

          {/* Mobile menu button - now inline with logo/text */}
          <div className="md:hidden flex items-center ml-2">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-[#6f2248] focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 md:space-x-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-[#6f2248]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/testimonies" className={`nav-link ${location.pathname === '/testimonies' ? 'text-[#6f2248]' : ''}`}>Testimonies</Link>
            <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'text-[#6f2248]' : ''}`}>FAQ</Link>
            <Link to="/partners" className={`nav-link ${location.pathname === '/partners' ? 'text-[#6f2248]' : ''}`}>Partners</Link>
            <Link to="/appointment" className="btn-primary text-sm">Make Appointment</Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav-wrapper"
          >
            {/* Only one close button here, remove any other close button in mobile nav */}
            {/* <div className="flex justify-end mb-2">
              <button onClick={toggleMenu} aria-label="Close menu">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div> */}
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="mobile-nav-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/testimonies" onClick={() => setIsOpen(false)} className="mobile-nav-link">Testimonies</Link>
              <Link to="/faq" onClick={() => setIsOpen(false)} className="mobile-nav-link">FAQ</Link>
              <Link to="/partners" onClick={() => setIsOpen(false)} className="mobile-nav-link">Partners</Link>
              <Link to="/appointment" onClick={() => setIsOpen(false)} className="btn-primary block text-center text-sm mt-4">
                Make Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show contact info on mobile below logo */}
      {/* <div className="flex flex-col sm:hidden mt-2 text-sm text-gray-600">
        <a href="mailto:mountcarmelhospital@outlook.com" className="flex items-center hover:text-[#6f2248] mb-1">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          mountcarmelhospital@outlook.com
        </a>
        <a href="tel:+233303939896" className="flex items-center hover:text-[#6f2248]">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          0592411108
        </a>
      </div> */}
    </nav>
  )
}

export default Navbar
