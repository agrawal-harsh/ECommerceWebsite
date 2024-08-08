import  { useContext } from 'react'
import { AlertContext, UserContext } from './Context';

export default function withProvider(provider){
return function (IncomingComponent) {
    function outgoingComponent(props){
    const content = useContext(provider);
    return <IncomingComponent {...content} {...props}/>
    }
    return outgoingComponent;
}
}

export const withAlert =  withProvider(AlertContext);
export const withUser = withProvider(UserContext);