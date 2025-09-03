/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const images = [
  "https://images.unsplash.com/photo-1569952547534-6c914b9da282?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/1682074534/photo/doctor-woman-portrait-and-heart-rate-pregnancy-in-a-hospital-with-mama-and-baby-care-wellness.jpg?s=1024x1024&w=is&k=20&c=g0L3oL4Gn7plHCTs3PHtc2vfd5cNKTdLWyD8gKzCu3Q=",
  "https://media.istockphoto.com/id/1682074534/photo/doctor-woman-portrait-and-heart-rate-pregnancy-in-a-hospital-with-mama-and-baby-care-wellness.jpg?s=1024x1024&w=is&k=20&c=g0L3oL4Gn7plHCTs3PHtc2vfd5cNKTdLWyD8gKzCu3Q=",
  "https://images.unsplash.com/photo-1569952547534-6c914b9da282?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1569952547534-6c914b9da282?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1569952547534-6c914b9da282?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1569952547534-6c914b9da282?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1569952547534-6c914b9da282?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1745438032864-9135ea8b676b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmxhY2slMjBGZXJ0aWxpdHklMjBkb2N0b3JzfGVufDB8fDB8fHww"
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
  return (
    <div className="relative w-screen overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{height: "550px",maxHeight: "550px"}}>
      {/* Background overlay/vignette */}
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(120% 80% at 50% 50%, rgba(111,51,72,0.18), rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.35) 100%)", zIndex:1}}></div>

      <div
        className="marquee-scene absolute flex h-full w-full flex-row items-center justify-center perspective-1000"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          zIndex: 2
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] hidden md:block">
          {thirdRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden md:block" vertical>
          {fourthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] hidden lg:block">
          {fifthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden lg:block" vertical>
          {sixthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] hidden xl:block">
          {seventhRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden xl:block" vertical>
          {eighthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] hidden 2xl:block">
          {ninethRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden 2xl:block" vertical>
          {tenthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s] hidden 2xl:block">
          {eleventhRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden 2xl:block" vertical>
          {twelfthRow.map((img, i) => (
            <img key={i} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        {/* Extra columns to ensure right-end coverage */}
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {thirdRow.map((img, i) => (
            <img key={`extra-a-${i}`} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden sm:block" vertical>
          {fourthRow.map((img, i) => (
            <img key={`extra-b-${i}`} src={img} alt="" className="h-36 w-auto object-cover rounded-lg" />
          ))}
        </Marquee>
      </div>
      {/* Center banner text marquee indicating gallery */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[3]">
        <div className="mx-auto w-full">
          <div className="relative">
            <div className="absolute inset-0 backdrop-blur-sm" style={{background:"linear-gradient(90deg, rgba(255,255,255,0.20), rgba(255,255,255,0.08), rgba(255,255,255,0.20))"}}></div>
            <Marquee className="[--duration:30s]" pauseOnHover>
              {Array.from({length: 12}).map((_, i) => (
                <span key={i} className="mx-6 text-white/95 font-semibold tracking-wide uppercase" style={{textShadow:'0 2px 6px rgba(0,0,0,.35)'}}>
                  Gallery Section · Our Photo Gallery · Mount Carmel ·
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* Edge gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.35)] via-transparent to-[rgba(0,0,0,0.35)]" style={{zIndex:3}}></div>

      {/* Responsive tuning for transforms and image sizes */}
      <style>{`
        @media (max-width: 1024px) {
          .marquee-scene { transform: translateX(-80px) translateY(0) translateZ(-80px) rotateX(18deg) rotateY(-8deg) rotateZ(18deg); }
        }
        @media (max-width: 768px) {
          .marquee-scene { transform: translateX(-60px) translateY(0) translateZ(-60px) rotateX(16deg) rotateY(-6deg) rotateZ(16deg); }
        }
        @media (max-width: 480px) {
          .marquee-scene { transform: translateX(-40px) translateY(0) translateZ(-40px) rotateX(14deg) rotateY(-5deg) rotateZ(14deg); }
        }
      `}</style>
    </div>
  );
}

export default Marquee3D
