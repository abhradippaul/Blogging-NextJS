"use client";
import { UseUserContext } from "@/Context/UserContext";
import CustomTextarea from "@/components/FormElement/CustomTextarea";
import Input from "@/components/FormElement/Input";
import SubmitButton from "@/components/FormElement/SubmitButton";
import { uploadBlog } from "@/utils/ConnectApi";
import { blogUploadForm } from "@/utils/FormComponent";
import { getItemLocalStorage, getItemStringLocalStorage } from "@/utils/LocalStorage";
import React, { useEffect, useId, useState } from "react";

function page() {
  const [loading, setLoading] = useState<boolean>();
  const {setStatus , setUser} = UseUserContext()
  const formData = new FormData();
  const [data, setData] = useState({
    title: "",
    slug: "",
    content: "",
  });
  const handleOnUpload = (e: any) => {
    e.preventDefault();
    setLoading(true);
    formData.set("title", data.title);
    formData.set("slug", data.slug);
    formData.set("content", data.content);
    const token = getItemStringLocalStorage("token");
    if (token) {
      uploadBlog(formData, token)
        .then((e) => {
          console.log(e);
        })
        .catch((err) => {
          console.log("The error is ", err);
        })
        .finally(() => {
          setLoading((prev) => !prev);
        });
    }
  };
  useEffect(() => {
    const userData = getItemLocalStorage("isUserLoggedIn");
    if (userData) {
      setStatus(true);
      setUser(userData);
    }
  },[])
  return (
    <div className="bg-slate-200 min-h-dvh">
      <div className="max-w-7xl m-auto flex items-center justify-center px-4 py-8">
        <form
          className="bg-white w-[500px] min-h-[500px] flex flex-col items-center justify-around p-4 rounded-md"
          onSubmit={handleOnUpload}
        >
          <h1 className="text-xl sm:text-2xl">Post Blog</h1>
          {blogUploadForm.map((e) => (
            <Input
              inputClass="outline-none border-2 rounded-sm p-1"
              name={e.name}
              label={e.label}
              key={useId()}
              data={data}
              setData={setData}
              outsideDivClass="w-full flex items-center justify-between my-4 text-lg sm:text-xl"
            />
          ))}

          <div className="w-full flex items-center justify-between my-4 text-lg sm:text-xl">
            <label htmlFor="des">Description : </label>
            <CustomTextarea
              edit={true}
              data={data}
              id="des"
              name="content"
              setData={setData}
              textareaClass="outline-none border-2 rounded-sm resize-none p-1"
            />
          </div>
          <input
            type="file"
            className="w-full"
            required
            onChange={(e) => {
              const fileData = e.target.files;
              if (fileData && fileData.length) {
                formData.append("imageData", fileData[0]);
              }
            }}
          />
          <SubmitButton
            children={loading ? "Loading..." : "Submit"}
            className="bg-green-500 text-white py-1 rounded-md  mx-auto hover:bg-green-600 text-lg w-1/2 sm:text-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default page;
