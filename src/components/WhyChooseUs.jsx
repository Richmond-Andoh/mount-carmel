// src/components/WhyChooseUs.jsx
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <motion.div
      className="bg-primary text-white p-6 rounded-lg shadow-lg max-w-sm"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-2">Why Choose Medilab?</h3>
      <p className="text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure...
      </p>
      <button className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition text-sm">
        Learn More →
      </button>
    </motion.div>
  );
};

export default WhyChooseUs;