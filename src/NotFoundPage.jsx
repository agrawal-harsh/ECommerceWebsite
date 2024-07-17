import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import notFoundImage from "./images/page-not-found.webp";

function NotFoundPage() {
  return(
    <div className = "flex flex-col items-center">
      <img className = "w-full h-full self-center" src = {notFoundImage}></img>
      <Link to="/"><button className = "border rounded-md bg-orange-500 p-2 mt-4">Go To Home</button></Link>
    </div>
  )
}
export default NotFoundPage;