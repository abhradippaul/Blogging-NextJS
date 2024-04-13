"use client";
import React, { useEffect, useId, useState } from "react";
import CustomTextarea from "./FormElement/CustomTextarea";
import EditOrDelete from "./FormElement/EditOrDelete";
import { UseUserContext } from "@/Context/UserContext";
import { deleteBlogComment, updateBlogComment } from "@/utils/ConnectApi";
import CustomConfirm from "./FormElement/CustomConfirm";

function Comment({ commentData }: any) {
  const [data, setData] = useState({
    userName: "",
    comment: "",
  });
  const { user, token } = UseUserContext();
  const [editComment, setEditComment] = useState<boolean>(false);
  const id = useId();
  useEffect(() => {
    setData({
      userName: commentData.userName,
      comment: commentData.comment,
    });
  }, [commentData]);
  const deleteComment = () => {
    deleteBlogComment(commentData._id, token)
      .then((e) => {
        console.log(e);
        setData({
          comment: "",
          userName: "",
        });
      })
      .catch((err) => {
        console.log("The error is ", err);
      });
  };
  const updateComment = () => {
    console.log(commentData._id, token, JSON.stringify(data.comment));
    if ((commentData._id, token, data.comment)) {
      // updateBlogComment(
      //   commentData._id,
      //   token,
      //   JSON.stringify({ comment: data.comment })
      // )
      //   .then((e) => {
      //     console.log(e);
      //     setEditComment(false);
      //   })
      //   .catch((err) => {
      //     console.log("The error is ", err);
      //   });
    }
  };
  if (data.comment && data.userName) {
    return (
      <div className="flex">
        <img
          className="w-10 h-10 sm:w-20 sm:h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
          alt="image"
        />
        <div className="w-full flex justify-center flex-col">
          <div className="flex items-center">
            <h1 className="mx-2">@{data.userName}</h1>
            <h6 className="mx-2">2 years ago</h6>
          </div>
          <CustomTextarea
            data={data}
            edit={editComment}
            name="comment"
            setData={setData}
            textareaClass={`m-2 outline-none w-full resize-none ${
              editComment && "border rounded-md px-2 m-2"
            }`}
            id={id}
          />
        </div>
        {data.userName === user.userName && editComment ? (
          <CustomConfirm setEdit={setEditComment} onSave={updateComment} />
        ) : (
          <EditOrDelete
            setEdit={setEditComment}
            functionality={deleteComment}
          />
        )}
      </div>
    );
  }
}

export default Comment;
