function Nav() {
  return (
    <nav aria-label="Main Nav" className="flex flex-col space-y-1 h-full uppercase lg:space-y-0 lg:flex-row lg:gap-4 lg:text-xs lg:font-bold lg:tracking-wide">
      <a href="/about" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-50 focus:relative dark:hover:bg-gray-800 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        About
      </a>
      <a href="/news" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-50 focus:relative dark:hover:bg-gray-800 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        News
      </a>
      <a href="/products" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-50 focus:relative dark:hover:bg-gray-800 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        Products
      </a>
      <a href="/contact" className="block px-4 py-2 h-16 border-b-4 border-transparent lg:leading-[4rem] hover:bg-gray-50 focus:relative dark:hover:bg-gray-800 lg:hover:border-current text-sm font-medium lg:text-base lg:font-semibold lg:flex lg:items-center lg:justify-center">
        Contact
      </a>

    </nav>
  )
}

export default Nav;