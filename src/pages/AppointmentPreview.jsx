import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppointmentPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || null;

  useEffect(() => {
    if (!data) {
      navigate('/appointment', { replace: true });
    }
  }, [data, navigate]);

  if (!data) return null;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const submitToEndpoint = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const endpoint = '/api/send-email';
    const payload = {
      formType: 'Appointment Booking (Preview Confirmation)',
      patientType: data.patientType,
      name: data.name,
      phone: data.phone,
      date: data.date,
      time: data.time,
      department: data.department,
      ...(data.patientType === 'New Patient' && {
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        residence: data.residence,
      }),
      message: data.message || 'None',
    };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        sessionStorage.setItem('appointmentSuccess', 'true');
        navigate('/appointment-success', { state: data });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Preview submit error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen py-12" style={{ background: '#f8f9fa' }}>
        <div className="container max-w-3xl mx-auto bg-white rounded-4 shadow-lg p-6">
          <h2 className="mb-4" style={{ color: '#6f3348' }}>Review your details</h2>

          <div className="mb-4">
            <strong>Patient Type:</strong> <span>{data.patientType}</span>
          </div>
          <div className="mb-4">
            <strong>Full Name:</strong> <span>{data.name || '—'}</span>
          </div>
          <div className="mb-4">
            <strong>Phone:</strong> <span>{data.phone || '—'}</span>
          </div>
          <div className="mb-4">
            <strong>Department:</strong> <span>{data.department || '—'}</span>
          </div>
          <div className="mb-4">
            <strong>Preferred Date / Time:</strong> <span>{data.date || '—'} {data.time ? ` @ ${data.time}` : ''}</span>
          </div>

          {data.patientType === 'New Patient' && (
            <>
              <div className="mb-4">
                <strong>Date of Birth:</strong> <span>{data.dateOfBirth || '—'}</span>
              </div>
              <div className="mb-4">
                <strong>Gender:</strong> <span>{data.gender || '—'}</span>
              </div>
              <div className="mb-4">
                <strong>Residence:</strong> <span>{data.residence || '—'}</span>
              </div>
            </>
          )}

          <div className="mb-4">
            <strong>Additional Message:</strong>
            <div className="mt-2 p-3 rounded bg-gray-50" style={{ whiteSpace: 'pre-wrap' }}>
              {data.message || '—'}
            </div>
          </div>

          {submitStatus === 'error' && (
            <div className="alert alert-danger mb-3">There was an error sending your request. Please try again.</div>
          )}

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: '#fff', border: '1px solid rgba(111,34,72,0.12)', color: '#6f3348' }}
              onClick={() => navigate('/appointment', { state: data })}
              disabled={isSubmitting}
            >
              Edit details
            </button>

            <button
              type="button"
              className="btn"
              style={{ backgroundColor: '#6f3348', color: '#fff' }}
              onClick={submitToEndpoint}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Confirm & Send'}
            </button>

            <Link to="/" className="btn" style={{ marginLeft: 'auto', background: '#eee', color: '#333' }}>
              Cancel
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AppointmentPreview;