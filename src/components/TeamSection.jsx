const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialty: "Fertility Specialist",
      image: "/images/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Gynecology",
      specialty: "Women's Health",
      image: "/images/team-2.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatrician",
      specialty: "Child Care Expert",
      image: "/images/team-3.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      name: "Dr. David Thompson",
      role: "Emergency Medicine",
      specialty: "Critical Care",
      image: "/images/team-4.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
      }
    }
  ];

  return (
    <div className="container-fluid container-team py-5">
      <div className="container pb-5">
        <div className="row g-5 align-items-center mb-5">
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
            <img className="img-fluid w-100" src="/images/team-1.jpg" alt="Dr. Sarah Johnson" />
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-6 mb-3">Dr. Sarah Johnson</h1>
            <p className="mb-1">Chief Medical Officer</p>
            <p className="mb-5">Mount Carmel Hospital, Accra, Ghana</p>
            <h3 className="mb-3">Biography</h3>
            <p className="mb-4">
              Dr. Sarah Johnson is a renowned fertility specialist with over 15 years of experience in reproductive medicine. 
              She has successfully helped thousands of couples achieve their dream of parenthood through advanced fertility treatments.
            </p>
            <p className="mb-4">
              As the Chief Medical Officer at Mount Carmel Hospital, Dr. Johnson leads our medical team with expertise, 
              compassion, and a commitment to excellence in patient care.
            </p>
            <div className="d-flex">
              <a className="btn btn-lg-square bg-mount-carmel-primary hover:bg-mount-carmel-secondary text-white me-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-lg-square bg-mount-carmel-primary hover:bg-mount-carmel-secondary text-white me-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-lg-square bg-mount-carmel-primary hover:bg-mount-carmel-secondary text-white me-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-lg-square bg-mount-carmel-primary hover:bg-mount-carmel-secondary text-white me-2" href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a className="btn btn-square btn-light mx-1" href={member.social.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-light mx-1" href={member.social.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-light mx-1" href={member.social.linkedin}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-square btn-light mx-1" href={member.social.youtube}>
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-1">{member.name}</h5>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection; 