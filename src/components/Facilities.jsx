import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeader from './SectionHeader'

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('departments')

  const departments = [
    {
      name: "Fertility Center",
      image: "/images/gallery/fertility-center.jpg",
      description: "State-of-the-art fertility treatment center with advanced reproductive technology.",
      features: [
        "IVF Treatment",
        "Fertility Counseling",
        "Advanced Lab Services",
        "Specialized Care Teams"
      ]
    },
    {
      name: "Emergency Department",
      image: "/images/gallery/emergency.jpg",
      description: "24/7 emergency care facility equipped to handle all medical emergencies.",
      features: [
        "24/7 Emergency Services",
        "Rapid Response Team",
        "Advanced Life Support",
        "Critical Care Units"
      ]
    },
    {
      name: "Diagnostic Center",
      image: "/images/gallery/diagnostic.jpeg",
      description: "Comprehensive diagnostic services with modern imaging technology.",
      features: [
        "Advanced Imaging",
        "Laboratory Services",
        "Quick Results",
        "Expert Analysis"
      ]
    }
  ]

  const infrastructure = [
    {
      name: "Operation Theaters",
      image: "/images/gallery/surgical.jpeg",
      description: "Modern operation theaters equipped with latest surgical technology.",
      features: [
        "Advanced Medical Equipment",
        "Sterile Environment",
        "Digital Integration",
        "Recovery Rooms"
      ]
    },
    {
      name: "Patient Facilities",
      image: "/images/gallery/02.jpg",
      description: "Comfortable patient areas designed for recovery and healing.",
      features: [
        "Private Rooms",
        "Modern Amenities",
        "24/7 Nursing Care",
        "Family Accommodation"
      ]
    },
    {
      name: "Hospital Infrastructure",
      image: "/images/gallery/01.jpg",
      description: "Modern hospital building with state-of-the-art facilities.",
      features: [
        "Modern Architecture",
        "Spacious Environment",
        "Easy Navigation",
        "Parking Facilities"
      ]
    }
  ]

  return (
    <section className="pt-8 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <SectionHeader
          title="Our Hospital Infrastructure"
          subtitle="World-Class Facilities"
          description="Experience healthcare excellence in our state-of-the-art facilities, designed to provide the highest quality medical care in a comfortable and healing environment."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-2">
            <button
              onClick={() => setActiveTab('departments')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === 'departments'
                  ? 'bg-white text-[#6f2248] shadow-md'
                  : 'text-gray-600 hover:text-[#6f2248]'
              }`}
            >
              Departments
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === 'infrastructure'
                  ? 'bg-white text-[#6f2248] shadow-md'
                  : 'text-gray-600 hover:text-[#6f2248]'
              }`}
            >
              Infrastructure
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'departments' ? (
            <>
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{dept.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    <ul className="space-y-2">
                      {dept.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-[#6f2248] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </>
          ) : (
            <>
              {infrastructure.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{item.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-[#6f2248] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-[var(--primary-color)]/5 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Experience Our Facilities
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a visit to our hospital and experience our world-class facilities firsthand.
            Our team is ready to provide you with exceptional care.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[var(--primary-color)]/90 transition-colors"
          >
            Schedule a Visit
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Facilities 