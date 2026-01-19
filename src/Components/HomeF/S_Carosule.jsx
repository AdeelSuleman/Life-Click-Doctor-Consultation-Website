import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ban_1 from '../Images/Group 10.png'
import Ban_2 from '../Images/Group 11.png'

function S_Carosule() {
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
        <section className=' p-2 lg:mt-80 md:mt-96 lg:py-20 md:pt-[150px] md:pb-10 mt-[600px]'>
            <div className='w-[90%]  mx-auto'>
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
    <img src={Ban_1} className='' />
  </div>
  <div className=''>
    <img src={Ban_2} className='' />
  </div>
  <div className=''>
    <img src={Ban_1} className='' />
  </div>
</Carousel>
            </div>
        </section>
    </>
  )
}

export default S_Carosule