import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// import logo from "../images/joharlogo.png";
import "./nav.css";
import { IoMdLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";

export default function Side_bar({ onClose, visible }) {
  if (!visible) return null;
  return (
    <>
      <nav className="absolute inset-0 z-50 h-screen p-3 transform lg:hidden yes no text-whiteColor w-80 bg-MainBlue">
        <div className="flex items-start justify-between pb-3 ">
          
          <button className="flex items-center text-White py-2 px-3 text-lg font-bold rounded-full font text-orangeColor hover:text-whiteColor bg-Dark hover:bg-Light">
                   Sign in <IoMdLogIn className="ml-2 text-lg rotate-180" />
                </button>
          
          <button
            onClick={onClose}
            className={`p-2 bg-White focus:outline-none focus:bg-White transform hover:bg-White  h-fit`}
          >
            <FaChevronLeft className="text-xl sm:text-xl " />
          </button>
        </div>
        <ul className="">


          <Link to="/"><li className="block px-4 py-2 rounded-md hover:bg-White font-semibold text-Dark">
            {" "}
            Find Doctors{" "}
          </li> </Link>
          
          <Link to="/"> <li className="block px-4 py-2 rounded-md hover:bg-White font-semibold  text-Dark">
            {" "}
            Hospitals {" "}
          </li> </Link>
          <Link to="/"> <li className="block px-4 py-2 rounded-md hover:bg-White font-semibold  text-Dark">
            {" "}
            Medicines {" "}
          </li> </Link>
          <Link to="/"> <li className="block px-4 py-2 rounded-md hover:bg-White font-semibold  text-Dark">
            {" "}
            Labs and Diagnostics {" "}
          </li> </Link>
          <Link to="/"> <li className="block px-4 py-2 rounded-md hover:bg-White font-semibold text-Dark ">
            {" "}
            Health Blog {" "}
          </li> </Link>
          <Link to="/"> <li className="block px-4 py-2 rounded-md hover:bg-White font-semibold text-Dark ">
            {" "}
            Failities {" "}
          </li> </Link>
          
        </ul>
      </nav>
    </>
  );
}
