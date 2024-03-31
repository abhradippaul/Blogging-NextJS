"use client";
import React, { useEffect, useId, useState } from "react";
import CustomTextarea from "./FormElement/CustomTextarea";
import EditOrDelete from "./FormElement/EditOrDelete";
import { UseUserContext } from "@/Context/UserContext";

function Comment({commentData} : any) {
  const [data, setData] = useState({
    userName : "",
    comment : ""
  });
  const {user} = UseUserContext()
  const [editComment, setEditComment] = useState<boolean>(false);
  useEffect(() => {
    // console.log(user)
    setData({
      userName : commentData.userName,
      comment: commentData.comment
    });
  }, [commentData]);
  const deleteComment = () => {

  }
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
          setData={() => {}}
          textareaClass="m-2 outline-none w-full resize-none"
          id={useId()}
        />
      </div>
        {data.userName === user.userName && <EditOrDelete setEdit={setEditComment} functionality={() => {}}/>}
    </div>
  );
}

export default Comment;
