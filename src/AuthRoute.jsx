import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./App";
import withUser from "./withUser";

function AuthRoute({children,user}){
    if(user){
        return <Navigate to = "/" />
    }
    return children;
}

export default withUser(AuthRoute);