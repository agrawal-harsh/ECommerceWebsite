import React,{useState,useEffect} from "react";
import getProductList from "./Api.jsx";
import {Link,useParams} from "react-router-dom";
import { HiArrowNarrowLeft,HiArrowNarrowRight } from "react-icons/hi";
import {getProductData} from "./Api";
import { ImSpinner } from "react-icons/im";


function ProductPage({onAddToCart}) {
  const id = +(useParams().id);


  const [loading,setLoading] = useState(true);
  const [product,setProduct] = useState();
  const [count,setCount] = useState(1);
  console.log(id)

  
  useEffect(function (){
  getProductData(id).then((product) => {
    setProduct(product);
    setLoading(false);
    setCount(1);
    }).catch((error) => {
      setLoading(false);
    })
  },[id]);


  function handdleCountChange(event) {
    setCount(+event.target.value);
  }

  function handdleButtonClick() {
    onAddToCart(id,count);
    setCount(1);
}
  
  if(loading){
    return <div className = "flex items-center justify-center h-full animate-spin">
        <ImSpinner className = "text-5xl "/>
      </div>
  }
  if(!product){
    return <div className = "flex items-center justify-center h-full text-4xl">
      Data not found
    </div>  }

  
  
  const {image,category,title,price,description} = product;



  
  return(
  <>
    <Link to="/" className = "text-3xl"><HiArrowNarrowLeft /></Link>
    <div className="bg-white flex flex-col lg:flex-row px-10 py-8 lg:h-5/6">
      <div className="lg:w-1/2 flex">
    <img  src = {image}></img>
      </div>
      
  <div className="px-2 py-4 lg:py-0 lg:flex lg:flex-col lg:items-start lg:justify-start lg:px-8 lg:w-1/2">
    <h2 className = "text-gray-500 invisible text-xl mb-6 lg:visible">{category}</h2>
        <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-left lg:text-4xl">{title}</h1>
        <h2 className="mt-6 text-lg text-center font-bold sm:text-xl md:text-2xl lg:text-left lg:text-3xl">${price}</h2>
        <p className="text-gray-500 text-center mt-3 sm:text-lg lg:text-justify lg:py-6">{description}</p>
        <div className="flex gap-2 mt-3 flex-row justify-between">
          <input
            className="border w-16 pl-4 text-xl"
            type="number" min="1"
            value = {count}
            onChange = {handdleCountChange}>
          </input>
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md md:px-8 md:py-2"
            onClick = {handdleButtonClick}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>


    
    <div className = "flex w-full justify-between">
      <div className = "flex items-center">
        {id>1 && <><Link to={"/ProductPage/"+(id-1)} className = "text-3xl" ><HiArrowNarrowLeft /></Link>
        <div className = "lg:text-2xl">Previous</div></>}
      </div>
      
      {id<20 && <div className = "flex items-center">
        <div className = "lg:text-2xl">Next</div>
        <Link to={"/ProductPage/"+(id+1)} className = "text-3xl"><HiArrowNarrowRight /></Link>
      </div>}
    </div>
  </>
    )
}
export default ProductPage;