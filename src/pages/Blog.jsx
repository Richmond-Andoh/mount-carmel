import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
     useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div>
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
          <h1 className="display-3 text-white animated slideInDown fw-bold tracking-wider">Blog</h1>
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

      
      <Footer />
    </div>
  );
};

export default Blog;
