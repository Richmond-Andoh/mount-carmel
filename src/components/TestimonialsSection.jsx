import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah and Michael Osei",
      profession: "Fertility Treatment Success",
      image: "/images/testimonial-1.jpg",
      text: "After years of trying to conceive, Mount Carmel Hospital gave us hope. The fertility treatment was successful and we now have beautiful twins. The doctors and staff were incredibly supportive throughout our journey."
    },
    {
      id: 2,
      name: "Dr. Grace Mensah",
      profession: "Pediatric Care",
      image: "/images/testimonial-2.jpg",
      text: "As a fellow healthcare professional, I can attest to the exceptional quality of care at Mount Carmel Hospital. The pediatric department provided excellent care for my daughter when she was ill."
    },
    {
      id: 3,
      name: "Kwame Addo",
      profession: "Emergency Care",
      image: "/images/testimonial-1.jpg",
      text: "The emergency care team at Mount Carmel Hospital saved my life. Their quick response and professional treatment made all the difference. I'm forever grateful for their expertise and compassion."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container pt-5">
        <div className="row gy-5 gx-0">
          <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
            <h1 className="display-6 text-white mb-4">What Patients Say About Our Healthcare Services!</h1>
            <p className="text-white mb-5">
              Our patients' satisfaction and success stories are our greatest achievements. 
              Read what our patients have to say about their experience at Mount Carmel Hospital.
            </p>
            <a href="/testimonials" className="btn btn-primary py-3 px-5">More Testimonials</a>
          </div>
          <div className="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white p-5">
              <div className="testimonial-carousel wow fadeIn" data-wow-delay="0.1s">
                <div className="testimonial-item">
                  <div className="icon-box-primary mb-4">
                    <i className="bi bi-chat-left-quote text-dark"></i>
                  </div>
                  <p className="fs-5 mb-4">{testimonials[currentTestimonial].text}</p>
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0" src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                    <div className="ps-3">
                      <h5 className="mb-1">{testimonials[currentTestimonial].name}</h5>
                      <span className="text-primary">{testimonials[currentTestimonial].profession}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="d-flex justify-content-between mt-4">
                <button 
                  className="btn btn-outline-primary" 
                  onClick={prevTestimonial}
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button 
                  className="btn btn-outline-primary" 
                  onClick={nextTestimonial}
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 