import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_ENDPOINT = '/api/send-email';

const VisitationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check if all fields are filled
  useEffect(() => {
    const allFilled = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(allFilled);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        formType: 'Visitation Request',
        ...formData
      };

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitted(true);
        triggerConfetti();
        setFormData({ name: '', email: '', organization: '', phone: '', message: '' });
      } else {
        throw new Error(responseData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/visit.png') center/cover no-repeat fixed`,
          }}
        />
        
        <div className="container relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <nav aria-label="breadcrumb" className="mb-6">
              <ol className="flex justify-center space-x-2 text-white/80">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white">Visitation Form</li>
              </ol>
            </nav>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Schedule Your <span className="text-primary-light">Visit</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-white/90 leading-relaxed mb-10">
              Experience our world-class healthcare facilities firsthand. Meet our compassionate team and see our state-of-the-at technology.
            </p>
            
            <motion.a 
              href="#visitation-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#6f3348] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-opacity-90 transition-all"
            >
              Book Your Visit Now
              <i className="fas fa-arrow-down ms-2 text-sm animate-bounce"></i>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Brand Marquee */}
      <div className="bg-[#4B1438] py-6 overflow-hidden border-y border-white/10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-white/80 text-lg font-medium uppercase tracking-widest">Compassionate Care</span>
              <span className="text-white/80 text-lg font-medium uppercase tracking-widest">Trusted by Families</span>
              <span className="text-white/80 text-lg font-medium uppercase tracking-widest">Expert Team</span>
              <span className="text-white/80 text-lg font-medium uppercase tracking-widest">Patient First</span>
              <span className="text-white/80 text-lg font-medium uppercase tracking-widest">World-Class Facilities</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <section id="visitation-form" className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
            >
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Tour</h2>
                <p className="text-gray-600">Complete the form below and our team will get in touch with you shortly.</p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                      <i className="fa fa-check text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
                    <p className="text-gray-600 mb-8">Thank you for your interest. We'll be in touch within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[#6f3348] font-semibold flex items-center justify-center space-x-2 mx-auto hover:underline"
                    >
                      <i className="fa fa-arrow-left text-sm"></i>
                      <span>Send another request</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-6"
                  >
                    {error && (
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={fadeInUp}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#6f3348]/20 focus:bg-white transition-all outline-none" 
                          placeholder="John Doe"
                          required
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#6f3348]/20 focus:bg-white transition-all outline-none" 
                          placeholder="john@example.com"
                          required
                        />
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={fadeInUp}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                        <input 
                          type="text" 
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#6f3348]/20 focus:bg-white transition-all outline-none" 
                          placeholder="Organization Name"
                          required
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#6f3348]/20 focus:bg-white transition-all outline-none" 
                          placeholder="+233..."
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#6f3348]/20 focus:bg-white transition-all outline-none min-h-[150px] resize-none" 
                        placeholder="Tell us about your visit..."
                        required
                      />
                    </motion.div>

                    <motion.button 
                      variants={fadeInUp}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={!isFormValid || loading}
                      className={`w-full py-4 rounded-2xl font-bold transition-all shadow-xl ${
                        isFormValid && !loading 
                        ? 'bg-[#6f3348] text-white hover:bg-[#4B1438] shadow-[#6f3348]/20' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : 'Confirm Visitation'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Content Column */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 px-4">What to Expect</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: 'fa-map-marked-alt',
                      title: 'Personalized Facility Tour',
                      desc: 'A guided walk through our departments, from maternity to modern labs.'
                    },
                    {
                      icon: 'fa-user-md',
                      title: 'Meet Our Specialists',
                      desc: 'Brief introduction to medical professionals in your area of interest.'
                    },
                    {
                      icon: 'fa-clipboard-check',
                      title: 'Service Briefing',
                      desc: 'Detailed explanation of our treatment protocols and patient care standards.'
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="group flex items-start gap-6 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-50"
                    >
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#6f3348]/5 flex items-center justify-center text-[#6f3348] group-hover:bg-[#6f3348] group-hover:text-white transition-colors shadow-sm">
                        <i className={`fa ${item.icon} text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Direct Info Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#6f3348] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl"
              >
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-6">Need Immediate Help?</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <i className="fa fa-phone-alt text-sm"></i>
                      </div>
                      <span className="font-medium">+233 30 393 9896</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <i className="fa fa-envelope text-sm"></i>
                      </div>
                      <span className="font-medium text-white/90">info@mountcarmel.com</span>
                    </div>
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 blur-xl"></div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        .text-primary-light { color: #f8fbff; }
        .bg-primary-dark { background: #4B1438; }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}

export default VisitationForm;
