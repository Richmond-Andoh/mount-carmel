import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjkraazj';

const VisitationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState(null);

  // Check if all fields are filled
  useEffect(() => {
    const allFilled = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(allFilled);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDebugInfo(null);

    try {
      const data = new FormData(e.target);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      const responseData = await response.json();
      setDebugInfo(JSON.stringify(responseData));

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setFormData({ name: '', email: '', organization: '', phone: '', message: '' });
      } else {
        throw new Error(responseData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container-custom max-w-xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-[#6f2248] mb-6 text-center">Visit our Facility</h1>
        {submitted ? (
           <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-xl">
        <h1 className="text-3xl font-bold text-[#6f2248] mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
        Thank you for your interest! We will contact you soon.        </p>
        <Link
          to="/"
          className="inline-block bg-[#6f2248] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6f2248]/90 transition-colors"
        >
          Go Back to Home
        </Link>
      </div>

        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248]"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248]"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">
                Are you an organization, individual, or family?
              </label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter your organization/family/individual name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248]"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248]"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Purpose of visit</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your visitation interest..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248]"
              />
            </div>
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full bg-[#6f2248] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl ${
                (!isFormValid || loading) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#6f2248]/90'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Visitation Request'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default VisitationForm;
