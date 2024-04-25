import React from "react";
import Image from "next/image";
import cform1 from "../assests/cform1.png";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Button } from "./ui/button";

export function CformGrid() {
  return (
    <div className="h-[180.5rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex  ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <div className="">
          <Section1 />
        </div>

        <div className="ml-12">
          <Image src={cform1} alt={""} width={1500} height={1000} />
        </div>

        <div className="ml-60 mt-12">
          <h1 className="text-7xl font-bold  text-transparent bg-clip-text">
            Trust us, it&apos;s truly a matter of <br /> just
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text ml-3">
              one click.
            </span>
          </h1>
        </div>

        <div>
          <Section2 />
        </div>

        <div>
          <Section3 />
        </div>

        <div className="mt-12 ml-44">
          <div className="rounded-2xl border border-gray-200 bg-black w-full max-w-6xl p-12">
            <div className="grid gap-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold tracking-tighter text-white">
                What is C-Form?
                </h2>
                <p className="text-gray-400 text-2xl">
                In India, a <span className="font-bold underline">C-Form</span> is a mandatory document required under the Foreigners’ Registration Act, 1946.</p> 

                <p className="text-gray-400 text-2xl">It serves as a record of the stay of foreign nationals within the country.</p>

                <p className="text-gray-400 text-2xl">Hotels, guesthouses, and other accommodation providers are legally obligated to submit C-Forms to local authorities for every foreign guest’s stay.</p>
                
              </div>
              <div>
                <Button
                  className="rounded-full bg-black text-white border-white hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 px-6 py-3 text-lg"
                  variant="outline"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
