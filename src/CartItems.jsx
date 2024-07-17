import React, { useState ,useEffect} from "react";
import CartItem from "./CartItem";
function CartItems({products}) {
  const savedDataString = localStorage.getItem("cart");
  const cart = savedDataString ? JSON.parse(savedDataString) : {};


if(!products) {
  return <></>
}
    return(
        products.map(details => {
          return <CartItem {...details} count = {cart[details.id]} key = {details.id}/>
        }
      )
    )
  
      }
  export default CartItems;