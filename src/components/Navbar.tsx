"use client"
import Link from "next/link";
import React from "react";

function Navbar() {
  
  return (
    <nav className="h-16 bg-slate-100 flex items-center">
      <i className="fa-solid fa-bars mx-2 text-2xl cursor-pointer sm:text-4xl sm:mx-4"></i>
      <div className="max-w-7xl w-full h-full m-auto px-2 flex items-center justify-between">
        <div className="flex h-full items-center justify-between w-[20%] min-w-[90px] max-w-[150px]">
          <i className="fa-brands fa-blogger text-2xl"></i>
          <h1 className="text-xl sm:text-2xl"><Link href="/">E Blog</Link></h1>
        </div>
            <div className="flex items-center justify-between bg-white rounded-md overflow-hidden sm:w-1/2">
              <input type="text" className="w-[80%] hidden text-base mx-2 border-none outline-none rounded-md px-2 py-1 sm:text:lg sm:block"/>
              <i className="fa-solid fa-magnifying-glass text-xl m2-x cursor-pointer bg-slate-200 py-2 px-4 rounded-md sm:text-2xl"></i>
            </div>
            <div>
                <Link href="/signin" className="border-2 text-xl border-green-500 px-4 py-1  rounded-md hover:bg-green-500 hover:text-white sm:text-2xl">Sign In</Link>
            </div>
      </div>
    </nav>
  );
}

export default Navbar;
