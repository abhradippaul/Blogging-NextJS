"use client";
import Comment from "@/components/Comment";
import CustomConfirm from "@/components/FormElement/CustomConfirm";
import CustomFileUpload from "@/components/CustomFileUpload";
import CustomFollowButton from "@/components/FormElement/CustomFollowButton";
import Input from "@/components/FormElement/Input";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import EditOrDelete from "@/components/FormElement/EditOrDelete";
import CustomTextarea from "@/components/FormElement/CustomTextarea";
import { UseUserContext } from "@/Context/UserContext";
import {
  addComment,
  deleteBlog,
  followUser,
  getBlog,
  unfollowUser,
  updateBlog,
} from "@/utils/ConnectApi";
import { useParams, useRouter } from "next/navigation";
import { getLocalSetContext } from "@/utils/GetFromLocalStorage";
import CustomIcon from "@/components/IconElement/CustomIcon";
import LoadingBlogPage from "@/components/Skeleton/LoadingBlogPage";
import Image from "next/image";
const imageIconClass =
  "border py-2 text-xl rounded-md w-1/3 flex items-center justify-center sm:text-2xl hover:bg-slate-50";

// const image = process.env.NEXT_PUBLIC_DEV_IMAGE_URL;
const image = null;
const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

function page() {
  const [owner, setOwner] = useState<boolean>();
  const [edit, setEdit] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newComment, setNewComment] = useState({
    comment: "",
    userName: "",
    createdAt: "",
    featuredImage: "",
  });
  const [addNewComment, setAddNewComment] = useState<string>("");
  const [blogContent, setBlogContent] = useState({
    blogtitle: "",
    content: "",
  });
  const { setStatus, setUser, setToken, token, user } = UseUserContext();
  const { blogName } = useParams();
  const commentButton = useRef<HTMLDivElement>(null);
  const commentInput = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const getItem = getLocalSetContext();
    if (getItem) {
      setStatus(true);
      setUser(getItem.userData);
      setToken(getItem.token);
      getBlog(blogName.toString(), getItem.token)
        .then((e) => {
          if (e.success) {
            setData(e.data);
            setOwner(e.data.owner.userName === getItem.userData.userName);
            setBlogContent({
              blogtitle: e.data.title,
              content: e.data.content,
            });
          } else if (e.message === "Invalid access token") {
          }
        })
        .catch((err) => {
          console.log("The error is ", err);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  const onCommentInputFocus = useCallback(() => {
    if (commentInput.current && commentButton.current) {
      commentInput.current.classList.add("border-black");
      commentButton.current.classList.remove("invisible");
    }
  }, []);

  const onCommentInputCancel = useCallback(() => {
    if (commentInput.current && commentButton.current) {
      commentInput.current.classList.remove("border-black");
      commentButton.current.classList.add("invisible");
      setAddNewComment("");
    }
  }, []);

  const submitComment = useCallback(() => {
    if (addNewComment) {
      addComment(JSON.stringify({ comment: addNewComment }), data._id, token)
        .then((e) => {
          if (e) {
          }
          setNewComment({
            comment: e.data.comment,
            userName: user.userName,
            featuredImage: user.featuredImage.public_id,
            createdAt: e.data.createdAt,
          });
          setData((prev: any) => ({
            ...prev,
            commentsCount: prev.commentsCount + 1,
          }));
          if (commentInput.current && commentButton.current) {
            commentInput.current.classList.remove("border-black");
            commentButton.current.classList.add("invisible");
            setAddNewComment("");
          }
        })
        .catch((err) => {
          console.log("The error is ", err);
        });
    }
  }, [token, data, addNewComment]);

  const updateThisBlog = useCallback(() => {
    const slug = data.slug;
    if (
      blogContent.blogtitle != data.title ||
      blogContent.content != data.content
    ) {
      if (slug && token && blogContent.blogtitle && blogContent.content) {
        updateBlog(slug, token, JSON.stringify(blogContent))
          .then((e) => {
            if (e.success) {
              // window.location.reload();
              setEdit(false);
              setData((prev: any) => ({
                ...prev,
                ...blogContent,
              }));
            }
          })
          .catch((err) => {
            console.log("The error is ", err);
          });
      }
    }
  }, [data, blogContent, token]);

  const deleteThisBlog = () => {
    const blogId = data._id;
    if (blogId && token) {
      deleteBlog(blogId, token)
        .then((e) => {
          console.log(e);
          if (e.success) {
            router.push("/");
          }
        })
        .catch((err) => {
          console.log("The error is ", err);
        });
    }
  };

  const followTheUser = useCallback(() => {
    if (!data.owner.isFollowed) {
      if (data._id && token) {
        followUser(data.owner._id, token)
          .then((e) => {
            if (e.success) {
              setData((prev: any) => ({
                ...prev,
                owner: {
                  ...prev.owner,
                  followersCount: prev.owner.followersCount + 1,
                  isFollowed: true,
                },
              }));
            }
          })
          .catch((err: any) => {
            console.log("The error is ", err);
          });
      }
    } else {
      if (data._id && token) {
        unfollowUser(data.owner._id, token)
          .then((e) => {
            if (e.success) {
              setData((prev: any) => ({
                ...prev,
                owner: {
                  ...prev.owner,
                  followersCount: prev.owner.followersCount - 1,
                  isFollowed: false,
                },
              }));
            }
          })
          .catch((err) => {
            console.log("The error is ", err);
          });
      }
    }
  }, [data, token]);

  if (isLoading) {
    return <LoadingBlogPage />;
  } else {
    return (
      <div className="bg-slate-200 min-h-[93dvh]">
        <div className="max-w-7xl mx-auto px-2 py-8">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="max-w-5xl m-auto">
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative mr-4 sm:w-20 sm:h-20">
                    <Image
                      className="object-cover"
                      fill={true}
                      sizes="full"
                      src={
                        image ||
                        imageUrl + "" + data.owner?.featuredImage?.public_id
                      }
                      alt="Owner Image"
                    />
                  </div>
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
                    functionality={followTheUser}
                  />
                ) : (
                  <EditOrDelete
                    className="text-xl sm:text-2xl"
                    functionality2={deleteThisBlog}
                    functionality1={() => {
                      setEdit((prev) => !prev);
                    }}
                  />
                )}
              </div>
              {/* <h1>{Date.now()}</h1> */}
              <div className="relative group">
                <div className="w-full relative group">
                  <div className="w-full h-[600px] relative mb-4">
                    <Image
                      className="object-cover"
                      fill={true}
                      src={
                        image || imageUrl + "" + data.featuredImage?.public_id
                      }
                      alt="Blog Image"
                    />
                  </div>
                  {owner && <CustomFileUpload />}
                </div>
                <Input
                  name="blogtitle"
                  readonly={!edit}
                  data={blogContent}
                  // ref={titleInputRef}
                  inputClass={`w-full p-1 text-xl font-bold my-4 ${
                    !edit && "border-none"
                  } border-2 rounded-md outline-none sm:text-3xl`}
                  setData={setBlogContent}
                />
                <CustomTextarea
                  edit={edit}
                  name="content"
                  data={blogContent}
                  setData={setBlogContent}
                  textareaClass={`mb-4 w-full p-1 resize-none outline-none border-2 rounded-md ${
                    !edit && "border-none"
                  }`}
                />

                {edit && (
                  <CustomConfirm setEdit={setEdit} onSave={updateThisBlog} />
                )}
              </div>
              <div className="flex items-center justify-between cursor-pointer">
                <CustomIcon
                  outerClass={imageIconClass}
                  innerClass={`${
                    data.isLiked ? "fa-solid" : "fa-regular"
                  } fa-heart mx-2`}
                  value={data.likesCount}
                  setData={setData}
                  data={{ blogId: data._id, isLiked: data.isLiked }}
                />
                <CustomIcon
                  outerClass={imageIconClass}
                  innerClass="fa-regular fa-comment mx-2"
                  value={data.commentsCount}
                  valueFunction={() => {
                    commentInput.current?.focus();
                  }}
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
              <div className="w-10 h-10 rounded-full overflow-hidden relative sm:w-20 sm:h-20">
                <Image
                  className="object-cover"
                  fill={true}
                  sizes="full"
                  src={image || imageUrl + "" + user.featuredImage.public_id}
                  alt="Owner Image"
                />
              </div>
              <div className="w-[90%] text-lg">
                <input
                  type="text"
                  id="comment-input"
                  placeholder="Add a comment"
                  value={addNewComment}
                  onChange={(e) => setAddNewComment(e.target.value)}
                  className="outline-none w-full border-b-2"
                  ref={commentInput}
                  onFocus={onCommentInputFocus}
                />
                <div
                  id="comment-btn"
                  className="flex justify-end my-2 invisible"
                  ref={commentButton}
                >
                  <button
                    className="border border-red-500 px-2 py-1 mx-2 rounded-md hover:bg-red-500 hover:text-white"
                    onClick={onCommentInputCancel}
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
}

export default page;
