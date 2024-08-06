import React, { useContext } from 'react'
import { UserContext } from './App'

export default function withUser(IncomingComponent) {
    function outgoingComponent(props){
    const {user,setUser} = useContext(UserContext);
    return <IncomingComponent user = {user} setUser = {setUser} {...props}/>
    }
    return outgoingComponent;
}