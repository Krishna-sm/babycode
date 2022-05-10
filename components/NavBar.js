import React from 'react';
// import Link from 'next/link';
import Link from 'next/dist/client/link';
import Image from 'next/image';
const NavBar = () => {
  return (
    <div>    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
        <Image width={29} src="/svg.png" alt="Babycode"/>
        <span className="ml-3 text-xl">BabyCodes</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" >Home</a>
        <a className="mr-5 hover:text-gray-900">About</a>
        <a className="mr-5 hover:text-gray-900">Products</a>
        <a className="mr-5 hover:text-gray-900">Contact Us</a>
      </nav>
      <button class=" text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Login</button>
    </div>
  </header></div>
  )
}

export default NavBar