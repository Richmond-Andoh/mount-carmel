import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Initialize animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzaopzv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset submission status after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("⚠️ An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mount-carmel-primary to-mount-carmel-secondary text-white py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/90 to-mount-carmel-secondary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're here to help and answer any questions you might have. Reach out to us today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-mount-carmel-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
            <p className="text-gray-600">Ashfoam Junction, Tema Com.25</p>
            <p className="text-gray-600">Accra, Ghana</p>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-mount-carmel-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600">+233 592 411 108</p>
            <p className="text-gray-600">mountcarmelhospital@outlook.com</p>
          </motion.div>

          {/* Hours Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-mount-carmel-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Emergency Only</p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:flex">
              {/* Contact Form */}
              <div className="p-8 md:p-12 md:w-1/2">
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you soon.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-mount-carmel-primary text-white rounded-lg hover:bg-mount-carmel-primary/90 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                        }`}
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                          errors.subject ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                        }`}
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                          errors.message ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                        }`}
                        placeholder="Tell us how we can help..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center px-6 py-3.5 bg-mount-carmel-primary text-white font-medium rounded-lg hover:bg-mount-carmel-primary/90 transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Map Section */}
              <div className="bg-gray-100 p-8 md:w-1/2 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <MapPin className="w-5 h-5 text-mount-carmel-primary" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-600">Ashfoam Junction, Tema Com.25</p>
                        <p className="text-gray-600">Accra, Ghana</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Phone className="w-5 h-5 text-mount-carmel-primary" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-600">+233 592 411 108</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Mail className="w-5 h-5 text-mount-carmel-primary" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-600">mountcarmelhospital@outlook.com</p>
                      </div>
                    </div>
                
                  </div>
                </div>

                {/* Map Embed */}
                <div className="flex-1 bg-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d0.0334405!3d5.7468091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020806191475a19:0x3a98d53c6cad5eab!2sMount%20Carmel%20General%20Hospital%20%26%20Fertility%20Center%20Dawhanya!5e0!3m2!1sen!2sgh!4v1692979200000!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mount Carmel Hospital Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Contact;