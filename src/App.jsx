import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import AppointmentSuccess from './pages/AppointmentSuccess';
import PartnerForm from './pages/PartnerForm';
import Facilities from './pages/Facilities';
import VisitationForm from './pages/VisitationForm';
import Partners from './pages/Partners';
import ScrollToTop from './ScrollToTop';
import Blog from './pages/Blog';
import TermsAndConditions from './pages/TermsAndConditions';
import Support from './pages/Support';
import Emergency from './pages/Emergency';
import Maternity from './pages/Maternity';
import Fertility from './pages/Fertility';
import Laboratory from './pages/Laboratory';
import AppointmentPreview from './pages/AppointmentPreview';



import LoadingSpinner from './components/LoadingSpinner';
import { Confetti } from './components/magicui/confetti';

function App() {

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        {/* Confetti overlay that appears after loading */}
        {/* {showConfetti && (
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
        )} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/testimonies" element={<Navigate to="/testimonials" replace />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/maternity" element={<Maternity />} />
          <Route path="/fertility" element={<Fertility />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/appointment-success" element={<AppointmentSuccess />} />
          <Route path="/appointment-preview" element={<AppointmentPreview />} />
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
