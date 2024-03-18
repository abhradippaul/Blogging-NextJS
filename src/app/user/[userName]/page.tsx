"use client";
import Card from "@/components/Card";
import CustomFollowButton from "@/components/CustomFollowButton";
import { useEffect, useState } from "react";

function page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [owner, setOwner] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="bg-slate-200 py-4 min-h-dvh px-2">
      <div className="max-w-7xl rounded-md shadow-lg mx-auto overflow-hidden">
        <div className="relative group">
          <img
            className="w-full object-cover h-64"
            src="https://plus.unsplash.com/premium_photo-1710294627866-6914a34622c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Cover Image"
          />
          {owner && (
            <div className="group-hover:flex hidden absolute right-[5%] bg-white rounded-full w-12 h-12 items-center justify-center bottom-[50%] translate-y-[50%]">
              <i className="fa-solid fa-camera text-4xl cursor-pointer text-black hover:text-gray-800"></i>
            </div>
          )}
        </div>
        <div className="flex bg-white py-8 flex-col items-center justify-center sm:flex-row">
          <div className="m-2 relative group w-32 h-32 sm:w-40 sm:h-40">
            <img
              className="rounded-full w-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Channel Image"
            />
            {owner && (
            <div className="group-hover:flex hidden absolute right-0 bottom-[40%] bg-white rounded-full w-8 h-8 items-center justify-center">
              <i className="fa-solid fa-camera text-2xl cursor-pointer text-black hover:text-gray-800"></i>
            </div>
          )}
          </div>
          <div className="mx-4 group relative">
            <h2 className="text-3xl my-4 font-semibold text-gray-800 sm:text-4xl">
              Abhradip Paul
            </h2>
            <p className="my-2 text-lg sm:text-xl">
              @abhradippaul . 0 follower . 0 blogs
            </p>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              nisi fuga cum doloremque omnis totam dolorum distinctio suscipit
              modi fugit.
            </p>
            <CustomFollowButton />
          {owner && (
            <div className="group-hover:flex hidden absolute right-0 bottom-[0] bg-white rounded-full w-8 h-8 items-center justify-center">
              <i className="fa-solid fa-pen-to-square text-2xl cursor-pointer text-black hover:text-gray-800"></i>
            </div>
          )}
          </div>
        </div>
        <hr />
        <div suppressHydrationWarning={true} className="my-4">
          {!loading && <Card />}
        </div>
      </div>
    </div>
  );
}

export default page;
