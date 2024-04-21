// "use client";
import { CheckTimeAgo } from "@/utils/CheckTime";
import Link from "next/link";

// interface Value {
//   commentsCount: number;
//   content : string;
//   createdAt: string;
//   featuredImage : object
//   likesCount: number
//   owner : object
//   title : string
//   _id : string
// }

type PropsValue = {
  value: any;
};
function Card({ value }: PropsValue) {
  return (
    <Link
      href={`/blog/${value.slug}`}
      className="h-[500px] min-w-[300px] max-w-[350px] rounded-md bg-white flex flex-grow items-center justify-around flex-col px-4 py-2"
    >
      {/* <h1 className="text-sm sm:text-base">{CheckTimeAgo(value.createdAt)}</h1> */}
      {value.owner?.userName && (
        <div className="w-full flex items-center justify-between mb-2">
          <div className="flex items-center justify-center">
            <img
              className="w-6 h-6 mr-2 sm:w-8 sm:h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXfiLPPHdy_97C8D3orOwzk1iVHHt3wJPLg&s"
              alt="User Icon"
            />
            <h1 className="text-sm font-semibold sm:text-base text-gray-700 hover:text-black">
              {value.owner.userName}
            </h1>
          </div>
          <h1 className="text-sm sm:text-base">
            {value.owner.followersCount} follower
          </h1>
        </div>
      )}

      <img
        className="w-[90%] h-[35%] object-cover rounded-md sm:h-[40%] sm:w-full"
        src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt="Image"
      />
      <h1 className="text-lg sm:text-xl">{value.title.slice(0, 10)}</h1>
      <p className="text-sm sm:text-base">{value.content.slice(0, 10)}</p>
      <div className="w-full flex">
        <div className="w-1/2 border flex items-center justify-center hover:bg-slate-100">
          <div className="text-lg max-w-max p-1 sm:text-xl ">
            <i className="fa-regular fa-heart mx-2"></i>
            {value.likesCount}
          </div>
        </div>
        <div className="w-1/2 border flex items-center justify-center hover:bg-slate-100">
          <div className="text-lg max-w-max p-1 sm:text-xl">
            <i className="fa-regular fa-comment mx-2"></i>
            {value.commentsCount}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
