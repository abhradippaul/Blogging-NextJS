"use client";
import { UseUserContext } from "@/Context/UserContext";
import Input from "@/components/FormElement/Input";
import SubmitButton from "@/components/FormElement/SubmitButton";
import { signInUser } from "@/utils/ConnectApi";
import {
  inputClass,
  inputLabelClass,
  inputOuterClass,
  signInForm,
  submitButtonClass,
} from "@/utils/FormComponent";
import { getItemLocalStorage, setItemLocalStorage } from "@/utils/LocalStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";

function page() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { setUser, setStatus } = UseUserContext();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    signInUser(userInfo)
      .then((e) => {
        if (e.success) {
          const token = {
            access_Token: e.accessToken,
            refresh_Token: e.refreshToken,
          };
          setItemLocalStorage("isUserLoggedIn", e.user);
          setItemLocalStorage("token", token);
          const getlLocalStorage = getItemLocalStorage("isUserLoggedIn");
          const getTokenLocalStorage = getItemLocalStorage("token");
          if (getlLocalStorage && getTokenLocalStorage) {
            setStatus((prev) => !prev);
            setUser(e.user);
            router.push("/");
          }
        } else {
          console.log(e);
          setError(e.message);
        }
      })
      .catch((err) => {
        console.log("The error is ", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="h-[93vh] w-full flex items-center justify-center bg-slate-200">
      <form
        className="w-[90%] h-[50vh] min-h-[400px] max-w-[500px] bg-slate-100 py-2 px-4 flex flex-col rounded-md justify-around"
        onSubmit={handleOnSubmit}
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
            data={userInfo}
            setData={setUserInfo}
          />
        ))}
        <SubmitButton
          children={isLoading ? "" : "Submit"}
          className={submitButtonClass}
        />
        {error && <h1 className="text-center text-red-600 text-xl">{error}</h1>}
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
