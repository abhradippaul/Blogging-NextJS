import { blog } from "@/data";
import Link from "next/link";

function page() {
  return (
    <div className="bg-slate-200 min-h-[93dvh]">
      <div className="max-w-7xl mx-auto px-2 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="max-w-5xl m-auto">
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center justify-center">
                <img
                  className="w-10 h-10 rounded-full mr-4 sm:w-20 sm:h-20"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
                  alt="Owner Image"
                />
                <div>
                  <Link href={`/user/${blog.data.owner.userName}`} className="font-semibold text-lg sm:text-xl">
                    Abhradip Paul
                  </Link>
                  <h6>4 Followers</h6>
                </div>
              </div>
              <button className="flex items-center justify-center bg-green-400 text-white px-4 py-2 text-lg sm:text-xl rounded-md hover:bg-green-500">
                <h1 className="mx-2">Follow</h1>
                <i className="fa-solid fa-plus mx-2"></i>
              </button>
            </div>
            {/* <h1>{Date.now()}</h1> */}
            <img
              className="w-full mb-4"
              src="https://images.unsplash.com/photo-1709842665072-6404e47a5386?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Image"
            />
            <h2 className="text-xl font-bold mb-4 sm:text-3xl">
              {blog.data.title}
            </h2>
            <p className="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              nesciunt nisi dolores nulla, vitae natus adipisci reiciendis culpa
              numquam sed asperiores mollitia explicabo facilis? Doloribus,
              doloremque hic exercitationem eligendi reprehenderit ad sed iusto
              sint ratione explicabo cumque labore ea iure, veniam odit! Ad sit
              excepturi, velit laudantium deserunt sint fugit alias possimus hic
              totam officiis vitae provident, dolore libero amet recusandae
              tempore voluptas aliquam asperiores doloremque! Recusandae
              voluptates nihil provident cupiditate asperiores temporibus quidem
              voluptatibus aperiam laborum sunt. Praesentium nesciunt sapiente
              velit similique dolore molestias vero cupiditate. Officia, fugit
              quibusdam?
            </p>
            <div className="flex items-center justify-between cursor-pointer">
              <div className="border py-2 text-xl rounded-md w-1/3 flex items-center justify-center sm:text-2xl hover:bg-slate-50">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="border py-2 text-xl rounded-md w-1/3 flex items-center justify-center sm:text-2xl hover:bg-slate-50">
                <i className="fa-regular fa-comment"></i>
              </div>
              <div className="border text-xl rounded-md w-1/3 flex items-center justify-center sm:text-2xl py-2 hover:bg-slate-50">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2990/2990295.png"
                  className="h-6"
                  alt="share"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
