import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">
              About Mount Carmel Hospital and Fertility Centre
        </h2>
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -left-4 top-0 w-20 h-20 bg-[#6f2248]/10 rounded-full blur-xl"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Providing Quality Healthcare
              <span className="text-[#6f2248]"> Since 2015</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mount Carmel Hospital And Fertility Center has been at the forefront of medical excellence for over three decades. 
              Our commitment to providing exceptional healthcare services is reflected in our state-of-the-art 
              facilities, expert medical staff, and patient-centered approach to care.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6f2248] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#6f2248]/90 transition-colors"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px]"
          >
            <img
              src="/images/gallery/01.jpg"
              alt="Mount Carmel Hospital And Fertility Center Building"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
              onError={(e) => {
                console.error('Image failed to load:', e);
                e.target.style.backgroundColor = '#f3f4f6';
              }}
            />
          </motion.div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#6f2248]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#6f2248]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading healthcare institution in providing comprehensive medical services with a special focus on fertility care, 
              recognized for excellence, innovation, and compassionate patient care. We envision a future where advanced medical technology 
              meets personalized care, making quality healthcare accessible to all.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#6f2248]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#6f2248]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional healthcare services through:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-[#6f2248] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Advanced medical treatments and technologies
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-[#6f2248] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Comprehensive fertility care programs
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-[#6f2248] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Patient-centered approach to healthcare
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-[#6f2248] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Continuous medical education and research
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 