import React from 'react'
import Topcontext from '../Components/Philosophy/Topcontext'
import Nav from '../Components/Navigation/Nav'
import Secondtopcontent from '../Components/Philosophy/Secondtopcontent'
import Ingridentcontnt from '../Components/Philosophy/Ingridentcontnt'
import Footerimg from '../Components/Philosophy/Footerimg'
import Thoughtful from '../Components/Philosophy/Thoughtful'
import Endimg from '../Components/Shop/Endimg'

const Philosophy = () => {
  return (
    <div className='p-1'>
        <Nav/>
      <Topcontext/>
      <Secondtopcontent/>
      <Ingridentcontnt/>
      <Footerimg/>
      <Thoughtful/>
      <Endimg/>
    </div>
  )
}

export default Philosophy
