import React, {useContext,memo} from "react";
import CartItem from "./CartItem";
import { CartContext } from "./App";


function CartItems({products}) {

  const {cart} = useContext(CartContext);


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
  export default memo(CartItems);