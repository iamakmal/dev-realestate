import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-transparent">
  <div className="navbar-start lg:hidden">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <a>Home</a>
        </li>
        <li>
          <a>Luxury Villa</a>
        </li>
        <li>
            <a>Properties</a>
        </li>
        <li>
            <a>Blog</a>
        </li>
        <li>
            <a>About Us</a>
        </li>
        <li>
            <a>Contacts</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="hidden lg:flex lg:justify-between gap-36">
  <div className="">
    <a className="btn btn-ghost text-2xl text-[#0C7F40] ml-2 -mb-3">R-STATE</a>
    <p className="text-xs text-center">Real Estate</p>
    </div>
    <div>
    <ul className="menu menu-horizontal px-1 group text-base">
    <li>
        <a className="hover:text-main hover:bg-transparent hover:underline hover:underline-offset-8">Home</a>
    </li>
    <li>
        <a className="hover:text-main hover:bg-transparent hover:underline hover:underline-offset-8">Luxury Villa</a>
    </li>
    <li>
        <a className="hover:text-main hover:bg-transparent hover:underline hover:underline-offset-8">Properties</a>
    </li>
    <li>
        <a className="hover:text-main hover:bg-transparent hover:underline hover:underline-offset-8">Blog</a>
    </li>
    <li>
        <a className="hover:text-main hover:bg-transparent hover:underline hover:underline-offset-8">About Us</a>
    </li>
    <li>
        <a className="hover:text-main hover:bg-transparent hover:underline hover:underline-offset-8">Contacts</a>
    </li>
    </ul>
    </div>
  </div>
</div>
  )
}
