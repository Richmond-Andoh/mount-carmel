import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'appointments', name: 'Appointments' },
    { id: 'services', name: 'Services' },
    { id: 'emergency', name: 'Emergency' },
    { id: 'insurance', name: 'Insurance' }
  ];

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We operate 24 hours a day, 7 days a week to ensure patients have access to care and emergency services anytime.",
      category: 'general',
      featured: true
    },
    {
      question: "Are all services available 24/7?",
      answer: "Most of our services are available around the clock. However: Laboratory services close at 9:00 pm daily. X-ray services close at 5:00 pm daily.",
      category: 'services',
      featured: false
    },
    {
      question: "Do you provide emergency services?",
      answer: "Yes. We provide 24-hour emergency care, with doctors and nurses always available to handle urgent medical needs.",
      category: 'emergency',
      featured: true
    },
    {
      question: "Do you provide pediatric services?",
      answer: "Yes, we have pediatric care services to look after the health of children and newborns.",
      category: 'services',
      featured: false
    },
    {
      question: "Is medical staff available at night?",
      answer: "Absolutely. Our team of doctors, nurses, and support staff are available 24/7.",
      category: 'emergency',
      featured: false
    },
    {
      question: "Do you provide fertility and IVF services?",
      answer: "Yes. We offer advanced reproductive treatments, including In Vitro Fertilization (IVF), to support couples on their journey to parenthood.",
      category: 'services',
      featured: true
    },
    {
      question: "Do you offer counseling for couples undergoing fertility treatments?",
      answer: "Yes. We provide professional counseling and emotional support to individuals and couples throughout their fertility journey.",
      category: 'services',
      featured: false
    },
    {
      question: "Do you also provide maternity and women's health services?",
      answer: "Yes, we offer comprehensive maternity and gynecology services alongside our fertility and IVF care.",
      category: 'services',
      featured: false
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling our hospital's front desk, visiting us in person, or using our online appointment system (if available).",
      category: 'appointments',
      featured: true
    },
    {
      question: "Can I walk in without an appointment?",
      answer: "Yes. Walk-ins are always welcome, especially in emergencies. However, for specialized services such as IVF consultations, we recommend booking ahead.",
      category: 'appointments',
      featured: false
    },
    {
      question: "Do you accept health insurance?",
      answer: "Yes. We accept the majority of private health insurance policies. If you're unsure about your provider, please check with our front desk team.",
      category: 'insurance',
      featured: true
    },
    {
      question: "What documents should I bring for insurance claims?",
      answer: "You will need: your insurance card, a valid photo ID, and any referral forms required by your insurer.",
      category: 'insurance',
      featured: false
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter FAQs based on search query and active category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(query.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured FAQs for the hero section
  const featuredFaqs = faqs.filter(faq => faq.featured);
  
  // Focus search input when clicking search icon
  const focusSearch = () => {
    const searchInput = document.getElementById('faq-search');
    if (searchInput) searchInput.focus();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mount-carmel-primary to-mount-carmel-secondary text-white py-16 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/faq-hero.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/90 to-mount-carmel-secondary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Find answers to common questions about our services and facilities
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <input
                  id="faq-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-mount-carmel-primary/50 shadow-lg"
                  placeholder="Search for questions or keywords..."
                />
                <div 
                  className="absolute left-5 top-1/2 transform -translate-y-1/2 text-mount-carmel-primary cursor-pointer"
                  onClick={focusSearch}
                >
                  <Search className="w-5 h-5" />
                </div>
                {query && (
                  <button 
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Featured Questions */}
          {featuredFaqs.length > 0 && (
            <motion.div 
              className="mt-16 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white/90 mb-6 text-center">Popular Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredFaqs.slice(0, 3).map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const faqIndex = faqs.findIndex(f => f.question === faq.question);
                      setActiveIndex(activeIndex === faqIndex ? null : faqIndex);
                      document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-5 text-left transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <h4 className="font-medium text-white/90 mb-2">{faq.question}</h4>
                    <p className="text-white/70 text-sm line-clamp-2">{faq.answer}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-mount-carmel-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                <AnimatePresence>
                  {filteredFaqs.map((faq, index) => {
                    const faqIndex = faqs.findIndex(f => f.question === faq.question);
                    const isActive = activeIndex === faqIndex;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
                      >
                        <button
                          className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
                          onClick={() => toggleFAQ(faqIndex)}
                          aria-expanded={isActive}
                          aria-controls={`faq-content-${index}`}
                        >
                          <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                          {isActive ? (
                            <ChevronUp className="w-5 h-5 text-mount-carmel-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              id={`faq-content-${index}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-2 text-gray-600">
                                <p>{faq.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-500">
                    We couldn't find any questions matching "{query}". Try a different search term or category.
                  </p>
                  <button
                    onClick={() => {
                      setQuery('');
                      setActiveCategory('all');
                    }}
                    className="mt-4 text-mount-carmel-primary hover:text-mount-carmel-secondary font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-mount-carmel-primary to-mount-carmel-secondary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our team is here to help. Contact us for any additional questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+233302123456"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-mount-carmel-primary bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <a
              href="mailto:info@mountcarmelhospital.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-full text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send a Message
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;