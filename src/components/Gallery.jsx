import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Operating Theater',
      category: 'Facilities',
      image: '/images/gallery/operating-room.jpg',
      description: 'State-of-the-art operating theater equipped with the latest medical technology.'
    },
    {
      id: 2,
      title: 'Patient Rooms',
      category: 'Facilities',
      image: '/images/gallery/patient-room.jpg',
      description: 'Comfortable and well-equipped patient rooms for optimal recovery.'
    },
    {
      id: 3,
      title: 'Emergency Department',
      category: 'Facilities',
      image: '/images/gallery/emergency.jpg',
      description: '24/7 emergency department ready to handle any medical situation.'
    },
    {
      id: 4,
      title: 'Laboratory',
      category: 'Facilities',
      image: '/images/gallery/laboratory.jpg',
      description: 'Advanced laboratory facilities for accurate diagnostics.'
    },
    {
      id: 5,
      title: 'Reception',
      category: 'Facilities',
      image: '/images/gallery/reception.jpg',
      description: 'Welcoming reception area for patients and visitors.'
    },
    {
      id: 6,
      title: 'Consultation Room',
      category: 'Facilities',
      image: '/images/gallery/consultation.jpg',
      description: 'Private consultation rooms for patient-doctor discussions.'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Hospital Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities and experience the quality healthcare environment we provide.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity hover:bg-opacity-10" />
              </div>
              <div className="p-4">
                <span className="text-sm text-[var(--primary-color)] font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full rounded-lg"
                />
                <div className="mt-4 text-white">
                  <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                  <p className="mt-2 text-gray-300">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery; 