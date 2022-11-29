import React from "react";
import logo from "./img/logo.png";
const Footer = () => {
  return (
    <div className="">
      <div
        className="h-14 w-screen flex justify-center"
        style={{ backgroundColor: "rgb(55,71,90)" }}
      >
        <p className="mt-5 text-white text-xs font-bold">Back to top</p>
      </div>
      <div
        className="w-screen h-72 grid grid-cols-4  overflow-hidden"
        style={{ backgroundColor: "#222F3F" }}
      >
        <div className="flex justify-center align-middle w-screen space-x-60 mt-10 md:space-x-30 text-white">
          <ul className="text-overflow-hidden  ">
            <li className="font-bold text-m truncate">Get to know Us</li>
            <li>About Us</li>
            <li>Carreers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
          <ul className="text-overflow-hidden  ">
            <li className="font-bold text-m truncate">Connect with Us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <ul className="text-overflow-hidden   ">
            <li className="font-bold text-m truncate">Make Money with Us</li>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
          </ul>
          <ul className=" text-overflow-hidden ">
            <li className="font-bold text-m truncate">Let Us Help You</li>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div
        className=" flex w-screen  border border-b-0 border-gray-500 h-32 justify-center align-middle"
        style={{ backgroundColor: "#222F3F" }}
      >
        <img src={logo} alt="" className=" w-32 h-12 mt-6  p-1 absolute"></img>
        <div>
          <ul className="truncate mt-24 flex inline text-white text-xs space-x-2">
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>United Arab Emirates</li>
          </ul>
        </div>
      </div>
      <div
        className="h-32 w-screen"
        style={{ backgroundColor: "rgb(19,27,35)" }}
      >
        <div className="flex inline space-x-5 justify-center align-middle text-white pt-20">
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Internet-Based Ads</p>
        </div>
        <p className="flex text-xs justify-center align-middle text-white">
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Footer;
