import React,{useState,useCallback,createContext,useEffect} from 'react';
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
import Loading from './Loading';
import axios from "axios";
import UserRoute from './UserRoute';
import AuthRoute from './AuthRoute';

export const CartContext = createContext();
export const UserContext = createContext();

function App() {

  const savedDataString = localStorage.getItem("cart");
  const savedData = savedDataString ? JSON.parse(savedDataString) : {}
  const token = localStorage.getItem("token");


  const [cart,setCart] = useState(savedData);
  const [user,setUser] = useState();
  const [loading,setLoading] = useState(true);


  useEffect(()=>{
    if(token){
      axios.get("https://myeasykart.codeyogi.io/me",{
        headers:{
          Authorization:token,
        }
        }).then((response)=> {setUser(response.data)
          setLoading(false);
      })
    }else{
      setLoading(false);
    }
  },[])


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
  const userData = {user,setUser};


    const totalCount = Object.keys(cart).reduce((total,current) => total + cart[current],0);

    if(loading){
      return <Loading/>
    }

  return (
    <UserContext.Provider value = {userData}>
    <CartContext.Provider value = {cartData}>
  <div className = "bg-gray-100 h-screen overflow-scroll flex flex-col">
    <Navbar totalCount = {totalCount}/>
      <div className = "grow mx-4 my-8 bg-white px-8 py-2 max-w-6xl lg:w-full lg:px-12 lg:py-16 xl:mx-auto">

        
        <Routes>
        <Route index element = {<UserRoute><ProductListPage/></UserRoute>}></Route>

        <Route path = "/cart" element = {<UserRoute><CartPage /></UserRoute>} />

        <Route path = "/login" element = {<AuthRoute><LoginPage setUser = {setUser}/></AuthRoute>} />
          
        <Route path = "/forgotpassword" element = {<AuthRoute><ForgotPassword /></AuthRoute>} />

        <Route path = "/signup" element = {<AuthRoute><SignUpPage /></AuthRoute>} />
          
        <Route path = "/ProductPage/:id"element = {<UserRoute><ProductPage onAddToCart = {handdleAddToCart}/></UserRoute>} />
          
        <Route path = "/*" element = {<NotFoundPage/>} />
        </Routes>        
    
      
    </div>
    <Footer className = "bottom-0"/>
    
  </div> 
    </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
