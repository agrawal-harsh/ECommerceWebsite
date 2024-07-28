import React,{useState,useCallback,createContext} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import {Routes,Route} from "react-router-dom";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import ForgotPassword from "./ForgotPassword";
import CartPage from "./CartPage"

export const CartContext = createContext();

function App() {

  const savedDataString = localStorage.getItem("cart");
  const savedData = savedDataString ? JSON.parse(savedDataString) : {}


  const [cart,setCart] = useState(savedData);


    const handdleAddToCart = useCallback(function(productId,count){
      const newCart = {...cart,[productId]:(cart[productId] ? cart[productId] + count :count)}
      updateCart(newCart)
    },[cart])

    function updateCart(newCart){
      const a = {...newCart}
      setCart({...a});
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("cart",cartString);
  }

    console.log(cart);

  const cartData = {cart,setCart,updateCart};


    const totalCount = Object.keys(cart).reduce((total,current) => total + cart[current],0);

  return (
    <CartContext.Provider value = {cartData}>
  <div className = "bg-gray-100 h-screen overflow-scroll flex flex-col">
    <Navbar totalCount = {totalCount}/>
      <div className = "grow mx-4 my-8 bg-white px-8 py-2 max-w-6xl lg:w-full lg:px-12 lg:py-16 xl:mx-auto">

        
        <Routes>
        <Route index element = {<ProductListPage/>}></Route>

        <Route path = "/cart" element = {<CartPage />} />

        <Route path = "/login" element = {<LoginPage />} />
          
        <Route path = "/forgotpassword" element = {<ForgotPassword />} />

        <Route path = "/signup" element = {<SignUpPage />} />
          
        <Route path = "/ProductPage/:id"element = {<ProductPage onAddToCart = {handdleAddToCart}/>} />
          
        <Route path = "/*" element = {<NotFoundPage/>} />
        </Routes>        
    
      
    </div>
    <Footer className = "bottom-0"/>
    
  </div> 
    </CartContext.Provider>
  );
}

export default App;
