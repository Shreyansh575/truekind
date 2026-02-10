import React, { useState } from 'react'
import Nav from '../Components/Navigation/Nav'
import bgimage from '../Components/Images/image.png'
import Shopherocontent from '../Components/Shop/Shopherocontent'
import Sidenav from '../Components/Shop/Sidenav'
import Products from '../Components/Shop/Products'
import Endimg from '../Components/Shop/Endimg'

const Shop = () => {
  
  
  

  return (
    <div className=''>
        <Nav/>
      
    <img className='h-screen w-screen object-cover ' src={bgimage} alt="" />
    
<Shopherocontent/>
<div className='flex'>
<Sidenav/>
<Products/>
</div>

<Endimg/>

     </div>
  )
}

export default Shop
