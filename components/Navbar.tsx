"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
const Navbar = () => {

  useGSAP(()=>{
    const textSplit = SplitText.create(".logo",{
      type: "chars"
    })

    const textSplit2 = SplitText.create(".links",{
      type: "chars"
    })

    const t1 = gsap.timeline({delay:1})

    t1.addLabel("start")
  
    t1.from(".nav", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    },"start")

    .from(textSplit.chars,{
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05
    },"start")

    .from(textSplit2.chars,{
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05
    },"-=0.8")
    
    .to(".button",{
      opacity: 1,
      duration: 1,
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power3.out",
    },"-=0.8")
  })

  return (
    <nav className='flex justify-between px-28 pt-9 items-center nav'>
        <ul className='flex gap-6 items-center '>
            <div className='text-xl font-semibold logo'>
                Marketeam
            </div>
            <li className=" links">Your Team</li>
            <li className=" links">Solutions</li>
            <li className=" links">Blog</li>
            <li className=" links">Pricing</li>
        </ul>
        <div className='text-white flex gap-6'>
            <button className="links">Log In</button>
            <button style={{clipPath:"polygon(0 0, 0 0, 0 100%, 0 100%)"}} className='bg-black px-4 py-2 rounded-full links button opacity-0'>Join Now</button>
        </div>
    </nav>
  )
}

export default Navbar