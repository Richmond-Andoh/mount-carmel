// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/mount-background-image.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: "120vh"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen flex items-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl px-4 sm:px-6 md:px-8"
        >
          <h1 className="text-4xl sm:text-3xl md:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg text-white">
            Welcome to Mount Carmel Hospital And Fertility Center
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-medium drop-shadow-lg text-white">
            Providing exceptional healthcare with compassion and excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/appointment"
              className="bg-[#6f2248] text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#6f2248]/90 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Book Appointment
            </Link>
            <Link 
              to="/about"
              className="bg-white text-[#6f2248] px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;