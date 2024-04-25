import React from "react";
import Testimonial from "./Testimonials";
import Secure from "./Secure";
import { Feather } from "lucide-react";
import Features from "./Features";
import Image from "next/image";
import pic from "../assests/pic.jpg";
export function Main() {
  return (
    <div className="h-[150rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col ">
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
        <Secure />          
        <Features />
        <div className="flex mx-auto">
        <Image src={pic} alt={""} width={1400} height={100} /></div>
        <Testimonial /> 
    </div>
  );
}
