import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What fertility treatments do you offer?",
      answer: "We offer a comprehensive range of fertility treatments including IVF, IUI, fertility preservation, hormone therapy, and genetic testing. Our specialists will work with you to determine the most appropriate treatment plan based on your individual circumstances."
    },
    {
      question: "How long does the fertility treatment process take?",
      answer: "The duration of fertility treatment varies depending on the specific treatment and individual response. A typical IVF cycle takes about 2-3 weeks, while other treatments may take longer. During your consultation, our doctors will provide a detailed timeline based on your treatment plan."
    },
    {
      question: "What are your success rates for fertility treatments?",
      answer: "Our success rates are consistently above the national average. However, success rates vary based on factors such as age, medical history, and type of treatment. We'll discuss your individual chances of success during your consultation."
    },
    {
      question: "Do you offer payment plans or financial assistance?",
      answer: "Yes, we understand that fertility treatments can be a significant investment. We offer various payment plans and work with several insurance providers. Our financial counselors can help you understand your options and create a plan that works for you."
    },
    {
      question: "What support services do you provide during treatment?",
      answer: "We provide comprehensive support including counseling services, support groups, nutritional guidance, and stress management programs. Our goal is to support you both physically and emotionally throughout your treatment journey."
    },
    {
      question: "How do I schedule an initial consultation?",
      answer: "You can schedule a consultation by calling our office, using our online appointment booking system, or filling out the contact form on our website. Our team will get back to you within 24 hours to arrange a convenient time."
    }
  ]

  return (
    <section className="pt-8 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Get Answers to Common Questions"
          description="Find answers to commonly asked questions about our fertility treatments, procedures, and services."
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                className={`w-full text-left p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all ${
                  openIndex === index ? 'ring-2 ring-[#6f2248]' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-[#6f2248] transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please contact our friendly team.
          </p>
          <button className="bg-[#6f2248] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#6f2248]/90 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 