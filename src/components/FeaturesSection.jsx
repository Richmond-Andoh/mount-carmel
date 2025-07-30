const FeaturesSection = () => {
  const features = [
    {
      icon: "bi bi-award",
      title: "Award Winning",
      description: "Recognized for excellence in healthcare and fertility treatments with multiple industry awards."
    },
    {
      icon: "bi bi-people",
      title: "Expert Doctors",
      description: "Our team of experienced medical professionals provides the highest quality care and treatment."
    },
    {
      icon: "bi bi-cash-coin",
      title: "Fair Prices",
      description: "Transparent and competitive pricing for all our medical services and treatments."
    },
    {
      icon: "bi bi-headphones",
      title: "24/7 Support",
      description: "Round-the-clock medical support and emergency care services for our patients."
    }
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-0 feature-row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="feature-item border h-100 p-5">
                <div className="icon-box-primary mb-4">
                  <i className={`${feature.icon} text-dark`}></i>
                </div>
                <h5 className="mb-3">{feature.title}</h5>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 