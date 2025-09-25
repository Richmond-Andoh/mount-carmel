/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const images = [
  "https://images.unsplash.com/photo-1569952547534-6c914b9da282?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "images/marquee1.jpg",
  "images/marquee2.jpg",
  "images/marquee3.jpg",
  "images/marquee4.jpg",
  "images/marquee5.jpg",
  "images/marquee6.jpg",
  "images/about-bg.jpg",
  "images/peditrics.jpg"
];

const firstRow = images.slice(0, 3);
const secondRow = images.slice(3, 6);
const thirdRow = images.slice(0, 3);
const fourthRow = images.slice(3, 6);
const fifthRow = images.slice(6, 9);
const sixthRow = images.slice(0, 3);
const seventhRow = images.slice(3, 6);
const eighthRow = images.slice(6, 9);
const ninethRow = images.slice(0, 3);
const tenthRow = images.slice(3, 6);
const eleventhRow = images.slice(6, 9);
const twelfthRow = images.slice(0, 3);


const Marquee3D = () => {
  // Set a fixed height for the marquee
  const marqueeHeight = '600px';
  
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-4" style={{ height: marqueeHeight }}>
      <div
        className="flex h-full w-full flex-row items-center justify-center"
        style={{
          transform: "rotateX(10deg) rotateY(-5deg)",
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          gap: '0.5rem',
          padding: '0 1rem'
        }}d
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((img, i) => (
            <div key={i} className="relative h-24 w-full min-w-[220px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
              <img 
                src={img} 
                alt={`Hospital facility ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/team-1.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] w-100" vertical>
          {secondRow.map((img, i) => (
            <div key={i} className="relative h-36 w-full min-w-[280px] mx-1 overflow-hidden rounded-lg">
              <img 
                src={img} 
                alt={`Medical team ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/about-1.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {thirdRow.map((img, i) => (
            <div key={i} className="relative h-36 w-full min-w-[320px] mx-1 overflow-hidden rounded-lg">
              <img 
                src={img} 
                alt={`Hospital service ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/carousel-1.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden md:block w-100" vertical>
          {fourthRow.map((img, i) => (
            <div key={i} className="relative h-24 w-full min-w-[220px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
              <img 
                src={img} 
                alt={`Medical facility ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/carousel-2.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] hidden lg:block w-100">
          {fifthRow.map((img, i) => (
            <div key={i} className="relative h-36 w-full min-w-[280px] mx-1 overflow-hidden rounded-lg">
              <img 
                src={img} 
                alt={`Healthcare service ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/service-1.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden lg:block w-100" vertical>
          {sixthRow.map((img, i) => (
            <div key={i} className="relative h-24 w-full min-w-[220px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
              <img 
                src={img} 
                alt={`Medical equipment ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/service-2.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] hidden xl:block w-100">
          {seventhRow.map((img, i) => (
            <div key={i} className="relative h-36 w-full min-w-[320px] mx-1 overflow-hidden rounded-lg">
              <img 
                src={img} 
                alt={`Medical team ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/team-2.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden xl:block w-100" vertical>
          {eighthRow.map((img, i) => (
            <div key={i} className="relative h-24 w-full min-w-[220px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
              <img 
                src={img} 
                alt={`Medical staff ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/team-3.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] w-100 hidden 2xl:block">
          {ninethRow.map((img, i) => (
            <div key={i} className="relative h-36 w-full min-w-[320px] mx-1 overflow-hidden rounded-lg">
              <img 
                src={img} 
                alt={`Healthcare professional ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/team-4.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden 2xl:block w-100 -mr-0" vertical>
          {tenthRow.map((img, i) => (
            <div key={i} className="relative h-24 w-full min-w-[220px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
              <img 
                src={img} 
                alt={`Medical staff ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/team-3.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] hidden 2xl:block w-100">
          {ninethRow.map((img, i) => (
            <div key={i} className="relative h-24 w-full min-w-[220px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
              <img 
                src={img} 
                alt={`Medical department ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/feature.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden 2xl:block w-100 -mr-0" vertical>
          {twelfthRow.map((img, i) => (
            <div key={i} className="relative h-24 w-full min-w-[220px] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
              <img 
                src={img} 
                alt={`Medical center ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105 shadow-md" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/team-4.jpg';
                }}
              />
            </div>
          ))}
        </Marquee>
        {/*
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden 2xl:block" vertical>
          {thirteenthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
         <Marquee reverse pauseOnHover className="[--duration:20s] hidden 2xl:block" vertical>
          {fourteenthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden 2xl:block" vertical>
          {fifteenthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee> */}
      </div>
      {/* Center marquee text with background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10">
        <div className="w-full">
          <div className="relative" style={{ height: '100px' }}>
            <div className="absolute inset-0 backdrop-blur-sm" style={{
              background: "linear-gradient(135deg, rgba(111,51,72,0.85), rgba(75,20,56,0.75))",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
            }}></div>
            <div className="relative h-full flex items-center justify-center">
              <Marquee className="[--duration:25s] w-full" pauseOnHover>
                {Array.from({length: 8}).map((_, i) => (
                  <span key={i} className="mx-4 md:mx-6 lg:mx-8 text-white font-bold tracking-wide uppercase text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    lineHeight: '1.4'
                  }}>
                    Gallery Section · Our Photo Gallery · Mount Carmel Hospital ·
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
    </div>
  );
}

export default Marquee3D
