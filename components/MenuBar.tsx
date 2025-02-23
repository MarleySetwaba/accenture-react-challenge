import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuBar = () => {
  return (


<nav className="bg-primary-main fixed w-full z-20 top-0 start-0 ">
  <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="/assets/logo.svg" className="h-8" width={100} height={100} alt="Brand Logo"/>
  </Link>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-primary-main bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm px-4 py-2 text-center">Let's Talk</button>
      <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="#" className="block py-2 px-3 text-white rounded-sm md:bg-transparent hover:text-gray-200 md:p-0 " aria-current="page">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-white rounded-sm hover:text-gray-200 md:hover:bg-transparent md:hover:text-gray-200 md:p-0">Industries</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-white rounded-sm hover:text-gray-200 md:hover:bg-transparent md:hover:text-gray-200 md:p-0">Cases</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-white rounded-sm hover:text-gray-200 md:hover:bg-transparent md:hover:text-gray-200 md:p-0">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default MenuBar