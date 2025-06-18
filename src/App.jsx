// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Facilities from './components/Facilities'
import Contact from './components/Contact'
import Appointment from './components/Appointment'
import Testimonies from './components/Testimonies'
import Faq from './components/FAQ'
import Partners from './components/Partners'
import PartnerForm from './components/PartnerForm'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Padding wrapper to avoid content hiding behind Navbar */}
        <main className="flex-grow sm:pt-20 sm:px-6">
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
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
