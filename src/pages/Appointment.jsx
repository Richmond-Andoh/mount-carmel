import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

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
    'General Medicine',
    'Gynecology',
    'Pediatrics',
    'Physician',
    'Postnatal/Antenatal',
    'Dietician',
    'General Surgery'
  ];

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


// Inside the component

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
      navigate('/appointment-success'); // Custom success page
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
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#6f2248] mb-4">Book an Appointment</h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto font-medium leading-relaxed">
            Schedule your visit with our experienced medical professionals. We're here to provide you with the best care possible.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-gray-100"
        >
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700">
                Appointment request submitted successfully! We will contact you shortly.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">
                There was an error submitting your appointment request. Please try again or contact us directly.
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Patient Type Selection */}
            <div className="flex justify-center space-x-8 mb-8">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="patientType"
                  value="New Patient"
                  checked={formData.patientType === 'New Patient'}
                  onChange={handleChange}
                  className="form-radio h-6 w-6 text-[#6f2248]"
                  required
                />
                <span className="ml-3 text-lg text-gray-900 font-semibold">New Patient</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="patientType"
                  value="Old Patient"
                  checked={formData.patientType === 'Old Patient'}
                  onChange={handleChange}
                  className="form-radio h-6 w-6 text-[#6f2248]"
                />
                <span className="ml-3 text-lg text-gray-900 font-semibold">Old Patient</span>
              </label>
            </div>

            <div className="border-b border-gray-200 pb-2 mb-6">
              <h2 className="text-xl font-bold text-[#6f2248]">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-[#6f2248]"></span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Phone Number <span className="text-[#6f2248]"></span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border-2 rounded-lg"
                />
              </div>
            </div>

            {formData.patientType === 'New Patient' && (
              <>
                <div className="border-b border-gray-200 pb-2 mb-6">
                  <h2 className="text-xl font-bold text-[#6f2248]">Additional Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">
                      Date of Birth <span className="text-[#6f2248]">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      max={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">
                      Gender <span className="text-[#6f2248]">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">
                      Residence <span className="text-[#6f2248]"></span>
                    </label>
                    <input
                      type="text"
                      name="residence"
                      value={formData.residence}
                      onChange={handleChange}
                      required
                      placeholder="Enter your residence"
                      className="w-full px-4 py-3 border-2 rounded-lg"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="border-b border-gray-200 pb-2 mb-6">
              <h2 className="text-xl font-bold text-[#6f2248]">Appointment Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Preferred Date <span className="text-[#6f2248]"></span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Preferred Time <span className="text-[#6f2248]"></span>
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg"
                >
                  <option value="">Select Time</option>
                  {getTimeSlots().map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Department <span className="text-[#6f2248]"></span>
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg"
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Provide any additional information"
                className="w-full px-4 py-3 border-2 rounded-lg"
              ></textarea>
            </div>


            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#6f2248] text-white px-12 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#6f2248]/90"
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Appointment'}
              </button>
            </div>
          </form>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-800 font-medium">
            For emergency cases, please call
            <a href="tel:+233597328517" className="text-[#6f2248] font-bold ml-2 hover:underline">
              0592411108, 0303939896
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
