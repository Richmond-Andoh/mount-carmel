import { motion, AnimatePresence } from 'framer-motion'
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
      ],
      stats: [
        { value: '98%', label: 'Success Rate' },
        { value: '24/7', label: 'Emergency Care' },
        { value: '15+', label: 'Specialists' }
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
      ],
      stats: [
        { value: '95%', label: 'Recovery Rate' },
        { value: '20+', label: 'Years Experience' },
        { value: '12+', label: 'Specialists' }
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
      ],
      stats: [
        { value: '97%', label: 'Success Rate' },
        { value: '5000+', label: 'Surgeries' },
        { value: '10+', label: 'Specialists' }
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
      ],
      stats: [
        { value: '99%', label: 'Parent Satisfaction' },
        { value: '24/7', label: 'Child Care' },
        { value: '18+', label: 'Specialists' }
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[var(--primary-color)] font-semibold text-lg mb-4 block">
            Specialized Departments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Excellence in Every Field
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our specialized departments, each staffed with expert healthcare professionals
            dedicated to providing the highest quality care in their respective fields.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {departments.map((dept, index) => (
            <motion.button
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(dept.id)}
              className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                activeTab === dept.id
                  ? 'bg-[var(--primary-color)] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
              }`}
            >
              {dept.name}
            </motion.button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {departments.map((dept) => (
              activeTab === dept.id && (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12">
                    <div className="space-y-8">
                      <div>
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-3xl font-bold text-gray-900 mb-4"
                        >
                          {dept.name}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="text-gray-600 leading-relaxed"
                        >
                          {dept.description}
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-3 gap-6"
                      >
                        {dept.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-[var(--primary-color)]">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>

                      <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-4"
                      >
                        {dept.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                            className="flex items-center text-gray-700"
                          >
                            <div className="w-6 h-6 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center mr-3">
                              <svg
                                className="w-4 h-4 text-[var(--primary-color)]"
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
                            </div>
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary mt-6"
                      >
                        Learn More
                      </motion.button>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative h-[400px] lg:h-full rounded-xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Departments 