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
      <div
        className="absolute flex h-full w-full flex-row items-center justify-center perspective-1000"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
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
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
    </div>
  );
}

export default Marquee3D
