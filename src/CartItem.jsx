import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

function CartItem({image,title,price,count}) {
    console.log("in cart item section")
    const subtotal = price*count;
    console.log(subtotal);
  return (
      <div className="grid grid-cols-6 h-10">
        <CiCircleRemove />
        <img className="self-center aspect-square" src = {image}/>
        <p className="">{title}</p>
        <p className="">{price}</p>
        <p className="">{count}</p>
        <p className="">{subtotal}</p>
      </div>
    
  );
}
export default CartItem;
