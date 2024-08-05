import React,{memo, useContext} from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUserCircle2 } from "react-icons/lu";
import banner from "./images/banner.jpg";
import { Link } from 'react-router-dom';
import { UserContext } from './App';



function Navbar({totalCount}) {
  const {setUser,user} = useContext(UserContext);



  function handleLogout(){
    localStorage.removeItem("token")
    setUser(undefined);
  }


  return (
    <div className="w-full bg-white">
    <div className = "header flex py-3 px-3 max-w-6xl md:py-4 mx-auto justify-between ">
      <img className = "w-20  md:w-36 " src = {banner}></img>
      <div className = "flex items-center relative gap-2 md:gap-8">


      {
        user && <button onClick = {handleLogout} className='px-2 py-1 bg-orange-500 text-white rounded-md w-28'>Logout</button>
      }

      <Link to = {"./login"}>
        <div className='text-orange-500'><LuUserCircle2 className='text-5xl relative top-1'/></div>
      </Link>


      {user && <Link to = {"./Cart"} >
      <HiOutlineShoppingBag className= "text-3xl md:text-5xl text-orange-500 visited:text-orange-300"/>
        <span className = "absolute bottom-2 right-2 md:bottom-6 md:right-4">{totalCount}</span>
        </Link>}
      </div>
    </div>
    </div>
  );
}

export default memo(Navbar);