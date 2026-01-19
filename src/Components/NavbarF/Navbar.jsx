import React, { useState } from 'react'
import Logo from '../Images/Group 1000011075.png'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import Side_bar from './Side_bar';

function Navbar() {

    const [Open, Close] = useState(true);

    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnclose = () => setShowMyModal(false)

  return (
    <>
        <section className=''>
            <div className='bg-transparent py-2 lg:w-[90%] w-[95%] mx-auto flex justify-between items-center gap-2'>
                <div className='p-1 md:w-[180px] w-[150px]'>
                    <img src={Logo} className='' />
                </div>
                <div className=' w-[80%] hidden lg:inline'>
                    <ul className='flex justify-between items-center'>
                        <li className=''>
                            Find Doctors
                            {/* <Link to=''>asd</Link> */}
                        </li>
                        <li className=''>
                            Hospitals
                            {/* <Link to=''>asd</Link> */}
                        </li>
                        <li className=''>
                            Medicines
                            {/* <Link to=''>asd</Link> */}
                        </li>
                        <li className=''>
                            Labs and Diagnostics
                            {/* <Link to=''>asd</Link> */}
                        </li>
                        <li className=''>
                            Health Blog
                            {/* <Link to=''>asd</Link> */}
                        </li>
                        <li className=''>
                            Failities
                            {/* <Link to=''>asd</Link> */}
                        </li>
                        <div className='lg:inline hidden'>
                    <button className='bg-MainBlue p-2 rounded-lg text-White border border-MainBlue'>
                        Login/Signup
                    </button>
                </div>
                    </ul>
                    
                </div>
                

                <button className='lg:hidden' onClick={() => setShowMyModal(true)}>
                    <RiMenu3Line className='text-3xl text-Dark'  />
                </button>
                <Side_bar onClose={handleOnclose} visible={showMyModal} />
            </div>
        </section>
    </>
  )
}

export default Navbar