import React, { useState } from 'react';

// TODO: Set up your Formspree form with the recipient email marksspe.20@gmail.com and use the endpoint below:
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourformid'; // Replace with your actual Formspree endpoint for marksspe.20@gmail.com

const PartnerForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container-custom max-w-xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-[#6f2248] mb-6 text-center">Become a Partner</h1>
        {submitted ? (
          <div className="text-center text-green-700 font-semibold text-lg">
            Thank you for your interest! We will contact you soon.
          </div>
        ) : (
          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-6"
          >
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248] text-gray-900 placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248] text-gray-900 placeholder-gray-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Organization *</label>
              <input
                type="text"
                name="organization"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248] text-gray-900 placeholder-gray-500"
                placeholder="Enter your organization name"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248] text-gray-900 placeholder-gray-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f2248] focus:border-[#6f2248] text-gray-900 placeholder-gray-500"
                placeholder="Tell us more about your partnership interest..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6f2248] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#6f2248]/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Submit Partnership Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default PartnerForm; 