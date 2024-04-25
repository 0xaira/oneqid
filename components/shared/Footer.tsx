import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </footer>
      <div className="w-full h-px bg-gray-400 mx-auto"></div>
      <footer className="w-full bg-black text-gray-400 py-12 md:py-16 lg:py-24 ">
        <div className=" px-4 md:px-6 lg:px-2 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-48 ml-72 ">
          <div className="col-span-1 flex items-center">
            <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-stone-200 italic -ml-16">
              qid
            </div>
          </div>

          <div className="flex gap-16 -mr-12">
          <div className="col-span-1">
            <div className="space-y-4">
              <div className="text-3xl font-medium text-white">Download</div>
              <div className="flex flex-col gap-4 font-bold">
                <Link
                  className="hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Android
                </Link>
                <Link
                  className="hover:text-gray-300 transition-colors"
                  href="#"
                >
                  iOS
                </Link>
                <Link
                  className="hover:text-gray-300 transition-colors"
                  href="#"
                >
                  C-Form Pro Plugin
                </Link>
                <Link
                  className="hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-4">
              <div className="text-3xl font-medium text-white">Legal</div>
              <div className="flex flex-col gap-4 font-bold">
                <Link
                  className="hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Terms of Use
                </Link>
                <Link
                  className="hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Cancellation and Refund Policy
                </Link>
                <Link
                  className="hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Shipping and Return Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="w-[800px] h-px bg-gray-400 mx-auto mt-6"></div>
        <div className="  mt-10 flex items-center justify-between">
          <div className="text-sm text-white font-bold ml-72">
            Oneqid Technologies Private Limited
          </div>
          <div className="relative">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-72">
              <LinkedinIcon className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function LinkedinIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
