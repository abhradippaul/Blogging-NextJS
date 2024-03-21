"use client";
import Input from "@/components/FormElement/Input";
import SubmitButton from "@/components/FormElement/SubmitButton";
import {
  inputClass,
  inputLabelClass,
  inputOuterClass,
  signInForm,
  submitButtonClass,
} from "@/utils/FormComponent";
import Link from "next/link";
import { useId, useState } from "react";

function page() {
  const [data, setData] = useState({});
  return (
    <div className="h-[90vh] w-full flex items-center justify-center bg-slate-200">
      <form
        className="w-[90%] h-[50vh] max-h-[400px] max-w-[500px] bg-slate-100 py-2 px-4 flex flex-col justify-around"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
        }}
      >
        <h1 className="text-xl text-center font-bold text-gray-900 rounded-sm my-4 sm:text-2xl">
          Sign In
        </h1>

        {signInForm.map((e) => (
          <Input
            {...e}
            key={useId()}
            inputClass={inputClass}
            outsideDivClass={inputOuterClass}
            labelClass={inputLabelClass}
            data={data}
            setData={setData}
          />
        ))}
        <SubmitButton children="Submit" className={submitButtonClass} />
        
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
