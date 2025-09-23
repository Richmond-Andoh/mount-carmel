import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

//import AppointmentSuccess from './AppointmentSuccess';



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
  const location = useLocation();

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

  // Populate form with data from preview page when editing
  useEffect(() => {
    if (location.state && location.state.patientType) {
      setFormData(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreview = (e) => {
    e.preventDefault();
    // Navigate to preview page with form data
    navigate('/appointment-preview', { state: formData });
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
        // Save a fallback flag and pass the submitted data to the success page so it can show confirmation details
        sessionStorage.setItem('appointmentSuccess', 'true');
        navigate('/appointment-success', { state: formData });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Appointment submit error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mount-carmel-primary to-mount-carmel-secondary text-white py-24 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/booking.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/90 to-mount-carmel-secondary/90 mix-blend-multiply"></div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Book Your Appointment
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Experience world-class healthcare with our expert team. Schedule your visit today.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: '5000+', label: 'Happy Patients' },
                { value: '20+', label: 'Expert Doctors' },
                { value: '24/7', label: 'Emergency Care' },
                { value: '15+', label: 'Departments' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <div className="text-2xl md:text-3xl font-bold mb-1">{item.value}</div>
                  <div className="text-sm md:text-base text-white/80">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-mount-carmel-primary bg-mount-carmel-primary/10 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Exceptional Healthcare Experience</h2>
            <p className="text-lg text-gray-600">
              We are committed to providing the highest quality healthcare services with compassion and excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '👨‍⚕️',
                title: 'Expert Specialists',
                description: 'Our team of board-certified doctors and specialists provide exceptional care.'
              },
              {
                icon: '🏥',
                title: 'Modern Facilities',
                description: 'State-of-the-art equipment and comfortable facilities for your care.'
              },
              {
                icon: '⏱️',
                title: 'Minimal Wait Times',
                description: 'We respect your time with efficient scheduling and minimal waiting.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4">
          <div className="mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left Side - Info */}
              <div className="container mt-20 p-8 md:p-12 md:w-1/2 mb-0 h-full">
                <div className='mb-2'>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h2>
                  <p className="text-gray-600">Fill out the form and our team will get back to you shortly.</p>
                </div>
                <h6 className="section-title bg-white text-start pe-3" style={{ color: '#6f2248' }}>
                  Why Choose Us
                </h6>
                <h1 className="display-6 mb-4 fw-bold">Expert Medical Care</h1>
                <p className="lead mb-6">
                  At Mount Carmel Hospital, we provide comprehensive healthcare services with a focus on patient comfort and medical excellence.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: 'fa-user-md', text: 'Expert Doctors' },
                    { icon: 'fa-hospital', text: 'Modern Facilities' },
                    { icon: 'fa-heart', text: 'Patient Care' },
                    { icon: 'fa-dollar-sign', text: 'Affordable' },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg shadow-sm"
                      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-mount-carmel-primary/10 flex items-center justify-center mr-3">
                          <i className={`fa ${item.icon} text-mount-carmel-primary`}></i>
                        </div>
                        <span className="font-medium text-gray-800">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="p-6 rounded-2xl shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #6f2248, #a85c7a)' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <i className="fa fa-clock text-xl text-white"></i>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Business Hours</h5>
                      <p className="text-white/90 text-sm">24/7 Emergency Services</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <i className="fa fa-phone-alt text-xl text-white"></i>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Emergency</h5>
                      <p className="text-white/90 text-sm">+233 592 411 108</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 md:p-12 md:w-1/2 bg-gray-50">
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl shadow-md p-6 h-full">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-mount-carmel-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fa fa-calendar-alt text-2xl text-mount-carmel-primary"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {location.state?.patientType ? 'Edit Appointment' : 'Book Appointment'}
                      </h3>
                      <p className="text-gray-600">
                        {location.state?.patientType 
                          ? 'Review and update your appointment details' 
                          : 'Fill in your details to schedule a visit'}
                      </p>
                    </div>
                    {location.state?.patientType && (
                      <div className="mb-4 p-3 rounded-lg" style={{ background: 'linear-gradient(135deg, #d1ecf1, #bee5eb)' }}>
                        <div className="flex items-start">
                          <i className="fa fa-edit mt-1 mr-2"></i>
                          <div>
                            <p className="font-medium text-gray-800">Editing Mode</p>
                            <p className="text-sm text-gray-700">Your previous data has been loaded. Make any changes needed and submit.</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                            <select
                              className="form-select border-0 bg-white px-4 rounded-3 shadow-sm w-full"
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
                        
                          <motion.div className="form-floating w-full" whileHover={{ scale: 1.02 }}>
                            <input
                              type="text"
                              className="form-control border-0 bg-white px-4 rounded-3 shadow-sm w-full"
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
                      </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <input
                          type="tel"
                          className="form-control border-0 bg-white px-4 rounded-3 shadow-sm w-full"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div className="form-floating" whileHover={{ scale: 1.02 }}>
                        <input
                          type="date"
                          className="form-control border-0 bg-white px-4 rounded-3 shadow-sm w-full"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                          style={{ height: '58px', borderLeft: '4px solid #6f2248', transition: 'all 0.3s ease' }}
                        />
                        <label htmlFor="date" style={{ color: '#6f2248' }}>
                          Preferred Date
                        </label>
                      </motion.div>
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
                              max={new Date().toISOString().split('T')[0]}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <motion.button
                        className="btn py-3 px-5 rounded-pill shadow-lg fw-bold w-full"
                        type="button"
                        onClick={handlePreview}
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
                        <i className="fa fa-eye me-2"></i>
                        Preview Appointment
                      </motion.button>
                      <motion.button
                        className="btn py-3 px-5 rounded-pill shadow-lg fw-bold w-full"
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          background: isSubmitting
                            ? '#ccc'
                            : 'linear-gradient(135deg, #28a745, #20c997)',
                          border: 'none',
                          color: 'white',
                          fontSize: '18px',
                          transition: 'all 0.3s ease',
                        }}
                        whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 8px 25px rgba(40, 167, 69, 0.3)' } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fa fa-spinner fa-spin me-2"></i>
                            Submitting Appointment...
                          </>
                        ) : (
                          <>
                            <i className="fa fa-paper-plane me-2"></i>
                            Submit
                          </>
                        )}
                      </motion.button>
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
                    </div>
              </motion.div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Appointment;