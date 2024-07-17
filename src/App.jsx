import React,{useState} from 'react';
import Navbar from "./Navbar";
import Product from "./Product";
import ProductList from "./ProductList";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import {Routes,Route} from "react-router-dom";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";





function App() {

  const savedDataString = localStorage.getItem("cart");
  const savedData = savedDataString ? JSON.parse(savedDataString) : {}

  const [cart,setCart] = useState(savedData);

  function handdleAddToCart(productId,count){
    const newCart = {...cart,[productId]:cart[productId] ? cart[productId] + count :count}
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("cart",cartString)
  }


  console.log(cart);

  
  const totalCount = Object.keys(cart).reduce((total,current) => total + cart[current],0);

  return (
  <div className = "bg-gray-100 h-screen overflow-scroll flex flex-col">
    <Navbar totalCount = {totalCount}/>
      <div className = "grow mx-4 my-8 bg-white px-8 py-2 max-w-6xl lg:w-full lg:px-12 lg:py-16 xl:mx-auto">
        <Routes>
          <Route index element = 
            {<ProductListPage/>}></Route>
          
          <Route path = "/ProductPage/:id"
            element = {<ProductPage onAddToCart = {handdleAddToCart}/>} />
          <Route path = "/*"
            element = {<NotFoundPage/>} />
        </Routes>        
    
      
    </div>
    <Footer className = "bottom-0"/>
    
  </div> 
  );
}

export default App;