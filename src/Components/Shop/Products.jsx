import React, { use, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Products = () => {
  gsap.registerPlugin(ScrollTrigger)
  const bodyRef = useRef()
  const BrillianceRef = useRef()
  const BrilliancetextRef = useRef()
  const BlendsRef = useRef()
  const BlendstextRef = useRef()
  const DewRef = useRef()
  const DewtextRef = useRef()
  
  const location = useLocation().pathname
  const navigate = useNavigate()
  

useGSAP(() => {
  gsap.to(bodyRef.current, {
    scrollTrigger: {
      trigger: bodyRef.current,
      start: "top 53%",
   

      onEnter: () => {
        gsap.fromTo(BrillianceRef.current.children,{
         opacity:0,
         x:120,
         rotate:-20
        },{
          opacity:1,
          duration:1,
          x:0,
          rotate:0
        });
        gsap.fromTo(BrilliancetextRef.current.children,{
          y:-30,
         opacity:0
        },{
          y:0,
          duration:1.5,
          opacity:1
        })




        gsap.fromTo(BlendsRef.current.children,{
         opacity:0,
         x:120,
         rotate:-20
        },{
          opacity:1,
          duration:1,
          delay:1,
          x:0,
          rotate:0
        });
        gsap.fromTo(BlendstextRef.current.children,{
          y:-30,
         opacity:0
        },{
          y:0,
           delay:1,
          duration:1.5,
          opacity:1
        })


        gsap.fromTo(DewRef.current.children,{
         opacity:0,
         x:120,
         rotate:-20
        },{
          opacity:1,
           delay:1.6,
          duration:1,
          x:0,
          rotate:0
        });
        gsap.fromTo(DewtextRef.current.children,{
          y:-30,
         opacity:0
        },{
          y:0,
          duration:1.5,
           delay:1.6,
          opacity:1
        })
        
    }
  }
  });
}, []);

  
  
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


  const DailyDewdata = [
    {
       bg:'bg-[#cfc7de]',
      heading: " Daily Dew",
      name: "Pomegranate and Mint Hydrating Tonic",
      price: "₹ 899",
      info: "Revive and renew with this ultra-hydrating, gentle melting eye cream that features a unique multi-functional ingredient blend including Bakuchi Oil, Tri Peptides, Niacinamide and Ashwagandha for complete care for your most fragile skin.",
      img: "https://images.prismic.io/truekind/ZurSVbVsGrYSvisH_1.jpg?auto=format,compress",
      imgh: "https://images.prismic.io/truekind/ZurSV7VsGrYSvisK_2.jpg?auto=format,compress",
    },
    {
      bg:'bg-[#cfc7de]',
      heading: "Daily Dew",
      name: "Phyto-Retinol & Peptide Eye Cream",
      price: "₹ 899",
      info: "Revive and renew with this ultra-hydrating, gentle melting eye cream that features a unique multi-functional ingredient blend including Bakuchi Oil, Tri Peptides, Niacinamide and Ashwagandha for complete care for your most fragile skin.",
      img: "https://images.prismic.io/truekind/ZurR3bVsGrYSviqH_1.jpg?auto=format,compress",
      imgh: "https://images.prismic.io/truekind/ZurR3LVsGrYSviqF_2.jpg?auto=format,compress",
    },
    {
      bg:'bg-[#cfc7de]',
      heading: "Daily Dew",
      name: "Hyaluronic & Squalane Water Crème",
      price: "₹ 899",
      info: "Get that plump, dewy look with this weightless, oil free formula &nbsp;infused with the ultra-hydrating trio – Hyaluronic, Squalane and Pentavitin; &nbsp;combined with &nbsp;Lychee and Watermelon extracts to quench and revive thirsty dull skin.",
      img: "https://images.prismic.io/truekind/ZurR3bVsGrYSviqH_1.jpg?auto=format,compress",
      imgh: "https://images.prismic.io/truekind/ZurR3LVsGrYSviqF_2.jpg?auto=format,compress",
    },
  ];


  return (
    <div ref={bodyRef}  className=" mt-20 relative w-full">
      <div className="w-full">
        <div ref={BrilliancetextRef}>
          <div className="font-[Semibold] text-gray-300 opacity-0 text-[36px]">
            For Glowing & Healthy Skin,
          </div>
          <div className="font-[Editorialitalic] text-[31px] opacity-0  underline decoration-[#F1D0D2] decoration-3">
            Pure Brilliance
          </div>
        </div>

        <div className="mt-10">
          <div ref={BrillianceRef} className="flex gap-6 w-full">
            {Brilliancedata.map((elem) => {
              return (
                <div  onClick={()=>{
                  navigate(`/shop/${elem.heading}`,{state:elem})
                }} className="group opacity-0 cursor-pointer rounded-4xl">
                  <img
                    className="h-[60vh] group-hover:hidden  rounded-2xl "
                    src={elem.img}
                    alt=""
                  />
                  <img
                    className="group-hover:flex hidden h-[60vh]  rounded-2xl"
                    src={elem.imgh}
                    alt=""
                  />

                  <div className="absolute -mt-92 ml-3 px-5 p-1 text-[13px] rounded-full uppercase bg-[#FFFF]">
                    {elem.heading}
                  </div>
                  <div className="absolute -mt-92 ml-63  text-[13px] rounded-full uppercase flex justify-center items-center bg-[#FFFF] h-8 w-8">
                    <svg
                      data-v-1614f35c=""
                      width="30"
                      height="30"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        data-v-1614f35c=""
                        cx="13"
                        cy="13"
                        r="13"
                        fill="white"
                      ></circle>
                      <path
                        data-v-1614f35c=""
                        d="M8.77357 10.7989C8.81474 10.099 9.39438 9.55243 10.0955 9.55243H16.0403C16.7415 9.55243 17.3211 10.099 17.3623 10.7989L17.7342 17.1212C17.779 17.8819 17.1742 18.5233 16.4122 18.5233H9.72364C8.9617 18.5233 8.35692 17.8819 8.40167 17.1212L8.77357 10.7989Z"
                        stroke="#424242"
                        stroke-width="0.601938"
                      ></path>
                      <path
                        data-v-1614f35c=""
                        d="M15.883 10.9417C15.883 8.76477 14.6224 7 13.0675 7C11.5125 7 10.252 8.76477 10.252 10.9417"
                        stroke="#424242"
                        stroke-width="0.601938"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>

                  <div className="ml-3 w-50 leading-4 font-[Semibold]  -mt-10 absolute text-[12px] text-gray-800 uppercase">
                    {elem.name}
                  </div>
                  <div className="ml-63 -mt-10 font-[Semibold]">
                    {elem.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <div className="w-full">
        <div ref={BlendstextRef}>
          <div className="font-[Semibold] text-gray-300 opacity-0 mt-10 text-[36px]">
            A Blend of Ayurveda & Scinece,
          </div>
          <div className="font-[Editorialitalic] text-[31px] opacity-0 underline decoration-[#DCD4C9] decoration-3">
            Varnaya Blends
          </div>
        </div>
        <div className="mt-10">
          <div ref={BlendsRef} className="flex gap-6 w-full">
            {VarnayaBlendsdata.map((elem) => {
              return (
                <div onClick={()=>{
                  navigate(`/shop/${elem.heading}`,{state:elem})
                }} className="group cursor-pointer rounded-4xl opacity-0">
                  <img
                    className="h-[60vh] group-hover:hidden  rounded-2xl "
                    src={elem.img}
                    alt=""
                  />
                  <img
                    className="group-hover:flex hidden h-[60vh]  rounded-2xl"
                    src={elem.imgh}
                    alt=""
                  />

                  <div className="absolute -mt-92 ml-3 px-5 p-1 text-[13px] rounded-full uppercase bg-[#FFFF]">
                    {elem.heading}
                  </div>
                  <div className="absolute -mt-92 ml-63  text-[13px] rounded-full uppercase flex justify-center items-center bg-[#FFFF] h-8 w-8">
                    <svg
                      data-v-1614f35c=""
                      width="30"
                      height="30"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        data-v-1614f35c=""
                        cx="13"
                        cy="13"
                        r="13"
                        fill="white"
                      ></circle>
                      <path
                        data-v-1614f35c=""
                        d="M8.77357 10.7989C8.81474 10.099 9.39438 9.55243 10.0955 9.55243H16.0403C16.7415 9.55243 17.3211 10.099 17.3623 10.7989L17.7342 17.1212C17.779 17.8819 17.1742 18.5233 16.4122 18.5233H9.72364C8.9617 18.5233 8.35692 17.8819 8.40167 17.1212L8.77357 10.7989Z"
                        stroke="#424242"
                        stroke-width="0.601938"
                      ></path>
                      <path
                        data-v-1614f35c=""
                        d="M15.883 10.9417C15.883 8.76477 14.6224 7 13.0675 7C11.5125 7 10.252 8.76477 10.252 10.9417"
                        stroke="#424242"
                        stroke-width="0.601938"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>

                  <div className="ml-3 w-50 leading-4 font-[Semibold]  -mt-10 absolute text-[12px] text-gray-800 uppercase">
                    {elem.name}
                  </div>
                  <div className="ml-63 -mt-10 font-[Semibold]">
                    {elem.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>



      <div className="w-full" >
        <div ref={DewtextRef}>
          <div className="font-[Semibold] text-gray-300 opacity-0 mt-10 text-[36px]">
            For Daily Hydration & Nourishment,
          </div>
          <div className="font-[Editorialitalic] text-[31px] opacity-0 underline decoration-[#d6d6d6] decoration-3">
            Daily Dew







          </div>
        </div>
        <div className="mt-10 w-full">
          <div ref={DewRef} className="flex gap-6">
            {DailyDewdata.map((elem) => {
              return (
                <div onClick={()=>{
                  navigate(`/shop/${elem.heading}`,{state:elem})
                }} className="group opacity-0 cursor-pointer rounded-4xl">
                  <img
                    className="h-[60vh] group-hover:hidden  rounded-2xl "
                    src={elem.img}
                    alt=""
                  />
                  <img
                    className="group-hover:flex hidden h-[60vh]  rounded-2xl"
                    src={elem.imgh}
                    alt=""
                  />

                  <div className="absolute -mt-92 ml-3 px-5 p-1 text-[13px] rounded-full uppercase bg-[#FFFF]">
                    {elem.heading}
                  </div>
                  <div className="absolute -mt-92 ml-63  text-[13px] rounded-full uppercase flex justify-center items-center bg-[#FFFF] h-8 w-8">
                    <svg
                      data-v-1614f35c=""
                      width="30"
                      height="30"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        data-v-1614f35c=""
                        cx="13"
                        cy="13"
                        r="13"
                        fill="white"
                      ></circle>
                      <path
                        data-v-1614f35c=""
                        d="M8.77357 10.7989C8.81474 10.099 9.39438 9.55243 10.0955 9.55243H16.0403C16.7415 9.55243 17.3211 10.099 17.3623 10.7989L17.7342 17.1212C17.779 17.8819 17.1742 18.5233 16.4122 18.5233H9.72364C8.9617 18.5233 8.35692 17.8819 8.40167 17.1212L8.77357 10.7989Z"
                        stroke="#424242"
                        stroke-width="0.601938"
                      ></path>
                      <path
                        data-v-1614f35c=""
                        d="M15.883 10.9417C15.883 8.76477 14.6224 7 13.0675 7C11.5125 7 10.252 8.76477 10.252 10.9417"
                        stroke="#424242"
                        stroke-width="0.601938"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>

                  <div className="ml-3 w-50 leading-4 font-[Semibold]  -mt-10 absolute text-[12px] text-gray-800 uppercase">
                    {elem.name}
                  </div>
                  <div className="ml-63 -mt-10 font-[Semibold]">
                    {elem.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Products;
