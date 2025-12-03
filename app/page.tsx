"use client"
import Navbar from "@/components/Navbar";
import HeroContentRight from "@/components/HeroContentRight";
import Brands from "@/components/Brands";
import HeroContentLeft from "@/components/HeroContentLeft"; 

export default function Home() {

  return (
    <>
      <div className="bg-linear-to-br from-orange-200 via-violet-700 to-slate-900 min-h-screen">
        <Navbar />
        <div className="flex">
        <HeroContentLeft />
        <HeroContentRight />
        </div>
        <Brands/>
      </div>
    </>
  );
}
