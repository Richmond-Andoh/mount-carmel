// src/components/FeatureCard.jsx
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur p-6 rounded-lg shadow-md flex-1 text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-primary text-3xl mb-2">{icon}</div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;