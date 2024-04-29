"use client";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import CustomTextarea from "./FormElement/CustomTextarea";
import EditOrDelete from "./FormElement/EditOrDelete";
import { UseUserContext } from "@/Context/UserContext";
import { deleteBlogComment, updateBlogComment } from "@/utils/ConnectApi";
import CustomConfirm from "./FormElement/CustomConfirm";
import Image from "next/image";

// const image = process.env.NEXT_PUBLIC_DEV_IMAGE_URL;
const image = null;
const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

function Comment({ commentData }: any) {
  const [data, setData] = useState({
    userName: commentData.userName,
    comment: commentData.comment,
  });
  const { user, token } = UseUserContext();
  const [editComment, setEditComment] = useState<boolean>(false);
  const id = useId();
  const textareaRef = useRef(null);

  const deleteComment = useCallback(() => {
    deleteBlogComment(commentData._id, token)
      .then((e) => {
        console.log(e);
        if (e.success) {
          window.location.reload();
        }
        // setData({
        //   comment: "",
        //   userName: "",
        // });
      })
      .catch((err) => {
        console.log("The error is ", err);
      });
  }, [commentData, token]);

  const updateComment = useCallback(() => {
    if (commentData.comment !== data.comment) {
      if ((commentData._id, token, data.comment)) {
        updateBlogComment(
          commentData._id,
          token,
          JSON.stringify({ comment: data.comment })
        )
          .then((e) => {
            console.log(e);
            if (e.success) {
              setEditComment(false);
            }
          })
          .catch((err) => {
            console.log("The error is ", err);
          });
      }
    }
  }, [commentData, data, token]);

  if (commentData.comment && commentData.userName && user.userName) {
    return (
      <div className={`flex my-4 items-center`}>
        <div className="w-10 h-10 mr-4 rounded-full overflow-hidden relative sm:w-20 sm:h-20">
          <Image
            className="object-cover"
            fill={true}
            sizes="full"
            src={image || imageUrl + "" + commentData.featuredImage}
            alt="image"
          />
        </div>
        <div className="w-[75%] flex justify-center flex-col">
          <div className="flex items-center">
            <h1 className="mx-2">@{commentData.userName}</h1>
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
            propRef={textareaRef}
          />
        </div>
        {commentData.userName === user.userName &&
          (editComment ? (
            <div className="flex items-center justify-center">
              <CustomConfirm setEdit={setEditComment} onSave={updateComment} />
            </div>
          ) : (
            <EditOrDelete
              // setEdit={setEditComment}
              functionality2={deleteComment}
              functionality1={() => {
                if (textareaRef.current) {
                  textareaRef.current?.focus();
                }
                setEditComment(true);
              }}
            />
          ))}
        {/* {(data.userName === user.userName) && editComment ? (
          <div className="flex items-center justify-center">
            <CustomConfirm setEdit={setEditComment} onSave={updateComment} />
          </div>
        ) : (
          <EditOrDelete
            // setEdit={setEditComment}
            functionality2={deleteComment}
            functionality1={() => {
              if (textareaRef.current) {
                textareaRef.current?.focus();
              }
              setEditComment(true);
            }}
          />
        )} */}
      </div>
    );
  }
}

export default Comment;
