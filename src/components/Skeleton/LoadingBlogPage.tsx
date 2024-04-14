import React from "react";
import Skeleton from "react-loading-skeleton";

function LoadingBlogPage() {
  return (
    <div className="bg-slate-200 min-h-[93dvh]">
      <div className="max-w-7xl mx-auto px-2 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="max-w-5xl m-auto">
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center justify-center">
                <Skeleton circle width={60} height={60} />
                <div>
                  <Skeleton width={200} />
                  <Skeleton width={100} />
                </div>
              </div>
              <Skeleton width={150} height={40} />
            </div>
            <div className="relative group">
              <div className="w-full relative group">
                <Skeleton height={400} />
              </div>
              <Skeleton height={60} width="80%" />
              <Skeleton count={5} height={20} />
            </div>
            <Skeleton width="100%" height={50} />
          </div>
        </div>
        {/* <div className="bg-white rounded-md p-6">
          <h1 className="text-xl font-semibold sm:text-2xl">
            <Skeleton width={200} />
          </h1>
          <div className="flex items-center justify-between my-4">
            <Skeleton circle width={60} height={60} />
            <div className="w-full text-lg">
              <Skeleton height={40} width="80%" />
              <div className="flex justify-end my-2 invisible">
                <Skeleton width={80} height={30} />
                <Skeleton width={80} height={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6">
          <Skeleton height={80} />
          <Skeleton height={80} />
          <Skeleton height={80} />
          <Skeleton height={80} />
        </div> */}
      </div>
    </div>
  );
}

export default LoadingBlogPage;
