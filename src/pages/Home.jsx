import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AppointmentSection from '../components/AppointmentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <AppointmentSection />
      {/* Gallery Section */}
      <Gallery images={[
        { url: '/src/assets/success-stories/gallery-1.jpg', alt: 'Success Story 1' },
        { url: '/src/assets/success-stories/gallery-2.jpg', alt: 'Success Story 2' },
        { url: '/src/assets/success-stories/gallery-3.jpg', alt: 'Success Story 3' },
        { url: '/src/assets/success-stories/gallery-4.jpg', alt: 'Success Story 4' },
        { url: '/src/assets/success-stories/gallery-5.jpg', alt: 'Success Story 5' },
        { url: '/src/assets/success-stories/gallery-6.jpg', alt: 'Success Story 6' },
        { url: '/src/assets/success-stories/gallery-7.jpg', alt: 'Success Story 7' },
        { url: '/src/assets/success-stories/gallery-8.jpg', alt: 'Success Story 8' }
      ]} />


      <ContactSection />
      
      <Footer />
    </>
  );
};

export default Home; 
