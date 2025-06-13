import { motion } from 'framer-motion'

const SectionHeader = ({ subtitle, title, description }) => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[#6f2248] text-sm md:text-base font-semibold mb-2 block"
      >
        {subtitle}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-600 leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-24 h-1 bg-[#6f2248] mx-auto mt-8"
      />
    </div>
  )
}

export default SectionHeader 