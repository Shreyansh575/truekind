import React from 'react'
import { useNavigate } from 'react-router-dom';



const Explore = () => {
const navigate = useNavigate()
const Brilliancedata = [
    {
      heading: "Pure Brilliance",
      name: "AHA Brightening Exfoliant Cleanser/Face Wash",
      price: "₹ 899",
      info: "Step up your cleansing game with this multi action glow giver that combines a gentle dose of skin care holy grail - Glycolic Acid, along with a mix of potent antioxidants, hydration and restoring agents - Centella asiatica, Turmeric and Licorice.",
      img: "https://images.prismic.io/truekind/ZurDj7VsGrYSvh0W_1.jpg?auto=format,compress",
      imgh: "https://images.prismic.io/truekind/ZurDkbVsGrYSvh0X_2.jpg?auto=format,compress",
      bg:'bg-[#EFCDCC]'
    },
    {
      heading: "Pure Brilliance",
      bg:'bg-[#EFCDCC]',
      name: "Bio Exfoliant Brightening Sleeping Mask",
      price: "₹ 899",
      info: "Step up your cleansing game with this multi action glow giver that combines a gentle dose of skin care holy grail - Glycolic Acid, along with a mix of potent antioxidants, hydration and restoring agents - Centella asiatica, Turmeric and Licorice.",
      img: "https://images.prismic.io/truekind/ZurMbbVsGrYSviXa_1.jpg?auto=format,compress",
      imgh: "https://images.prismic.io/truekind/ZurMb7VsGrYSviXc_2.jpg?auto=format,compress",
    },
    {
      bg:'bg-[#EFCDCC]',
      heading: "Pure Brilliance",
      name: "AHA Brightening Exfoliant Toner/Essence",
      price: "₹ 899",
      info: "Step up your cleansing game with this multi action glow giver that combines a gentle dose of skin care holy grail - Glycolic Acid, along with a mix of potent antioxidants, hydration and restoring agents - Centella asiatica, Turmeric and Licorice.",
      img: "https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 320w, https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 640w, https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 768w, https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 1024w, https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 1280w, https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 1536w, https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 2048w, https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 2560w, https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress 3072w",
      imgh: "https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 320w, https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 640w, https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 768w, https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 1024w, https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 1280w, https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 1536w, https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 2048w, https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 2560w, https://images.prismic.io/truekind/ZurL3bVsGrYSviVo_2.jpg?auto=format,compress 3072w",
    },
  ];
   const VarnayaBlendsdata = [
    {
      bg:'bg-[#D8CFC4]',
      heading: "Varnaya Blends",
      name: "Rosehip & Bakuchiol Skin Perfecting Oil",
      price: "₹ 899",
      info: "Reclaim dry, dull skin with this skin quenching, dream come true water gel featuring Pentavitin .",
      img: "https://images.prismic.io/truekind/ZurQ9LVsGrYSvimZ_1.jpg?auto=format,compress",
      imgh: "https://images.prismic.io/truekind/ZurQ9rVsGrYSvimb_2.jpg?auto=format,compress",
    },
    {
       bg:'bg-[#D8CFC4]',
      heading: "Varnaya Blends",
      name: "Manjistha and Saffron Moisture Gel",
      price: "₹ 899",
      info: 'Reclaim dry, dull skin with this skin quenching, dream come true water gel featuring Pentavitin aka hydration"s hot new thing, Niacinamide, Pure Saffron, and Precious Herbs prescribed in Ayurveda as a Miraculous Elixir to brighten skin.',
      img: "https://images.prismic.io/truekind/ZurQjbVsGrYSvik0_1.jpg?auto=format,compress",
      imgh: "https://images.prismic.io/truekind/ZurQj7VsGrYSvik3_2.jpg?auto=format,compress",
    },
    {
       bg:'bg-[#D8CFC4]',
      heading: "Varnaya Blends",
      name: "Acne Calming Herb Rescue Mask",
      price: "₹ 899",
      info: "Purify, calm and restore balance to problematic, acne prone oily skin with this lightweight hydrating jelly mask that features patented sebum regulator Sepicontrol A5 combined with a potent mix of healing herbs from Ayurveda including Turmeric, Lodhra, Black Mustard, Nutgrass, Neem and Nutmeg.",
      img: "https://images.prismic.io/truekind/ZurNf7VsGrYSviaK_1.jpg?auto=format,compress",
      imgh: "https://images.prismic.io/truekind/ZurNgbVsGrYSviaN_2.jpg?auto=format,compress",
    },
  ];

    return (
    <div className='-mt-50'>



        <div className='text-[#252525]'>
            <div className='font-[Semibold] uppercase text-6xl text-center'>Explore</div>
            <div className='font-[Editoriallightitalic] text-center -mt-8 text-[76px]'>pure potency</div>
        </div>


        <div>


        <div className='h-[145vh] relative mt-20   '>
           <div className='h-[100vh] sticky top-0 p-1  ml-[50vw]'>


            <div className='text-5xl mt-10 ml-15'>
                <div className='font-[Reg]'>Pure</div>
                <div className='font-[Editoriallightitalic]'>Brillance</div>


            </div>


            <div>
                <div className='flex overflow-x-hidden ml-15 gap-5 mt-10 '>

                    {Brilliancedata.map((elem)=>{
                        return(
                            <div onClick={()=>{
                                navigate('/shop')
                            }} className='p-0'>
                                <div className='bg-white rounded-full  w-30  font-[Regular] text-[12px] text-center h-5 flex items-center justify-center uppercase absolute z-100 mt-3 ml-5'>
                                {elem.heading}
                                </div>
                                <img src={elem.img} className='h-100 min-w-70 cursor-pointer relative rounded-4xl object-cover' alt="" />

                                <div className='absolute w-55 leading-4 ml-3 -mt-13  text-[15px]'>
{elem.name}
                                </div>
                                <div className='ml-55 -mt-10 font-[Semibold] absolute'>
                                    {elem.price}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

                
            <div>

            </div>


            
        </div>

                <img src="https://truekindskincare.com/_ipx/w_768&f_webp&q_95/explore-1.jpg" className='absolute -mt-160 h-[145vh] ' alt="" />
                
                 
          
        </div>
      </div>





      <div className='mt-55'>
<div className='h-[130vh] '>
<div className='sticky top-0 h-screen p-1  -z-10000  w-screen'>


<div className='mt-20 ml-10'>

    <div className='text-[40px] leading-11'>
    <div className=' font-[Reg]'>Varnaya</div>
    <div className='font-[Editoriallightitalic]'>
Blends</div>

</div>

<div>
     <div className='flex overflow-x-hidden -ml-100 gap-5 mt-10 '>

                    {VarnayaBlendsdata.map((elem)=>{
                        return(
                            <div onClick={()=>{
                                navigate('/shop')
                            }} className='p-0'>
                                <div className='bg-white rounded-full  w-30  font-[Regular] text-[12px] text-center h-5 flex items-center justify-center uppercase absolute z-100 mt-3 ml-5'>
                                {elem.heading}
                                </div>
                                <img src={elem.img} className='h-100 min-w-60 cursor-pointer relative rounded-4xl object-cover' alt="" />

                                <div className='absolute w-55 leading-4 ml-3 -mt-13  text-[15px]'>
{elem.name}
                                </div>
                                <div className='ml-65 -mt-10 font-[Semibold] absolute'>
                                    {elem.price}
                                </div>
                            </div>
                        )
                    })}
                </div>
</div>


</div>
    
</div>
</div>

<div className='-mt-200 flex justify-end'>
 <img src="https://truekindskincare.com/_ipx/w_768&f_webp&q_95/explore-2.jpg" className='w-[54vw]' alt="" />
</div>

      </div>
    </div>
  )
}

export default Explore
