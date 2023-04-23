import { useState } from "react";
import { useDarkMode, useWindowSize } from "@/hooks";
import { Toggle, Button } from "../../atoms";
import Nav from "./nav";

function Header() {
  const [isDarkMode, toggle] = useDarkMode();
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const { width } = useWindowSize();

  const showDesktopMenu = !!width && width >= 1024;
  const showMobileMenu = !!width && width < 1024 && openMobileMenu;

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
          {showDesktopMenu && <Nav />}
          <div className="flex items-center">
            <div
              className="grid h-16 w-16 place-content-center border-b-4 border-transparent"
            >
              <Toggle checked={isDarkMode} onChange={toggle} />
            </div>
          </div>
        </div>
      </div>
      {showMobileMenu && <Nav />}
    </header>

  )
}

export default Header;