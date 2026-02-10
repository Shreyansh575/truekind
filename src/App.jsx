import React, { useRef } from "react";
import Lenis from 'lenis'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Shop from "./Pages/Shop";
import Nav from "./Components/Navigation/Nav";
import Details from "./Components/Shop/Details";
import Philosophy from "./Pages/Philosophy";
import Gallary from "./Pages/Gallary";
import Journal from "./Pages/Journal";
const App = () => {

const lenis = new Lenis({
  duration:2
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);




   const upRef = useRef()
  const text1Ref = useRef()
  const text2Ref = useRef()
  const lineRef = useRef()

  const tl = gsap.timeline();
  

  

    useGSAP(()=>{
          
         tl.fromTo(text1Ref.current,{
          
          yPercent:-60,
          opacity:0,
        },{
           duration:1,
          yPercent:0,
          ease:'circ',
          opacity:1
         }
        )
    
    
         gsap.fromTo(text2Ref.current,{
          yPercent:40,
          opacity:0
         },{
          yPercent:0,
          ease:'circ',
          opacity:1
         })
    
    
    
         tl.fromTo(lineRef.current,{
          yPercent:-100
         },{
          yPercent:0,
          duration:0.5,
         
          
         })
    
    
    
          tl.fromTo(text1Ref.current,{
          yPercent:0,
          
         },{
          yPercent:-40,
          ease:'circ',
          opacity:0
         }
        )
    
    
    
    
         tl.fromTo(text2Ref.current,{
          yPercent:0,
          
         },{
          yPercent:40,
          ease:'circ',
          opacity:0
         })
    
         tl.to(upRef.current.children,{
          yPercent:-550,
          stagger:0.1,
          duration:2.5,
          
         })
         tl.to(upRef.current.children,{
         display:'none'
          
         })
       
      },[])
  return (
   <div>
    <div ref={upRef} className='absolute text-white flex w-full  z-10000'>
          <div className='w-[50vw] overflow-hidden bg-[#2F2F2F] h-screen flex items-center justify-end'>
            <div ref={text1Ref} className='font-[Semibold] text-[40px]' >true.</div>
             <div ref={lineRef} className='w-[2px] h-screen bg-[#9d9d9d]'></div>
          </div>
         <div className='w-[50vw] bg-[#2F2F2F] h-screen flex items-center justify-start'>
            <div ref={text2Ref} className='font-[Editorialitalic] text-[40px]' >Kind.</div>
           
          </div>
         
         
      </div>
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/philosophy" element={<Philosophy/>} />
      <Route path="/journal" element={<Journal/>} />
      <Route path="/gallary" element={<Gallary/>} />
      <Route path="/shop" element={<Shop/>} />
      
      <Route path="/shop/:Productid" element={<Details/>} />
      
    </Routes>
   </div>
  );
};

export default App;
