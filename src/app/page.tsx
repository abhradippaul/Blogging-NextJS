"use client";
import { UseUserContext } from "@/Context/UserContext";
import Card from "@/components/Card";
import { blogApi } from "@/utils/ConnectApi";
import { useEffect, useState } from "react";

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

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<any>>([]);
  const { user, status } = UseUserContext();
  useEffect(() => {
    setLoading((prev) => !prev);
    blogApi("blog")
      .then((e) => {
        setData(e.data);
      })
      .catch((e) => {
        console.log("The error is ", e);
      });
  }, []);

  return (
    data && (
      <main className="bg-slate-200 min-h-screen">
        <div className="max-w-7xl mx-auto px-2 py-4 flex flex-wrap gap-3 justify-around">
          {data.map((e) => (
            <Card value={e} key={e._id} />
          ))}
          {/* <Card value={{test : "test"}} /> */}
        </div>
      </main>
    )
  );
}
