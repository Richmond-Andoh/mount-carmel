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
    { path: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setShowOthersDropdown(false)
  }

  const toggleOthersDropdown = () => {
    setShowOthersDropdown(!showOthersDropdown)
  }

  return (
    <nav className={`fixed w-full z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-[3.5rem] h-[3.5rem] flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Mount Carmel Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#6f2248] mb-1.5">
                  Mount Carmel Hospital And Fertility Center
                </h1>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <a href="mailto:contact@example.com" className="flex items-center hover:text-[#6f2248] transition-colors">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@example.com
                  </a>
                  <a href="tel:+15589554885" className="flex items-center hover:text-[#6f2248] transition-colors">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (558) 955-4885
                  </a>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium text-gray-700 hover:text-[#6f2248] transition-colors ${location.pathname === link.path ? 'text-[#6f2248]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button 
                className={`text-sm font-medium text-gray-700 hover:text-[#6f2248] transition-colors ${
                  ['/testimonies', '/faq', '/partners'].includes(location.pathname) ? 'text-[#6f2248]' : ''
                }`}
                onClick={toggleOthersDropdown}
                onMouseEnter={() => setShowOthersDropdown(true)}
                onMouseLeave={() => setShowOthersDropdown(false)}
              >
                Others
                <svg 
                  className={`w-4 h-4 ml-1 transform transition-transform ${showOthersDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {showOthersDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-48"
                    onMouseEnter={() => setShowOthersDropdown(true)}
                    onMouseLeave={() => setShowOthersDropdown(false)}
                  >
                    <Link 
                      to="/testimonies" 
                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 ${
                        location.pathname === '/testimonies' ? 'text-[#6f2248]' : ''
                      }`}
                    >
                      Testimonies
                    </Link>
                    <Link 
                      to="/faq" 
                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 ${
                        location.pathname === '/faq' ? 'text-[#6f2248]' : ''
                      }`}
                    >
                      FAQ
                    </Link>
                    <Link 
                      to="/partners" 
                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 ${
                        location.pathname === '/partners' ? 'text-[#6f2248]' : ''
                      }`}
                    >
                      Partners
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/appointment"
              className="bg-[#6f2248] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6f2248]/90 transition-colors"
            >
              Make an Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#6f2248] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden bg-white/70 backdrop-blur overflow-y-auto max-h-screen border-t"
          >
            <div className="container-custom py-2 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-gray-700 hover:text-[#6f2248] transition-colors ${location.pathname === link.path ? 'text-[#6f2248]' : ''}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Others Dropdown Links for Mobile */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-gray-500 px-4 pb-1">Others</div>
                <Link 
                  to="/testimonies" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-gray-700 hover:text-[#6f2248] transition-colors ${location.pathname === '/testimonies' ? 'text-[#6f2248]' : ''}`}
                >
                  Testimonies
                </Link>
                <Link 
                  to="/faq" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-gray-700 hover:text-[#6f2248] transition-colors ${location.pathname === '/faq' ? 'text-[#6f2248]' : ''}`}
                >
                  FAQ
                </Link>
                <Link 
                  to="/partners" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-gray-700 hover:text-[#6f2248] transition-colors ${location.pathname === '/partners' ? 'text-[#6f2248]' : ''}`}
                >
                  Partners
                </Link>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center mt-4 bg-[#6f2248] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6f2248]/90 transition-colors"
                >
                  Make Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar 