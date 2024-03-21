"use client";
import Comment from "@/components/Comment";
import CustomConfirm from "@/components/CustomConfirm";
import CustomFileUpload from "@/components/CustomFileUpload";
import CustomFollowButton from "@/components/CustomFollowButton";
import { blog } from "@/data";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

function page() {
  const [owner, setOwner] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);
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
  }, []);

  return (
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
                    Abhradip Paul
                  </Link>
                  <h6>4 Followers</h6>
                </div>
              </div>
              <CustomFollowButton />
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
              <input
                id="title-input"
                value={blog.data.title}
                readOnly={!edit}
                className={`w-full py-2 text-xl font-bold my-4 ${
                  !edit && "border-none"
                } border-2 rounded-md outline-none sm:text-3xl`}
              />
              <textarea
                id="des-input"
                readOnly={!edit}
                className={`mb-4 w-full py-2 resize-none outline-none border-2 rounded-md ${
                  !edit && "border-none"
                }`}
                value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nesciunt nisi dolores nulla, vitae natus adipisci
                reiciendis culpa numquam sed asperiores mollitia explicabo
                facilis? Doloribus, doloremque hic exercitationem eligendi
                reprehenderit ad sed iusto sint ratione explicabo cumque labore
                ea iure, veniam odit! Ad sit excepturi, velit laudantium
                deserunt sint fugit alias possimus hic totam officiis vitae
                provident, dolore libero amet recusandae tempore voluptas
                aliquam asperiores doloremque! Recusandae voluptates nihil
                provident cupiditate asperiores temporibus quidem voluptatibus
                aperiam laborum sunt. Praesentium nesciunt sapiente velit
                similique dolore molestias vero cupiditate. Officia, fugit
                quibusdam?"
              />

              {owner && !edit && (
                <div
                  className="group-hover:flex hidden absolute right-0 bottom-[0] bg-white rounded-full w-8 h-8 items-center justify-center mx-4 my-2"
                  onClick={editBlog}
                >
                  <i className="fa-solid fa-pen-to-square text-2xl mx-2 cursor-pointer text-black hover:text-gray-800"></i>
                  <i className="fa-solid fa-trash text-2xl mx-2 cursor-pointer text-black hover:text-gray-800"></i>
                </div>
              )}
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
              <div id="comment-btn" className="flex justify-end my-2 invisible">
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
  );
}

export default page;
