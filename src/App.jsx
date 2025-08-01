import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
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
  );
}

export default App;
