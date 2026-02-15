import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const Topcontext = () => {
  const landRef = useRef()
  const landtRef = useRef()
  const arrowRef = useRef()
    const arrow1Ref = useRef()
    const arrow2Ref = useRef()
    const [hoverc, sethoverc] = useState(0)

    useGSAP(()=>{
        if(hoverc===1){
            gsap.to(arrow1Ref.current,{
                opacity:0,
                y:100,
                duration:0.5
            })
            gsap.to(arrow2Ref.current,{
                opacity:1,
                y:50,
                duration:0.5
            })
        }
        if(hoverc===0){
            gsap.to(arrow1Ref.current,{
                opacity:1,
                y:0,
                duration:0.3
            })
            gsap.to(arrow2Ref.current,{
                opacity:0,
                y:0,
                duration:0.3
            })
        }
    },[hoverc])

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
        y:100
      },{
        opacity:1,
        y:1,
        duration:1.3
      })

      gsap.fromTo(arrowRef.current,{
        scale:0
      },{
        scale:1,
        duration:1.3
      })
      
    },[])


  return (
    <div>
      <div className='flex justify-center max-md:mt-30 max-md:w-[70vw] max-md:ml-8 mt-30'>
        <img className='relative ' src="	https://truekindskincare.com/_ipx/w_1280&f_webp&q_95/philosophy.png" alt="" />
       
      </div>

 <div className='-mt-100 max-md:hidden'>
        <svg
  viewBox="0 0 1440 320"
  className="w-full h-[250px]"
  preserveAspectRatio="none"
>
  <path
    d="
      M0 150
      C 450 20, 480 600, 780 360
      S 1200 500, 1475 180, 
    "
    fill="none"
    stroke="#9A9A9A"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>

      </div>


      <div  className='flex text-[115px] ml-10 -mt-95 text-[#3B3B3B] max-md:text-[60px] max-md:-mt-63  gap-2'>
        <div ref={landtRef} className='font-[Editorialitalic]'>Be </div>
        <div ref={landtRef}  className='font-[Semibold]'><div>True</div> </div>
      </div>

<div  className='flex max-md:hidden  justify-end mr-40'>
      <div ref={arrowRef} onMouseEnter={()=>{
        sethoverc(1)
      }} onMouseLeave={()=>{
        sethoverc(0)
      }} className='bg-[#3B3B3B] w-15  items-center  flex hover:scale-130 hover:duration-500 justify-center rounded-full h-15'>
        <div ref={arrow1Ref} className={`${hoverc===0 ? 'flex':''} flex justify-center`}><svg data-v-8cc131a5="" class="icon-down" width="8" height="36" viewBox="0 0 8 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66787 35.6599C3.8513 35.8433 4.1487 35.8433 4.33212 35.6599L7.32126 32.6708C7.50469 32.4873 7.50469 32.1899 7.32126 32.0065C7.13783 31.8231 6.84043 31.8231 6.65701 32.0065L4 34.6635L1.34299 32.0065C1.15956 31.8231 0.862167 31.8231 0.678739 32.0065C0.495311 32.1899 0.495311 32.4873 0.678739 32.6708L3.66787 35.6599ZM3.5303 0.769531L3.5303 35.3278L4.4697 35.3278L4.4697 0.769531L3.5303 0.769531Z" fill="white"></path></svg></div>

        <div ref={arrow2Ref} className={`${hoverc===1 ? 'flex':''}flex -ml-2 justify-center -mt-25 opacity-0`}><svg data-v-8cc131a5="" class="icon-down" width="8" height="36" viewBox="0 0 8 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66787 35.6599C3.8513 35.8433 4.1487 35.8433 4.33212 35.6599L7.32126 32.6708C7.50469 32.4873 7.50469 32.1899 7.32126 32.0065C7.13783 31.8231 6.84043 31.8231 6.65701 32.0065L4 34.6635L1.34299 32.0065C1.15956 31.8231 0.862167 31.8231 0.678739 32.0065C0.495311 32.1899 0.495311 32.4873 0.678739 32.6708L3.66787 35.6599ZM3.5303 0.769531L3.5303 35.3278L4.4697 35.3278L4.4697 0.769531L3.5303 0.769531Z" fill="white"></path></svg></div>
      </div>
      </div>


      <div ref={landRef} className='flex justify-between px-7 max-md:px-25 max-md:mt-60  mt-60'>
        <div className='w-50 max-md:mt-16 text-[12px] font-[Regular] mt-5 max-md:leading-3 max-md:-ml-15 text-[#7A7A7A]'>Our simple philosophy in all that we
do. We are passionate about skin
care, we are truekind.</div>

<div className='flex text-8xl max-md:text-[60px] text-[#3B3B3B] max-md:-ml-50  gap-5'>
  <div className='font-[Editoriallightitalic]'>Be </div>
  
  <div className='font-[Semibold]'>Kind</div>
</div>
      </div>
    </div>
  )
}

export default Topcontext
