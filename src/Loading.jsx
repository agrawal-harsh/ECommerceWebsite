import React,{memo} from "react";
import { ImSpinner } from "react-icons/im";

function Loading(){
    return <div className = "flex items-center justify-center h-full animate-spin">
      <ImSpinner className = "text-5xl "/>
    </div> 
}

export default memo(Loading);