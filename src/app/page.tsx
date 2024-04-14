"use client";
import { UseUserContext } from "@/Context/UserContext";
import Card from "@/components/Card";
import HomePageCard from "@/components/Skeleton/HomePageCard";
import { blogApi } from "@/utils/ConnectApi";
import { getItemLocalStorage } from "@/utils/LocalStorage";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

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
  const { user, setUser, status, setStatus } = UseUserContext();
  useEffect(() => {
    setLoading(true);
    const userData = getItemLocalStorage("isUserLoggedIn");
    if (userData) {
      setStatus(true);
      setUser(userData);
    }
    blogApi("blog")
      .then((e) => {
        if (e.success) {
          setData(e.data);
          console.log(e.data);
        }
      })
      .catch((e) => {
        console.log("The error is ", e);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="bg-slate-200 min-h-screen">
      {/* {data.length}
      {loading ? <h1>Loading... </h1> : <h1>This is my static line</h1>} */}
      <div className="max-w-7xl mx-auto px-2 py-4 flex flex-wrap gap-4 justify-around">
        {data.map((e) => (
          <Card value={e} key={e.slug} />
        ))}
        {/* )} */}
        {/* <Card value={{test : "test"}} /> */}
      {loading && (
        <div className="w-full flex flex-wrap gap-4">
          <HomePageCard />
          <HomePageCard />
          <HomePageCard />
          <HomePageCard />
          <HomePageCard />
          <HomePageCard />
        </div>
      )}
      </div>
    </main>
  );
}
