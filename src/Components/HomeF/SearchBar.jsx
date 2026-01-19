import React from 'react'
import { MdSearch } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import u from '../Images/u.png'
import Labs from '../Images/ae.png'
import Hos from '../Images/g.png'
import Cap from '../Images/Capsule.png'
import Ambu from '../Images/Ambulance.png'

function SearchBar() {
  return (
    <section className='absolute  p-2 lg:-mt-40 md:-mt-52 -mt-96 w-full'>
        <div className='bg-White p-6 lg:w-[90%] w-[95%] mx-auto rounded-lg border-Light  shadow-lg shadow-gray-400'>
            <div className='bg-white lg:flex justify-between items-center gap-2'>
                <div className='md:flex justify-between items-center  lg:w-[45%]'>
                <div className='bg-gray-200 flex items-center p-2 rounded-md border shadow my-3 w-full md:w-[45%]'>
                    <MdSearch className='text-2xl mr-2 text-gray-400 md:w-[20%]'/>
                    <input type='text' placeholder="Ex. Doctor, Hospital" className='p-2 bg-gray-200 border-0 focus:border-0 md:w-[80%]' />
                </div>
                <div className='bg-gray-200 flex items-center p-2 rounded-md border shadow my-3 w-full md:w-[45%]'>
                    <MdSearch className='text-2xl mr-2 text-gray-400 md:w-[20%]'/>
                    <input type='text' placeholder="Ex. Surgeon, Cardiologist" className='p-2 bg-gray-200 border-0 focus:border-0 md:w-[80%]' />
                </div>
                </div>
                <div className='md:flex justify-between items-center  lg:w-[50%]'>
                <div className='bg-gray-200 flex items-center p-2 rounded-md border shadow my-3 w-full md:w-[65%]'>
                    <FaLocationDot className='text-2xl mr-2 text-gray-400  md:w-[15%]'/>
                    <input type='text' placeholder="set your Location" className='p-2 bg-gray-200 border-0 focus:border-0 w-full md:w-[80%]' />
                </div>
                <button className='bg-MainBlue py-4 px-6 text-xl rounded-md text-White shadow-md flex items-center justify-center gap-2 font-semibold'>
                    <MdSearch className='text-2xl'/> Search
                </button>
                </div>
            </div>
            <h1 className='mt-16 text-2xl font-semibold text-center'>You may be looking for</h1>
            <div className=' mt-10 p-1 grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-5'>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={u} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Doctors</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={Labs} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Labs</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={Hos} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Hospitals</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={Cap} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Medical Store</p>
                </div>
                <div className='bg-gray-300 rounded-md shadow-md p-6 hover:text-MainBlue text-gray-500 cursor-pointer hover:bg-Light hover:border hover:border-MainBlue'>
                    <div className='mx-auto w-fit'>
                        <img src={Ambu} className='w-18 h-18' />
                    </div>
                    <p className='mt-5 font-semibold md:text-lg text-center'>Ambulance</p>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default SearchBar