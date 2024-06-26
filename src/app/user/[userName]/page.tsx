"use client";
import { UseUserContext } from "@/Context/UserContext";
import Card from "@/components/Card";
import CustomEditInput from "@/components/CustomEditInput";
import CustomFollowButton from "@/components/FormElement/CustomFollowButton";
import CustomTextarea from "@/components/FormElement/CustomTextarea";
import EditOrDelete from "@/components/FormElement/EditOrDelete";
import HomePageCard from "@/components/Skeleton/HomePageCard";
import UserProfilePage from "@/components/Skeleton/UserProfilePage";
import {
  followUser,
  getUser,
  unfollowUser,
  updateUser,
} from "@/utils/ConnectApi";
import {
  getItemLocalStorage,
  getItemStringLocalStorage,
} from "@/utils/LocalStorage";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// const image = process.env.NEXT_PUBLIC_DEV_IMAGE_URL;
const image = null;
const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

function page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [owner, setOwner] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const { token, setToken } = UseUserContext();
  const [data, setData] = useState({
    _id: "",
    fullName: "",
    userName: "",
    description: "",
    followersCount: "",
    isFollowed: false,
    blogs: [{ slug: "" }],
  });
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    description: "",
    image: "",
  });
  const { setStatus, setUser } = UseUserContext();
  const { userName } = useParams();
  useEffect(() => {
    // console.log(userName);
    const userData = getItemLocalStorage("isUserLoggedIn");
    const token = getItemStringLocalStorage("token");
    if (userData && token) {
      setStatus(true);
      setUser(userData);
      getUser(userName.toString(), token)
        .then((e) => {
          if (e.success) {
            setData(e.data);
            setToken(token);
            setUserInfo({
              fullName: e.data.fullName,
              description: e.data.description,
              image: e.data.featuredImage.public_id,
            });
            console.log(e.data);
            if (e.data.userName === userData.userName) {
              setOwner(true);
            }
          } else {
            console.log("Response error ", e);
          }
        })
        .catch((err) => {
          console.log("The error is ", err);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  const updateUserInfo = useCallback(
    async (userName: string, token: string) => {
      if (
        userInfo.fullName !== data.fullName &&
        userInfo.description !== data.description
      ) {
        const data = await updateUser(
          userName,
          token,
          JSON.stringify(userInfo)
        );
        if (data.success) {
          setUserInfo((prev) => ({
            ...prev,
            fullName: data.fullName,
            description: data.description,
          }));
          setEdit(false);
        }
      } else if (userInfo.fullName !== data.fullName) {
        const data = await updateUser(
          userName,
          token,
          JSON.stringify({ fullName: userInfo.fullName })
        );
        if (data.success) {
          setUserInfo((prev) => ({
            ...prev,
            fullName: data.fullName,
          }));
          setEdit(false);
        }
        console.log(data);
      } else if (userInfo.description !== data.description) {
        const data = await updateUser(
          userName,
          token,
          JSON.stringify({ description: userInfo.description })
        );
        if (data.success) {
          setUserInfo((prev) => ({
            ...prev,
            description: data.description,
          }));
          setEdit(false);
        }
      }
    },
    [userInfo]
  );

  const followFunctionality = () => {
    if (!data.isFollowed) {
      if (data._id && token) {
        followUser(data._id, token)
          .then((e) => {
            // console.log(e);
            if (e.success) {
              setData((prev: any) => ({
                ...prev,
                followersCount: prev.followersCount + 1,
                isFollowed: true,
              }));
            }
          })
          .catch((err: any) => {
            console.log("The error is ", err);
          });
      }
    } else {
      // console.log(data._id, token);
      if (data._id && token) {
        unfollowUser(data._id, token)
          .then((e) => {
            // console.log(e);
            if (e.success) {
              setData((prev: any) => ({
                ...prev,
                followersCount: prev.followersCount - 1,
                isFollowed: false,
              }));
            }
          })
          .catch((err) => {
            console.log("The error is ", err);
          });
      }
    }
  };

  if (isLoading) {
    return <UserProfilePage />;
  } else {
    return (
      <div className="bg-slate-200 py-4 min-h-dvh px-2">
        <div className="max-w-7xl rounded-md shadow-lg mx-auto overflow-hidden">
          <div className="relative group">
            <div className="w-full h-64">
              <Image
                className="object-cover"
                src={image || imageUrl + "" + userInfo.image}
                fill={true}
                sizes="full"
                alt="Cover Image"
              />
            </div>
            {owner && (
              <div className="group-hover:flex hidden absolute right-[5%] bg-white rounded-full w-12 h-12 items-center justify-center bottom-[50%] translate-y-[50%]">
                <i className="fa-solid fa-camera text-4xl cursor-pointer text-black hover:text-gray-800"></i>
              </div>
            )}
          </div>
          <div className="flex bg-white py-8 flex-col items-center justify-center sm:flex-row">
            <div className="m-2 relative group w-32 h-32 sm:w-40 sm:h-40">
              <div className="rounded-full overflow-hidden h-full relative w-full">
                <Image
                  className="object-cover"
                  src={image || imageUrl + "" + userInfo.image}
                  fill={true}
                  sizes="full"
                  alt="Channel Image"
                />
              </div>
              {owner && (
                <div className="group-hover:flex hidden absolute right-0 bottom-[40%] bg-white rounded-full w-8 h-8 items-center justify-center">
                  <i className="fa-solid fa-camera text-2xl cursor-pointer text-black hover:text-gray-800"></i>
                </div>
              )}
            </div>
            <div className="mx-4 group min-w-[50%] relative">
              <input
                id="title-input"
                value={userInfo.fullName}
                onChange={(e) => {
                  setUserInfo((prev) => ({
                    ...prev,
                    fullName: e.target.value,
                  }));
                }}
                readOnly={!edit}
                className={`w-full py-2 text-xl font-bold my-4 ${
                  !edit && "border-none"
                } border-2 rounded-md outline-none sm:text-3xl`}
              />
              <p className="my-2 text-lg sm:text-xl">
                @{data.userName} . {data.followersCount} follower .{" "}
                {data.blogs.length} blogs
              </p>
              <CustomTextarea
                edit={edit}
                data={userInfo}
                name="description"
                setData={setUserInfo}
                textareaClass={`my-2 w-full resize-none ${
                  !edit && "border-none"
                } border-2 rounded-md outline-none`}
              />
              {owner ? (
                edit ? (
                  <div id="comment-btn" className="flex justify-end my-2">
                    <button
                      className="border border-red-500 px-2 py-1 mx-2 rounded-md hover:bg-red-500 hover:text-white"
                      onClick={() => {
                        setEdit((prev) => !prev);
                        setUserInfo((prev) => ({
                          ...prev,
                          fullName: data.fullName,
                          description: data.description,
                        }));
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        updateUserInfo(data.userName, token);
                      }}
                      className="border border-green-500 px-2 py-1 mx-2 rounded-md hover:bg-green-500 hover:text-white"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <EditOrDelete
                    children1={edit ? "Save" : "Edit"}
                    children2={edit ? "Cancel" : "Delete"}
                    functionality2={() => {
                      // setEdit((prev) => !prev);
                    }}
                    functionality1={() => {
                      setEdit((prev) => !prev);
                    }}
                  />
                )
              ) : (
                <CustomFollowButton
                  functionality={followFunctionality}
                  isFollowed={data.isFollowed}
                />
              )}
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap w-[90%] mx-auto justify-around border">
            {!isLoading &&
              data.blogs.map((e) => (
                <div className="my-4" key={e.slug}>
                  <Card value={e} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default page;
