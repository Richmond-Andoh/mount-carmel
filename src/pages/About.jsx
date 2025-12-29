import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Star, 
  Shield, 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  Stethoscope,
  Building2,
  Target,
  Eye,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCarousel from '../components/TeamCarousel';

const About = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <>
      <Header />
      

      {/* Hero Section - Responsive with proper mobile handling */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Always show image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/about/about-hero.png')`
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
          }}/>
        </div>

          {/* <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}></div> */}
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              About <span className="text-mount-carmel-accent">Mount Carmel</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional healthcare with compassion, innovation, and excellence
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#about-content"
                className="inline-flex items-center px-8 py-4 bg-white text-mount-carmel-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/appointment"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-mount-carmel-primary transition-all duration-300"
              >
                Book Appointment
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <ChevronRight className="h-6 w-6 rotate-90" />
        </motion.div>
      </section>

      {/* Brand Marquee Section - Responsive */}
      <section className="bg-gradient-to-r from-mount-carmel-secondary to-mount-carmel-primary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 text-white font-semibold text-sm sm:text-base lg:text-lg">
              <span className="opacity-95">🏥 Compassionate Care</span>
              <span className="opacity-95">👨‍👩‍👧‍👦 Trusted by Families</span>
              <span className="opacity-95">👩‍⚕️ Expert Team</span>
              <span className="opacity-95">❤️ Patient First</span>
              <span className="opacity-95">🏢 World-Class Facilities</span>
              <span className="opacity-95">⭐ Exceptional Outcomes</span>
              <span className="mx-8">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main About Section - Responsive with proper image handling */}
      <section id="about-content" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-4 py-2 bg-mount-carmel-primary/10 rounded-full mb-6">
                <Building2 className="h-5 w-5 text-mount-carmel-primary mr-2" />
                <span className="text-mount-carmel-primary font-semibold text-sm">About Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Mount Carmel Hospital & 
                <span className="text-mount-carmel-primary"> Fertility Centre</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Mount Carmel Hospital and Fertility Centre is a premier private healthcare organization 
                  located at Community 25, Ashfoam Junction, Tema. We are dedicated to providing 
                  exceptional healthcare services that are both high-quality and cost-effective.
                </p>
                
                <p>
                  Our comprehensive approach to healthcare ensures that we deliver total medical services 
                  designed to promote health, productivity, and growth for our patients and the broader community.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-mount-carmel-primary" />
                    </div>
                    <span className="font-medium">Quality Healthcare</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-mount-carmel-primary" />
                    </div>
                    <span className="font-medium">24/7 Emergency Care</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center">
                      <Stethoscope className="h-5 w-5 text-mount-carmel-primary" />
                    </div>
                    <span className="font-medium">Expert Medical Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-mount-carmel-primary" />
                    </div>
                    <span className="font-medium">Compassionate Care</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-mount-carmel-primary text-white font-semibold rounded-full hover:bg-mount-carmel-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Our Services
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-mount-carmel-primary text-mount-carmel-primary font-semibold rounded-full hover:bg-mount-carmel-primary hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
            
            {/* Image Column - Always show image with proper responsive sizing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                {/* Main Image - Always visible with responsive sizing */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/about/about5.png"
                    alt="Mount Carmel Hospital"
                    className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    style={{ minHeight: '300px' }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-mount-carmel-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-mount-carmel-primary/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence Banner Section */}
      <section className="bg-gradient-to-r from-mount-carmel-primary to-mount-carmel-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Experience Excellence in Healthcare
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              At Mount Carmel Hospital & Fertility Centre, we combine compassion, innovation, 
              and expertise to deliver world-class medical services for you and your family.
            </p>
            <motion.a
              href="/appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-mount-carmel-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book an Appointment
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>



      {/* Mission, Vision & Values Section - Responsive */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(111, 51, 72, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-mount-carmel-primary/10 rounded-full mb-6">
                <Target className="h-5 w-5 text-mount-carmel-primary mr-2" />
                <span className="text-mount-carmel-primary font-semibold text-sm">Our Mission & Vision</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Guiding <span className="text-mount-carmel-primary">Principles</span>
              </h2>
              
              {/* Mission */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-mount-carmel-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mount-carmel-primary mb-3">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      "Our Mission is to collaborate to improve the health status of our clients and community 
                      by delivering high quality service that exceeds the expectations of those we serve. 
                      We are committed to quality service and competitive pricing."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Vision */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-mount-carmel-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mount-carmel-primary mb-3">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      "To be A Health Facility with Efficient and Competent Team ready to Deliver 
                      Quality Health Care Service that meets Global Standards" at an affordable price.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Core Values */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-mount-carmel-primary mb-6 flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Compassion</h5>
                      <p className="text-sm text-gray-600">Treating every patient with kindness and understanding.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Excellence</h5>
                      <p className="text-sm text-gray-600">Maintaining the highest standards in medical care.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Integrity</h5>
                      <p className="text-sm text-gray-600">Upholding honesty and transparency in all we do.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Teamwork</h5>
                      <p className="text-sm text-gray-600">Collaborating effectively for better patient outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Image Column - Always show image with proper responsive sizing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image - Always visible with responsive sizing */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/about/about6.png"
                    alt="Mission and Values"
                    className="w-full h-[350px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                    style={{ minHeight: '350px' }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-mount-carmel-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-mount-carmel-primary/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Carousel Section - Modern */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-mount-carmel-primary/10 rounded-full mb-6">
              <Users className="h-5 w-5 text-mount-carmel-primary mr-2" />
              <span className="text-mount-carmel-primary font-semibold text-sm">Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-mount-carmel-primary">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated professionals combine years of experience with compassionate care 
              to provide you with the best possible healthcare experience.
            </p>
          </motion.div>
          <TeamCarousel />
        </div>
      </section>

      {/* Stats Section - Modern and Responsive */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-mount-carmel-primary to-mount-carmel-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-mount-carmel-accent">Impact</span> in Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              These numbers represent the trust our community has placed in us and our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-white/90 font-medium">Happy Patients</div>
              <p className="text-white/70 text-sm mt-2">Served with compassionate care</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/90 font-medium">Successful Births</div>
              <p className="text-white/70 text-sm mt-2">New lives welcomed safely</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90 font-medium">Expert Doctors</div>
              <p className="text-white/70 text-sm mt-2">Highly qualified medical professionals</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section - Modern and Responsive */}
      <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, rgba(111, 51, 72, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(111, 51, 72, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(111, 51, 72, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(111, 51, 72, 0.1) 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <div className="inline-flex items-center px-4 py-2 bg-mount-carmel-primary/10 rounded-full mb-6">
                <Clock className="h-5 w-5 text-mount-carmel-primary mr-2" />
                <span className="text-mount-carmel-primary font-semibold text-sm">Our History</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                A Legacy of <span className="text-mount-carmel-primary">Care</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Mount Carmel Hospital was founded with a vision to provide exceptional healthcare 
                  services to the people of Ghana. Our journey began with a simple yet powerful mission: 
                  to make quality healthcare accessible to all.
                </p>
                
                <p>
                  Over the years, we have grown from a small medical facility to a comprehensive 
                  healthcare institution, expanding our services to include specialized fertility 
                  treatments, advanced maternity care, and a wide range of medical specialties.
                </p>
                
                <p>
                  Today, we continue to build on our legacy of excellence, embracing new technologies 
                  and medical advancements while maintaining the compassionate care that has defined 
                  us from the beginning.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mount-carmel-primary">15+</div>
                  <div className="text-sm text-gray-500">Years of Service</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-mount-carmel-primary">50+</div>
                  <div className="text-sm text-gray-500">Medical Specialists</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-mount-carmel-primary">24/7</div>
                  <div className="text-sm text-gray-500">Emergency Care</div>
                </div>
              </div>
            </motion.div>
            
            {/* Image Column - Always show image with proper responsive sizing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image - Always visible with responsive sizing */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/about/about-bg.jpg"
                    alt="Mount Carmel Hospital Building"
                    className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    style={{ minHeight: '300px' }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-mount-carmel-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-mount-carmel-primary/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-mount-carmel-primary px-3">Why Choose Us</h6>
            <h1 className="display-6 mb-5">Your Health is Our Priority</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded overflow-hidden h-100 shadow">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/images/gallery/emergency.jpg" alt="24/7 Emergency Care" />
                </div>
                <div className="p-4">
                  <h5 className="mb-3">24/7 Emergency Services</h5>
                  <p>Our emergency department is staffed round the clock with experienced medical professionals ready to handle any medical emergency.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded overflow-hidden h-100 shadow">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/images/gallery/fertility-center.jpg" alt="Fertility Center" />
                </div>
                <div className="p-4">
                  <h5 className="mb-3">Advanced Fertility Center</h5>
                  <p>State-of-the-art fertility treatments with high success rates, supported by a team of fertility specialists.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded overflow-hidden h-100 shadow">
                <div className="position-relative">
                  <img className="img-fluid w-100" src="/images/gallery/room-facility.jpg" alt="Patient Care" />
                </div>
                <div className="p-4">
                  <h5 className="mb-3">Patient-Centered Care</h5>
                  <p>Personalized treatment plans and compassionate care tailored to each patient's unique needs and circumstances.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities & Technology Section */}
      <div className="container-fluid p-0" style={{
        background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 0'
      }}>
        {/* Subtle pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(147, 51, 142, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }}></div>
        
        <div className="">
          <div className="row g-0">
            {/* Content Column */}
            <div className="col-lg-6 d-flex align-items-stretch" style={{ position: 'relative', zIndex: 1 }}>
              <div className="p-5 w-100 d-flex flex-column justify-content-center bg-white">
                <h6 className="section-title bg-white text-start text-mount-carmel-primary pe-3">Our Facilities</h6>
                <h1 className="display-6 mb-4 fw-bold">Modern Healthcare Facilities</h1>
                <p className="lead mb-5">Our hospital is equipped with state-of-the-art medical technology and comfortable patient care areas designed to promote healing and recovery.</p>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-x-ray fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Advanced Imaging</h5>
                        <p className="mb-0 small">Cutting-edge diagnostic imaging for accurate results.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-procedures fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Modern ORs</h5>
                        <p className="mb-0 small">State-of-the-art surgical suites for all procedures.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-flask fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Full Lab Services</h5>
                        <p className="mb-0 small">Comprehensive diagnostic testing and analysis.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="me-3 text-mount-carmel-primary">
                        <i className="fas fa-procedures fa-2x"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Patient Rooms</h5>
                        <p className="mb-0 small">Comfortable and modern patient accommodations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="col-lg-6 d-flex">
              <div className="w-100 h-100 min-vh-50">
                <img 
                  className="img-fluid w-100 h-100 object-cover" 
                  src="/images/about/about7.png" 
                  alt="Modern Healthcare Facilities" 
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-light text-center text-mount-carmel-primary px-3">Community</h6>
            <h1 className="display-6 mb-5">Making a Difference</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-white text-center p-4 rounded shadow h-100">
                <div className="icon-box mx-auto mb-4">
                  <i className="fas fa-heartbeat fa-3x text-mount-carmel-primary"></i>
                </div>
                <h5 className="mb-3">Health Screenings</h5>
                <p>Free community health screenings and awareness programs to promote preventive healthcare.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item bg-white text-center p-4 rounded shadow h-100">
                <div className="icon-box mx-auto mb-4">
                  <i className="fas fa-graduation-cap fa-3x text-mount-carmel-primary"></i>
                </div>
                <h5 className="mb-3">Medical Education</h5>
                <p>Training and development programs for healthcare professionals to improve skills and knowledge.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item bg-white text-center p-4 rounded shadow h-100">
                <div className="icon-box mx-auto mb-4">
                  <i className="fas fa-hands-helping fa-3x text-mount-carmel-primary"></i>
                </div>
                <h5 className="mb-3">Outreach Programs</h5>
                <p>Medical missions and outreach programs to serve underprivileged communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Final CTA Section - Modern */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-mount-carmel-primary to-mount-carmel-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Experience the Mount Carmel <span className="text-mount-carmel-accent">Difference</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule an appointment today and take the first step towards better health. 
              Our team is ready to provide you with exceptional care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/appointment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-mount-carmel-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book an Appointment
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-mount-carmel-primary transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </motion.a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-white/80 mx-auto mb-2" />
                <p className="text-white/90 font-medium">Community 25, Ashfoam Junction</p>
                <p className="text-white/70 text-sm">Tema, Ghana</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-white/80 mx-auto mb-2" />
                <p className="text-white/90 font-medium">+233 24 123 4567</p>
                <p className="text-white/70 text-sm">24/7 Emergency Line</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-white/80 mx-auto mb-2" />
                <p className="text-white/90 font-medium">info@mountcarmel.com</p>
                <p className="text-white/70 text-sm">General Inquiries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Custom CSS for responsive design and animations */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Custom responsive breakpoint for extra small screens */
        @media (max-width: 480px) {
          .xs\:h-\[350px\] {
            height: 350px !important;
          }
          .xs\:h-\[400px\] {
            height: 400px !important;
          }
        }
        
        /* Ensure images maintain aspect ratio on all screens */
        img {
          object-fit: cover;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default About; 