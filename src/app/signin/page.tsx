"use client";
import { UseUserContext } from "@/UserContext";
import Link from "next/link";
import { useState } from "react";

function page() {
  // const user = UseUserContext()
  const [data, setData] = useState({});
  return (
    <div className="h-[90vh] w-full flex items-center justify-center bg-slate-200">
      <form
        className="w-[90%] h-[50vh] max-h-[400px] max-w-[500px] bg-slate-100 py-2 px-4 flex flex-col justify-around"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(user)
          console.log(data);
        }}
      >
        <h1 className="text-xl text-center font-bold text-gray-900 rounded-sm my-4 sm:text-2xl">
          Sign In
        </h1>
        <div className="flex items-center justify-between my-2">
          <label htmlFor="email" className="text-base sm:text-lg">
            Email :{" "}
          </label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => {
              setData({
                ...data,
                email: e.target.value,
              });
            }}
            className="border-none outline-none rounded-sm p-1 w-[60%] text-base sm:text-lg"
          />
        </div>
        <div className="flex items-center justify-between my-2">
          <label htmlFor="password" className="text-base sm:text-lg">
            Password :{" "}
          </label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => {
              setData({
                ...data,
                password: e.target.value,
              });
            }}
            className="border-none outline-none rounded-sm p-1 w-[60%] text-base sm:text-lg"
          />
        </div>
        <button className="bg-green-500 text-white py-1 rounded-md  mx-auto hover:bg-green-600 text-lg w-1/2 sm:text-xl">
          Submit
        </button>
        <div className="max-w-max mx-auto">
          <h1 className="text-base sm:text-lg">
            Don't have an account?{" "}
            <span className="text-green-500 hover:text-green-600 font-semibold">
              <Link href="/signup">Sign Up</Link>
            </span>
          </h1>
        </div>
      </form>
    </div>
  );
}

export default page;
