import { JSX, SVGProps } from "react"

export default function ContactUs() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto py-12 md:py-24">
        <div className="space-y-6">
          <h2 className="text-6xl md:text-7xl font-medium">Contact Us</h2>
          <p className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400">
            Discover Qid – Your Partner in Secure Identity Management
          </p>
          <div className="flex flex-col gap-6 font-bold text-white">
            <div className="flex items-center gap-2">
              <MailIcon className="h-6 w-6 text-white" />
              <div>
                <div>contact@oneqid.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6 text-white" />
              <div>
                <div>+91 960 640 640 4</div>
              </div>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <div className="text-4xl font-bold text-blue-500">Trusted by 25,000+ Users</div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white rounded-3xl p-14 border border-gray-600">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="font-medium" htmlFor="name">
                  Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="bg-black border-b border-gray-700 rounded-none px-0 py-2 w-full focus:outline-none "
                  id="name"
                  required
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-medium" htmlFor="email">
                  Email
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="bg-black border-b border-gray-700 rounded-none px-0 py-2 w-full focus:outline-none "
                  id="email"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium" htmlFor="phone">
                  Phone
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="bg-black border-b border-gray-700 rounded-none px-0 py-2 w-full focus:outline-none "
                  id="phone"
                  required
                  type="tel"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-medium" htmlFor="message">
                Message
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="bg-black border-b border-gray-700 rounded-none px-0 py-2 w-full focus:outline-none  resize-none"
                id="message"
                required
                rows={1}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-white text-black font-medium rounded-3xl px-6 py-2 hover:bg-gray-200 focus:outline-none "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
  function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }