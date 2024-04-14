"use client";

import { useEffect } from "react";

type PropsValue = {
  isFollowed?: boolean;
  owner?: string;
  functionality : () => void
};

function CustomFollowButton({ isFollowed,functionality }: PropsValue) {
  // useEffect(() => {

  // },[isFollowed])
  return (
    <button
      className={`${
        isFollowed
          ? "bg-gray-500 hover:bg-gray-600"
          : "bg-green-400 hover:bg-green-500"
      }  text-white text-xl rounded-md px-4 py-2 my-2 sm:text-2xl`}
      onClick={functionality}
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
