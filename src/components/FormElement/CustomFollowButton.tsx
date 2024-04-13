"use client";
import { UseUserContext } from "@/Context/UserContext";
import { followUser, unfollowUser } from "@/utils/ConnectApi";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type PropsValue = {
  isFollowed?: boolean;
  owner?: string;
  setData?: Dispatch<SetStateAction<any>>;
  onClickFollow : () => void
};

function CustomFollowButton({ isFollowed, setData,onClickFollow }: PropsValue) {
  const { token } = UseUserContext();
  return (
    <button
      className={`${
        isFollowed
          ? "bg-gray-500 hover:bg-gray-600"
          : "bg-green-400 hover:bg-green-500"
      }  text-white text-xl rounded-md px-4 py-2 my-2 sm:text-2xl`}
      // onClick={() => {
      //   if (!isFollowed) {
      //     if (owner && token) {
      //       followUser(owner, token)
      //         .then((e) => {
      //           console.log(e);
      //           if (e.success) {
      //             setData((prev: any) => ({
      //               ...prev,
      //               owner: {
      //                 ...prev.owner,
      //                 followersCount: prev.owner.followersCount + 1,
      //                 isFollowed: true,
      //               },
      //             }));
      //           }
      //         })
      //         .catch((err: any) => {
      //           console.log("The error is ", err);
      //         });
      //     }
      //   } else {
      //     if (owner && token) {
      //       unfollowUser(owner, token)
      //         .then((e) => {
      //           console.log(e);
      //           if (e.success) {
      //             setData((prev: any) => ({
      //               ...prev,
      //               owner: {
      //                 ...prev.owner,
      //                 followersCount: prev.owner.followersCount - 1,
      //                 isFollowed: false,
      //               },
      //             }));
      //           }
      //         })
      //         .catch((err) => {
      //           console.log("The error is ", err);
      //         });
      //     }
      //   }
      // }}
      onClick={onClickFollow}
    >
      {isFollowed ? "Followed" : "Follow"}
      {isFollowed ? (
        <i className="fa-solid fa-check ml-2"></i>
      ) : (
        <i className="fa-solid fa-plus ml-2"></i>
      )}
    </button>
  );
}

export default CustomFollowButton;
