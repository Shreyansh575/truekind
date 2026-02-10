import { ChevronDown, ChevronRight, Ribbon } from 'lucide-react'
import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Sidenav = () => {
  const rangeRef = useRef()
  const topRef = useRef()
  const arrowRef = useRef()
  const rangeelemRef = useRef()
  const typeRef = useRef()
  const arrow2Ref = useRef()
  const typeelemRef = useRef()
  const ingridentRef = useRef()
  const arrow3Ref = useRef()
  const ingridentelemRef = useRef()
  const [rangec, setrangec] = useState(0)
  const [typec, settypec] = useState(0)
  const [ingridentc, setingridentc] = useState(0)

  useGSAP(()=>{
  if (rangec===1){
   
    
    gsap.to(rangeRef.current,{
      height:'12vh',
      
    })
    gsap.to(rangeelemRef.current.children,{
      display:'block',
      
      stagger:0.3
      
    })

    gsap.to(arrowRef.current,{
      rotate:90
    })
    gsap.to(typeRef.current,{
      marginTop:'10vh'
    })
  }
   if (rangec===0){
   
    
    gsap.to(rangeelemRef.current.children,{
      display:'none',
      stagger:{
        each:0.3,
        from:'end'
      }

    })
  
    gsap.to(rangeRef.current,{
      height:'0vh',
      delay:1
      
    })
    gsap.to(arrowRef.current,{
      rotate:0
    })
    gsap.to(typeRef.current,{
      marginTop:'5vh',
      delay:1.5
    })
    }
     
  
  },[rangec])
  useGSAP(()=>{
  if (typec===1){
   
    
    gsap.to(typeRef.current,{
      height:'20vh',
      
    })
    gsap.to(typeelemRef.current.children,{
      display:'block',
      
      stagger:0.3
      
    })

    gsap.to(arrow2Ref.current,{
      rotate:90
    })
     gsap.to(ingridentRef.current,{
      marginTop:'8vh'
     })
    
  }
   if (typec===0){
   
    
    gsap.to(typeelemRef.current.children,{
      display:'none',
      stagger:{
        each:0.3,
        from:'end'
      }

    })
  
    gsap.to(typeRef.current,{
      height:'0vh',
      
    })
    gsap.to(arrow2Ref.current,{
      rotate:0
    })
     gsap.to(ingridentRef.current,{
      marginTop:'0vh',
      delay:2
     })
     
     
    }
     
  
  },[typec])

  useGSAP(()=>{
  if (ingridentc===1){
   
    
    gsap.to(ingridentRef.current,{
      height:'full',
      
    })
    gsap.to(ingridentelemRef.current.children,{
      display:'block',
      
      stagger:0.3
      
    })

    gsap.to(arrow3Ref.current,{
      rotate:90
    })
   gsap.to(topRef.current,{
    marginTop:'5px'
   })
    
    
  }
   if (typec===0){
   
    
    gsap.to(ingridentelemRef.current.children,{
      display:'none',
      stagger:{
        each:0.3,
        from:'end'
      }

    })
  
    gsap.to(ingridentRef.current,{
      height:'0vh',
      
    })
    gsap.to(arrow3Ref.current,{
      rotate:0
    })
     gsap.to(topRef.current,{
    marginTop:'105px'
   })
     
     
    }
     
  
  },[ingridentc])


  
  return (
    <div className=' h-screen p-1 w-[24vw] sticky top-0'>
        <div ref={topRef} className=' mt-22 p-1   '>
         
 <div className='font-[Semibold] text-[15px] text-gray-700  mt-5 ml-16 absolute'>
    <h2>Filters</h2>
    </div>
    <div ref={rangeRef} className='h-8 cursor-pointer ml-15 mt-15 '>
      
        <div onClick={()=>{
          if(rangec===0){
            setrangec(1)
            console.log(rangec);
            
          }else if(rangec===1){
            setrangec(0)
             console.log(rangec);
          }
          
        }}  className='flex items-center justify-between w-30 uppercase font-[Semibold]  text-gray-600'>Range <div ref={arrowRef} className='mt-1'> < ChevronRight size={20}/></div></div>
        <div  className='font-[Semibold]' ref={rangeelemRef} >
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Pure Brilliance</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Varnaya Blends</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Daily Dew</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> Clear Difference</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> C Luminace</div>
        </div>
    </div>


    <div ref={typeRef} className='h-8 cursor-pointer ml-15     '>
        <div onClick={()=>{
          if(typec===0){
            settypec(1)
            console.log(rangec);
            
          }else if(typec===1){
            settypec(0)
             console.log(rangec);
          }
          
        }}  className='flex items-center justify-between w-30 font-[Semibold]  text-gray-600'>Type <div ref={arrow2Ref} className='mt-1'> < ChevronRight size={20}/></div></div>
        <div className='font-[Semibold] '  ref={typeelemRef} >
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Serums</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Toners</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Cleansers</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> Tonics</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> Sleeping mask

          </div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> moisturisers</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> facial oils</div>
        </div>
    </div>
    <div ref={ingridentRef} className='h-8 cursor-pointer ml-15  '>
        <div onClick={()=>{
          if(ingridentc===0){
            setingridentc(1)
            console.log(ingridentc);
            
          }else if(ingridentc===1){
            setingridentc(0)
             console.log(ingridentc);
          }
          
        }}  className='flex items-center justify-between w-30 font-[Semibold]  text-gray-600 mt-8'>Ingridents <div ref={arrow3Ref} className='mt-1'> < ChevronRight size={20}/></div></div>
        <div className='font-[Semibold] '  ref={ingridentelemRef} >
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Ahas</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Hyaluronic Acid</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Niacinamide</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> Vitamin C</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> Azelaic Acid

          </div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> BHAs</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> CICA</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> Pentavitin</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> Rosehip</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}> Phyto Retinol</div>
          <div className={`hidden uppercase text-[14px] text-gray-700`}>Squalane</div>
        </div>
    </div>

        </div>
      
    </div>
  )
}

export default Sidenav
