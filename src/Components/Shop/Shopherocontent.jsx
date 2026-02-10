import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Shopherocontent = () => {
  const landRef = useRef()
  const landtRef = useRef()
  const pathRef = useRef(null);
  const openRef = useRef(null);




  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.out",
    });
  });


  const [xpos, setxpos] = useState(0)
  const [ypos, setypos] = useState(0)

  const handleMouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY
    setxpos(x-250)
    setypos(y-560)
    console.log(y);
  };
  
    useEffect(()=>{
      gsap.fromTo(landRef.current.children,{
        opacity:0,
        yPercent:100
      },{
        opacity:1,
        yPercent:1,
        duration:1.3
      })
      gsap.fromTo(landtRef.current,{
        opacity:0,
        yPercent:100
      },{
        opacity:1,
        yPercent:1,
        duration:1.3
      })
    },[])

  useGSAP(()=>{
    if(xpos<=-70 && ypos>=70){
      setxpos(0)
      
      
    }
    gsap.to(openRef.current.children,{
      translateX:`${xpos}`,
      translateY:`${ypos}`,
     
      
      
    })
  },[xpos,ypos])



  return (
    < >

    <div   className="w-full flex justify-center items-center  -mt-150 py-10">

    <div ref={landtRef} className="uppercase font-[Semibold] text-7xl text-gray-700 -ml-50 -mt-50 ">Meet Our</div>



      <div className=" ml-40">
      <svg
        className="block"
        width="450"
        height="300"
        viewBox="0 0 560 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M554.586 348.365C554.788 348.594 555.137 348.616 555.365 348.414L559.089 345.128C559.317 344.926 559.339 344.577 559.137 344.349C558.936 344.12 558.587 344.099 558.358 344.3L555.049 347.221L552.128 343.912C551.926 343.683 551.577 343.661 551.349 343.863C551.12 344.065 551.098 344.413 551.3 344.642L554.586 348.365ZM1.16986 31.8883C154.053 -17.5738 296.512 -4.53168 398.664 53.8484C500.798 112.218 562.686 215.931 554.449 347.966L555.551 348.035C563.814 215.57 501.702 111.464 399.211 52.8902C296.738 -5.67328 153.947 -18.6996 0.830145 30.8383L1.16986 31.8883Z"
          stroke="black"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>
      </div>
    </div>



    <div ref={landRef} className="-mt-20 flex justify-between p-1 items-center px-20 ">
      <div className="h-70 w-70   rounded-3xl bg-[#FFFFFF]">
      <div className="grid text-4xl text-gray-800 mt-5 ml-5">
        <div className="font-[Semibold]">Undersatnd</div>
        <div className="flex  gap-2">
    <div className="font-[Semibold]">Your</div>
        <div className="font-[Editorialitalic]">Routine</div>
        </div>
      </div>



      <div className="font-[Semibold] text-[12px] px-5 mt-4 text-[#a5a5a5]">
        Skincare is not just about the products you
use, but it’s also about how you use those
products effectively. Head over to clean
journal to read more.
      </div>

<div  ref={openRef} className="h-10  justify-center relative items-center mt-2  ml-10 w-50"  onMouseMove={handleMouseMove}>


      <div  className={`bg-[#3B3B3B] hover:cursor-pointer w-50 text-white uppercase font-[Regular] text-center rounded-4xl absolute shadow-2xl  py-3`}>
        Read More
      </div>
      </div>
      </div>




      <div className="text-[83px] text-gray-800 leading-20 w-80 text-center font-[Editorialitalic]">complete
lineup</div>
    </div>
    </>
  );
};

export default Shopherocontent;
