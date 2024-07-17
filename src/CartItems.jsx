import React, { useState ,useEffect} from "react";
import CartItem from "./CartItem";
import { getProductData } from "./Api";

function CartItems() {
  const savedDataString = localStorage.getItem("cart");
  const cart = savedDataString ? JSON.parse(savedDataString) : {};

  
    return(
      Object.keys(cart).map((id) => {
        console.log(id)
        getProductData(id).then((product) =>{
            console.log(product)
            return <CartItem {...product} count ={ cart[id]}/>
        }
    )
      }
      )
    )
  }
  export default CartItems;