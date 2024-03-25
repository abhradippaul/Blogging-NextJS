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
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<Array<any>>([]);
  const { user, status, setStatus } = UseUserContext();
  useEffect(() => {
    setLoading(false)
    setStatus(true)
    // blogApi("blog")
    //   .then((e) => {
    //     setData(e.data);
    //   })
    //   .catch((e) => {
    //     console.log("The error is ", e);
    //   })
    //   .finally(() => setLoading((prev) => !prev));
  }, []);

  return (
    data && (
      <main className="bg-slate-200 min-h-screen">
        <div className="max-w-7xl mx-auto px-2 py-4 flex flex-wrap gap-3 justify-around">
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            data.map((e) => <Card value={e} key={e._id} />)
          )}
          {/* <Card value={{test : "test"}} /> */}
        </div>
      </main>
    )
  );
}
