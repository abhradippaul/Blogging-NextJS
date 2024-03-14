import React from "react";

function page() {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center bg-slate-200">
      <form className="w-[90%] h-[50vh] max-h-[400px] max-w-[500px] bg-slate-100 py-2 px-4 flex flex-col justify-around">
        <h1 className="text-xl text-center font-bold text-gray-900 rounded-sm my-4 sm:text-2xl">
          Sign Up
        </h1>
        <div className="flex items-center justify-between my-2">
          <label htmlFor="fullname" className="text-base sm:text-lg">
            Full Name :{" "}
          </label>
          <input
            type="text"
            id="fullname"
            required
            className="border-none outline-none rounded-sm w-[60%] p-1 text-base sm:text-lg"
          />
        </div>
        <div className="flex items-center justify-between my-2">
          <label htmlFor="username" className="text-base sm:text-lg">
            User Name :{" "}
          </label>
          <input
            type="text"
            id="username"
            required
            className="border-none outline-none rounded-sm p-1 w-[60%] text-base sm:text-lg"
          />
        </div>
        <div className="flex items-center justify-between my-2">
          <label htmlFor="email" className="text-base sm:text-lg">
            Email :{" "}
          </label>
          <input
            type="email"
            id="email"
            required
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
            className="border-none outline-none rounded-sm p-1 w-[60%] text-base sm:text-lg"
          />
        </div>
        <input type="file" required className="text-base sm:text-lg"/>
        <button className="bg-green-500 text-white py-1 rounded-md  mx-auto hover:bg-green-600 text-lg w-1/2 sm:text-xl">
          Submit
        </button>
      </form>
    </div>
  );
}

export default page;
