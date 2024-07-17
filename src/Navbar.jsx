import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import banner from "./images/banner.jpg";

function Navbar({totalCount}) {
  return (
    <div className="w-full bg-white">
    <div className = "header flex py-3 px-3 max-w-6xl md:py-4 mx-auto justify-between">
      <img className = "w-20  md:w-36 " src = {banner}></img>
      <div className = "flex flex-col items-center relative">
        <HiOutlineShoppingBag className= "text-3xl md:text-5xl text-orange-500"/>
        <span className = "absolute bottom-[0] right-2.5 md:bottom-1.5 md:right-5">{totalCount}</span>
      </div>
    </div>
    </div>
  );
}

export default Navbar;