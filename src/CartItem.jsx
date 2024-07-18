import React, { useState,memo } from "react";
import { CiCircleRemove } from "react-icons/ci";

function CartItem({image,title,price,count}) {



    const subtotal = price*count;
  return (
      <div className="grid grid-cols-2 border-2 border-gray-500">
      <div className="grid grid-cols-6 items-center">
        <CiCircleRemove className="ml-4"/>
        <img className="self-center aspect-square h-10 " src = {image}/>
        <p className="col-start-3 col-end-7">{title}</p>
        </div>
        <div className="grid grid-cols-3 items-center">
        <p className="">{price}</p>
        <input className="border-2 border-gray-500 w-12 self-center rounded-md pl-2" value = {count}></input>
        <p className="">{subtotal}</p>
        </div>
      </div>
    
  );
}
export default memo(CartItem);
