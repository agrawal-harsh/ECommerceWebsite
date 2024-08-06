import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./App";
import withUser from "./withUser";

function UserRoute({children,user}){
    if(!user){
        return <Navigate to = "./login" />
    }
    return children;
}

export default withUser(UserRoute);