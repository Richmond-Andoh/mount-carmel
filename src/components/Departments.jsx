import { motion } from 'framer-motion'
import { useState } from 'react'

const Departments = () => {
  const [activeTab, setActiveTab] = useState('cardiology')

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      description: 'Our cardiology department provides comprehensive care for heart conditions, including diagnostic tests, treatment procedures, and preventive care.',
      image: '/images/cardiology.jpg',
      features: [
        'Advanced cardiac imaging',
        'Interventional cardiology',
        'Cardiac rehabilitation',
        'Heart failure management'
      ]
    },
    {
      id: 'neurology',
      name: 'Neurology',
      description: 'The neurology department specializes in the diagnosis and treatment of disorders affecting the brain, spinal cord, and peripheral nerves.',
      image: '/images/neurology.jpg',
      features: [
        'Neurological diagnostics',
        'Stroke care',
        'Epilepsy management',
        'Movement disorders'
      ]
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      description: 'Our orthopedics department provides expert care for musculoskeletal conditions, including bones, joints, ligaments, and muscles.',
      image: '/images/orthopedics.jpg',
      features: [
        'Joint replacement surgery',
        'Sports medicine',
        'Spine care',
        'Fracture management'
      ]
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      description: 'The pediatrics department offers specialized care for children from birth through adolescence, focusing on their unique health needs.',
      image: '/images/pediatrics.jpg',
      features: [
        'Well-child visits',
        'Vaccination services',
        'Developmental assessment',
        'Pediatric emergency care'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Departments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our specialized departments, each staffed with expert healthcare professionals
            dedicated to providing the highest quality care in their respective fields.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <motion.button
              key={dept.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(dept.id)}
              className={`px-6 py-3 rounded-md text-lg font-semibold transition-colors ${
                activeTab === dept.id
                  ? 'bg-[#8B0000] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {dept.name}
            </motion.button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === dept.id ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`${activeTab === dept.id ? 'block' : 'hidden'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {dept.description}
                  </p>
                  <ul className="space-y-3">
                    {dept.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-[#8B0000] mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Departments 