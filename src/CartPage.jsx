import React, { useState } from 'react';

function Cart(){
    
const [total,setTotal] = useState(0);
const [subtotal,setsubTotal] = useState(0);
    return (
    <div className='Container flex flex-col'>
    <div className='products border-1'>


        <div className = "head  font-bold bg-gray-100 grid grid-cols-6 ">
            <p className='text-center col-start-1 col-end-4'>Product</p>
            <p className=''>Price</p>
            <p className=''>Quality</p>
            <p className=''>Subtotal</p>
        </div>
    </div>
        <div className='py-1 flex justify-between '>
            <div>
            <input className='border-2 border-black rounded-sm ml-1' placeholder='Coupon code'></input>
            <button className='px-2 py-0.5 rounded-sm bg-red-400 ml-1 text-white'>APPLY COUPON</button>
            </div>
            <button className='px-2 py-0.5 rounded-sm bg-red-300 text-gray-700'>UPDATE CART</button>
        </div>
        <div className='self-end max-w-xl min-w-80 grid auto-rows-auto grid-cols-2 border-2 border-gray-500'>
            <h2 className='col-start-1 col-end-3'>Cart Totals</h2>
            <h3>subtotal</h3>
            <p>{subtotal}</p>
            <h3>Total</h3>
            <p>{total}</p>
        </div>
    </div>
)
}
export default Cart;