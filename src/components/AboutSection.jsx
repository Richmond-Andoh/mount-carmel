import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    awards: 0,
    cases: 0,
    clients: 0
  });

  useEffect(() => {
    const targetCounts = {
      experience: 15,
      awards: 25,
      cases: 5000,
      clients: 10000
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        experience: Math.floor(targetCounts.experience * progress),
        awards: Math.floor(targetCounts.awards * progress),
        cases: Math.floor(targetCounts.cases * progress),
        clients: Math.floor(targetCounts.clients * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targetCounts);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0">
              <div className="col-6">
                <img className="img-fluid" src="/images/about-1.jpg" alt="Hospital Building" />
              </div>
              <div className="col-6">
                <img className="img-fluid" src="/images/about-2.jpg" alt="Medical Equipment" />
              </div>
              <div className="col-6">
                <img className="img-fluid" src="/images/about-3.jpg" alt="Medical Staff" />
              </div>
              <div className="col-6">
                <div className="bg-primary w-100 h-100 mt-n5 ms-n5 d-flex flex-column align-items-center justify-content-center">
                  <div className="icon-box-light">
                    <i className="bi bi-award text-dark"></i>
                  </div>
                  <h1 className="display-1 text-white mb-0">{counts.experience}+</h1>
                  <small className="fs-5 text-white">Years Experience</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-6 mb-4">Trusted Healthcare Experts and Latest Medical Technologies</h1>
            <p className="mb-4">
              Mount Carmel Hospital and Fertility Center has been at the forefront of medical excellence for over 15 years. 
              Our commitment to providing exceptional healthcare services is reflected in our state-of-the-art facilities, 
              expert medical staff, and patient-centered approach to care.
            </p>
            <div className="row g-4 g-sm-5 justify-content-center">
              <div className="col-sm-6">
                <div className="about-fact btn-square flex-column rounded-circle bg-primary ms-sm-auto">
                  <p className="text-white mb-0">Awards Won</p>
                  <h1 className="text-white mb-0">{counts.awards}+</h1>
                </div>
              </div>
              <div className="col-sm-6 text-start">
                <div className="about-fact btn-square flex-column rounded-circle bg-secondary me-sm-auto">
                  <p className="text-white mb-0">Successful Cases</p>
                  <h1 className="text-white mb-0">{counts.cases.toLocaleString()}+</h1>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-fact mt-n130 btn-square flex-column rounded-circle bg-dark mx-sm-auto">
                  <p className="text-white mb-0">Happy Patients</p>
                  <h1 className="text-white mb-0">{counts.clients.toLocaleString()}+</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 