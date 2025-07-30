import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Gallery from './Gallery'
import gallery1 from '../assets/gallery/gallery-1.jpg'
import gallery2 from '../assets/gallery/gallery-2.jpg'
import gallery3 from '../assets/gallery/gallery-3.jpg'
import gallery4 from '../assets/gallery/gallery-4.jpg'
import gallery5 from '../assets/gallery/gallery-5.jpg'
import gallery6 from '../assets/gallery/gallery-6.jpg'
import gallery7 from '../assets/gallery/gallery-7.jpg'
import gallery8 from '../assets/gallery/gallery-8.jpg'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const galleryImages = [
    { url: gallery1, caption: '' },
    { url: gallery2, caption: '' },
    { url: gallery3, caption: '' },
    { url: gallery4, caption: '' },
    { url: gallery5, caption: '' },
    { url: gallery6, caption: '' },
    { url: gallery7, caption: '' },
    { url: gallery8, caption: '' },
  ]

  const services = [
    {
      title: "Fertility Center",
      shortDesc: "Advanced reproductive care",
      description: "State-of-the-art fertility treatments with cutting-edge technology and personalized care plans.",
      image: "/images/services/fertility.jpg",
      icon: "👶",
      color: "from-pink-500 to-purple-600",
      features: ["IVF Treatment", "Fertility Counseling", "Advanced Lab Services", "Specialized Care Teams"]
    },
    {
      title: "Maternity Care",
      shortDesc: "Complete pregnancy support",
      description: "Comprehensive maternity services from prenatal care to postpartum support.",
      image: "/images/services/maternity.jpg",
      icon: "🤱",
      color: "from-blue-500 to-cyan-600",
      features: ["Prenatal Care", "Delivery Services", "Postpartum Support", "Neonatal Care"]
    },
    {
      title: "Gynecology",
      shortDesc: "Women's health excellence",
      description: "Specialized gynecological care with advanced diagnostic and treatment options.",
      image: "/images/services/gynecology.jpg",
      icon: "🏥",
      color: "from-green-500 to-emerald-600",
      features: ["Preventive Care", "Diagnostic Services", "Surgical Procedures", "Health Education"]
    },
    {
      title: "Pediatrics",
      shortDesc: "Expert child care",
      description: "Comprehensive pediatric care from birth through adolescence.",
      image: "/images/services/peditrics.jpg",
      icon: "👶",
      color: "from-yellow-500 to-orange-600",
      features: ["Well-child Visits", "Vaccinations", "Developmental Assessment", "Emergency Care"]
    },
    {
      title: "Laboratory Services",
      shortDesc: "Precise diagnostics",
      description: "Advanced laboratory testing with quick, accurate results.",
      image: "/images/services/laboratory.jpg",
      icon: "🔬",
      color: "from-indigo-500 to-purple-600",
      features: ["Blood Tests", "Imaging Services", "Quick Results", "Expert Analysis"]
    },
    {
      title: "Emergency Care",
      shortDesc: "24/7 emergency services",
      description: "Round-the-clock emergency medical care with rapid response teams.",
      image: "/images/services/emergency.jpg",
      icon: "🚑",
      color: "from-red-500 to-pink-600",
      features: ["24/7 Emergency", "Rapid Response", "Critical Care", "Trauma Services"]
    }
  ]

  return (
    <>
      <section className="pt-8 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Services"
            subtitle="Specialized Care"
            description="Comprehensive healthcare solutions delivered with excellence"
          />

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  {/* Service Icon */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-center`}>
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.shortDesc}</p>
                </div>
                  
                  {/* Service Content */}
                <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    
                    {/* Quick Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center text-xs text-gray-600">
                          <div className="w-2 h-2 bg-[#6f2248] rounded-full mr-2"></div>
                        {feature}
                        </div>
                    ))}
                    </div>
                    
                    {/* Learn More Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#6f2248] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#6f2248]/90 transition-colors"
                  >
                    Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Modal */}
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`bg-gradient-to-r ${selectedService.color} p-4 rounded-xl text-3xl`}>
                      {selectedService.icon}
                    </div>
                    <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                      <p className="text-gray-600">{selectedService.shortDesc}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                
                <h4 className="font-semibold text-lg mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-3 h-3 bg-[#6f2248] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery images={galleryImages} />
    </>
  )
}

export default Services 