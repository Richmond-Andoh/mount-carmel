import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      title: "Expert Medical Staff",
      description: "Our team of highly qualified doctors and healthcare professionals are dedicated to providing the best care."
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment and facilities to ensure accurate diagnosis and effective treatment."
    },
    {
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services to handle critical situations with immediate attention."
    },
    {
      title: "Patient-Centered Care",
      description: "We prioritize patient comfort and well-being, ensuring a positive healthcare experience."
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
            About Mount Carmel Hospital
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to providing exceptional healthcare services with a focus on patient care,
            medical excellence, and innovative treatment approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
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
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default About 