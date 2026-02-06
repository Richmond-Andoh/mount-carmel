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
    const endpoint = '/api/send-email';
    const payload = {
      formType: 'Appointment Booking',
      patientType: formData.patientType,
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      department: formData.department,
      ...(formData.patientType === 'New Patient' && {
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        residence: formData.residence,
      }),
      message: formData.message || 'None',
    };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
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
          <div className="absolute inset-0 bg-[url('/images/about/about4.png')] bg-cover bg-center"></div>
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
              <div className="container mt-20 p-8 md:p-12 md:w-[35%] mb-0 h-full">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
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
                        <div className="w-10 h-10 rounded-full bg-mount-carmel-primary/10 flex items-center justify-center mr-3 shrink-0">
                          <i className={`fa ${item.icon} text-mount-carmel-primary`}></i>
                        </div>
                        <span className="font-medium text-gray-800 text-sm">{item.text}</span>
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
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shrink-0">
                      <i className="fa fa-clock text-xl text-white"></i>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Business Hours</h5>
                      <p className="text-white/90 text-sm">24/7 Emergency Services</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shrink-0">
                      <i className="fa fa-phone-alt text-xl text-white"></i>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Emergency</h5>
                      <p className="text-white/90 text-sm">+233 592 411 108</p>
                      <p className="text-white/90 text-sm">+233 242 160 557</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 md:p-12 md:w-[65%] bg-gray-50 border-l border-gray-100">
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 h-full border border-gray-100">
                    <div className="text-center mb-10">
                      <div className="w-16 h-16 bg-mount-carmel-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fa fa-calendar-alt text-2xl" style={{ color: '#6f2248' }}></i>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {location.state?.patientType ? 'Edit Appointment' : 'Book Appointment'}
                      </h3>
                      <p className="text-gray-500">
                        {location.state?.patientType 
                          ? 'Review and update your appointment details' 
                          : 'Please provide your information to schedule your visit'}
                      </p>
                    </div>

                    {location.state?.patientType && (
                      <div className="mb-8 p-4 rounded-xl flex items-center" style={{ background: '#fdf2f5', border: '1px solid rgba(111, 51, 72, 0.1)' }}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm shrink-0">
                          <i className="fa fa-edit" style={{ color: '#6f2248' }}></i>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-0">Editing Mode</p>
                          <p className="text-sm text-gray-600 mb-0">Your previous data has been loaded. Make and verify changes.</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} autoComplete="off" className="space-y-8">
                      {/* Patient Type Cards */}
                      <div className="space-y-4">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Patient Information</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { id: 'New Patient', title: 'New Patient', desc: 'First time visiting our hospital' },
                            { id: 'Old Patient', title: 'Returning Patient', desc: 'I have visited the hospital before' }
                          ].map((type) => (
                            <div 
                              key={type.id}
                              className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 ${
                                formData.patientType === type.id 
                                ? 'border-[#6f3348] bg-[#fdf2f5]' 
                                : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                              }`}
                              onClick={() => handleChange({ target: { name: 'patientType', value: type.id } })}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className={`font-bold ${formData.patientType === type.id ? 'text-[#6f3348]' : 'text-gray-900'}`}>
                                  {type.title}
                                </span>
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  formData.patientType === type.id 
                                  ? 'border-[#6f3348] bg-[#6f3348]' 
                                  : 'border-gray-300'
                                }`}>
                                  {formData.patientType === type.id && <div className="w-2 h-2 rounded-full bg-white"></div>}
                                </div>
                              </div>
                              <p className="text-xs text-gray-500 mb-0 leading-relaxed">{type.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="form-group">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                <i className="fa fa-user"></i>
                              </span>
                              <input
                                type="text"
                                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="E.g. John Doe"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                <i className="fa fa-phone"></i>
                              </span>
                              <input
                                type="tel"
                                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="E.g. 059 241 1108"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="form-group">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Appointment Date</label>
                            <input
                              type="date"
                              className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all"
                              id="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              min={new Date().toISOString().split('T')[0]}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</label>
                            <select
                              className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all bg-white"
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
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">Select Medical Department</label>
                          <select
                            className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all bg-white"
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
                        </div>

                        {formData.patientType === 'New Patient' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeInUp">
                            <div className="form-group">
                              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                              <input
                                type="date"
                                className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                max={new Date().toISOString().split('T')[0]}
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">Gender Identity</label>
                              <select
                                className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all bg-white"
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
                            </div>
                            <div className="form-group md:col-span-2">
                              <label htmlFor="residence" className="block text-sm font-medium text-gray-700 mb-2">Current Residence (Location/Area)</label>
                              <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                                  <i className="fa fa-map-marker-alt"></i>
                                </span>
                                <input
                                  type="text"
                                  className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all"
                                  id="residence"
                                  name="residence"
                                  value={formData.residence}
                                  onChange={handleChange}
                                  placeholder="E.g. Community 25, Tema"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="form-group">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                          <textarea
                            className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6f3348] focus:border-transparent outline-none transition-all min-h-[120px]"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please tell us about your condition or any special requests..."
                          ></textarea>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <motion.button
                          className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
                          type="button"
                          onClick={handlePreview}
                          disabled={isSubmitting}
                          whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                        >
                          <i className="fa fa-eye"></i>
                          Preview Booking
                        </motion.button>
                        
                        <motion.button
                          className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold shadow-lg text-white transition-all disabled:opacity-50"
                          type="submit"
                          disabled={isSubmitting}
                          style={{
                            background: isSubmitting ? '#94a3b8' : '#6f3348'
                          }}
                          whileHover={!isSubmitting ? { scale: 1.01, boxShadow: '0 8px 25px rgba(111, 51, 72, 0.2)' } : {}}
                          whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                        >
                          {isSubmitting ? (
                            <><i className="fa fa-spinner fa-spin"></i> Processing...</>
                          ) : (
                            <><i className="fa fa-paper-plane"></i> Confirm Appointment</>
                          )}
                        </motion.button>
                      </div>

                      {submitStatus === 'error' && (
                        <motion.div
                          className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-100 flex items-center gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <i className="fa fa-exclamation-circle text-xl"></i>
                          <p className="text-sm font-medium mb-0">We encountered an error. Please try again or call us directly.</p>
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