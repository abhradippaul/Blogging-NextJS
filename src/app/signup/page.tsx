"use client";
import { UseUserContext } from "@/Context/UserContext";
import CustomTextarea from "@/components/FormElement/CustomTextarea";
import Input from "@/components/FormElement/Input";
import SubmitButton from "@/components/FormElement/SubmitButton";
import { signUpUser } from "@/utils/ConnectApi";
import {
  SignUpForm,
  inputClass,
  inputOuterClass,
  inputLabelClass,
  submitButtonClass,
} from "@/utils/FormComponent";
import {
  useId,
  useState,
} from "react";

function page() {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    userName: "",
  });
  const signUpForm = new FormData()
  const signUp = (e: any) => {
    setLoading(true);
    e.preventDefault();
    signUpForm.set('fullName', data.fullName);
    signUpForm.set('userName', data.userName);
    signUpForm.set('password', data.password);
    signUpForm.set('email', data.email);
    // console.log(data)
    signUpUser(signUpForm)
      .then((data) => {
        console.log("Response is ", data);
      })
      .catch((err) => {
        console.log("Error is ", new Error(err));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="min-h-[93dvh] w-full flex items-center justify-center bg-slate-200">
      <form
        className="w-[90%] min-h-[500px] max-w-[500px] bg-slate-100 py-2 px-4 flex flex-col rounded-md justify-around"
        onSubmit={signUp}
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
        <div className="my-4">
        <label htmlFor="description" className={inputLabelClass}>Description : </label>
        <CustomTextarea data={data} name="description" setData={setData}id="description"  textareaClass="resize-none w-full rounded-md min-h-[150px] my-4 border-none outline-none px-2 py-1" edit={true}/>
        </div>
          
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files?.[0]);
            let fileData = e.target.files;
            if (fileData && fileData.length) {
              signUpForm.set('imageData', fileData[0]);
            }
          }}
          // ref={imageDataRef}
          required
          className="my-2 text-base sm:text-lg"
        />
        <SubmitButton
          children={loading ? "Loading...." : "Submit"}
          className={submitButtonClass+" my-2"}
        />
      </form>
    </div>
  );
}

export default page;
