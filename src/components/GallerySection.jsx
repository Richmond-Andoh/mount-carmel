import Gallery from './Gallery';

const galleryImages = [
  // { url: '/images/about-1.jpg', alt: 'Hospital Building' },
  // { url: '/images/about-2.jpg', alt: 'Medical Equipment' },
  // { url: '/images/about-3.jpg', alt: 'Medical Staff' },
  // { url: '/images/carousel-1.jpg', alt: 'Facility' },
  // { url: '/images/carousel-2.jpg', alt: 'Team' },
  // { url: '/images/feature.jpg', alt: 'Feature' },
  // { url: '/images/team-1.jpg', alt: 'Doctor 1' },
  // { url: '/images/team-2.jpg', alt: 'Doctor 2' },
  // { url: '/images/team-3.jpg', alt: 'Doctor 3' }
];

const GallerySection = () => (
  <section className="w-full py-16 bg-white">
    <Gallery images={galleryImages} />
  </section>
);

export default GallerySection;
