"use client";
import { useState } from "react";

type PropsValue = {
  isFollowed?: boolean;
};

function CustomFollowButton({ isFollowed }: PropsValue) {
  const [value, setValue] = useState<boolean>(isFollowed || false);

  return (
    <button
      className={`${
        value
          ? "bg-gray-500 hover:bg-gray-600"
          : "bg-green-400 hover:bg-green-500"
      }  text-white text-xl rounded-md px-4 py-2 my-2 sm:text-2xl`}
      onClick={() => {
        setValue(!value);
      }}
    >
      {value ? "Followed" : "Follow"}
      {value ? (
        <i className="fa-solid fa-check ml-2"></i>
      ) : (
        <i className="fa-solid fa-plus ml-2"></i>
      )}
    </button>
  );
}

export default CustomFollowButton;
