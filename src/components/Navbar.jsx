import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#8B0000]">Mount Carmel</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#8B0000]">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#8B0000]">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#8B0000]">Services</Link>
            <Link to="/departments" className="text-gray-700 hover:text-[#8B0000]">Departments</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-[#8B0000]">Doctors</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#8B0000]">Contact</Link>
            <button className="bg-[#8B0000] text-white px-6 py-2 rounded-md hover:bg-[#6B0000] transition-colors">
              Make Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#8B0000] focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-[#8B0000]">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-[#8B0000]">About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-[#8B0000]">Services</Link>
            <Link to="/departments" className="block px-3 py-2 text-gray-700 hover:text-[#8B0000]">Departments</Link>
            <Link to="/doctors" className="block px-3 py-2 text-gray-700 hover:text-[#8B0000]">Doctors</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#8B0000]">Contact</Link>
            <button className="w-full mt-4 bg-[#8B0000] text-white px-6 py-2 rounded-md hover:bg-[#6B0000] transition-colors">
              Make Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 