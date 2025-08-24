import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Testimonies = () => {
  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const testimonials = [
    {
      name: 'Sarah and John Mensah',
      role: 'Fertility Treatment Success',
      image: '/images/testimonial-1.jpg',
      content: 'After years of trying to conceive, Mount Carmel Hospital gave us hope. The fertility treatment was successful and we now have beautiful twins. The doctors and staff were incredibly supportive throughout our journey.',
      rating: 5
    },
    {
      name: 'Grace Addo',
      role: 'Maternity Care Patient',
      image: '/images/testimonial-2.jpg',
      content: 'My experience at Mount Carmel Hospital during my pregnancy was exceptional. The prenatal care was comprehensive, and the delivery was smooth. The postnatal care was also excellent. I highly recommend their maternity services.',
      rating: 5
    },
    {
      name: 'Kwame Osei',
      role: 'General Medicine Patient',
      image: '/images/testimonial-3.jpg',
      content: 'The medical team at Mount Carmel Hospital is professional and caring. They took the time to understand my health concerns and provided effective treatment. The facilities are modern and the staff is very friendly.',
      rating: 5
    },
    {
      name: 'Ama Kufuor',
      role: 'Pediatric Care Parent',
      image: '/images/testimonial-4.jpg',
      content: 'As a parent, I appreciate the child-friendly environment and the expertise of the pediatric team. My children feel comfortable during their visits, and the doctors are excellent with kids.',
      rating: 5
    },
    {
      name: 'Michael Asante',
      role: 'Emergency Care Patient',
      image: '/images/testimonial-5.jpg',
      content: 'When I had a medical emergency, Mount Carmel Hospital responded quickly and professionally. The emergency team was efficient and the care I received was outstanding. Thank you for saving my life.',
      rating: 5
    },
    {
      name: 'Elizabeth Boateng',
      role: 'Laboratory Services Patient',
      image: '/images/testimonial-6.jpg',
      content: 'The laboratory services at Mount Carmel Hospital are top-notch. The tests were done quickly and the results were accurate. The staff was professional and made the process comfortable.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fa fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
      ></i>
    ));
  };

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown">Patient Testimonials</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Testimonials</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Testimonials Introduction */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Testimonials</h6>
            <h1 className="display-6 mb-4">What Our Patients Say</h1>
            <p className="mb-0">Hear from our patients about their experiences at Mount Carmel Hospital. Their stories reflect our commitment to providing exceptional healthcare with compassion and excellence.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
          {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="testimonial-item bg-light rounded p-4">
                  <div className="d-flex align-items-center mb-4">
                    <img 
                      className="flex-shrink-0 rounded-circle me-3" 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      style={{width: '60px', height: '60px', objectFit: 'cover'}}
                    />
                <div>
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <small className="text-primary">{testimonial.role}</small>
                    </div>
                  </div>
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="mb-0">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Success Stories</h6>
                <h1 className="display-6 mb-4">Transforming Lives Through Healthcare</h1>
                <p>At Mount Carmel Hospital, we believe in the power of healthcare to transform lives. Our success stories are a testament to our commitment to excellence and the trust our patients place in us.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">High Success Rates</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Patient Satisfaction</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Expert Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Modern Technology</h6>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" href="/appointment">Book Your Appointment</a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src="/images/success-stories.jpg" alt="Success Stories" />
              </div>
            </div>
          </div>
        </div>
        </div>

      {/* Statistics Section */}
      <div className="container-fluid fact py-5 pt-lg-0" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-heart text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>98%</h4>
                    <span>Patient Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-baby text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>1000+</h4>
                    <span>Successful Births</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-users text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>5000+</h4>
                    <span>Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
              <div className="bg-white shadow d-flex align-items-center h-100 p-5" style={{minHeight: '160px'}}>
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <i className="fa fa-star text-primary"></i>
                  </div>
                  <div className="ps-3">
                    <h4>4.9/5</h4>
                    <span>Average Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Join Our Success Stories</h6>
            <h1 className="display-6 mb-4">Experience Exceptional Healthcare</h1>
            <p className="mb-4">Join thousands of satisfied patients who have experienced the Mount Carmel difference. Book your appointment today and start your journey to better health.</p>
            <div className="d-flex justify-content-center gap-3">
              <a className="btn btn-primary py-3 px-5" href="/appointment">Book Appointment</a>
              <a className="btn btn-outline-primary py-3 px-5" href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Testimonies; 