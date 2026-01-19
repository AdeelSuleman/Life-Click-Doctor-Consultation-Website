import React from 'react'
import Navbar from '../NavbarF/Navbar'
import Slider from '../Slider/Slider'
import SearchBar from './SearchBar'
import S_Carosule from './S_Carosule'
import Specailization from './Specailization'
import Medical_specialist from './Medical_specialist'
import Pateint_Caring from './Pateint_Caring'
import { States } from './States'
import { Testimonials } from './Testimonials'
import { My_footer } from '../NavbarF/My_footer'


function Home() {
  return (
    <>
        <section>
        <h1 className='bg-Dark text-White text-center md:text-base text-xs py-3 px-4'>
          The health and well-being of our patients and their health care team will always be our priority, so well follow the best practies for cleanliness.
        </h1>
        <div className='relative'>
          <Slider/>
        </div>
        
        <SearchBar/>
        <S_Carosule/>
        <Specailization/>
        <Medical_specialist/>
        <Pateint_Caring/>
        <States/>
        <Testimonials/>
        <My_footer/>
        </section>
    </>
  )
}

export default Home