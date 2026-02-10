import React, { useRef, useState } from 'react'
import Nav from '../Components/Navigation/Nav'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ListEndIcon } from 'lucide-react'
import Endimg from '../Components/Shop/Endimg'

const Journal = () => {
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
  return (
    <div className='py-1'>
        <Nav/>
        <div className='flex  justify-center mt-30'>
<div className=''>
        
      <div className='text-center leading-20 text-8xl text-[#3B3B3B]'>
        <div className='font-[Editoriallightitalic]'>clean</div>
        <div className='font-[Semibold] uppercase text-7xl'>journal</div>
      </div>

      <div className='w-70 font-[Regular] text-[#b9b9b9] text-[13px] mt-2 ml-8 text-center'>Our simple philosophy in all that we do. We are passionate about skin care, we are trueKind</div>
      </div>
      </div>

      <div className='flex justify-end -mt-45 mr-50'>
       <svg
      className="arrow-text"
      width="180"
      height="568"
      viewBox="0 0 260 568"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="maskarrowtext_blog" maskUnits="userSpaceOnUse">
          <path
            d="M0.271018 563.471C0.0722111 563.702 0.0982756 564.051 0.329254 564.249L4.09319 567.489C4.32415 567.688 4.67257 567.662 4.8714 567.431C5.0702 567.2 5.04412 566.851 4.81314 566.653L1.46741 563.773L4.3472 560.427C4.54599 560.196 4.5199 559.848 4.28894 559.649C4.05796 559.45 3.70955 559.476 3.51074 559.707L0.271018 563.471ZM31.6107 1.53591C212.353 101.883 273.377 237.214 254.913 349.923C236.447 462.65 138.442 552.968 0.648044 563.281L0.730409 564.381C138.975 554.034 237.444 463.386 256.002 350.101C274.563 236.797 213.162 101.07 32.1464 0.571044L31.6107 1.53591Z"
            fill="white"
          />
        </mask>
      </defs>

      <path
        d="M0.271018 563.471C0.0722111 563.702 0.0982756 564.051 0.329254 564.249L4.09319 567.489C4.32415 567.688 4.67257 567.662 4.8714 567.431C5.0702 567.2 5.04412 566.851 4.81314 566.653L1.46741 563.773L4.3472 560.427C4.54599 560.196 4.5199 559.848 4.28894 559.649C4.05796 559.45 3.70955 559.476 3.51074 559.707L0.271018 563.471ZM31.6107 1.53591C212.353 101.883 273.377 237.214 254.913 349.923C236.447 462.65 138.442 552.968 0.648044 563.281L0.730409 564.381C138.975 554.034 237.444 463.386 256.002 350.101C274.563 236.797 213.162 101.07 32.1464 0.571044L31.610 1.53591Z"
        fill="black"
        mask="url(#maskarrowtext_blog)"
      />
    </svg>
      </div>

      <div  className='flex -mt-80 justify-end mr-45'>
      <div  onMouseEnter={()=>{
        sethoverc(1)
      }} onMouseLeave={()=>{
        sethoverc(0)
      }} className='bg-[#3B3B3B] w-15  items-center  flex hover:scale-130 hover:duration-500 justify-center rounded-full h-15'>
        <div ref={arrow1Ref}  className={`${hoverc===0 ? 'flex':''} flex justify-center`}><svg data-v-8cc131a5="" class="icon-down" width="8" height="36" viewBox="0 0 8 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66787 35.6599C3.8513 35.8433 4.1487 35.8433 4.33212 35.6599L7.32126 32.6708C7.50469 32.4873 7.50469 32.1899 7.32126 32.0065C7.13783 31.8231 6.84043 31.8231 6.65701 32.0065L4 34.6635L1.34299 32.0065C1.15956 31.8231 0.862167 31.8231 0.678739 32.0065C0.495311 32.1899 0.495311 32.4873 0.678739 32.6708L3.66787 35.6599ZM3.5303 0.769531L3.5303 35.3278L4.4697 35.3278L4.4697 0.769531L3.5303 0.769531Z" fill="white"></path></svg></div>

        <div ref={arrow2Ref} className={`${hoverc===1 ? 'flex':''}flex -ml-2 justify-center -mt-25 opacity-0`}><svg data-v-8cc131a5="" class="icon-down" width="8" height="36" viewBox="0 0 8 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66787 35.6599C3.8513 35.8433 4.1487 35.8433 4.33212 35.6599L7.32126 32.6708C7.50469 32.4873 7.50469 32.1899 7.32126 32.0065C7.13783 31.8231 6.84043 31.8231 6.65701 32.0065L4 34.6635L1.34299 32.0065C1.15956 31.8231 0.862167 31.8231 0.678739 32.0065C0.495311 32.1899 0.495311 32.4873 0.678739 32.6708L3.66787 35.6599ZM3.5303 0.769531L3.5303 35.3278L4.4697 35.3278L4.4697 0.769531L3.5303 0.769531Z" fill="white"></path></svg></div>
      </div>
      </div>


      <div className='ml-15'>
        <div><img src="https://images.prismic.io/truekind/Z-Ac73dAxsiBvxdO_elegant-glass-dropper-bottles.jpg?auto=format,compress" className='h-100 w-170 object-cover ' alt="" /></div>

        <div>
          <div className='font-[Reg] text-[25px] w-120 leading-7 mt-5 hover:underline text-[#848484]'>Beauty Secrets from Around the World: Rituals and Ingredients You Need to Try</div>
        </div>
        <div className='w-120 font-[Reg] text-[12px] mt-5 leading-4 text-[#9A9A9A]'>Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create transparent skincare that is incredibly effective, safe and without harming the environment or the planet.</div>
      </div>


      <div className='flex  gap-5 mt-35 mr-15 justify-end'>
        <div>
          <img className='h-80  w-105 object-cover relative' src="https://images.prismic.io/truekind/Z-6siXdAxsiBwSnj_journal-4.jpg?auto=format,compress" alt="" />
          <div className='w-100 mt-3'>
            <div className='hover:underline font-[Reg] text-[23px] leading-7'>

Is a Toner necessary in your skincare routine?</div>
            <div className='text-[#9A9A9A] font-[Reg] text-[12px] mt-3'>28 Jan 2025</div>
          </div>
        </div>

        <div>
          <img className='h-80  w-105 object-cover relative' src="https://images.prismic.io/truekind/Z-6uzHdAxsiBwSpf_journal-3.jpg?auto=format,compress" alt="" />

            <div className='w-100 mt-3'>
            <div className='hover:underline font-[Reg] text-[23px] leading-7'>

How to Make Your Routine More Eco-Friendly</div>
            <div className='text-[#9A9A9A] font-[Reg] text-[12px] mt-3'>25 Jan 2025</div>
          </div>
        </div>
      </div>

      <div className='-mt-100'>
        <svg
  viewBox="0 0 1440 320"
  className="w-full h-[250px]"
  preserveAspectRatio="none"
>
  <path
    d="
      M0 150
      C 450 20, 480 600, 780 360
      S 1200 500, 1475 250, 
    "
    fill="none"
    stroke="#9A9A9A"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>

      </div>



      <div className='mt-70 ml-15 flex'>
        <div>
          <img src="https://images.prismic.io/truekind/Z-6shXdAxsiBwSng_journal-2.jpg?auto=format,compress" className='h-130 w-135 object-cover' alt="" />
          <div className='mt-4'>
            <div className='hover:underline decoration-2 text-[30px] w-130 leading-8 text-[#474747]'>
Your Skincare and Makeup Routine Impacts Your Well-Being</div>

<div className='w-110 mt-3 text-[13px] text-[#adadad] leading-4'>
Discover the connection between your skincare and makeup routine and overall well-being. Learn how daily beauty habits impact mental health, self-esteem, and emotional resilience, and find a healthier approach.
</div>
<div className='mt-5 text-[Reg] text-[11px] text-[#6b6b6b]'>
  20 Dc 2024
</div>
          </div>
        </div>

        <div className='ml-20 mt-50'>
          <div>
            <img src="	https://images.prismic.io/truekind/Z-6shHdAxsiBwSnf_journal-1.jpg?auto=format,compress" className='h-110 w-170 object-cover' alt="" />
          </div>


          <div>
            <div className='w-130 leading-8 mt-5 font-[Reg] hover:underline decoration-2 text-[#5b5b5b] text-[30px]'>The Ultimate Guide to Choosing the Right Foundation for Your Skin Tone</div>
            <div className='mt-3 text-[#b3b3b3] w-100 font-[Reg]  text-[13px]'>Discover global beauty secrets and rituals. Explore unique ingredients and traditions from around the world to elevate your skincare and beauty routine.</div>
            <div className='mt-1 font-[Reg] text-[12px] text-[#444444]'>14 Nov 2024</div>
          </div>
        </div>
      </div>


<Endimg/>

    </div>
  )
}

export default Journal
