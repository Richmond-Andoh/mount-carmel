import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Gallery from './Gallery'
import gallery1 from '../assets/gallery/gallery-1.jpg'
import gallery2 from '../assets/gallery/gallery-2.jpg'
import gallery3 from '../assets/gallery/gallery-3.jpg'
import gallery4 from '../assets/gallery/gallery-4.jpg'
import gallery5 from '../assets/gallery/gallery-5.jpg'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const galleryImages = [
    {
      url: gallery1,
      caption: ''
    },
    {
      url: gallery2,
      caption: ''
    },
    {
      url: gallery3,
      caption: ''
    },
    {
      url: gallery4,
      caption: ''
    },
    {
      url: gallery5,
      caption: ''
    }
  ]

  const services = [
    {
      title: "Fertility Center",
      description: "Comprehensive fertility treatments and reproductive care, including IVF, fertility counseling, and advanced reproductive technologies.",
      image: "/images/services/fertility.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-pink-500 to-pink-600",
      features: [
        "In Vitro Fertilization (IVF)",
        "Fertility Assessment & Counseling",
        "Advanced Reproductive Technologies",
        "Fertility Preservation",
        "Embryology Laboratory"
      ]
    },
    {
      title: "General Medicine",
      description: "Comprehensive medical care for adults, including preventive care and treatment of various conditions.",
      image: "/images/services/general-medicine.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      features: [
        "Preventive Care",
        "Chronic Disease Management",
        "Health Screenings",
        "Vaccinations",
        "General Check-ups"
      ]
    },
    {
      title: "Gynecology",
      description: "Comprehensive women's health care, including reproductive health, fertility treatments, and preventive screenings.",
      image: "/images/services/gynecology.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      features: [
        "Women's Health Check-ups",
        "Reproductive Health Care",
        "Prenatal Care",
        "Gynecological Surgery",
        "Cancer Screenings"
      ]
    },
    {
      title: "General Surgery",
      description: "Advanced surgical procedures and treatments for a wide range of conditions, with state-of-the-art operating facilities.",
      image: "/images/services/general-surgery.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
        </svg>
      ),
      color: "from-red-500 to-red-600",
      features: [
        "Minimally Invasive Surgery",
        "Laparoscopic Procedures",
        "Emergency Surgery",
        "Post-operative Care",
        "Surgical Consultations"
      ]
    },
    {
      title: "Pediatrics",
      description: "Expert care for children from birth through adolescence, focusing on their unique health needs.",
      image: "/images/services/peditrics.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
      features: [
        "Well-child Visits",
        "Vaccinations",
        "Developmental Assessment",
        "Pediatric Emergency Care",
        "Child Nutrition Counseling"
      ]
    },
    {
      title: "Orthopedics",
      description: "Specialized care for musculoskeletal system, including bones, joints, ligaments, and muscles.",
      image: "/images/services/orthopedics.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      color: "from-yellow-500 to-yellow-600",
      features: [
        "Joint Replacement",
        "Sports Medicine",
        "Spine Care",
        "Fracture Management",
        "Physical Therapy"
      ]
    }
  ]

  return (
    <>
      <section className="pt-8 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Medical Services"
            subtitle="Specialized Fertility Care & Healthcare Solutions"
            description="As a leading fertility center and general hospital, we offer comprehensive medical services including advanced reproductive treatments and general healthcare, delivered by experienced professionals using cutting-edge technology."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-[#6f2248] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-6 text-[#6f2248] font-semibold hover:text-[#6f2248]/80 transition-colors flex items-center"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

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
                className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                <h4 className="font-semibold text-lg mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-[#6f2248] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
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