import React, { useRef } from 'react'
import heroVideo from "../Videos/hero.mp4";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Homevideocontent = () => {
  
  return (
     <div className=''>
      
      <video className='w-screen max-md:-mt-15 max-md:h-[100vh] h-screen object-cover' src={heroVideo}
        autoPlay
        muted
        loop
      />
    </div>
  )
}

export default Homevideocontent
