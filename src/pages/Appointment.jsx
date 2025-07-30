import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Appointment = () => {
  const [formData, setFormData] = useState({
    patientType: 'New Patient',
    name: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    dateOfBirth: '',
    gender: '',
    residence: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  const departments = [
    'Fertility Treatment',
    'Maternity Care',
    'General Medicine',
    'Gynecology',
    'Pediatrics',
    'Emergency Care',
    'Laboratory Services',
    'Specialized Care'
  ];

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const getTimeSlots = () => {
    const slots = [];
    for (let i = 9; i < 17; i++) {
      slots.push(`${i}:00`);
      slots.push(`${i}:30`);
    }
    return slots;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const endpoint =
      formData.patientType === 'New Patient'
        ? 'https://formspree.io/f/xqabgoyl'
        : 'https://formspree.io/f/xldnokpw';

    const payload = new FormData();

    payload.append('Patient Type', formData.patientType === 'New Patient' ? 'New Patient' : 'Old Patient');
    payload.append('Full Name', formData.name);
    payload.append('Phone Number', formData.phone);
    payload.append('Preferred Date', formData.date);
    payload.append('Preferred Time', formData.time);
    payload.append('Department', formData.department);
    if (formData.patientType === 'New Patient') {
      payload.append('Date of Birth', formData.dateOfBirth);
      payload.append('Gender', formData.gender);
      payload.append('Residence', formData.residence);
    }
    payload.append('Additional Message', formData.message || 'None');

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        sessionStorage.setItem('appointmentSuccess', 'true');
        navigate('/appointment-success');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: 'linear-gradient(135deg, #0066CC, #003366)'}}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown">Book Appointment</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Appointment</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <h6 className="section-title bg-white text-center text-primary px-3">Appointment</h6>
            <h1 className="display-6 mb-4">Schedule Your Visit</h1>
            <p className="mb-0">Book an appointment with our expert medical team. We're here to provide you with the best healthcare experience.</p>
          </div>
          
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Why Choose Us</h6>
                <h1 className="display-6 mb-4">Expert Medical Care</h1>
                <p>At Mount Carmel Hospital, we provide comprehensive healthcare services with a focus on patient comfort and medical excellence.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Expert Doctors</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Modern Facilities</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Patient-Centered Care</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check fa-2x text-primary me-3"></i>
                      <h6 className="mb-0">Affordable Care</h6>
                    </div>
                  </div>
                </div>
                <div className="bg-light p-4 rounded">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-clock fa-2x text-primary me-3"></i>
                    <div>
                      <h5 className="mb-0">Business Hours</h5>
                      <p className="mb-0">Mon-Sat: 8:00 AM - 6:00 PM | Sun: 9:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa fa-phone fa-2x text-primary me-3"></i>
                    <div>
                      <h5 className="mb-0">Emergency Contact</h5>
                      <p className="mb-0">+233 30 393 9896 (24/7)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <select 
                          className="form-select border-0 bg-white px-4" 
                          id="patientType" 
                          name="patientType"
                          value={formData.patientType}
                          onChange={handleChange}
                          required
                        >
                          <option value="New Patient">New Patient</option>
                          <option value="Old Patient">Returning Patient</option>
                        </select>
                        <label htmlFor="patientType">Patient Type</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className="form-control border-0 bg-white px-4" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name" 
                          required
                        />
                        <label htmlFor="name">Full Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input 
                          type="tel" 
                          className="form-control border-0 bg-white px-4" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number" 
                          required
                        />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input 
                          type="date" 
                          className="form-control border-0 bg-white px-4" 
                          id="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="date">Preferred Date</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select 
                          className="form-select border-0 bg-white px-4" 
                          id="time" 
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Time</option>
                          {getTimeSlots().map((slot, index) => (
                            <option key={index} value={slot}>{slot}</option>
                          ))}
                        </select>
                        <label htmlFor="time">Preferred Time</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <select 
                          className="form-select border-0 bg-white px-4" 
                          id="department" 
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept, index) => (
                            <option key={index} value={dept}>{dept}</option>
                          ))}
                        </select>
                        <label htmlFor="department">Department</label>
                      </div>
                    </div>
                    
                    {formData.patientType === 'New Patient' && (
                      <>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                              type="date" 
                              className="form-control border-0 bg-white px-4" 
                              id="dateOfBirth" 
                              name="dateOfBirth"
                              value={formData.dateOfBirth}
                              onChange={handleChange}
                              required
                            />
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select 
                              className="form-select border-0 bg-white px-4" 
                              id="gender" 
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                            <label htmlFor="gender">Gender</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input 
                              type="text" 
                              className="form-control border-0 bg-white px-4" 
                              id="residence" 
                              name="residence"
                              value={formData.residence}
                              onChange={handleChange}
                              placeholder="Residence" 
                              required
                            />
                            <label htmlFor="residence">Residence</label>
                          </div>
                        </div>
                      </>
                    )}
                    
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea 
                          className="form-control border-0 bg-white px-4 py-3" 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Additional Message" 
                          style={{height: '100px'}}
                        ></textarea>
                        <label htmlFor="message">Additional Message (Optional)</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                        className="btn btn-primary w-100 py-3" 
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
                      </button>
                    </div>
                  </div>
                </form>
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3" role="alert">
                    There was an error submitting your appointment. Please try again or contact us directly.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Appointment;
