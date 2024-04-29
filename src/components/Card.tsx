// "use client";
import { CheckTimeAgo } from "@/utils/CheckTime";
import Image from "next/image";
import Link from "next/link";

type PropsValue = {
  value: any;
};
// const image = process.env.NEXT_PUBLIC_DEV_IMAGE_URL;
const image = null;
const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
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
            <div className="w-6 h-6 mr-2 relative sm:w-8 sm:h-8">
              <Image
                className="object-cover"
                src={
                  image || imageUrl + "" + value.owner.featuredImage.public_id
                }
                sizes="full"
                fill={true}
                alt="User Icon"
              />
            </div>
            <h1 className="text-sm font-semibold sm:text-base text-gray-700 hover:text-black">
              {value.owner.userName}
            </h1>
          </div>
          <h1 className="text-sm sm:text-base">
            {value.owner.followersCount} follower
          </h1>
        </div>
      )}

      <div className="w-[90%] h-[35%] relative rounded-md sm:h-[40%] sm:w-full">
        <Image
          className="object-cover"
          src={image || imageUrl + "" + value.featuredImage.public_id}
          fill={true}
          sizes="full"
          alt="Image"
        />
      </div>
      <h1 className="text-lg sm:text-xl">{value.title.slice(0, 25)}</h1>
      <p className="text-sm sm:text-base">{value.content.slice(0, 25)}</p>
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
