import { CircleUserIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroContentRight = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(
      ".centerText",
      { 
        opacity:0,
        x:200,
        y:200,
        duration: 2, 
        ease: "power3.out", 
      }
    );

    tl.fromTo(".outer",
    { clipPath: "circle(0% at 50% 50%)" },
    { clipPath: "circle(100% at 50% 50%)", duration: 2, ease: "power3.out" } 
  ,"-=0.5");

    tl.to(".outer", {
      rotate: -360, 
      duration: 2,
      ease: "power3.out",
      repeat: 2, 
    },"+=0.5");
    
    tl.to(".middle1Ring", {
      rotate: -360, 
      duration: 2,
      ease: "power3.out",
      repeat: 2, 
 
    },"+=0.5");


    tl.to(".middle2Ring", {
      rotate: -360, 
      duration: 2,
      ease: "power3.out",
      repeat: 2, 
    },"+=0.5");



    tl.to(".innerRing", {
      rotate: -360, 
      duration: 1.5,
      ease: "power3.out",
      repeat: 2, 
   
    },"+=0.5");
    
  });

  return (
    <div className="mt-15 w-3/6 flex items-center justify-center">

      <div className="absolute text-white flex flex-col z-10 items-center centerText w-full ">
                <h2 className=" absolute text-7xl top-[-48px] font-semibold">20K+</h2>
                <p className="absolute top-[19px]">Specilists</p>
        </div>
      
      <div className=" relative rounded-full h-150 w-150 flex items-center justify-center outer">
      <div className="relative border-white border rounded-full h-140 w-140 flex items-center justify-center circleAniOuter outerRing">
        <div className="absolute left-1 top-[132px]">
          <CircleUserIcon className="text-white h-12 w-12" />
        </div>
        <div className="absolute left-[-5] bottom-[151px]">
          <CircleUserIcon className="text-white h-12 w-12" />
        </div>
        <div className="absolute right-[136px] top-0">
          <CircleUserIcon className="text-white h-12 w-12" />
        </div>
        <div className="absolute right-[-23px] bottom-[224px] ">
          <CircleUserIcon className="text-white h-12 w-12" />
        </div>

        <div className="absolute border-white border rounded-full h-120 w-120 flex items-center justify-center circleAniMiddle1 middle1Ring">
          <div className="absolute bottom-[-17px] right-[174px] ">
            <CircleUserIcon className="text-white h-12 w-12" />
          </div>

          <div className="absolute border-white border rounded-full h-100 w-100 flex items-center justify-center circleAniMiddle2 middle2Ring">
            <div className="absolute left-[29px] bottom-[43px] ">
              <CircleUserIcon className="text-white h-12 w-12" />
            </div>
            <div className="absolute top-[6px] left-[70px] ">
              <CircleUserIcon className="text-white h-12 w-12" />
            </div>
            <div className="absolute top-[60px] right-[12px] ">
              <CircleUserIcon className="text-white h-12 w-12" />
            </div>

            <div className="absolute border-white border rounded-full h-80 w-80 flex items-center justify-center circleAniInner innerRing">
              <div className="absolute bottom-[30px] right-[20px] ">
                <CircleUserIcon className="text-white h-12 w-12" />
              </div>

              {/* <div className="absolute text-white flex flex-col items-center centerText w-full ">
                <h2 className="absolute top-[-48px] text-7xl font-semibold">20K+</h2>
                <p className="absolute top-[19px]">Specilists</p>
              </div> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HeroContentRight;
