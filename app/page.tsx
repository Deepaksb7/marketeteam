"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import HeroContentRight from "@/components/HeroContentRight";
import Brands from "@/components/Brands";
import HeroContentLeft from "@/components/HeroContentLeft"; 
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })

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
