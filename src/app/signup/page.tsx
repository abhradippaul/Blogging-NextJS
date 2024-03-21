"use client";
import Input from "@/components/FormElement/Input";
import SubmitButton from "@/components/FormElement/SubmitButton";
import {
  SignUpForm,
  inputClass,
  inputOuterClass,
  inputLabelClass,
  submitButtonClass,
} from "@/utils/FormComponent";
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
          Sign Up
        </h1>

        {SignUpForm.map((e) => (
          <Input
            key={useId()}
            {...e}
            inputClass={inputClass}
            outsideDivClass={inputOuterClass}
            labelClass={inputLabelClass}
            data={data}
            setData={setData}
          />
        ))}

        <input
          type="file"
          onChange={(e) => {}}
          required
          className="text-base sm:text-lg"
        />
        <SubmitButton children="Submit" className={submitButtonClass} />
      </form>
    </div>
  );
}

export default page;
