import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <section className="flex flex-col  space-y-4 py-12 md:py-16 lg:py-20 ml-32 -mb-32">
        <h2 className="text-3xl font-bold">Automatic C-Form for Hotels</h2>
        <h1 className="text-7xl font-bold  text-transparent bg-clip-text">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text ">C-Form</span> Automation
        </h1>
        <h3 className="text-3xl font-medium">Say Goodbye to Manual C-Forms</h3>
        <div className="flex space-x-4">
            <button
                className="bg-white text-black font-bold rounded-3xl px-8 py-4 hover:bg-gray-200 focus:outline-none "
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-black border-2 text-white font-medium rounded-3xl px-6 py-2  focus:outline-none flex items-center border-slate-200"
                type="submit"
              >
                <ChromeIcon className="mr-2 h-6 w-6" />
                Get Chrome extension
              </button>
        </div>
    </section>
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