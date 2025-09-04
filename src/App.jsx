import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Testimonies from './pages/Testimonies';
import FAQ from './pages/FAQ';
import AppointmentSuccess from './pages/AppointmentSuccess';
import PartnerForm from './pages/PartnerForm';
import Facilities from './pages/Facilities';
import VisitationForm from './pages/VisitationForm';
import Partners from './pages/Partners';
import ScrollToTop from './ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import { Confetti } from './components/magicui/confetti';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    // Simulate loading time and hide spinner after 8.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show confetti immediately after loading completes
      setShowConfetti(true);
      
      // Hide confetti after 5 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }, 8500);

    return () => clearTimeout(timer);
  }, []);

  // Trigger confetti effect when showConfetti becomes true
  useEffect(() => {
    if (showConfetti && confettiRef.current) {
      confettiRef.current.fire({
        particleCount: 150,
        spread: 120,
        startVelocity: 45,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#667eea', '#764ba2', '#6f3348', '#4B1438', '#ffffff', '#ffd700']
      });
    }
  }, [showConfetti]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        {/* Confetti overlay that appears after loading */}
        {showConfetti && (
          <Confetti 
            ref={confettiRef}
            manualstart={true}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 9999
            }}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/appointment-success" element={<AppointmentSuccess />} />
          <Route path="/partner-form" element={<PartnerForm />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/visitation-form" element={<VisitationForm />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
