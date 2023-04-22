import { useDarkMode } from "@/hooks";
import Toggle from "../atoms/toggle";
import { useState } from "react";
import Checkbox from "../atoms/checkbox";
import Button from "../atoms/button";

function Header() {
  const [isDarkMode, toggle] = useDarkMode();
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  return (
    <header aria-label="Site Header" className="border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="p-2 lg:hidden">
            <Button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
          <a href="#" className="flex">
            <span className="sr-only">Logo</span>
            <span className="inline-block h-10 w-32 rounded-lg bg-gray-200" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end gap-8">
          <nav aria-label="Site Nav" className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
            <a href="/about" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
              About
            </a>
            <a href="/news" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
              News
            </a>
            <a href="/products" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
              Products
            </a>
            <a href="/contact" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
              Contact
            </a>

          </nav>
          <div className="flex items-center">
            <div
              className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
            >
              <Toggle checked={isDarkMode} onChange={toggle} />
            </div>
          </div>
        </div>
      </div>
      {openMobileMenu && (
        <nav aria-label="Main Nav" className={`flex flex-col space-y-1 h-full z-40  ease-in-out duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
          <a
            href=""
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            General
          </a>

          <a
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Teams
          </a>

          <a
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Billing
          </a>

          <a
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Invoices
          </a>

          <a
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Account
          </a>
        </nav>
      )}
    </header>

  )
}

export default Header;