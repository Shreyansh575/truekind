import React, { useEffect, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Videocontent = () => {
  const landRef = useRef()
  const landtRef = useRef()
  const arrowRef = useRef()
  const arrow2Ref = useRef()
  const [count, setcount] = useState(0)

  
  useGSAP(()=>{
    gsap.fromTo(landRef.current.children,{
      yPercent:100,
      opacity:0
    },{
      yPercent:1,
      duration:1,
      opacity:1
    })
   
},landRef)

  useGSAP(()=>{ if (count===1) {
    
    gsap.to(arrowRef.current,{
      xPercent:200,
      opacity:0
    })
    gsap.to(arrow2Ref.current,{
      xPercent:45,
      delay:0.5,
      opacity:1
    })
  }

  if (count===0) {
    
    gsap.to(arrowRef.current,{
      xPercent:-40,
      opacity:1
    })
    gsap.to(arrow2Ref.current,{
      xPercent:-100,
     
      opacity:0
    })
  }
  },[count])


  return (
    <div className='relative   -mt-[85vh] ml-[30vw] max-md:-mt-140 z-10'>
     
        <div ref={landRef} className='flex flex-wrap text-center text-[#fdfdfd] w-[50vw] max-md:w-[90vw] max-md:-ml-20 max-md:text-[40px] text-7xl'>
            <div  className='font-[Editoriallightitalic]'>True &nbsp;</div>
            <div   className='font-[Semibold] flex flex-wrap'>to Oneself
</div>
            <div  className='font-[Semibold] flex flex-wrap ml-6'>kind to &nbsp;
</div>
            <div className='font-[Editoriallightitalic]'>Nature</div>
        </div>

<div ref={landRef}>


        <div  className='w-[30vw] mt-2 leading-5 text-[#ededed] max-md:-ml-20 max-md:w-[80vw] text-center ml-20 font-[Semibold]'>Unreservedly honest products that truly work, be
kind to skin and the planet – no exceptions!</div>
</div>




<div >
<div ref={landRef} onMouseEnter={()=>{
  setcount(1)
  console.log(count);

}}

 onMouseLeave={()=>{
  setcount(0)
  console.log(count);
  
}}

className='mt-[30vh]  bg-white hover:cursor-pointer p-1 rounded-full flex w-[46vw] -ml-10  justify-center max-md:w-[90vw] max-md:-ml-21 '>
<div className='text-[12px] underline-offset-4 max-md:w-90 ml-60 max-md:ml-5 underline flex items-center '>EXPLORE ALL PRODUCT
</div>

<div className='group rounded-full w-10 py-3 px-0 bg-[#434343] flex items-start ml-50 max-md:ml-10'>
   <div ref={arrow2Ref} className={`${count===0 ? 'opacity-0 ':'block'}`}>

  
  <svg data-v-1e53e120="" class="icon-arrow" width="18" height="15" className='ml-[3px]' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="white"></path></svg>
  </div>
  <div ref={arrowRef} >
  <svg data-v-1e53e120="" class="icon-arrow" width="18" height="15"  viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="white"></path></svg>
  </div>
</div>
</div>
</div>
    </div>





  )
}

export default Videocontent
 