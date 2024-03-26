"use client";
import Comment from "@/components/Comment";
import CustomConfirm from "@/components/FormElement/CustomConfirm";
import CustomFileUpload from "@/components/CustomFileUpload";
import CustomFollowButton from "@/components/FormElement/CustomFollowButton";
import Input from "@/components/FormElement/Input";
import { blog } from "@/data";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import EditOrDelete from "@/components/FormElement/EditOrDelete";
import CustomTextarea from "@/components/FormElement/CustomTextarea";
import {
  getItemLocalStorage,
  getItemStringLocalStorage,
} from "@/utils/LocalStorage";
import { UseUserContext } from "@/Context/UserContext";
import { getBlog } from "@/utils/ConnectApi";
import { useParams } from "next/navigation";

function page() {
  const [owner, setOwner] = useState<boolean>();
  const [edit, setEdit] = useState<boolean>(false);
  const [data, setData] = useState<object>({});
  const [loading, setLoading] = useState<boolean>();
  const { setStatus, setUser } = UseUserContext();
  const { blogName } = useParams();
  useEffect(() => {
    setLoading(false);
    const userData = getItemLocalStorage("isUserLoggedIn");
    const token = getItemStringLocalStorage("token");
    if (userData && token) {
      setStatus(true);
      setUser(userData);
      // console.log(test)
      getBlog(blogName.toString(), token)
        .then((e) => {
          if (e.success) {
            console.log(e.data);
            setData(e.data);
            setOwner(e.data.owner.userName === userData.userName);
          }
        })
        .catch((err) => {
          console.log("The error is ", err);
        })
        .finally(() => setLoading((prev) => !prev));
    }
  }, []);

  const commentBtn = () => {
    const btn = document.querySelector("#comment-btn");
    if (btn) {
      btn.classList.toggle("invisible");
    }
  };

  const editBlog = () => {
    setEdit((prev) => !prev);
  };

  const textareaResize = useCallback(() => {
    const targetarea = Array.from(document.querySelectorAll("textarea"));
    if (targetarea.length) {
      targetarea.forEach((e) => {
        e.style.height = "auto";
        e.style.height = `${e.scrollHeight}px`;
      });
    }
  }, []);

  useEffect(() => {
    textareaResize();
    setData({
      title: blog.data.title,
      description: blog.data.content,
    });
  }, []);

  return (
    loading && (
      <div className="bg-slate-200 min-h-[93dvh]">
        <div className="max-w-7xl mx-auto px-2 py-8">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="max-w-5xl m-auto">
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center justify-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4 sm:w-20 sm:h-20"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
                    alt="Owner Image"
                  />
                  <div>
                    <Link
                      href={`/user/${blog.data.owner.userName}`}
                      className="font-semibold text-lg sm:text-xl text-gray-700 hover:text-black"
                    >
                      {blog.data.owner.fullName}
                    </Link>
                    <h6>4 Followers</h6>
                  </div>
                </div>
                {!owner ? (
                  <CustomFollowButton />
                ) : (
                  <EditOrDelete setEdit={setEdit} />
                )}
              </div>
              {/* <h1>{Date.now()}</h1> */}
              <div className="relative group">
                <div className="w-full relative group">
                  <img
                    className="w-full mb-4"
                    src="https://images.unsplash.com/photo-1709842665072-6404e47a5386?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Blog Image"
                  />
                  {owner && <CustomFileUpload />}
                </div>
                <Input
                  name="title"
                  readonly={!edit}
                  data={data}
                  inputClass={`w-full py-2 text-xl font-bold my-4 ${
                    !edit && "border-none"
                  } border-2 rounded-md outline-none sm:text-3xl`}
                  setData={setData}
                />
                <CustomTextarea
                  edit={edit}
                  name="description"
                  data={data}
                  setData={setData}
                  textareaClass={`mb-4 w-full py-2 resize-none outline-none border-2 rounded-md ${
                    !edit && "border-none"
                  }`}
                />

                {edit && <CustomConfirm setEdit={setEdit} edit={edit} />}
              </div>
              <div className="flex items-center justify-between cursor-pointer">
                <div className="border py-2 text-xl rounded-md w-1/3 flex items-center justify-center sm:text-2xl hover:bg-slate-50">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div
                  className="border py-2 text-xl rounded-md w-1/3 flex items-center justify-center sm:text-2xl hover:bg-slate-50"
                  onClick={commentBtn}
                >
                  <i className="fa-regular fa-comment"></i>
                </div>
                <div className="border text-xl rounded-md w-1/3 flex items-center justify-center sm:text-2xl py-2 hover:bg-slate-50">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2990/2990295.png"
                    className="h-6"
                    alt="share"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-6">
            <h1 className="text-xl font-semibold sm:text-2xl">12 Comments</h1>
            <div className="flex items-center justify-between my-4">
              <img
                className="w-10 h-10 sm:w-20 sm:h-20"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
                alt="image"
              />
              <div className="w-full text-lg">
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="outline-none w-full border-b-2"
                  onFocus={commentBtn}
                  onBlur={commentBtn}
                />
                <div
                  id="comment-btn"
                  className="flex justify-end my-2 invisible"
                >
                  <button
                    className="border border-red-500 px-2 py-1 mx-2 rounded-md hover:bg-red-500 hover:text-white"
                    onClick={commentBtn}
                  >
                    Cancel
                  </button>
                  <button className="border border-green-500 px-2 py-1 mx-2 rounded-md hover:bg-green-500 hover:text-white">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6">
            <Comment />
          </div>
        </div>
      </div>
    )
  );
}

export default page;
