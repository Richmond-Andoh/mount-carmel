import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const sections = [
    {
      title: "Acceptance of Terms",
      text:
        "By accessing or using this website you accept and agree to be bound by these Terms of Use. If you do not agree, do not use the site."
    },
    {
      title: "Purpose & Scope",
      text:
        "The site provides general health information, practice details and online appointment booking. Content is informational and does not replace professional medical advice."
    },
    {
      title: "Consent to Use the Website",
      text:
        "By using the site and submitting online forms you consent to our collection and processing of information you provide (see Privacy Policy). You also consent to contact by phone, email or SMS for appointment confirmations and related communications."
    },
    {
      title: "Appointment Booking — What We Need",
      text:
        "Provide full name, valid email, reachable phone number, requested service/department, brief reason for visit, and preferred date(s)/time(s). Include referral or medical record number when available. Submission is a request — we will confirm availability."
    },
    {
      title: "Medical Info & No Doctor–Patient Relationship",
      text:
        "Information on the site is general. Viewing content or using online tools does not create a doctor–patient relationship. For medical advice consult a clinician directly."
    },
    {
      title: "Privacy & Data Use",
      text:
        <>We collect and use personal data to process appointments and communicate with you. See our <Link to="/privacy" className="text-mount-carmel-primary underline">Privacy Policy</Link> for full details.</>
    },
    {
      title: "Telehealth / Remote Consults",
      text:
        "If your appointment is remote, you may be asked to consent to telehealth terms (technology, privacy, recording policy). Telehealth has limitations compared with in-person visits."
    },
    {
      title: "Cookies & Analytics",
      text:
        "The site uses cookies and analytics to improve performance and experience. You can control cookies in your browser; some features may depend on them."
    },
    {
      title: "Disclaimers & Liability",
      text:
        "To the maximum extent permitted by law, the site is provided 'as is'. We disclaim all warranties and are not liable for indirect or consequential losses arising from site use."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

{/* Hero Section with Background Image and Overlay */}
      <div 
        className="container-fluid page-header py-5 wow fadeIn relative shadow-lg bg-cover bg-center bg-no-repeat bg-fixed" 
        data-wow-delay="0.1s" 
        style={{ 
          backgroundImage: `url('/images/about-bg.jpg')`,
          height: '400px'
        }}
      >
        <div className="absolute inset-0 bg-mount-carmel-primary/85"></div>
        <div className="container py-5 relative">
          <h1 className="display-3 text-white animated slideInDown fw-bold tracking-wider">Terms and Conditions</h1>
        </div>
      </div>

{/* Brand Marquee Section */}
      <section className="container-fluid py-5" style={{
        background: 'linear-gradient(90deg, #4B1438 0%, #6f3348 100%)',
        color: '#fff',
        margin: 0,
        padding: 0
      }}>
        <div className="container overflow-hidden" style={{'--gap':'48px', '--duration':'22s'}}>
          <div className="d-flex align-items-center gap-4 animate-marquee text-xl" style={{whiteSpace:'nowrap'}}>
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted by Families</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient First</span>
            <span className="fw-semibold" style={{opacity:0.95}}>World-Class Facilities</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Exceptional Outcomes</span>
            {/* duplicate for seamless loop */}
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted by Families</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient First</span>
            <span className="fw-semibold" style={{opacity:0.95}}>World-Class Facilities</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Exceptional Outcomes</span>
          </div>
        </div>
      </section>

      <main
        className="relative w-full flex-1 py-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(111,51,72,0.03) 0%, rgba(111,51,72,0.01) 100%)"
        }}
      >
        {/* decorative top accent */}
        <div className="absolute inset-x-0 top-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(111,51,72,0.06), rgba(111,51,72,0.02))' }} />

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <span
              className="inline-block px-4 py-2 rounded-full mb-4"
              style={{
                backgroundColor: "rgba(111,51,72,0.08)",
                color: "#6f3348",
                fontWeight: 600
              }}
            >
              Terms & Consent
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b2a2f" }}>
              Terms of Use — Mount Carmel Hospital
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This page explains the terms, disclaimers and the consent you provide when using
              the Mount Carmel Hospital website. It reassures patients about how we handle
              information and what using the site means for care and appointments.
            </p>
          </div>

          {/* grid styled like "Our Services" */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((sec, idx) => (
              <article
                key={idx}
                className="bg-white/95 rounded-xl p-6 shadow-sm border"
                style={{
                  borderColor: "rgba(111,51,72,0.06)",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease"
                }}
              >
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#6f3348" }}>
                  {sec.title}
                </h3>
                <div className="text-gray-700 leading-relaxed">{sec.text}</div>
              </article>
            ))}
          </div>

          {/* contact + effective date */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-white/95 rounded-lg p-6 shadow-sm border" style={{ borderColor: "rgba(111,51,72,0.06)" }}>
              <h4 className="text-xl font-semibold mb-3" style={{ color: "#3b2a2f" }}>Contact</h4>
              <p className="text-gray-700 mb-2">
                Questions about these terms or your consent should be directed to:
              </p>
              <p className="text-gray-700">
                Mount Carmel Hospital — Email:{" "}
                <a href="mailto:mountcarmelhospital@outlook.com" className="underline text-mount-carmel-primary">mountcarmelhospital@outlook.com</a>{" "}
                | Tel: +233 592 411 108
              </p>
              <p className="text-sm text-gray-500 mt-4">Effective date: {new Date().toISOString().slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
