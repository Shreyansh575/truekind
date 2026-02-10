import React, { useState, useRef, useEffect } from "react";
import Nav from "../Components/Navigation/Nav";

const images = [
    "https://images.prismic.io/truekind/Z9b18ziBA97Gihj7_bha-%26-tea-tree-acne-clearing-toner.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/Z6D9rZbqstJ9-LhO_PortraitofaWomanAgainstBlueSky.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/ZurSVbVsGrYSvisH_1.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "http://images.prismic.io/truekind/Z6D3P5bqstJ9-Ldy_Close-upPortraitwithGoldenLighting.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/ZurDj7VsGrYSvh0W_1.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/ZurP_7VsGrYSvijF_1.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/Z-AmlndAxsiBvxem_gallery-2.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/Zuq-1LVsGrYSvhqc_s764qjse3.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/Z-Aml3dAxsiBvxen_gallery-3.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/ZurR3bVsGrYSviqH_1.jpg?auto=format,compress&w=768&fm=webp&q=95",
    "https://images.prismic.io/truekind/Z-AmlHdAxsiBvxek_gallery-4.jpg?auto=format,compress&w=768&fm=webp&q=95"
  ];

const Gallary = () => {
  const [items, setItems] = useState(images);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setItems((prev) => [...prev, ...images]);
        }
      },
      { rootMargin: "200px" } // load earlier (smooth)
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className="fixed w-full">
    <Nav/>
    </div>

    <div className=" fixed ml-[40vw] text-[#3B3B3B]  mt-60">
        
        <div className="text-6xl  ">
        <div className="font-[Semibold]">Glow Up</div>
        <div className="text-center font-[Editoriallightitalic]">Gallary</div>
        </div>
    </div>
    <div className="flex flex-wrap justify-evenly gap-20 p-4">
        
      {items.map((img, i) => (
        <img
          key={i}
          src={img}
          className="h-70 w-70 object-cover rounded-lg "
          alt="gallery"
        />
      ))}

      {/* invisible trigger */}
      <div ref={loaderRef} className="h-10 w-full"></div>
    </div>
    </>
  );
};

export default Gallary;
