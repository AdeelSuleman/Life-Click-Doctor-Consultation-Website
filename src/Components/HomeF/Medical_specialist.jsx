import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Person1 from '../Images/One.png'
import Person2 from '../Images/Two.png'
import Person3 from '../Images/three.png'

function Medical_specialist() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
        <section className='bg-White pt-20'>
            <h1 className='font-bold text-3xl text-center'>Our Medical Specialist</h1>
            <div className='lg:w-[80%]  mx-auto my-10'>
            <Carousel 
        responsive={responsive}
        autoPlay={  true }
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        swipeable={false}
        draggable={false}
        showDots={true}
        className=' bg-transparent py-10'
  >
  <div className=''>
    <img src={Person1} className='' />
  </div>
  <div className=''>
    <img src={Person2} className='' />
  </div>
  <div className=''>
    <img src={Person3} className='' />
  </div>
</Carousel>
            </div>
        </section>
    </>
  )
}

export default Medical_specialist