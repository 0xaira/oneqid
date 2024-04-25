import React from "react";
import Image from "next/image";
import secure from "../assests/secure.png";
import { Button } from "./ui/button";
const Secure = () => {
  return (
    <div className="flex mx-auto mt-16">
      <div className="mt-48">
        <h1 className="text-7xl font-bold  text-white">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text ">
            Secure,
          </span>{" "}
          easy, <br />
          and always <br /> with you.
        </h1>
        <button className="flex items-center text-black rounded-full bg-white font-bold py-4 px-6 mt-4">
          Create free account
          <ChevronRightIcon className="ml-2" />
        </button>
      </div>
      <div>
        <Image src={secure} alt={""} width={500} height={100} />
      </div>
    </div>
  );
};

export default Secure;

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
