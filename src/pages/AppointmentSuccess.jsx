import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppointmentSuccess = () => {
  const navigate = useNavigate();
  const [isValidAccess, setIsValidAccess] = useState(false);

  useEffect(() => {
    // Check if user has valid access to this page
    if (sessionStorage.getItem('appointmentSuccess') !== 'true') {
      navigate('/appointment', { replace: true });
    } else {
      setIsValidAccess(true);
      // Remove the flag after a longer delay to prevent quick disappearance
      const timer = setTimeout(() => {
        sessionStorage.removeItem('appointmentSuccess');
      }, 60000); // 60 seconds delay
      
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  // Don't render anything if access is not valid
  if (!isValidAccess) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-12" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="text-center bg-white p-5 rounded-4 shadow-lg">
                <div className="mb-4">
                  <i className="fa fa-check-circle fa-5x text-success"></i>
                </div>
                <h1 className="display-4 fw-bold mb-4" style={{ color: '#6f2248' }}>
                  Appointment Confirmed! 🎉
                </h1>
                <p className="lead text-muted mb-4">
                  <strong>Congratulations!</strong> Your appointment has been successfully booked with Mount Carmel Hospital.
                </p>
                <div className="alert alert-success border-0 mb-4" style={{ background: 'linear-gradient(135deg, #d4edda, #c3e6cb)' }}>
                  <div className="row text-start">
                    <div className="col-md-6">
                      <h6 className="fw-bold mb-2"><i className="fa fa-calendar-check me-2"></i>What's Next?</h6>
                      <ul className="list-unstyled small mb-0">
                        <li>• You'll receive a confirmation call within 24 hours</li>
                        <li>• Please arrive 15 minutes before your scheduled time</li>
                        <li>• Bring your  insurance card (if applicable)</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold mb-2"><i className="fa fa-phone-alt me-2"></i>Need Help?</h6>
                      <p className="small mb-0">
                        Call us at <strong>+233 592 411 108</strong> for any questions or to reschedule.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  We look forward to providing you with exceptional healthcare services. Thank you for choosing Mount Carmel Hospital!
                </p>
                <div className="alert alert-info border-0 mb-4" style={{ background: 'linear-gradient(135deg, #d1ecf1, #bee5eb)' }}>
                  <div className="d-flex align-items-center">
                    <i className="fa fa-info-circle fa-2x me-3 text-info"></i>
                    <div>
                      <h6 className="fw-bold mb-1 text-info">Your appointment is confirmed!</h6>
                      <p className="small mb-0">This page will remain accessible for your reference. You can bookmark it or take a screenshot for your records.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <Link
                    to="/"
                    className="btn btn-primary btn-lg px-4 py-3 rounded-pill"
                    style={{ background: 'linear-gradient(135deg, #6f2248, #a85c7a)', border: 'none' }}
                  >
                    <i className="fa fa-home me-2"></i>
                    Go Back to Home
                  </Link>
                  <Link
                    to="/appointment"
                    className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill"
                    style={{ borderColor: '#6f2248', color: '#6f2248' }}
                  >
                    <i className="fa fa-calendar-plus me-2"></i>
                    Book Another Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AppointmentSuccess;
