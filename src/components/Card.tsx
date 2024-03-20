"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
function Card() {
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <Link
      href="/blog/blog1"
      className="h-[400px] w-[250px] rounded-md bg-white flex items-center justify-around flex-col px-4 py-2 sm:h-[500px] sm:w-[300px]"
    >
      {/* <h1 className="text-sm sm:text-base">{date?.toDateString()}</h1> */}
      <div className="w-full flex items-center justify-between mb-2">
        <div className="flex items-center justify-center">
          <img
            className="w-6 h-6 mr-2 sm:w-8 sm:h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXfiLPPHdy_97C8D3orOwzk1iVHHt3wJPLg&s"
            alt="icon"
          />
          <h1 className="text-sm font-semibold sm:text-base text-gray-700 hover:text-black">
            Abhradip Paul
          </h1>
        </div>
        <h1 className="text-sm sm:text-base">3 follower</h1>
      </div>
      <img
        className="w-[90%] h-[35%] object-cover rounded-md sm:h-[40%] sm:w-full"
        src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt="Image"
      />
      <h1 className="text-lg sm:text-xl">Title</h1>
      <p className="text-sm sm:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
        accusamus voluptates quis vero cum quos sunt ullam blanditiis assumenda
        asperiores?
      </p>
      <div className="w-full flex">
        <div className="w-1/2 border flex items-center justify-center hover:bg-slate-100">
          <div className="text-lg max-w-max sm:text-xl ">
            <i className="fa-regular fa-heart"></i>4
          </div>
        </div>
        <div className="w-1/2 border flex items-center justify-center hover:bg-slate-100">
          <div className="text-lg max-w-max sm:text-xl">
            <i className="fa-regular fa-comment"></i>2
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
