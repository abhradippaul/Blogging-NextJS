"use client";
import Link from "next/link";
import LoggedIn from "./LoggedIn";
import { UseUserContext } from "@/Context/UserContext";
import { useEffect, useState } from "react";

function Navbar() {
  // const [navControl, setNavControl] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(true);
  const {status, user} = UseUserContext()
  // console.log(user)
  const hamburgerClick = () => {
    const bgBlackElement = document.querySelector<Element>("#bg-black");
    const sideNavbar = document.querySelector<Element>("#side-navbar");
    const body = document.querySelector<Element>("body");
    if (bgBlackElement && sideNavbar && body) {
      body.classList.toggle("overflow-y-hidden");
      bgBlackElement.classList.toggle("hidden");
      sideNavbar.classList.toggle("sideNavbar");
    }
  };
  useEffect(() => {
    setLoading(false)
  },[])

  return !loading && (
    <nav className="h-16 bg-slate-100 flex items-center">
      <i
        className="fa-solid fa-bars mx-2 text-2xl cursor-pointer sm:text-4xl sm:mx-4 z-20"
        onClick={hamburgerClick}
      ></i>
      <div
        id="bg-black"
        className="opacity-30 bg-black fixed top-0 right-0 z-10 left-0 bottom-0 hidden"
        onClick={hamburgerClick}
      ></div>
      <div
        id="side-navbar"
        className="fixed top-0 bottom-0 left-0 right-[50%] bg-slate-100 translate-x-[-100%] transformSideNavbar z-10 sm:right-[70%]"
      >
        <div className="h-16"></div>
        <ul className="border text-xl p-4">
          <li className="my-2">
            <Link href="/" onClick={hamburgerClick}>
              Home
            </Link>
          </li>
          <li className="my-2">
            <Link href="/following" onClick={hamburgerClick}>
              Following
            </Link>
          </li>
          <li className="my-2">
            <Link href="/profile" onClick={hamburgerClick}>
              Profile
            </Link>
          </li>
        </ul>
        <div className="border text-xl p-4">
          <h1 className="my-2">Following</h1>
          <ul>
            <li className="my-2">
              <Link href="/user1" onClick={hamburgerClick}>
                user1
              </Link>
            </li>
            <li className="my-2">
              <Link href="/user2" onClick={hamburgerClick}>
                user2
              </Link>
            </li>
            <li className="my-2">
              <Link href="/user3" onClick={hamburgerClick}>
                user3
              </Link>
            </li>
            <li className="my-2">
              <Link href="/user4" onClick={hamburgerClick}>
                user4
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Explore</h1>
          <ul>
            <li>
              <Link onClick={hamburgerClick} href="/science">
                Science
              </Link>
            </li>
            <li>
              <Link onClick={hamburgerClick} href="/gaming">
                Gaming
              </Link>
            </li>
            <li>
              <Link onClick={hamburgerClick} href="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl w-full h-full m-auto px-2 flex items-center justify-between">
        <div className="flex h-full items-center justify-between w-[20%] min-w-[90px] max-w-[150px] z-20">
          <i className="fa-brands fa-blogger text-2xl"></i>
          <h1 className="text-xl sm:text-2xl">
            <Link href="/">E Blog</Link>
          </h1>
        </div>
        <div className="flex items-center justify-between bg-white rounded-md overflow-hidden sm:w-1/2">
          <input
            type="text"
            className="w-[80%] hidden text-base mx-2 border-none outline-none rounded-md px-2 py-1 sm:text:lg sm:block"
          />
          <i className="fa-solid fa-magnifying-glass text-xl m2-x cursor-pointer bg-slate-200 py-2 px-4 rounded-md sm:text-2xl"></i>
        </div>
        <LoggedIn isLoggedIn={status} user={user} />
      </div>
    </nav>
  );
}

export default Navbar;
