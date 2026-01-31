import React from 'react';
import { motion } from 'framer-motion';

const HomeGallery = () => {
  const images = [
    { src: "/images/gallery/gallery1.png", span: "md:col-span-2 md:row-span-2", title: "Medical Lab" },
    { src: "/images/gallery/gallery2.png", span: "md:col-span-1 md:row-span-1", title: "Radiology" },
    { src: "/images/gallery/gallery3.png", span: "md:col-span-1 md:row-span-1", title: "Patient Suites" },
    { src: "/images/gallery/gallery4.png", span: "md:col-span-1 md:row-span-1", title: "IVF Center" },
    { src: "/images/gallery/gallery5.png", span: "md:col-span-1 md:row-span-2", title: "Emergency Care" },
    { src: "/images/gallery/gallery6.png", span: "md:col-span-1 md:row-span-1", title: "Surgical" },
    { src: "/images/gallery/gallery13.png", span: "md:col-span-1 md:row-span-1", title: "Patient Care" },
    { src: "/images/gallery/gallery7.png", span: "md:col-span-2 md:row-span-1", title: "Nursing" },
    { src: "/images/gallery/gallery8.png", span: "md:col-span-1 md:row-span-1", title: "Reception" },
    { src: "/images/gallery/gallery9.png", span: "md:col-span-1 md:row-span-1", title: "Diagnostics" },
    { src: "/images/gallery/gallery10.png", span: "md:col-span-1 md:row-span-2", title: "Maternity" },
    { src: "/images/gallery/gallery11.png", span: "md:col-span-1 md:row-span-1", title: "Research" },
    { src: "/images/gallery/gallery12.png", span: "md:col-span-1 md:row-span-1", title: "Pharmacy" },
    { src: "/images/gallery/gallery14.png", span: "md:col-span-1 md:row-span-1", title: "Expert Consult" },
  ];

  return (
    <section className="w-full bg-white overflow-hidden" aria-label="Hospital Gallery">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 auto-rows-[250px] w-full px-0 grid-flow-dense">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className={`relative overflow-hidden group bg-gray-100 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Modern Sleek Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-white tracking-widest uppercase mb-2">{image.title}</h3>
                  <div className="w-12 h-1 bg-white rounded-full overflow-hidden">
                    <motion.div 
                      className="w-full h-full bg-[#6f3348]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
