import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import api from "../assests/api.png"

export default function Section3() {
  return (
    <div className="max-w-screen-xl mx-auto flex ">
      <section className="flex flex-col justify-center flex-1 space-y-4 py-12 md:py-16 lg:py-20 ml-24">
        <h2 className="text-4xl font-medium text-white leading-tight">Elevate C-Form Processing<br className="md:hidden" /> with qid's State-of-the-Art Chrome Extension</h2>
        <h3 className="text-2xl font-medium leading-tight">Simplify C-Form management<br className="md:hidden" /> like never before with qid’s revolutionary Chrome extension.</h3>
        <div className="flex space-x-4">
          <button
            className="bg-white border-2 text-black font-medium rounded-3xl px-6 py-4 focus:outline-none flex items-center border-slate-200"
            type="submit"
          >
            <ChromeIcon className="mr-2 h-6 w-6" />
            Get Chrome extension
          </button>
        </div>
      </section>
      <div className="flex-1 ml-12 transform rotate-13 rounded-lg ">
        <Image src={api} alt={""} width={400} height={500} />
      </div>
    </div>
  )
}


function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}
function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="21.17" x2="12" y1="8" y2="8" />
        <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
        <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
      </svg>
    )
}