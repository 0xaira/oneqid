import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black py-4 px-6 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
      <Link className="text-white text-4xl italic font-bold" href="/">
          qid
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link className="text-gray-400 transition-colors hover:text-white" href="#">
            App
          </Link>
          <Link className="text-gray-400 transition-colors hover:text-white" href="/home/c-form-automation-for-hotels">
            C-Form Pro
          </Link>
          <Link className="text-gray-400 transition-colors hover:text-white" href="/support">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="text-white" size="icon" >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black py-4" side="top">
              <nav className="grid gap-4">
                <Link className="text-gray-400 transition-colors hover:text-white" href="#">
                  App
                </Link>
                <Link className="text-gray-400 transition-colors hover:text-white" href="#">
                C-Form Pro
                </Link>
                <Link className="text-gray-400 transition-colors hover:text-white" href="#">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}