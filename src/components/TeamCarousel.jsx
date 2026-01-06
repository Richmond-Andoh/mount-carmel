import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const teamMembers = [
  {
    name: "Dr. Philip Aning-Kuffour",
    role: "Chief Medical Officer",
    image: "/images/doc3.jpg"
  },
  {
    name: "Dr. Philip Aning-Kuffour",
    role: "Head of Gynecology",
    image: "/images/team-3.jpg"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatrician",
    image: "/images/team-2.jpg"
  },
  {
    name: "Dr. David Thompson",
    role: "Emergency Medicine",
    image: "/images/team-4.jpg"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: "ease-in-out",
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
};

const TeamCarousel = () => (
  <Slider {...settings}>
    {teamMembers.map((member, idx) => (
      <div key={idx} style={{padding: '24px 12px'}}>
        <div className="card border-0 shadow-lg rounded-4 text-center p-4" style={{background: '#fff', minWidth: '280px'}}>
          <img 
            src={member.image} 
            alt={member.name} 
            className="rounded-circle mx-auto mb-3" 
            style={{
              width: '120px', 
              height: '120px', 
              minWidth: '120px',
              minHeight: '120px',
              objectFit: 'cover'
            }} 
          />
          <h5 className="mb-1" style={{color: '#6f2248'}}>{member.name}</h5>
          <span className="text-muted mb-2">{member.role}</span>
        </div>
      </div>
    ))}
  </Slider>
);

export default TeamCarousel;
