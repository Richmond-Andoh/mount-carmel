import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';


function Appointment() {
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
    'Specialized Care',
  ];

  const getTimeSlots = () => {
    const slots = [];
    for (let i = 9; i < 17; i++) {
      slots.push(`${i}:00`);
      slots.push(`${i}:30`);
    }
    return slots;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    payload.append('Patient Type', formData.patientType);
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
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        sessionStorage.setItem('appointmentSuccess', 'true');
        navigate('/appointment-success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      {/* Parallax Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(rgba(111,34,72,0.7), rgba(168,92,122,0.7)), url('/images/feature.jpg') center/cover no-repeat",
          backgroundAttachment: 'fixed',
          color: '#fff',
          padding: '80px 0 40px 0',
        }}
      >
        <div className="container text-center">
          <motion.h1
            className="display-4 fw-bold mb-3"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book Your Appointment
          </motion.h1>
          <motion.p
            className="lead mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience world-class healthcare with our expert team. Schedule your visit today and take the first step towards better health.
          </motion.p>
          <div className="row justify-content-center mt-5">
            <div className="col-md-3 col-6 mb-3">
              <motion.div
                className="glass-card text-center p-4 rounded-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
              >
                <div className="h2 fw-bold">5000+</div>
                <div className="small">Happy Patients</div>
              </motion.div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <motion.div
                className="glass-card text-center p-4 rounded-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
              >
                <div className="h2 fw-bold">50+</div>
                <div className="small">Expert Doctors</div>
              </motion.div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <motion.div
                className="glass-card text-center p-4 rounded-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
              >
                <div className="h2 fw-bold">24/7</div>
                <div className="small">Emergency Care</div>
              </motion.div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <motion.div
                className="glass-card text-center p-4 rounded-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
              >
                <div className="h2 fw-bold">15+</div>
                <div className="small">Departments</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                className="h-100 p-4 rounded-4 bg-white shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="img-border rounded-4 shadow-lg overflow-hidden mb-4">
                  <img
                    className="img-fluid"
                    src="/images/about-1.jpg"
                    alt="Mount Carmel Hospital"
                    style={{ borderRadius: '24px', objectFit: 'cover', minHeight: '280px' }}
                  />
                </div>
                <h6 className="section-title bg-white text-start pe-3" style={{ color: '#6f2248' }}>
                  Why Choose Us
                </h6>
                <h1 className="display-6 mb-4 fw-bold">Expert Medical Care</h1>
                <p className="lead">
                  At Mount Carmel Hospital, we provide comprehensive healthcare services with a focus on patient comfort and medical excellence.
                </p>
                <div className="row g-3 mb-4">
                  {[
                    { icon: 'fa-user-md', text: 'Expert Doctors' },
                    { icon: 'fa-hospital', text: 'Modern Facilities' },
                    { icon: 'fa-heart', text: 'Patient-Centered Care' },
                    { icon: 'fa-dollar-sign', text: 'Affordable Care' },
                  ].map((item, index) => (
                    <div key={index} className="col-sm-6">
                      <motion.div
                        className="d-flex align-items-center p-3 rounded-3 shadow-sm bg-light"
                        whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(111, 34, 72, 0.15)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '48px', height: '48px', background: '#6f2248' }}
                        >
                          <i className={`fa ${item.icon} text-white`}></i>
                        </div>
                        <h6 className="mb-0 fw-bold">{item.text}</h6>
                      </motion.div>
                    </div>
                  ))}
                </div>
                <motion.div
                  className="p-4 rounded-4 shadow-lg mt-3"
                  style={{ background: 'linear-gradient(135deg, #6f2248, #a85c7a)', color: 'white' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-clock fa-2x me-3"></i>
                    <div>
                      <h5 className="mb-0 text-white">Business Hours</h5>
                      <p className="mb-0 text-light">Mon-Sat: 8:00 AM - 6:00 PM | Sun: 9:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa fa-phone fa-2x me-3"></i>
                    <div>
                      <h5 className="mb-0 text-white">Emergency Contact</h5>
                      <p className="mb-0 text-light">+233 30 393 9896 (24/7)</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="rounded-4 p-5 shadow-lg bg-white"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <motion.div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6f2248, #a85c7a)' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <i className="fa fa-calendar-alt fa-2x text-white"></i>
                  </motion.div>
                  <h3 className="fw-bold" style={{ color: '#6f2248' }}>
                    Book Your Appointment
                  </h3>
                  <p className="text-muted">Fill out the form below to schedule your visit</p>
                </div>
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="row g-3">
                    <div className="col-12">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <select
                          className="form-select border-0 bg-white px-4 rounded-3 shadow-sm"
                          id="patientType"
                          name="patientType"
                          value={formData.patientType}
                          onChange={handleChange}
                          required
                          style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                        >
                          <option value="New Patient">New Patient</option>
                          <option value="Old Patient">Returning Patient</option>
                        </select>
                        <label htmlFor="patientType" style={{ color: '#6f2248' }}>
                          Patient Type
                        </label>
                      </motion.div>
                    </div>
                    <div className="col-md-6">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <input
                          type="text"
                          className="form-control border-0 bg-white px-4 rounded-3 shadow-sm"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                        />
                        <label htmlFor="name" style={{ color: '#6f2248' }}>
                          Full Name
                        </label>
                      </motion.div>
                    </div>
                    <div className="col-md-6">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <input
                          type="tel"
                          className="form-control border-0 bg-white px-4 rounded-3 shadow-sm"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          required
                          style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                        />
                        <label htmlFor="phone" style={{ color: '#6f2248' }}>
                          Phone Number
                        </label>
                      </motion.div>
                    </div>
                    <div className="col-md-6">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <input
                          type="date"
                          className="form-control border-0 bg-white px-4 rounded-3 shadow-sm"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                        />
                        <label htmlFor="date" style={{ color: '#6f2248' }}>
                          Preferred Date
                        </label>
                      </motion.div>
                    </div>
                    <div className="col-md-6">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <select
                          className="form-select border-0 bg-white px-4 rounded-3 shadow-sm"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                        >
                          <option value="">Select Time</option>
                          {getTimeSlots().map((slot, index) => (
                            <option key={index} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="time" style={{ color: '#6f2248' }}>
                          Preferred Time
                        </label>
                      </motion.div>
                    </div>
                    <div className="col-12">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <select
                          className="form-select border-0 bg-white px-4 rounded-3 shadow-sm"
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          required
                          style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept, index) => (
                            <option key={index} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="department" style={{ color: '#6f2248' }}>
                          Department
                        </label>
                      </motion.div>
                    </div>
                    {formData.patientType === 'New Patient' && (
                      <>
                        <div className="col-md-6">
                          <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                            <input
                              type="date"
                              className="form-control border-0 bg-white px-4 rounded-3 shadow-sm"
                              id="dateOfBirth"
                              name="dateOfBirth"
                              value={formData.dateOfBirth}
                              onChange={handleChange}
                              required
                              style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                            />
                            <label htmlFor="dateOfBirth" style={{ color: '#6f2248' }}>
                              Date of Birth
                            </label>
                          </motion.div>
                        </div>
                        <div className="col-md-6">
                          <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                            <select
                              className="form-select border-0 bg-white px-4 rounded-3 shadow-sm"
                              id="gender"
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              required
                              style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                            <label htmlFor="gender" style={{ color: '#6f2248' }}>
                              Gender
                            </label>
                          </motion.div>
                        </div>
                        <div className="col-12">
                          <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                            <input
                              type="text"
                              className="form-control border-0 bg-white px-4 rounded-3 shadow-sm"
                              id="residence"
                              name="residence"
                              value={formData.residence}
                              onChange={handleChange}
                              placeholder="Residence"
                              required
                              style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                            />
                            <label htmlFor="residence" style={{ color: '#6f2248' }}>
                              Residence
                            </label>
                          </motion.div>
                        </div>
                      </>
                    )}
                    <div className="col-12">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <textarea
                          className="form-control border-0 bg-white px-4 py-3 rounded-3 shadow-sm"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Additional Message"
                          style={{ height: '120px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                        ></textarea>
                        <label htmlFor="message" style={{ color: '#6f2248' }}>
                          Additional Message (Optional)
                        </label>
                      </motion.div>
                    </div>
                    <div className="col-12">
                      <motion.button
                        className="btn w-100 py-3 px-5 rounded-pill shadow-lg fw-bold"
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          background: isSubmitting
                            ? '#ccc'
                            : 'linear-gradient(135deg, #6f2248, #a85c7a)',
                          border: 'none',
                          color: 'white',
                          fontSize: '18px',
                          transition: 'all 0.3s ease',
                        }}
                        whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 8px 25px rgba(111, 34, 72, 0.3)' } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fa fa-spinner fa-spin me-2"></i>
                            Booking Appointment...
                          </>
                        ) : (
                          <>
                            <i className="fa fa-calendar-check me-2"></i>
                            Book Appointment
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                  {submitStatus === 'error' && (
                    <motion.div
                      className="alert alert-danger mt-3 rounded-3 shadow-sm"
                      role="alert"
                      style={{ border: 'none' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className="fa fa-exclamation-triangle me-2"></i>
                      {`There was an error submitting your appointment. Please try again or contact us directly.`}
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Appointment;