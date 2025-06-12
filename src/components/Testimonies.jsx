import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const Testimonies = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IVF Patient",
      image: "/images/testimonials/patient1.jpg",
      content: "Mount Carmel's fertility treatment changed our lives. The staff was incredibly supportive throughout our journey, and now we have our beautiful twins.",
      rating: 5
    },
    {
      name: "Michael & Rebecca",
      role: "Fertility Treatment Patients",
      image: "/images/testimonials/patient2.jpg",
      content: "The personalized care and attention we received was exceptional. Dr. Smith and the team made us feel confident and supported every step of the way.",
      rating: 5
    },
    {
      name: "Grace Mensah",
      role: "Maternity Patient",
      image: "/images/testimonials/patient3.jpg",
      content: "The maternity ward staff was amazing. They provided excellent care during my pregnancy and delivery. I couldn't have asked for a better experience.",
      rating: 5
    }
  ]

  return (
    <section className="pt-8 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <SectionHeader
          title="Patient Testimonials"
          subtitle="Real Stories from Real Patients"
          description="Hear from our patients about their experiences and successful treatments at Mount Carmel Hospital And Fertility Center."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-[#6f2248] text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Share Your Story
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your experience at Mount Carmel Hospital. Your story could inspire and help others on their healthcare journey.
          </p>
          <button className="bg-[#6f2248] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#6f2248]/90 transition-colors">
            Submit Your Testimony
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonies 