import React, { useContext } from 'react'
import { AlertContext } from './App'

export default function withUser(IncomingComponent) {
    function outgoingComponent(props){
    const {alert,setAlert,RemoveAlert} = useContext(AlertContext);
    return <IncomingComponent alert = {alert} setAlert = {setAlert} RemoveAlert = {RemoveAlert} {...props}/>
    }
    return outgoingComponent;
}