import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";

export const TestimonialSlider = () => {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const TestimonialData = [

    {
        id : 1001,
        test_icon : "",
        test_name : "Sarah Johnson",
        test_designation : "Patient",
        test_review : "Outstanding service! The doctors are highly professional and caring. They took the time to understand my concerns and provided excellent treatment.",
        test_Rating : "4.5",
    }, 
    {
        id : 1001,
        test_icon : "",
        test_name : "Michael Chen",
        test_designation : "Patient",
        test_review : "The online consultation feature is a game-changer. I could connect with a specialist from the comfort of my home. Highly recommended!",
        test_Rating : "3",
    },
    {
        id : 1001,
        test_icon : "",
        test_name : "Emily Davis",
        test_designation : "Patient",
        test_review : "Excellent facilities and very friendly staff. The entire experience from booking to consultation was seamless and professional.",
        test_Rating : "3.5",
    },
  
  ]
  return (
    <div className="slider-container p-2">
      <Slider {...settings}>
      {TestimonialData.map((test) => (
          <div key={test.id} className="p-3 ">
            <div className="bg-white p-3  text-center rounded shadow">
                <h3 className="font-bold">{test.test_name}</h3>
            <p className="text-gray-500 text-sm">{test.test_designation}</p>
            <p className="mt-2">{test.test_review}</p>
            <div className="flex justify-center mt-2">
              {/* Example for stars */}
              <IoStarSharp color="gold" />
              <IoStarSharp color="gold" />
              <IoStarSharp color="gold" />
              <IoStarHalfOutline color="gold" />
              <IoStarOutline color="gold" />
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
