import { useState } from 'react';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: 'Fertility Treatment',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Appointment form submitted:', formData);
    alert('Thank you! Your appointment request has been submitted. We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      service: 'Fertility Treatment',
      message: ''
    });
  };

  const services = [
    'Fertility Treatment',
    'Maternity Care',
    'Gynecology',
    'Pediatrics',
    'Laboratory Services',
    'Emergency Care',
    'General Medicine',
    'Surgical Procedures'
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-6 mb-4">We Ensure You Will Always Get The Best Healthcare</h1>
            <p>
              At Mount Carmel Hospital, we are committed to providing exceptional healthcare services 
              with the highest standards of medical excellence. Our team of experienced healthcare 
              professionals is dedicated to your well-being and recovery.
            </p>
            <p className="mb-4">
              We combine advanced medical technology with compassionate care to ensure the best 
              possible outcomes for our patients. Your health and satisfaction are our top priorities.
            </p>
            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.3s">
              <div className="icon-box-primary">
                <i className="bi bi-geo-alt text-dark fs-1"></i>
              </div>
              <div className="ms-3">
                <h5>Hospital Address</h5>
                <span>Ashfoam Junction, Tema Com.25, Accra, Ghana</span>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.4s">
              <div className="icon-box-primary">
                <i className="bi bi-clock text-dark fs-1"></i>
              </div>
              <div className="ms-3">
                <h5>Hospital Hours</h5>
                <span>Mon-Sat 08:00-18:00, Sun 09:00-15:00</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h2 className="mb-4">Online Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="mobile" 
                      name="mobile"
                      placeholder="Your Mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="mobile">Your Mobile</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select 
                      className="form-select" 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    <label htmlFor="service">Choose A Service</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea 
                      className="form-control" 
                      placeholder="Leave a message here" 
                      id="message" 
                      name="message"
                      style={{ height: '130px' }}
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection; 