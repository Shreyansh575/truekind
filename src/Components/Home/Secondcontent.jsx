import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Secondcontent = () => {
  gsap.registerPlugin(ScrollTrigger)
  const bodyRef = useRef()
  const scrollRef = useRef()
  const imgRef = useRef()
  const img2Ref = useRef()
  const scroll2Ref = useRef()
  const scroll3Ref = useRef()
  const scroll4Ref = useRef()


useGSAP(() => {
  gsap.to(scrollRef.current, {
    scrollTrigger: {
      trigger: bodyRef.current,
      start: 'top 1%',
      end: 'bottom bottom',
  
      
      onUpdate: (self) => {
        const progress = self.progress; 
        const moveAmount = progress * -400; 
        
    
        
        gsap.set([scrollRef.current,scroll2Ref.current,scroll3Ref.current,imgRef.current,img2Ref.current,scroll4Ref.current], {
          y: moveAmount
        });
        
      }
    }
  });
}, []);

  return (
    <div ref={bodyRef} className='mt-30 relative h-[220vh]  ml-20   z-50000   p-1'>

    <div >
      <div className='text-[60px] w-180 text-[#5a5a5a] font-[Semibold] leading-15 mt-18 uppercase '>Clean, Conscious,
Performance</div>

<div className='flex'>
  <div className='w-70 text-[Semibold] leading-4 text-[13px] mt-10 text-[#696969]'>Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!</div>
  <div className='font-[Editoriallightitalic] mt-5 underline decoration-2 underline-offset-6 decoration- ml-10 text-7xl'>skincare</div>
</div>
    </div>

<div>

   <div ref={scrollRef} className='bg-[#F5F5F5] mt-50 rounded-2xl ml-60 h-70 w-60 relative z-20'>
            <div className='flex  justify-center'>
              <img src="https://truekindskincare.com/icon-radical-transparency.svg" alt="" className='h-20 w-20' />
            </div>


            <div>
              <div className='font-[Semibold] flex justify-center '>
                <div className='w-30 leading-4 text-center'>

              Radical Transparency
                </div>
              </div>
              <div className='text-center text-[13px] mt-10 px-5 leading-5  text-[#aaaaaadf] font-[Reg]'>
                No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it and how much.
              </div>
            </div>
</div>


 <div ref={scroll2Ref} className='bg-[#F5F5F5] mt-20 rounded-2xl  h-70 w-60 relative z-20'>
            <div className='flex  justify-center'>
              <img src="https://truekindskincare.com/icon-clean-beyond-reproach.svg" alt="" className='h-20 w-20' />
            </div>


            <div>
              <div className='font-[Semibold] flex justify-center '>
                <div className='w-30 leading-4 text-center'>

             Clean, Beyond Reproach
                </div>
              </div>
              <div className='text-center text-[13px] mt-10 px-5 leading-5  text-[#aaaaaadf] font-[Reg]'>
               Truly clean with only verified ingredients; and free from over 1800 questionable ingredients. Because what you put on your skin matters.
              </div>
            </div>
</div>


<div ref={scroll3Ref} className='bg-[#F5F5F5] mt-0 ml-190 rounded-2xl  h-70 w-60 absolute z-20'>
            <div className='flex  justify-center'>
              <img src="https://truekindskincare.com/icon-highest-standards.svg" alt="" className='h-20 w-20' />
            </div>


            <div>
              <div className='font-[Semibold] flex justify-center '>
                <div className='w-30 leading-4 text-center'>

            Potent & Multi Tasking
                </div>
              </div>
              <div className='text-center text-[13px] mt-10 px-5 leading-5  text-[#aaaaaadf] font-[Reg]'>
             Our formulas are chock-a-block with actives, anti oxidants, skin restoring agents backed by dermal science that aim to deliver real results.
              </div>
            </div>
</div>


<div ref={scroll4Ref} className='bg-[#F5F5F5] -mt-20 ml-255 rounded-2xl  h-70 w-60 absolute z-20'>
            <div className='flex  justify-center'>
              <img src="https://truekindskincare.com/icon-conscious-responsible.svg" alt="" className='h-20 w-20' />
            </div>


            <div>
              <div className='font-[Semibold] flex justify-center '>
                <div className='w-30 leading-4 text-center'>

          Conscious & Responsible
                </div>
              </div>
              <div className='text-center text-[13px] mt-10 px-5 leading-5  text-[#aaaaaadf] font-[Reg]'>
            Peta Certified Vegan and Cruelty Free. Our products are always housed in responsible packaging and made sustainably.
              </div>
            </div>
</div>


<div ref={imgRef}>
  <img src="https://truekindskincare.com/_ipx/w_768&f_webp&q_95/leaf.png" alt="" className='relative  -mt-100 ml-230 h-50 object-cover' />
</div>

<div ref={img2Ref} >
  <img className='absolute mt-80 ml-50 h-50 object-cover ' src="https://truekindskincare.com/_ipx/w_768&f_webp&q_95/empress.png" alt="" />
</div>



     <div className=' -mt-230   ml-40'>


     
         
<svg viewBox="0 0 800 1200" class="w-[900px] absolute -z-10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="ellipsoidClipRotateLarge">
      <ellipse
        cx="400"
        cy="600"
        rx="230" 
        ry="480"
        
        transform="rotate(50 400 600)"
      />
    </clipPath>
  </defs>

  <image
    href="https://truekindskincare.com/_ipx/w_768&f_webp&q_95/ingredients-clip.jpg"
    width="800"
    height="1000" 
    
    clip-path="url(#ellipsoidClipRotateLarge)"
    preserveAspectRatio="xMidYMid slice"
  />
</svg>






</div>




















</div>
      
    </div>
  )
}

export default Secondcontent
