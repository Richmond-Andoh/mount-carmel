import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, Users, Handshake, BarChart2, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
    partnerType: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const partnerTypes = [
    { id: 'healthcare', label: 'Healthcare Provider', icon: <Shield className="w-5 h-5 mr-2" /> },
    { id: 'insurance', label: 'Insurance Company', icon: <Shield className="w-5 h-5 mr-2" /> },
    { id: 'pharmaceutical', label: 'Pharmaceutical', icon: <BarChart2 className="w-5 h-5 mr-2" /> },
    { id: 'corporate', label: 'Corporate Wellness', icon: <Users className="w-5 h-5 mr-2" /> },
    { id: 'other', label: 'Other', icon: <Handshake className="w-5 h-5 mr-2" /> }
  ];

  useEffect(() => {
    // Initialize animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address';
        break;
      case 'phone':
        const phoneRegex = /^[+]?[0-9\s-()]{10,}$/;
        newErrors.phone = phoneRegex.test(value) ? '' : 'Please enter a valid phone number';
        break;
      default:
        newErrors[name] = value.trim() === '' ? 'This field is required' : '';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      if (formData[key].trim() === '') {
        newErrors[key] = 'This field is required';
        isValid = false;
      }
    });
    
    // Additional validation for email format
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const payload = {
        formType: 'Partner Request',
        ...formData
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitted(true);
        formRef.current?.reset();
        setFormData({ name: '', email: '', organization: '', phone: '', message: '', partnerType: '' });
        
        // Scroll to success message
        setTimeout(() => {
          const successElement = document.getElementById('success-message');
          if (successElement) {
            successElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        throw new Error(responseData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const SuccessMessage = () => (
    <motion.div 
      id="success-message"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 text-center max-w-3xl mx-auto"
    >
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h2>
      <p className="text-lg text-gray-600 mb-8">
        We've received your partnership inquiry. Our team will review your information and get back to you within 2 business days.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">What's Next?</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>Initial review of your application</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>Schedule an introductory call</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>Discuss partnership opportunities</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Have Questions?</h3>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-mount-carmel-primary mt-0.5 mr-3 flex-shrink-0" />
              <span>partnerships@mountcarmel.com</span>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-mount-carmel-primary mt-0.5 mr-3 flex-shrink-0" />
              <span>+233 24 123 4567</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-mount-carmel-primary mt-0.5 mr-3 flex-shrink-0" />
              <span>123 Healthcare Ave, Accra, Ghana</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-mount-carmel-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
        >
          <ArrowRight className="w-5 h-5 mr-2 transform rotate-180" />
          Back to Home
        </button>
        <button
          onClick={() => {
            setSubmitted(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-6 py-3 bg-white border-2 border-mount-carmel-primary text-mount-carmel-primary rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br  from-mount-carmel-primary to-mount-carmel-secondary text-white py-28 md:py-32 overflow-hidden min-h-[60vh] md:min-h-[75vh] lg:min-h-[70vh]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/hero-partners.jpg')] bg-cover bg-center"></div>
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
              Partner With Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join our network of trusted healthcare partners and help us deliver exceptional care to our community.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="#partner-form" 
                className="px-6 py-3 bg-white text-mount-carmel-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors flex items-center"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#benefits" 
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Learn About Benefits
              </a>
            </motion.div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div> */}
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-mount-carmel-primary bg-mount-carmel-primary/10 rounded-full mb-4">
              Why Partner With Us?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Benefits of Partnership</h2>
            <p className="text-lg text-gray-600">
              Join our network of healthcare partners and unlock exclusive benefits designed to help you grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-mount-carmel-primary" />,
                title: 'Expanded Reach',
                description: 'Access to our extensive patient network and community presence.'
              },
              {
                icon: <BarChart2 className="w-8 h-8 text-mount-carmel-primary" />,
                title: 'Business Growth',
                description: 'Opportunities for referrals and collaborative marketing initiatives.'
              },
              {
                icon: <Shield className="w-8 h-8 text-mount-carmel-primary" />,
                title: 'Credibility',
                description: 'Association with a trusted healthcare provider in the region.'
              },
              {
                icon: <Handshake className="w-8 h-8 text-mount-carmel-primary" />,
                title: 'Collaboration',
                description: 'Work with our expert medical team on joint healthcare initiatives.'
              },
              {
                icon: <Clock className="w-8 h-8 text-mount-carmel-primary" />,
                title: 'Efficiency',
                description: 'Streamlined referral processes and shared resources.'
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-mount-carmel-primary" />,
                title: 'Quality Care',
                description: 'Be part of a network committed to exceptional patient outcomes.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-mount-carmel-primary/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section id="partner-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-mount-carmel-primary bg-mount-carmel-primary/10 rounded-full mb-4">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Become a Partner</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our partnership team will get back to you within 24-48 hours.
              </p>
            </div>

            {submitted ? (
              <SuccessMessage />
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="p-1 bg-gradient-to-r from-mount-carmel-primary to-mount-carmel-secondary">
                  <div className="bg-white p-8 md:p-10">
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">{error}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                              errors.name ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                            }`}
                            placeholder="John Doe"
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                              errors.email ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                            }`}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                            Organization <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                              errors.organization ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                            }`}
                            placeholder="Your Organization"
                          />
                          {errors.organization && (
                            <p className="mt-1 text-sm text-red-600">{errors.organization}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                              errors.phone ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                            }`}
                            placeholder="+233 XX XXX XXXX"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-1">
                          Partner Type <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {partnerTypes.map((type) => (
                            <label key={type.id} className="flex items-center">
                              <input
                                type="radio"
                                name="partnerType"
                                value={type.id}
                                checked={formData.partnerType === type.id}
                                onChange={handleChange}
                                className="h-4 w-4 text-mount-carmel-primary focus:ring-mount-carmel-primary border-gray-300"
                              />
                              <span className="ml-2 text-gray-700 flex items-center">
                                {type.icon}
                                {type.label}
                              </span>
                            </label>
                          ))}
                        </div>
                        {errors.partnerType && (
                          <p className="mt-1 text-sm text-red-600">{errors.partnerType}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          How can we work together? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-mount-carmel-primary focus:border-transparent transition-colors ${
                            errors.message ? 'border-red-300' : 'border-gray-300 focus:border-mount-carmel-primary'
                          }`}
                          placeholder="Tell us about your organization and how you'd like to partner with us..."
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                        )}
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-mount-carmel-primary hover:bg-mount-carmel-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mount-carmel-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            'Submit Partnership Request'
                          )}
                        </button>
                        <p className="mt-3 text-center text-sm text-gray-500">
                          We'll get back to you within 24-48 hours. By submitting this form, you agree to our{' '}
                          <a href="/privacy" className="font-medium text-mount-carmel-primary hover:text-mount-carmel-primary/80">
                            Privacy Policy
                          </a>.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PartnerForm;