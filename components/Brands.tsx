import Image from 'next/image'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Brands = () => {

  useGSAP(()=>{
    const t1 = gsap.timeline({delay:1})

    t1.addLabel("start")

    t1.from(".brands img",{
      x: 100,
      y:80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: {
      each: 0.7,   
      from: "end"   
    }

    },"start")
  })
  return (
    <div className="px-28 pt-19 brandsWrap">

    <div className='grid grid-cols-5 gap-29 justify-center items-center brands'>

      <Image src="/firstLogo.png" alt="brands" width={200} height={200} />
 

      <Image src="/secondLogo.png" alt="brands" width={200} height={200} />
   

      <Image src="/thirdLogo.png" alt="brands" width={200} height={200} />

 
      <Image src="/fourthLogo.png" alt="brands" width={200} height={200} />

   
      <Image src="/fifthLogo.png" alt="brands" width={200} height={200} />
  
    </div>
  
    </div>
  )
}

export default Brands