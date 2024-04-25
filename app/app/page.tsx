import React from "react";
import Image from "next/image";
import apple from "../../assests/apple.png";
import google from "../../assests/google.png";
import hand from "../../assests/hand.png";
import qr from "../../assests/qr.png";
const page = () => {
  return (
    <div className="flex ml-60 gap-16 mt-12">
    <div className="flex flex-col gap-6 mt-48">
      <h1 className="text-6xl font-bold">Get the qid App</h1>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Image src={apple} alt="qid app" width={300} height={300} />
          <Image src={google} alt="qid app" width={300} height={300} />
        </div>
       <div className=" mb-2 -mt-1"><Image src={qr} alt="qid app" width={200} height={200} /> </div> 
      </div>
      <div>
      </div>
    </div>
      <div><Image src={hand} alt="qid app" width={550} height={300} /></div>
    </div>
  );
};

export default page;
