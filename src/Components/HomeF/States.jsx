import React from 'react'

export const States = () => {
  return (
    <section className='bg-[#659DF7] py-12'>
    <div className=' w-[80vw] mx-auto grid
            sm:grid-cols-1 gap-5
            md:grid-cols-2 md:gap-8
            lg:grid-cols-4 lg:gap-12'>
                <div className='text-white'>
                <h1 className='text-center text-[35px] lg:text-[48px] font-bold '>5000+</h1>
                <p className='text-center text-[18px]  '>Happy Patients</p> 
                </div>
                <div className='text-white'>
                <h1 className='text-center text-[35px] lg:text-[48px] font-bold '>200+</h1>
                <p className='text-center text-[18px]  '>Expert Doctors</p>
                </div>
                <div className='text-white'>
                    <h1 className='text-center text-[35px] lg:text-[48px] font-bold '>1000+</h1>
                <p className='text-center text-[18px]  '> Successful Surgeries</p>
                </div>
                <div className='text-white'>
                    <h1 className='text-center text-[35px] lg:text-[48px] font-bold '>50+</h1>
                <p className='text-center text-[18px]  '>Years of Experience</p>
                </div>
            </div>
    </section>
  )
}
