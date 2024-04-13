"use client";
import Comment from "@/components/Comment";
import CustomConfirm from "@/components/FormElement/CustomConfirm";
import CustomFileUpload from "@/components/CustomFileUpload";
import CustomFollowButton from "@/components/FormElement/CustomFollowButton";
import Input from "@/components/FormElement/Input";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import EditOrDelete from "@/components/FormElement/EditOrDelete";
import CustomTextarea from "@/components/FormElement/CustomTextarea";
import { UseUserContext } from "@/Context/UserContext";
import {
  addComment,
  deleteBlog,
  getBlog,
  updateBlog,
} from "@/utils/ConnectApi";
import { useParams, useRouter } from "next/navigation";
import { getLocalSetContext } from "@/utils/GetFromLocalStorage";
import CustomIcon from "@/components/IconElement/CustomIcon";

function page() {
  const [owner, setOwner] = useState<boolean>();
  const [edit, setEdit] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>();
  const [newComment, setNewComment] = useState({
    comment: "",
    userName: "",
    createdAt: "",
  });
  const [text, setText] = useState({});
  const { setStatus, setUser, setToken, token, user } = UseUserContext();
  const { blogName } = useParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const commentInput = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const imageIconClass =
    "border py-2 text-xl rounded-md w-1/3 flex items-center justify-center sm:text-2xl hover:bg-slate-50";
  // const { followContext, setFollowContext } = useBlogStateContext();
  useEffect(() => {
    setLoading(true);
    const getItem = getLocalSetContext();
    if (getItem) {
      setStatus(true);
      setUser(getItem.userData);
      setToken(getItem.token);
      getBlog(blogName.toString(), getItem.token)
        .then((e) => {
          if (e.success) {
            // console.log(e);
            setData(e.data);
            setOwner(e.data.owner.userName === getItem.userData.userName);
            setText({
              title: e.data.title,
              content: e.data.content,
            });
          } else if (e.message === "Invalid access token") {
          }
        })
        .catch((err) => {
          console.log("The error is ", err);
        })
        .finally(() => setLoading((prev) => !prev));
    }
  }, []);
  // console.log(user)
  // useEffect(() => {console.log(data)}, [data, setData]);

  const commentBtn = () => {
    const btn = document.querySelector("#comment-btn");
    const comment_input = document.querySelector("#comment-input");
    if (btn && comment_input) {
      btn.classList.toggle("invisible");
      if (inputRef.current) {
        console.log(inputRef.current);
        inputRef.current.classList.toggle("border-black");
        inputRef.current.focus();
      }
    }
  };

  const submitComment = () => {
    const comment_input = commentInput.current?.value;
    // console.log(comment_input)
    if (comment_input) {
      addComment(JSON.stringify({ comment: comment_input }), data._id, token)
        .then((e) => {
          console.log(e);
          // if (e.success) {
          // const userName = user.userName;
          setNewComment({
            comment: e.data.comment,
            userName: user.userName,
            createdAt: e.data.createdAt,
          });
          // }
        })
        .catch((err) => {
          console.log("The error is ", err);
        });
    }
  };

  const updateNewBlog = () => {
    // console.log(text)
    const blogId = data._id;
    if (blogId && token && text) {
      // console.log("Test")
      updateBlog(blogId, token, JSON.stringify(text))
        .then((e) => {
          if (e.success) {
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log("The error is ", err);
        });
    }
  };

  const deleteNewBlog = () => {
    const blogId = data._id;
    if (blogId && token) {
      deleteBlog(blogId, token)
        .then((e) => {
          if (e.success) {
            router.push("/");
          }
        })
        .catch((err) => {
          console.log("The error is ", err);
        });
    }
  };

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
                        href={`/user/${data.owner?.userName}`}
                        className="font-semibold text-lg sm:text-xl text-gray-700 hover:text-black"
                      >
                        {data.owner?.fullName}
                      </Link>
                      <h6>{data.owner?.followersCount} Followers</h6>
                    </div>
                  </div>
                  {!owner ? (
                    <CustomFollowButton
                      isFollowed={data.owner?.isFollowed}
                      owner={data.owner?._id}
                      setData={setData}
                    />
                  ) : (
                    <EditOrDelete
                      className="text-xl sm:text-2xl"
                      functionality={deleteNewBlog}
                      setEdit={setEdit}
                    />
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
                    data={text}
                    ref={inputRef}
                    inputClass={`w-full py-2 text-xl font-bold my-4 ${
                      !edit && "border-none"
                    } border-2 rounded-md outline-none sm:text-3xl`}
                    setData={setText}
                  />
                  <CustomTextarea
                    edit={edit}
                    name="content"
                    data={text}
                    setData={setText}
                    textareaClass={`mb-4 w-full py-2 resize-none outline-none border-2 rounded-md ${
                      !edit && "border-none"
                    }`}
                  />

                  {edit && (
                    <CustomConfirm setEdit={setEdit} onSave={updateNewBlog} />
                  )}
                </div>
                <div className="flex items-center justify-between cursor-pointer">
                  <CustomIcon
                    outerClass={imageIconClass}
                    innerClass={`${
                      data.isLiked ? "fa-solid" : "fa-regular"
                    } fa-heart`}
                    value={data.likesCount}
                    setData = {setData}
                    data={{blogId:data._id,isLiked : data.isLiked}}
                  />
                  <CustomIcon
                    outerClass={imageIconClass}
                    innerClass="fa-regular fa-comment"
                    value={data.commentsCount}
                    valueFunction={commentBtn}
                  />
                  <CustomIcon
                    outerClass={imageIconClass}
                    innerClass="h-8"
                    srcAndAlt={{
                      src: "https://cdn-icons-png.flaticon.com/128/2990/2990295.png",
                      alt: "share",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-6">
              <h1 className="text-xl font-semibold sm:text-2xl">
                {data.commentsCount} Comments
              </h1>
              <div className="flex items-center justify-between my-4">
                <img
                  className="w-10 h-10 sm:w-20 sm:h-20"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
                  alt="image"
                />
                <div className="w-full text-lg">
                  <input
                    type="text"
                    id="comment-input"
                    placeholder="Add a comment"
                    className="outline-none w-full border-b-2"
                    ref={commentInput}
                    onFocus={commentBtn}
                    // onBlur={commentBtn}
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
                    <button
                      className="border border-green-500 px-2 py-1 mx-2 rounded-md hover:bg-green-500 hover:text-white"
                      onClick={submitComment}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              {newComment.comment && newComment.userName && (
                <Comment commentData={newComment} />
              )}
              {data.comments &&
                data.comments.map((e: any) => (
                  <Comment commentData={e} key={e._id} />
                ))}
            </div>
          </div>
        </div>
  );
}

export default page;
