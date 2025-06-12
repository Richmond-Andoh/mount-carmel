import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Expert Medical Staff",
      description: "Our team of highly qualified doctors and healthcare professionals are dedicated to providing the best care."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment and facilities to ensure accurate diagnosis and effective treatment."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services to handle critical situations with immediate attention."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Patient-Centered Care",
      description: "We prioritize patient comfort and well-being, ensuring a positive healthcare experience."
    }
  ]

  const stats = [
    { number: "30+", label: "Years of Excellence" },
    { number: "50k+", label: "Patients Treated" },
    { number: "50+", label: "Medical Experts" },
    { number: "10+", label: "Specialized Departments" }
  ]

  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#6f2248]/10 rounded-full flex items-center justify-center mb-6">
                <div className="text-[#6f2248]">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#6f2248] rounded-xl p-8 text-white"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-4xl font-bold mb-2">{stat.number}</h4>
              <p className="text-sm opacity-90">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 