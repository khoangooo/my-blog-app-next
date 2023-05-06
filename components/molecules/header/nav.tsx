import Link from "next/link";

function Nav() {
  return (
    <nav aria-label="Main Nav" className="flex flex-col space-y-1 h-full uppercase lg:space-y-0 lg:flex-row lg:gap-4 lg:text-xs lg:font-bold lg:tracking-wide">
      <Link href="/about" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-50 focus:relative dark:hover:bg-gray-800 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        About
      </Link>
      <Link href="/news" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-50 focus:relative dark:hover:bg-gray-800 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        News
      </Link>
      <Link href="/products" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-50 focus:relative dark:hover:bg-gray-800 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        Products
      </Link>
      <Link href="/contact" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-50 focus:relative dark:hover:bg-gray-800 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        Contact
      </Link>

    </nav>
  )
}

export default Nav;