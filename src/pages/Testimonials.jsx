import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

export default function Testimonials() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingFilter, setRatingFilter] = useState(0);
  
  // Demo testimonials for fallback
  const demoTestimonials = [
    {
      id: 1,
      name: "Akosua Mensah",
      text: "After years of trying to conceive, Mount Carmel Hospital gave us hope. The fertility treatment was successful and we now have beautiful twins. The doctors and staff were incredibly supportive throughout our journey.",
      rating: 5,
      date: "2023-10-15"
    },
    {
      id: 2,
      name: "Dr. Grace Mensah",
      text: "As a fellow healthcare professional, I can attest to the exceptional quality of care at Mount Carmel Hospital. The pediatric department provided excellent care for my daughter when she was ill.",
      rating: 5,
      date: "2023-09-22"
    },
    {
      id: 3,
      name: "Kwame Addo",
      text: "The emergency care team at Mount Carmel Hospital saved my life. Their quick response and professional treatment made all the difference. I'm forever grateful for their expertise and compassion.",
      rating: 5,
      date: "2023-11-05"
    },
    {
      id: 4,
      name: "Ama Serwaa",
      text: "The maternity ward staff were absolutely amazing during the birth of my baby. Their care and support made the experience so much better. The facilities are top-notch and very clean.",
      rating: 4,
      date: "2023-10-30"
    },
    {
      id: 5,
      name: "Kofi Ansah",
      text: "I had a successful surgery at Mount Carmel and the follow-up care was exceptional. The doctors took time to explain everything and made sure I was comfortable throughout my recovery.",
      rating: 5,
      date: "2023-11-12"
    },
    {
      id: 6,
      name: "Esi Boateng",
      text: "The dental clinic is fantastic! The dentist was very gentle and professional. I used to be afraid of dental visits but not anymore. Highly recommend their services.",
      rating: 4,
      date: "2023-11-08"
    }
  ];
  
  const [showModal, setShowModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: '',
    consent: false
  });
  // Testimonials state
  const [testimonials, setTestimonials] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Fetch testimonials from Firestore on mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const q = query(collection(db, 'testimonies'), orderBy('date', 'desc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  // Filter testimonials by rating and use database or demo data
  const baseTestimonials = testimonials.length > 0 ? testimonials : demoTestimonials;
  const filteredTestimonials = baseTestimonials.filter(testimonial => ratingFilter === 0 || Math.floor(testimonial.rating) === ratingFilter);
  const displayedTestimonials = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 3);

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
    if (formData.rating === 0) {
      alert('Please provide a rating');
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const newTestimony = {
        name: formData.name,
        email: formData.email,
        rating: formData.rating,
        message: formData.message,
        date: new Date().toISOString(),
      };
      const docRef = await addDoc(collection(db, 'testimonies'), newTestimony);
      // Add new testimony to state for instant display
      setTestimonials(prev => [{ id: docRef.id, ...newTestimony }, ...prev]);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        rating: 5,
        message: '',
        consent: false
      });
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setSubmitError('Failed to submit testimonial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === baseTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? baseTestimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return (
      <div className="flex space-x-0.5">
        {stars}
      </div>
    );
  };

  // Scroll to testimonials section
  const scrollToTestimonials = () => {
    document.getElementById('testimonials-grid').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mount-carmel-primary to-mount-carmel-secondary text-white min-h-[60vh] md:min-h-[75vh] lg:min-h-[90vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-[url('/images/testimonial/testimony-hero.png')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-mount-carmel-primary/90 to-mount-carmel-secondary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight"
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
              <button
                onClick={scrollToTestimonials}
                className="mt-4 ml-4 inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-mount-carmel-primary bg-white hover:bg-gray-100 transition-colors duration-200 shadow-md"
              >
                View All Testimonials
              </button>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* Testimonial Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setShowModal(false)}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-3xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden z-10 border border-white/20"
          >
            {/* Decorative Top Border */}
            <div className="h-2 w-full bg-gradient-to-r from-mount-carmel-primary via-mount-carmel-secondary to-mount-carmel-primary"></div>

            <div className="p-6 sm:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                    Share Your <span className="text-mount-carmel-primary">Experience</span>
                  </h3>
                  <p className="mt-2 text-gray-500 text-lg">
                    We value your feedback and journey with us.
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 text-gray-400 hover:text-gray-900"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-50 mb-6">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                  <p className="mt-3 text-gray-600 max-w-sm mx-auto">
                    Your testimonial has been submitted successfully. We appreciate your feedback!
                  </p>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="mt-8 px-8 py-3 bg-mount-carmel-primary text-white font-bold rounded-full hover:bg-mount-carmel-primary-dark transition-all"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r-lg"
                    >
                      <p className="text-sm font-medium">{submitError}</p>
                    </motion.div>
                  )}

                  {/* Rating Selector */}
                  <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Overall Satisfaction</span>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none transform transition-transform hover:scale-125 duration-200"
                        >
                          <Star 
                            className={`w-10 h-10 transition-colors duration-200 ${
                              (formData.rating >= star || hoverRating >= star) 
                                ? 'text-yellow-400 fill-current drop-shadow-sm' 
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">
                      {formData.rating === 5 ? "Excellent!" : 
                       formData.rating === 4 ? "Very Good" : 
                       formData.rating === 3 ? "Good" : 
                       formData.rating === 2 ? "Fair" : 
                       formData.rating === 1 ? "Poor" : "Select a rating"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                        Full Name <span className="text-mount-carmel-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-2xl border-gray-200 bg-white/50 py-4 px-5 text-gray-900 shadow-sm transition-all duration-200 focus:border-mount-carmel-primary focus:ring-4 focus:ring-mount-carmel-primary/10 placeholder:text-gray-400"
                        placeholder="e.g. Ama Serwaa"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                        Email Address <span className="text-mount-carmel-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-2xl border-gray-200 bg-white/50 py-4 px-5 text-gray-900 shadow-sm transition-all duration-200 focus:border-mount-carmel-primary focus:ring-4 focus:ring-mount-carmel-primary/10 placeholder:text-gray-400"
                        placeholder="ama@example.com"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                      Your Story <span className="text-mount-carmel-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      maxLength={500}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="block w-full rounded-2xl border-gray-200 bg-white/50 py-4 px-5 text-gray-900 shadow-sm transition-all duration-200 focus:border-mount-carmel-primary focus:ring-4 focus:ring-mount-carmel-primary/10 placeholder:text-gray-400 min-h-[150px] resize-none"
                      placeholder="Share your experience with our services and staff..."
                    />
                    <div className={`absolute bottom-4 right-5 text-xs font-medium px-2 py-1 rounded-md transition-colors ${
                      formData.message.length > 450 ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400'
                    }`}>
                      {formData.message.length} / 500
                    </div>
                  </div>

                  <div className="flex items-start bg-mount-carmel-primary/5 p-4 rounded-2xl border border-mount-carmel-primary/10">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="h-5 w-5 rounded border-gray-300 text-mount-carmel-primary focus:ring-mount-carmel-primary cursor-pointer"
                      />
                    </div>
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-600 leading-relaxed cursor-pointer select-none">
                      I agree to the <a href="/privacy" className="text-mount-carmel-primary font-bold hover:underline">Privacy Policy</a> and consent to having my feedback displayed on the website.
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className={`w-full flex justify-center items-center py-4 px-8 rounded-2xl text-lg font-bold text-white shadow-xl transition-all duration-300 ${
                      isSubmitting || !formData.consent 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-mount-carmel-primary to-mount-carmel-secondary hover:shadow-mount-carmel-primary/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Publishing Your Story...
                      </>
                    ) : 'Publish Testimonial'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Featured Testimonial Carousel */}
      <div className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 transform transition-all hover:shadow-2xl">
            {baseTestimonials.length > 0 ? (
              <>
                <div className="flex items-center justify-center mb-6">
                  {renderStars(baseTestimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-xl md:text-2xl text-center text-gray-700 mb-8 leading-relaxed italic">
                  "{baseTestimonials[currentTestimonial].text || baseTestimonials[currentTestimonial].message}"
                </blockquote>
                <div className="text-center">
                  <p className="font-bold text-lg text-mount-carmel-primary">
                    {baseTestimonials[currentTestimonial].name}
                  </p>
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
                    {baseTestimonials.slice(0, 5).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentTestimonial ? 'bg-mount-carmel-primary' : 'bg-gray-300'}`}
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
        
 

      {/* Testimonials Grid */}
      <section id="testimonials-grid" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#6f3348_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-mount-carmel-primary uppercase rounded-full bg-mount-carmel-primary/10">
              Patient Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-mount-carmel-primary">Patients Say</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Real stories from our patients about their experiences at Mount Carmel Hospital.
            </p>
            
            {/* Rating Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setRatingFilter(0)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  ratingFilter === 0 
                    ? 'bg-mount-carmel-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Ratings
              </button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setRatingFilter(ratingFilter === rating ? 0 : rating)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                    ratingFilter === rating 
                      ? 'bg-mount-carmel-primary/10 text-mount-carmel-primary border border-mount-carmel-primary/20' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {renderStars(rating)}
                  <span className="ml-1">{rating}+</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.length === 0 ? (
              <div className="col-span-3 text-center py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No testimonials found</h3>
                  <p className="mt-2 text-gray-500">
                    {ratingFilter > 0 
                      ? `No testimonials with ${ratingFilter} star rating. Try a different filter.`
                      : 'No testimonials available yet.'}
                  </p>
                  {ratingFilter > 0 && (
                    <button
                      onClick={() => setRatingFilter(0)}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-mount-carmel-primary bg-mount-carmel-primary/10 hover:bg-mount-carmel-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mount-carmel-primary"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              </div>
            ) : (
              displayedTestimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id || index}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-mount-carmel-primary/5 p-3 rounded-2xl">
                      <svg className="w-8 h-8 text-mount-carmel-primary opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                      </svg>
                    </div>
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow italic">
                    "{testimonial.text || testimonial.message}"
                  </blockquote>
                  
                  <div className="pt-6 border-t border-gray-50 mt-auto">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
            )}
          </div>

          {filteredTestimonials.length > 3 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-8 py-3 bg-white text-mount-carmel-primary border-2 border-mount-carmel-primary font-bold rounded-full hover:bg-mount-carmel-primary hover:text-white transition-all duration-300 shadow-sm"
              >
                {showAll ? 'Show Less' : `Show All Testimonies (${filteredTestimonials.length})`}
                <ChevronRight className={`ml-2 w-5 h-5 transition-transform ${showAll ? 'rotate-90' : ''}`} />
              </button>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <motion.button 
              onClick={() => setShowModal(true)}
              className="group inline-flex items-center px-8 py-4 bg-mount-carmel-primary text-white font-semibold rounded-full hover:bg-mount-carmel-primary-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5 mr-2 transition-transform group-hover:rotate-90" />
              Share Your Experience
            </motion.button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
