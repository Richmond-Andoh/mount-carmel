import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./components/Services";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Testimonies from "./pages/Testimonies";
import Faq from "./pages/FAQ";
import Partners from "./pages/Partners";
import PartnerForm from "./pages/PartnerForm";
import ScrollToTop from "./ScrollToTop";
import VisitationForm from "./pages/VisitationForm";
import AppointmentSuccess from "./pages/AppointmentSuccess";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-32 px-4 sm:px-6 lg:px-8">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/partner-form" element={<PartnerForm />} />
            <Route path="/visitation-form" element={<VisitationForm />} />
            <Route path='/appointment-success' element={<AppointmentSuccess/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
