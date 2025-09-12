import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

export default function Testimonials() {
  const [showModal, setShowModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    title: '',
    message: '',
    profession: '',
    consent: false
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials from Firestore
    const fetchTestimonials = async () => {
      const q = query(collection(db, 'testimonies'), orderBy('date', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(data);
    };
    fetchTestimonials();
  }, [submitSuccess]);

  // Demo testimonials data
  const demoTestimonials = [
    {
      id: 1,
      name: "Sarah and Michael Osei",
      profession: "Fertility Treatment Success",
      image: "/images/testimonial-1.jpg",
      text: "After years of trying to conceive, Mount Carmel Hospital gave us hope. The fertility treatment was successful and we now have beautiful twins. The doctors and staff were incredibly supportive throughout our journey.",
      rating: 5,
      date: "2023-10-15"
    },
    {
      id: 2,
      name: "Dr. Grace Mensah",
      profession: "Pediatric Care",
      image: "/images/testimonial-2.jpg",
      text: "As a fellow healthcare professional, I can attest to the exceptional quality of care at Mount Carmel Hospital. The pediatric department provided excellent care for my daughter when she was ill.",
      rating: 5,
      date: "2023-09-22"
    },
    {
      id: 3,
      name: "Kwame Addo",
      profession: "Emergency Care",
      image: "/images/testimonial-3.jpg",
      text: "The emergency care team at Mount Carmel Hospital saved my life. Their quick response and professional treatment made all the difference. I'm forever grateful for their expertise and compassion.",
      rating: 5,
      date: "2023-11-05"
    },
    {
      id: 4,
      name: "Ama Serwaa",
      profession: "Maternity Care",
      image: "/images/testimonial-4.jpg",
      text: "The maternity ward staff were absolutely amazing during the birth of my baby. Their care and support made the experience so much better. The facilities are top-notch and very clean.",
      rating: 4,
      date: "2023-10-30"
    },
    {
      id: 5,
      name: "Kofi Ansah",
      profession: "General Surgery",
      image: "/images/testimonial-5.jpg",
      text: "I had a successful surgery at Mount Carmel and the follow-up care was exceptional. The doctors took time to explain everything and made sure I was comfortable throughout my recovery.",
      rating: 5,
      date: "2023-11-12"
    },
    {
      id: 6,
      name: "Esi Boateng",
      profession: "Dental Care",
      image: "/images/testimonial-6.jpg",
      text: "The dental clinic is fantastic! The dentist was very gentle and professional. I used to be afraid of dental visits but not anymore. Highly recommend their services.",
      rating: 4,
      date: "2023-11-08"
    }
  ];

  // Use database testimonials if available, else demo data
  const filteredTestimonials = testimonials.length > 0 ? testimonials : demoTestimonials;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRating = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: prev.rating === rating ? 0 : rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please agree to the terms before submitting');
      return;
    }
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'testimonies'), {
        name: formData.name,
        email: formData.email,
        rating: formData.rating,
        title: formData.title,
        message: formData.message,
        profession: formData.profession,
        date: new Date().toISOString(),
      });
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        rating: 0,
        title: '',
        message: '',
        profession: '',
        consent: false
      });
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} className="w-5 h-5 text-yellow-400 fill-current" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300 fill-current" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700/90 to-primary-900/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Patient Testimonials
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hear from our patients about their experiences at Mount Carmel Hospital
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center bg-mount-carmel-primary justify-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Plus className="w-5 h-5 mr-2 text-white" />
                Share Your Experience
              </button>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* Testimonial Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 z-[10000]">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Share Your Experience</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="mb-6 text-gray-600 text-sm">
              We'd love to hear about your experience at Mount Carmel Hospital
            </p>
            {/* Star Rating in Modal */}
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-sm text-gray-700">Your Rating:</span>
              {[1,2,3,4,5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  {formData.rating >= star || hoverRating >= star ? (
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  ) : (
                    <Star className="w-6 h-6 text-gray-300 fill-current" />
                  )}
                </button>
              ))}
            </div>
            {/* Modal Content */}
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Thank You!</h3>
                <p className="mt-2 text-gray-600">
                  Your testimonial has been submitted successfully. We appreciate your feedback!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6f3348] sm:text-sm transition-all duration-200 bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6f3348] sm:text-sm transition-all duration-200 bg-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                    Profession / Role
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6f3348] sm:text-sm transition-all duration-200 bg-white"
                    placeholder="e.g., Patient, Family Member, Healthcare Professional"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Experience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#6f3348] sm:text-sm transition-all duration-200 bg-white min-h-[120px]"
                    placeholder="Tell us about your experience at Mount Carmel Hospital..."
                  />
                  <div className="text-xs text-gray-400 text-right mt-1">
                    {formData.message.length}/500
                  </div>
                </div>
                <div className="flex items-start">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-[#6f3348] focus:ring-[#6f3348]"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="/privacy" className="font-medium text-[#6f3348] hover:text-[#4b1438]">
                      Privacy Policy
                    </a>{' '}and consent to my testimonial being displayed on the website.
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className={`w-full flex justify-center items-center py-3 px-6 rounded-lg text-base font-medium text-white bg-[#6f3348] hover:bg-[#4b1438] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6f3348] transition-all duration-200 ${isSubmitting || !formData.consent ? 'opacity-70 cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: '#6f3348' }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Submit Testimonial'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      
      {/* Testimonial Carousel */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
            {filteredTestimonials.length > 0 ? (
              <>
                <div className="flex items-center justify-center mb-6">
                  {renderStars(filteredTestimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-xl md:text-2xl text-center text-gray-700 mb-8 leading-relaxed">
                  "{filteredTestimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src={filteredTestimonials[currentTestimonial].image} 
                      alt={filteredTestimonials[currentTestimonial].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {filteredTestimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600">
                      {filteredTestimonials[currentTestimonial].profession}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  <div className="flex space-x-2">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center text-gray-500 py-12">
                No testimonials available yet. Be the first to share your experience!
              </div>
            )}
          </div>
        </div>
      </div>
        
 

      {/* Main Content Wrapper */}
      <div className="flex-1">
        {/* All Testimonials Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-700 bg-primary-100 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                What Our Patients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read heartfelt stories from our patients about their experiences at Mount Carmel Hospital
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {testimonial.title || 'Amazing Experience'}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-4">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.profession}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowModal(true)}
                className="group inline-flex items-center bg-mount-carmel-primary justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Plus className="w-5 h-5 mr-2 text-white transition-transform duration-300 group-hover:rotate-90" />
                Share Your Story
              </button>
            </div>
          </div>
        </section>
      </div>
    

    <Footer />

   
  </div>
)}
