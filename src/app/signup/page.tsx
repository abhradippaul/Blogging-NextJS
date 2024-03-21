"use client"
import SubmitButton from "@/components/FormElement/SubmitButton";
import { submitButtonClass } from "@/utils/FormComponent";
import { useState } from "react";

function page() {
  const [data, setData] = useState({});
  return (
    <div className="h-[90vh] w-full flex items-center justify-center bg-slate-200">
      <form className="w-[90%] h-[50vh] max-h-[400px] max-w-[500px] bg-slate-100 py-2 px-4 flex flex-col justify-around" onSubmit={(e) => {
        e.preventDefault()
        console.log(data)
      }}>
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
            onChange={(e) => {
              setData({
                ...data,
                fullName: e.target.value,
              });
            }}
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
            onChange={(e) => {
              setData({
                ...data,
                userName: e.target.value,
              });
            }}
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
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files?.length) {
              setData({
                ...data,
                image: e.target.files[0].name
              });
            }
          }}
          required
          className="text-base sm:text-lg"
        />
        <SubmitButton children="Submit" className={submitButtonClass} />
      </form>
    </div>
  );
}

export default page;
