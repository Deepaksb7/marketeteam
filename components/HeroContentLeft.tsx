import { ChevronRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
const HeroContentLeft = () => {

  useGSAP(()=>{

    const textSplit = SplitText.create(".firstText",{
      type: "words"
    })

    const textSplit2 = SplitText.create(".secondText",{
      type: "words"
    })

    const tl = gsap.timeline({delay:0.5})

    tl.addLabel("start")

    tl.from(textSplit.words,{
      opacity:0,
      y:-100,
      duration:1,
      ease:"power3.out",
      stagger:0.40
    },"start")

    tl.from(textSplit2.words,{
      opacity:0,
      y:100,
      duration:1,
      ease:"power3.out",
      stagger:0.85
    },"start")

    tl.from(".btn",{
      duration:1,
      clipPath:"polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      ease:"power3.out",
    },"-=0.8")

    tl.to(textSplit.words,{
      color:"black",
      duration:1,
      ease:"power3.out",
      stagger: 0.1 
    })

    tl.to(textSplit2.words,{
      color:"white",
      duration:1,
      ease:"power3.out",
      stagger: 0.1 
    }, "<")

  })

  return (
    <section className='w-1/4 mx-28 mt-28 space-y-10'> 
        <h1 className='text-6xl font-semibold text-wrap'>
            <span className='firstText text-white'>Unlock Top Marketing Talent You Though Was Out Of Reach - </span><span className='secondText text-black'>Now Just One Click Away!</span> 
        </h1>

        <button style={{clipPath:"polygon(100% 0, 0 0, 0 100%, 100% 100%)"}} className='flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white btn'>
            Start Project
            <ChevronRight/>
        </button>
    </section>
  )
}

export default HeroContentLeft