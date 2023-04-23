function Nav() {
  return (
    <nav aria-label="Main Nav" className="flex flex-col space-y-1 h-full z-40 lg:space-y-0 lg:flex-row lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide text-black dark:text-white">
      <a href="/about" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-100 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        About
      </a>
      <a href="/news" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-100 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        News
      </a>
      <a href="/products" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-100 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        Products
      </a>
      <a href="/contact" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-100 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        Contact
      </a>

    </nav>
  )
}

export default Nav;