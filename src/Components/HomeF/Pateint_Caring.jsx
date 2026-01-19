import React from 'react'
import Icns from '../Images/svg.h2d-208731fd.png'
import Pic from '../Images/Group 1000011062.png'

function Pateint_Caring() {
  return (
    <>
        <section className='bg-Light py-12'>
            <div className='w-[80%]  mx-auto md:flex justify-center items-center gap-5'>
                <div className=' p-2 md:w-[50%]'>
                    <img src={Pic} className='' />
                </div>
                <div className=' p-2 md:w-[50%]'>
                    <h1 className='uppercase text-lg text-MainBlue font-semibold py-1'>Helping Pateints from arround the globe!!</h1>
                    <h1 className='text-3xl font-bold py-1'>Patient <span className='text-MainBlue'>Caring</span></h1>
                    <p className='text-gray-400 mt-5'>
                        Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you strive to be the first and best choice for healthcare.
                    </p>
                    <div className=' flex items-center mt-10 gap-4'>
                        <img src={Icns} className='w-18 h-18' />
                        <p className='font-semibold text-lg'>Stay Updates About Your Health.</p>
                    </div>
                    <div className=' flex items-center mt-4 gap-4'>
                        <img src={Icns} className='w-18 h-18' />
                        <p className='font-semibold text-lg'>Check Your Result Online.</p>
                    </div>
                    <div className=' flex items-center mt-5 gap-4'>
                        <img src={Icns} className='w-18 h-18' />
                        <p className='font-semibold text-lg'>Mange Your Appointments.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pateint_Caring