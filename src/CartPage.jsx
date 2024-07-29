import React, { useState ,useEffect, useContext} from 'react';
import CartItem from './CartItem';
import { getProductData } from "./Api";
import Loading from "./Loading";
import { CartContext } from './App';
import {Link} from "react-router-dom";
import { HiArrowNarrowLeft} from "react-icons/hi";

function CartPage(){

const {cart,updateCart} = useContext(CartContext); 
const [localCart,setLocalCart] = useState(cart);
const [total,setTotal] = useState(0);
const [loading,setLoading] = useState(true);
const [disabled,setDisabled] = useState(true);
const subtotal = total;

useEffect(()=>{
    setLocalCart(cart);
},[cart])



const [products,setProducts] = useState();
useEffect(() => {
    setLoading(true);
    const promises = Object.keys(cart).map((id) => getProductData(id));
    Promise.all(promises).then((response) =>{
    console.log(response);
    setProducts(response);
    setLoading(false);
    setTotal(response.reduce((total,current) => total + current.price * cart[current.id],0))
    })
    },[cart]);



function handleRemove(id){
    const newCart = {...cart};
    delete newCart[id];
    updateCart(newCart);
}



function handleCountChange(event,id){
    const newValue = +event.target.value;
    const newLocalCart = {...localCart,[id]:newValue}
    setLocalCart(newLocalCart);
    setDisabled(false);
}



function handleUpdateCart(){
    updateCart(localCart);
    setDisabled(true);
}



if(loading){
    return <Loading/>
}
    return (
    <div className='Container flex flex-col'>
    <Link to="/" className = "text-3xl"><HiArrowNarrowLeft /></Link>
    <div className='products  flex flex-col'>


        <div className = "head border-2 border-gray-300 font-bold bg-gray-100 grid grid-cols-6 ">
            <p className='text-center col-start-1 col-end-4'>Product</p>
            <p className=''>Price</p>
            <p className=''>Quality</p>
            <p className=''>Subtotal</p>
        </div>
        {products.map(details => {
          return <CartItem {...details} count = {localCart[details.id]} key = {details.id} handleRemove = {handleRemove} handleCountChange={handleCountChange}/>
        }
      )}
    </div>
        <div className='py-1 flex justify-between border-2 border-gray-300'>
            <div>
            <input className='border-2 border-black rounded-sm ml-1' placeholder='Coupon code'></input>
            <button className='px-2 py-0.5 rounded-sm bg-red-400 ml-1 text-white'>APPLY COUPON</button>
            </div>
            <button className='px-2 py-0.5 rounded-sm bg-red-400 text-gray-700 disabled:bg-red-300' disabled = {disabled} onClick={handleUpdateCart}>UPDATE CART</button>
        </div>




        
        <div className='self-end min-w-80 grid auto-rows-auto grid-cols-2 border-2 border-gray-300 mt-10 md:w-96'>
            <h2 className='col-start-1 col-end-3 font-bold bg-gray-100 pl-2'>Cart Totals</h2>
            <h3 className = "pl-2">subtotal</h3>
            <p className = "pl-2">{subtotal}</p>
            <h3 className = "pl-2">Total</h3>
            <p className = "pl-2">{total}</p>
            <button className='px-2 py-1.5 rounded-sm bg-red-400 m-1 text-white col-start-1 col-end-3 md:m-2'>PROCEED TO CHECKOUT</button>
        </div>
    </div>
)
}
export default CartPage;