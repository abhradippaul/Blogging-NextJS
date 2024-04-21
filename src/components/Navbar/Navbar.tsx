"use client";
import Link from "next/link";
import LoggedIn from "./LoggedIn";
import { UseUserContext } from "@/Context/UserContext";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  followingUsers,
  navbarCategory,
  navbarTopMenu,
} from "@/utils/NavbarComponents";
import NavbarLink from "./NavbarLink";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Navbar() {
  const [loading, setLoading] = useState<boolean>(true);
  const { status, user } = UseUserContext();
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([
    {
      fullName: "",
      userName: "",
      title: "",
      slug: "",
    },
  ]);

  const hamburgerClick = useCallback(() => {
    const bgBlackElement = document.querySelector<Element>("#bg-black");
    const sideNavbar = document.querySelector<Element>("#side-navbar");
    const body = document.querySelector<Element>("body");
    if (bgBlackElement && sideNavbar && body) {
      body.classList.toggle("overflow-y-hidden");
      bgBlackElement.classList.toggle("hidden");
      sideNavbar.classList.toggle("sideNavbar");
    }
  }, []);

  const onSearch = useCallback(async (e: string) => {
    try {
      if (e.length > 1) {
        const response = await fetch(`http://localhost/api/v1/search/${e}`);
        const data = await response.json();
        console.log(data);
        if (data.status) {
          setResult(data.result);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <nav className="h-[7dvh] bg-slate-100 flex items-center">
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
        className="fixed top-0 bottom-0 left-0 right-[50%] bg-slate-100 translate-x-[-100%] transformSideNavbar z-10 sm:right-[70%] overflow-y-scroll"
      >
        <div className="h-16"></div>
        <ul className="border text-xl p-4">
          {navbarTopMenu.map((menu) => (
            <NavbarLink
              children={menu.label}
              link={menu.path}
              key={menu.label}
              liClassName="my-1 px-1 py-2 hover:bg-slate-200 cursor-pointer rounded-md"
              hamburgerClick={hamburgerClick}
            />
          ))}
        </ul>
        {followingUsers.length && (
          <div className="border text-xl p-4">
            <h1 className="my-2">Following</h1>
            <ul>
              {followingUsers.map((menu) => (
                <NavbarLink
                  children={menu.label}
                  link={menu.path}
                  key={menu.label}
                  imageSrc="user.png"
                  liClassName="my-1 px-1 py-2 hover:bg-slate-200 cursor-pointer rounded-md"
                  hamburgerClick={hamburgerClick}
                />
              ))}
            </ul>
          </div>
        )}
        <div className="border text-xl p-4">
          <h1 className="my-2 font-semibold">Explore</h1>
          <ul>
            {navbarCategory.map((menu) => (
              <NavbarLink
                children={menu.label}
                link={menu.path}
                key={menu.label}
                liClassName="my-1 px-1 py-2 hover:bg-slate-200 cursor-pointer rounded-md"
                hamburgerClick={hamburgerClick}
              />
            ))}
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
        <i
          className="fa-solid fa-magnifying-glass text-xl m2-x cursor-pointer bg-slate-200 py-2 px-4 rounded-md sm:text-2xl"
          onClick={() => {
            const search_page = document.querySelector("#search-page");
            if (search_page) {
              search_page.classList.remove("invisible");
              search_page.classList.add("visible");
              inputRef.current?.focus();
            }
          }}
        ></i>
        <div
          id="search-page"
          className="fixed invisible top-0 bottom-0 left-0 right-0 bg-slate-600 z-50"
        >
          <div className="w-[90%] mx-auto my-4 flex items-center flex-col">
            <div className="w-full flex justify-between">
              <i
                className="fa-solid fa-arrow-left text-xl cursor-pointer bg-slate-200 py-2 px-4 rounded-md sm:text-2xl"
                onClick={() => {
                  const search_page = document.querySelector("#search-page");
                  if (search_page) {
                    search_page.classList.remove("visible");
                    search_page.classList.add("invisible");
                  }
                }}
              ></i>
              <input
                type="text"
                ref={inputRef}
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
                className="w-[70%] hidden text-base border-none outline-none rounded-md px-2 py-1 sm:text:lg sm:block"
              />
              <i
                className="fa-solid fa-magnifying-glass text-xl m2-x cursor-pointer bg-slate-200 py-2 px-4 rounded-md sm:text-2xl"
                onClick={() => {
                  const search_page = document.querySelector("#search-page");
                  if (search_page) {
                    search_page.classList.remove("visible");
                    search_page.classList.add("invisible");
                  }
                }}
              ></i>
            </div>
            <div className="w-[70%] mt-4 flex flex-col items-center">
              {result.length &&
                result.map((data) => {
                  return (
                    <Link
                      key={data.userName || data.slug}
                      onClick={() => {
                        const search_page =
                          document.querySelector("#search-page");
                        if (search_page) {
                          search_page.classList.remove("visible");
                          search_page.classList.add("invisible");
                        }
                      }}
                      href={`/${
                        data.slug
                          ? `blog/${data.slug}`
                          : `user/${data.userName}`
                      }`}
                      className="h-12 items-center my-2 justify-center flex w-full bg-white rounded-md"
                    >
                      {data.userName ? data.fullName : data.title}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        {loading && (
          <div className="w-32 h-full">
            <Skeleton className="h-[80%]" />
          </div>
        )}

        {!loading && <LoggedIn isLoggedIn={status} user={user} />}
      </div>
    </nav>
  );
}

export default Navbar;
