"use client";
import { UseUserContext } from "@/Context/UserContext";
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
    console.log(data)
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
        className="w-[90%] h-[50vh] max-h-[400px] max-w-[500px] bg-slate-100 py-2 px-4 flex flex-col justify-around"
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

        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files?.[0]);
            let fileData = e.target.files;
            if (fileData && fileData.length) {
              signUpForm.set('imageData', fileData[0]);
              // setData(prev => {
              //   return {
              //    ...prev,
              //     imageData: fileData?.[0],
              //   };
              // })
              // signUpForm.append("imageData",imageData[0])
              // console.log(imageData[0])
            }
          }}
          // ref={imageDataRef}
          required
          className="text-base sm:text-lg"
        />
        <SubmitButton
          children={loading ? "Loading...." : "Submit"}
          className={submitButtonClass}
        />
      </form>
    </div>
  );
}

export default page;
