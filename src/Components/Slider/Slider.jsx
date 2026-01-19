import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import S_1 from '../Images/hero_image_1.png'
import Navbar from '../NavbarF/Navbar';

function Slider() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
        <section className='bg-Light h-screen'>
        <Navbar/>
        <Carousel 
        responsive={responsive}
        autoPlay={  true }
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  swipeable={false}
  draggable={false}
  showDots={true}
  className=' bg-transparent p-1'
  >
  <div className=' mx-auto md:h-[80vh] h-[40vh] relative flex items-start justify-center '>
    <div className='  absolute z-10 md:items-start lg:items-center p-1 lg:mt-20 w-[95%] md:h-[60vh] h-[40vh] text-lightBlackColor justify-center flex'>
        <div className=' w-[50%] h-full lg:px-4'>
            <p className='lg:mt-10 mt-5 md:text-xl font-semibold lg:ml-5 text-sm'>Skip the travel! Take Online</p>
            <h1 className='mt-2 font-bold md:text-5xl lg:ml-5 text-lg'>Doctor <span className='text-MainBlue'>Consultation</span></h1>
            <p className='md:mt-5 text-Gray lg:ml-5 text-xs md:text-base'>
                Connect instantly with a 24x7 specialist or choose to  video visit a particular doctor.
            </p>

            <button className='md:px-6 px-4 lg:ml-5 py-2 bg-MainBlue lg:mt-10 md:mt-5 mt-3 rounded-md md:text-base text-sm shadow-md text-white border border-MainBlue'>Consult Now</button>
        </div>
        <div className=' w-[50%] h-full'>
            <img src={S_1} className=' w-full h-full lg:w-[90%]' />
        </div>
    </div>
  </div>

  {/* <div className=' mx-auto  md:h-[80vh] h-[60vh] relative flex  justify-center '>Two
    <div className='absolute z-10  items-center p-1 mt-20 w-[90%] h-[60vh] text-lightBlackColor justify-center flex'>
        <div className=' w-[50%] h-[60vh] px-4 '>
            <p className='mt-10 text-xl font-semibold ml-5'>Skip the travel! Take Online</p>
            <h1 className=' font-bold text-5xl ml-5'>Doctor <span className='text-MainBlue'>Consultation</span></h1>
            <p className='mt-5 text-Gray ml-5'>
                Connect instantly with a 24x7 specialist or choose to <br/> video visit a particular doctor.
            </p>

            <button className='px-6 ml-5 py-2 bg-MainBlue mt-10 rounded-md shadow-md text-white border border-MainBlue'>Consult Now</button>
        </div>
        <div className=' w-[50%] h-[60vh]'>
            <img src={S_1} className=' w-[90%] -mt-20 ml-14' />
        </div>
    </div>
  </div> */}
  
  
</Carousel>
        </section>
    </>
  )
}

export default Slider