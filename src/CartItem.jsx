import React, { useState,memo, useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { CartContext } from "./App";

function CartItem({id,image,title,price,count,handleRemove,handleCountChange}) {


  const subtotal = price*count;




  return (
      <div className="grid grid-cols-2 border-2 border-gray-500">
      <div className="grid grid-cols-6 items-center">
        <CiCircleRemove className="ml-4 cursor-pointer" onClick={handleRemove} id = {id}/>
        <img className="self-center aspect-square h-10 " src = {image}/>
        <p className="col-start-3 col-end-7">{title}</p>
        </div>
        <div className="grid grid-cols-3 items-center">
        <p className="">{price}</p>
        <input type = "number" className="border-2 border-gray-500 w-12 self-center rounded-md pl-2" onChange = {handleCountChange} value = {count} id = {id}></input>
        <p className="">{subtotal}</p>
        </div>
      </div>

  );
}
export default memo(CartItem);
