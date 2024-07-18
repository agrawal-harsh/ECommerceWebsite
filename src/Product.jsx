import React,{memo} from 'react';
import {Link} from "react-router-dom";

function Product({category,title,image,price,id}) {

  return (
    <div className = "product flex flex-col align-start font-sans">
      <div className = "flex">
      <img className = "self-center aspect-square" src = {image}></img></div>
      <div className = "product-info lg:text-lg">
        <h2 className = "text-gray-500">{category}</h2>
        <h1 className = "font-semibold">{title}</h1>
        <div className="rating flex items-center font-bold">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-gray-300">★</span>
        </div>
        <h2 className = "font-semibold">${price}</h2>
        <Link className = "text-indigo-700" to = {"./ProductPage/" + id} >More Detail</Link>
      </div>
    
    </div>
  );
}

export default memo(Product);