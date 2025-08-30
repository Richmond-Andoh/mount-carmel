import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AppointmentSection from '../components/AppointmentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Marquee3D from '@/components/Marquee3D';

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
      <Marquee3D />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home; 
