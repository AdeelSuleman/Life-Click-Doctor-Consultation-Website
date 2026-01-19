import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



export const My_footer = () => {
  return (
    <footer className="bg-[#000E29] text-white ">
      <div className="container mx-auto p-[50px]  ">
        <div
          className=" w-[85vw] mx-auto grid
            sm:grid-cols-1 gap-5
            md:grid-cols-2 md:gap-8
            lg:grid-cols-4 lg:gap-12"
        >
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold">LifeClick</span>
            </div>
            <p className="text-white/80 text-[14px]">
              Your trusted healthcare partner providing quality medical services
              and expert consultation.
            </p>
            <div className="flex">
              <ul className=" flex items-center justify-center gap-5">
                <li>
                  {" "}
                  <a href="#" className="">
                    <FaFacebookSquare className="w-8 h-8" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="">
                    <FaTwitter className="w-8 h-8" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="">
                    <FaSquareInstagram className="w-8 h-8" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="">
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Quick Links */}
          <div className="">
            <h3 className="font-bold text-[18px] mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-white text-[14px]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[14px]">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[14px]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[14px]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[14px]">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div className="">
            <h3 className="font-bold text-[18px] mb-3">Services</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-white text-[14px]">
                  Online Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[14px]">
                  Emergency Care
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[14px]">
                  Lab Tests
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[14px]">
                  Medicine Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-[14px]">
                  Health Packages
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="">
            <h3 className="font-bold text-[18px] mb-3">Contact Us</h3>
            <ul className="text-sm space-y-2 ">
              <li className="flex items-center gap-2">
                <FaLocationDot/>
                <p className="text-[14px]">123 Healthcare Ave, Medical District, City</p>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone/>
                <p className="text-[14px]">+1 234 567 8900</p>
              </li>
              <li className="flex items-center gap-2">
              <MdEmail/>
                <p className="text-[14px]">support@lifeclck.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[85vw] border-t border-white/10 mt-10 mx-auto">
          <div className="flex justify-between items-center flex-col md:flex-row mt-5 text-sm text-white">
            <p>&copy; 2024 LifeClick. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="">
                Privacy Policy
              </a>
              <a href="#" className="">
                Terms of Service
              </a>
              <a href="#" className="">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
