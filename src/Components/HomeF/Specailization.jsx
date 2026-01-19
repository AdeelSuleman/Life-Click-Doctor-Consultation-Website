import React from 'react'
import Ae from '../Images/ae.png'
import Ste from '../Images/Stethoscope.png'
import HR from '../Images/Heart Rate.png'
import HM from '../Images/Heart Rate Monitor.png'
import BS from '../Images/Blood_Sample.png'
import IM from '../Images/Immune.png'
import Xray from '../Images/X-Ray.png'

function Specailization() {
  return (
    <>
        <section className=''>
            <div className='bg-Light py-10'>
                <h1 className='text-center text-3xl font-bold'> Find By Specialization</h1>
                <div className=' py-2 w-[80%] mx-auto my-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={Ae} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Dentistry</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={Ste} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Primary Care</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={HR} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Cardiology</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={HM} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>MRI Resonance</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={BS} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Blood Test</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={IM} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Piscologist</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={Ae} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Laboratory</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={Xray} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>X-Ray</p>
                </div>

                </div>
                <div className='w-fit p-2  mx-auto'>
                    <button className='bg-MainBlue py-2 px-4 rounded-md shadow-lg text-xl font-semibold text-White'>View All</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Specailization