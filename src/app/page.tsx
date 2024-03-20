"use client"
import { apicall } from "@/ApiCall";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(prev => !prev)
    apicall()
  },[])
  return (
    <main className="bg-slate-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-2 py-4" >
        <Card />
      </div>
    </main>
  );
}
