import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Navigation/Nav'

const Details = () => {
  const startRef = useRef()
    const {state:elem} = useLocation()
    
    useGSAP(()=>{
      gsap.fromTo(startRef.current,{
        scale:0
      },{
        scale:1,
        duration:0.8
      })
    },[])
  return (
    <div ref={startRef} className={`h-screen w-screen ${elem.bg} flex`}>
      <Nav/>
      <div className='w-[60vw] flex justify-center'>
        <img src={elem.img} className=' h-screen object-cover object-left ' alt="" />
      </div>
      <div className='bg-[#F2F2F2] h-[90vh]  w-[55vw] mt-15 '>
        <div className='ml-19 mt-13'>


    < div className='border-1 w-40 flex justify-center rounded-full uppercase font-[Regular] text-[13px] items-center py-1 mt-3  text-[#444444]'>
      {elem.heading}
    </div>

    <div className='text-[50px] w-140 leading-15 text-[#3B3B3B] mt-10 font-[Semibold]'>
      {elem.name}
    </div>

    <div className=' mt-5 font-[Semibold] text-[20px]'>
      {elem.price}
    </div>

    <div className='leading-5 mt-5 font-[Regular] text-[12px] text-[#808283]'>
      {elem.info}
    </div>

    <div className={`uppercase cursor-pointer ${elem.bg} w-100 flex h-11  text-white underline text-[12px] mt-10 ml-5 rounded-full py-3`}>
      <div className='flex w-100 justify-center'>

      Add to Cart 
      </div>
      <div className='bg-white h-9 w-11 -mt-2 rounded-full mr-2 flex justify-center items-center  '><svg data-v-aa957220="" class="icon-cart" width="17" height="20" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-aa957220="" d="M1.19891 5.8049C1.2448 5.02484 1.89076 4.41576 2.67216 4.41576H12.0298C12.8112 4.41576 13.4572 5.02485 13.5031 5.8049L14.0884 15.7547C14.1382 16.6023 13.4643 17.3171 12.6151 17.3171H2.08688C1.23775 17.3171 0.563767 16.6023 0.61363 15.7547L1.19891 5.8049Z" stroke="#D4969B" stroke-width="0.983866"></path><path data-v-aa957220="" d="M11.4354 6.3737C11.4354 3.21604 9.60694 0.65625 7.35147 0.65625C5.096 0.65625 3.26758 3.21604 3.26758 6.3737" stroke="#D4969B" stroke-width="0.983866" stroke-linecap="round"></path></svg>
      

      
      </div>
    </div>





    </div>
      </div>
    </div>
  )
}

export default Details
