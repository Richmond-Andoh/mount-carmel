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
    <div className="container-fluid container-team py-5" style={{position:'relative', overflow:'hidden'}}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:'linear-gradient(180deg, rgba(111,51,72,0.16), rgba(111,51,72,0.10))', zIndex:1}}></div>
      <div className="container pb-5 position-relative" style={{zIndex:2}}>
        <div className="row g-5 align-items-center mb-5">
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg team-feature-img">
              <img className="img-fluid w-100" src="/images/team-1.jpg" alt="Dr. Sarah Johnson" />
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:'linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.35))'}}></div>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.4s">
            <div className="p-4 p-lg-5 rounded-4 bg-white shadow-lg team-feature-card">
              <h1 className="h2 mb-2" style={{color:'#6f3348'}}>Dr. Sarah Johnson</h1>
              <p className="mb-1 text-muted">Chief Medical Officer</p>
              <p className="mb-4 text-muted">Mount Carmel Hospital, Accra, Ghana</p>
              <h3 className="h5 mb-2" style={{color:'#4B1438'}}>Biography</h3>
              <p className="mb-3">
                Dr. Sarah Johnson is a renowned fertility specialist with over 15 years of experience in reproductive medicine.
                She has successfully helped thousands of couples achieve their dream of parenthood through advanced fertility treatments.
              </p>
              <p className="mb-4">
                As the Chief Medical Officer at Mount Carmel Hospital, Dr. Johnson leads our medical team with expertise,
                compassion, and a commitment to excellence in patient care.
              </p>
              <div className="d-flex gap-2">
                <a className="btn btn-lg-square text-white" style={{background:'#6f3348', borderRadius:'10px', transition:'transform .2s, box-shadow .2s'}} href="#" onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 24px rgba(111,51,72,.25)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'}}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-lg-square text-white" style={{background:'#6f3348', borderRadius:'10px', transition:'transform .2s, box-shadow .2s'}} href="#" onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 24px rgba(111,51,72,.25)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'}}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-lg-square text-white" style={{background:'#6f3348', borderRadius:'10px', transition:'transform .2s, box-shadow .2s'}} href="#" onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 24px rgba(111,51,72,.25)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'}}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-lg-square text-white" style={{background:'#6f3348', borderRadius:'10px', transition:'transform .2s, box-shadow .2s'}} href="#" onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 24px rgba(111,51,72,.25)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'}}>
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.15}s`}>
              <div className="team-item rounded-4 shadow-lg" style={{transition:'transform .25s ease, box-shadow .25s ease'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 42px rgba(0,0,0,.12)'}} onMouseLeave={(e)=>{e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow=''}}>
                <div className="position-relative overflow-hidden rounded-4">
                  <img className="img-fluid w-100" src={member.image} alt={member.name} style={{transform:'scale(1)', transition:'transform .4s ease'}} />
                  <div className="position-absolute top-0 start-0 w-100 h-100 team-overlay" style={{background:'linear-gradient(180deg, rgba(111,51,72,0.15), rgba(111,51,72,0.45))', opacity:0, transition:'opacity .35s ease'}}></div>
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
      <style>{`
        .team-item:hover img { transform: scale(1.06); }
        .team-item:hover .team-overlay { opacity: 1; }
        .team-feature-card { animation: fadeInUp .8s ease-out both; }
        .team-feature-img { animation: fadeInUp .8s ease-out .1s both; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px);} to { opacity:1; transform: translateY(0);} }
        @media (max-width: 991.98px) { .team-feature-card { margin-top: 8px; } }
      `}</style>
    </div>
  );
};

export default TeamSection; 