import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlinkBlur } from 'react-loading-indicators';
import logo from './assets/logo.jpg';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
//import logo from "./images/logo.jpg"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'linear-gradient(135deg, #6f3348 60%, #fff 100%)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <motion.img
              src={logo}
              alt="Mount Carmel Logo"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
              style={{ width: '120px', height: '120px', marginBottom: '24px' }}
            />
            <motion.div>
                      <BlinkBlur color="#32cd32" size="medium" text="" textColor="" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ color: '#fff', textShadow: '2px 2px 8px #6f3348', fontWeight: 700 }}
            >
              Welcome to Mount Carmel Hospital
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <Router>
          <div className="App">
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
      )}
    </>
  );
}

export default App;
