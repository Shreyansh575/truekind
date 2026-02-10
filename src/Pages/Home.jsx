import React, { useEffect, useRef } from 'react'
import Homevideocontent from '../Components/Home/Homevideocontent'
import Nav from '../Components/Navigation/Nav'
import Videocontent from '../Components/Home/Videocontent'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Secondcontent from '../Components/Home/Secondcontent'
import Explore from '../Components/Home/Explore'
import Endimg from '../Components/Shop/Endimg'
import Radicaltranperency from '../Components/Home/Radicaltranperency'

const Home = () => {
 


  return (
    <div className='w-full '>
       
         <Nav/>
      <Homevideocontent/>
      <Videocontent/>
      <Secondcontent/>
      <Explore/>
      <Radicaltranperency/>
      <Endimg/>
        
    </div>
  )
}

export default Home
