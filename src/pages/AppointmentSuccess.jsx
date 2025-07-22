import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AppointmentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('appointmentSuccess') !== 'true') {
      navigate('/appointment', { replace: true });
    } else {
      sessionStorage.removeItem('appointmentSuccess'); // Remove flag after access
    }
  }, [navigate]);

  return (
    <div className="my-8 flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-xl">
        <h1 className="text-3xl font-bold text-[#6f2248] mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your appointment request has been submitted successfully. We’ll be in touch soon.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#6f2248] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6f2248]/90 transition-colors"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AppointmentSuccess;
