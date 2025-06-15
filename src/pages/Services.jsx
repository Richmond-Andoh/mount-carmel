import React from 'react';
import { motion } from 'framer-motion';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';

const Services = () => {
  return (
    <div className="min-h-screen">
      <WhyChooseUs />

      <section className="py-16">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-[#6f2248] mb-12"
          >
            Our Medical Services
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service cards */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#6f2248] mb-3">IVF Treatment</h3>
              <p className="text-gray-600">State-of-the-art in vitro fertilization services with high success rates.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#6f2248] mb-3">Fertility Counseling</h3>
              <p className="text-gray-600">Expert guidance and support throughout your fertility journey.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#6f2248] mb-3">Genetic Testing</h3>
              <p className="text-gray-600">Comprehensive genetic screening and diagnostic services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#6f2248] mb-3">Egg Freezing</h3>
              <p className="text-gray-600">Advanced fertility preservation options for future family planning.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#6f2248] mb-3">Male Fertility Services</h3>
              <p className="text-gray-600">Specialized treatments and solutions for male fertility issues.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#6f2248] mb-3">Reproductive Surgery</h3>
              <p className="text-gray-600">Minimally invasive surgical procedures for reproductive health.</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Gallery />
    </div>
  );
};

export default Services; 