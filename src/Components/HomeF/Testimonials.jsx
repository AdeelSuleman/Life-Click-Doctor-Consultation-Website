import React from 'react'
import { TestimonialSlider } from './TestimonialSlider'

export const Testimonials = () => {
  return (
    <section className='bg-[#F3F4F6] py-16 overflow-hidden'>
        <h1 className='text-center text-[36px] font-bold'>What Our Patients Say</h1>
        <h3 className='text-center text-[16px]'>Read testimonials from our satisfied patients</h3>

        <div className=' w-[90%] mx-auto mt-12'>
            <TestimonialSlider/>
        </div>
    </section>
  )
}
