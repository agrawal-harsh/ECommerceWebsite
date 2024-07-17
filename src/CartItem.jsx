import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

function CartItem({image,title,price,count}) {
    const subtotal = price*count;
  return (
      <div className="grid grid-cols-2">
      <div className="grid grid-cols-2">
      <div className="grid grid-cols-2 items-center">
        <CiCircleRemove />
        <img className="self-center aspect-square h-10" src = {image}/>
        </div>
        <p className="">{title}</p>
        </div>
        <div className="grid grid-cols-3">
        <p className="">{price}</p>
        <p className="">{count}</p>
        <p className="">{subtotal}</p>
        </div>
      </div>
    
  );
}
export default CartItem;
