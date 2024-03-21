"use client";
import Card from "@/components/Card";
import { blogApi } from "@/utils/ConnectApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    // setLoading((prev) => !prev);
    // blogApi("blog")
    //   .then((e) => {
    //     // console.log(e.data)
    //     setData(e.data);
    //   })
    //   .catch((e) => {
    //     console.log("The error is ", e);
    //   });
  }, []);
  
  return (
    <main className="bg-slate-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-2 py-4">
        {
          // data.map((e) => <Card value={e} key={e}  />)
        }
        <Card value={{test : "test"}} />
      </div>
    </main>
  );
}
