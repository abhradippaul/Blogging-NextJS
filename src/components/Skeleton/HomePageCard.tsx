import React from "react";
import Skeleton from "react-loading-skeleton";

function HomePageCard() {
  return (
    <div className="h-[400px] w-[250px] rounded-md bg-white flex items-center justify-around flex-col px-4 py-2 sm:h-[500px] sm:w-[300px]">
      <div className="w-full flex items-center justify-between pb-2">
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 mr-2 sm:w-8 sm:h-8">
            <Skeleton style={{ height: "100%", width: "100%" }} />
          </div>
          <div className="w-12 h-6 mr-2 sm:w-16 sm:h-8">
            <Skeleton style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="w-18 h-6 sm:w-24 sm:h-8">
          <Skeleton style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
        <div className="w-[90%] h-[35%] object-cover rounded-md sm:h-[40%] sm:w-full">
          <Skeleton style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="w-full">
          <Skeleton style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="w-full">
          <Skeleton count={3} style={{ width: "100%"}} />
        </div>
      <div className="w-full flex h-8">
        <div className="w-1/2 ">
            <Skeleton style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="w-1/2">
            <Skeleton style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default HomePageCard;
