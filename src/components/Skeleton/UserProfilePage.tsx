import React from "react";
import Skeleton from "react-loading-skeleton";
import HomePageCard from "./HomePageCard";

const UserProfilePage = () => {
  return (
    <div className="bg-slate-200 py-4 min-h-dvh px-2">
      <div className="max-w-7xl rounded-md shadow-lg mx-auto overflow-hidden">
        <div className="relative group">
          <Skeleton height={256} className="w-full object-cover h-64" />
        </div>
        <div className="flex bg-white py-8 flex-col items-center justify-center sm:flex-row">
          <div className="m-2 relative group w-32 h-32  sm:w-40 sm:h-40">
            <Skeleton circle width={128} height={128} />
            <div className="group-hover:flex hidden absolute right-0 bottom-[40%] bg-white rounded-full w-8 h-8 items-center justify-center">
              <Skeleton circle width={24} height={24} />
            </div>
          </div>
          <div className="mx-4 group min-w-[50%] relative">
            <Skeleton width={200} height={40} />
            <p className="my-2">
              <Skeleton width={300} height={40} />
            </p>
            <Skeleton height={20} count={3} />
            <Skeleton width={200} height={40} />
          </div>
        </div>
        <div className="w-full flex items-center justify-around my-4 flex-wrap gap-4">
          <HomePageCard />
          <HomePageCard />
          <HomePageCard />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
