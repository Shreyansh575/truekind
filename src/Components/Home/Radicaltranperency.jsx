import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

const Radicaltranperency = () => {
    gsap.registerPlugin(ScrollTrigger)
    const bodyRef = useRef()
    const imgRef = useRef()


    useGSAP(()=>{
        gsap.to(imgRef.current,{
            scrollTrigger:{
                trigger:bodyRef.current,
                scrub:true,
          
            onUpdate:(e)=>{
                const movey = (e.progress)*(-800)
                console.log(movey);
                gsap.set(imgRef.current,{
                    y:movey
                })
            }
            }
        })
    },[])




  return (
    <div ref={bodyRef} className=' p-1 bg-[#F5F5F5] h-[160vh]'>
      <div className='mt-40 p-1 '>
            <div className='border-1 ml-65 absolute mt-13 w-36 text-center font-[Regular] text-[14px] p-1 px-5 rounded-full border-[#545454]'>ETHOS</div>
            
            <div className='uppercase text-center font-[Semibold] text-[120px]  leading-25 text-[#3B3B3B]'>
                Radical
Transparency.
            </div>
      </div>


<div className='mt-20 flex justify-between'>



      <div className='flex ml-41'>
        <div className='bg-[#3B3B3B] w-11 h-11 flex justify-center items-center rounded-full'>
            <svg data-v-6661e109="" class="icon-arrowlong" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7425 0.726739C18.7425 0.467333 18.5322 0.257042 18.2728 0.257042L14.0455 0.257042C13.7861 0.257042 13.5758 0.467333 13.5758 0.72674C13.5758 0.986147 13.7861 1.19644 14.0455 1.19644L17.8031 1.19644L17.8031 4.95401C17.8031 5.21342 18.0134 5.42371 18.2728 5.42371C18.5322 5.42371 18.7425 5.21342 18.7425 4.95401L18.7425 0.726739ZM0.786716 18.877L18.6049 1.05887L17.9406 0.394614L0.122464 18.2128L0.786716 18.877Z" fill="white"></path></svg>
        </div>
        <div className='uppercase ml-3 leading-4 mt-2 underline w-10'>
            Our phiLosophy
        </div>





        </div>


<div className='grid text-[140px]  uppercase mr-20 leading-30 text-[#3B3B3B] -mt-15'>
    <div className='font-[Editorialitalic]'>Hide</div>
    <div className='font-[Semibold]'>Nothing.</div>
</div>









      </div>





      <div className='flex justify-end mr-100 mt-30'>
    <div>
        <div className='flex'>

            <img src="https://truekindskincare.com/icon-highest-standards.svg" className='h-20 w-20' alt="" />

            <div className='w-40 flex items-center font-[Editorialreg]'>100% Transparent
Formulas</div>



        </div>



        <div className='flex mt-10'>

            <img src="https://truekindskincare.com/icon-real-results.svg" className='h-20 w-20' alt="" />

            <div className='w-30  flex items-center font-[Editorialreg]'>Only verified ingridents</div>
        </div>
        
    </div>
</div>



<div className='flex justify-end  -mt-50 mr-5'>
    <div className='space-y-5'>
        <div>
            <div className='font-[Reg] text-[12px]'>Highest Standards.
</div>
            <div className='w-60 text-[#828282] text-[12px] leading-4'>We formulate to the highest standards of efficacyand safety – using only proven, verifiedingredients in bio-compatible bases; and freefrom over 1800 questionable ingredients

</div>
        </div>



        <div>
            <div className='font-[Reg] text-[12px]'>Real Result.
</div>
            <div className='w-60 text-[#828282] text-[12px] leading-4'>Skin care packed with anti oxidants, skinreplenishing and skin restoring agents instable pH levels that don’t promise miracles,but deliver real results.

</div>
        </div>

</div>
</div>




<div className='ml-50'>
    <img ref={imgRef} src="https://truekindskincare.com/_ipx/w_768&f_webp&q_95/texture.png" className='h-150' alt="" />
</div>

    </div>
  )
}

export default Radicaltranperency
