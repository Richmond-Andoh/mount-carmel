import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
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
      profession: "Fertility Patient",
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
  // Testimonials state
  const [testimonials, setTestimonials] = useState([]);

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
  const filteredTestimonials = (testimonials.length > 0 ? testimonials : demoTestimonials)
    .filter(testimonial => ratingFilter === 0 || Math.floor(testimonial.rating) === ratingFilter);

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
      const newTestimony = {
        name: formData.name,
        email: formData.email,
        rating: formData.rating,
        title: formData.title,
        message: formData.message,
        profession: formData.profession,
        date: new Date().toISOString(),
      };
      const docRef = await addDoc(collection(db, 'testimonies'), newTestimony);
      // Add new testimony to state for instant display
      setTestimonials(prev => [{ id: docRef.id, ...newTestimony }, ...prev]);
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-4 sm:p-8 z-[10000] mx-2 my-4 max-h-screen overflow-y-auto">
            {/* Modal Header - sticky close button for mobile usability */}
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 py-2">
              <h3 className="text-2xl font-bold text-gray-900">Share Your Experience</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                style={{ position: 'sticky', top: 0, right: 0 }}
                aria-label="Close modal"
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
      
      {/* Featured Testimonial Carousel */}
      <div className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 transform transition-all hover:shadow-2xl">
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
            {filteredTestimonials.length === 0 ? (
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
              filteredTestimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id || index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={testimonial.image || '/images/avatar-placeholder.png'}
                    alt={testimonial.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 -mb-6">
                        <img 
                          className="h-14 w-14 rounded-full border-2 border-white object-cover" 
                          src={testimonial.image || '/images/avatar-placeholder.png'} 
                          alt={testimonial.name} 
                        />
                      </div>
                      <div className="ml-4 text-left">
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-white/90">{testimonial.profession}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-sm text-gray-500">
                        {testimonial.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                    {testimonial.title || 'Amazing Experience'}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 line-clamp-4 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(testimonial.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 1l-6 4-6-4v16l6 4 6-4v-16zm-1.5 2.5l-4.5 3v9l4.5-3v-9zm-9 0v9l-4.5 3v-9l4.5-3z" />
                          </svg>
                        </button>
                        <button className="p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.59l3.54 7.27 7.91 1.15-5.73 5.59 1.35 7.88-7.07-3.72-7.07 3.72 1.35-7.88-5.73-5.59 7.91-1.15 3.54-7.27zm0 2.36l-2.74 5.64-6.13.89 4.44 4.33-1.05 6.12 5.48-2.88 5.48 2.88-1.05-6.12 4.44-4.33-6.13-.89-2.74-5.64z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
            )}
          </div>
          
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
