import { memo, useEffect } from "react";
import withAlert from "./withProvider";


function Alert({alert,RemoveAlert}){
    
    useEffect(()=>{
      if(alert) {
      const timeout = setTimeout(RemoveAlert, 3*1000);
      return ()=> clearTimeout(timeout);
      }
    },[alert])


    if(!alert){
        return;
    }
    
    const {message,type} = alert;

    const theme = {
        success : "text-blue-800 bg-blue-50",
        failed : "text-red-800 bg-red-50"
    }
    
    
    return <div className={"flex items-center p-4 mb-4 text-sm rounded-lg w-full " + theme[type]} role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span className="sr-only">{type}</span>
      <div>
        <span className="font-medium">{type + " alert!"}</span> {message}
      </div>
      <div className="grow"></div>
      <button onClick = {RemoveAlert} className="ml-20 text-black">
      Dismiss
      </button>
    </div>
    
}
export default memo(withAlert(Alert));