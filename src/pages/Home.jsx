import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import VideoSection from "../components/VideoSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AppointmentSection from "../components/AppointmentSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
//import Marquee3D from "@/components/Marquee3D";
import Marquee from "@/components/magicui/marquee";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* Center marquee text with background */}
      <div className="-translate-y-1/2 z-10" style={{
        background: 'linear-gradient(90deg, #4B1438 0%, #6f3348 100%)',
        color: '#fff',
        margin: 0,
        padding: 0
      }}>
        <div className="w-full">
          <div className="relative" style={{ height: "100px" }}>
            <div
              className="absolute inset-0 backdrop-blur-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(111,51,72,0.85), rgba(75,20,56,0.75))",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            ></div>
            <div className="relative h-full flex items-center justify-center">
              <Marquee className="[--duration:25s] w-full" pauseOnHover>
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="mx-4 md:mx-6 lg:mx-8 text-white font-bold tracking-wide uppercase text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    style={{
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                      lineHeight: "1.4",
                    }}
                  >
                    WELCOME · TO · MOUNT · CARMEL · HOSPITAL & FERTILITY · CENTER

                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <FeaturesSection />
      <VideoSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <AppointmentSection />
      {/* <Marquee3D /> */}
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
