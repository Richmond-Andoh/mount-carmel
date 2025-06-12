import { motion } from 'framer-motion'

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "Cardiology",
      image: "/images/doctor1.jpg",
      description: "Specializing in interventional cardiology with over 15 years of experience.",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrics",
      image: "/images/doctor3.jpg",
      description: "Dedicated to providing comprehensive care for children of all ages.",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. James Wilson",
      specialization: "Orthopedics",
      image: "/images/doctor4.jpg",
      description: "Specializing in sports medicine and joint replacement surgeries.",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced and dedicated healthcare professionals
            committed to providing the best medical care for our patients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#8B0000] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-[#8B0000] font-medium mb-3">
                  {doctor.specialization}
                </p>
                <p className="text-gray-600 mb-4">
                  {doctor.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={doctor.social.twitter}
                    className="text-gray-400 hover:text-[#8B0000] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={doctor.social.facebook}
                    className="text-gray-400 hover:text-[#8B0000] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={doctor.social.linkedin}
                    className="text-gray-400 hover:text-[#8B0000] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-[#8B0000] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#6B0000] transition-colors">
            View All Doctors
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Doctors 