import  { useContext } from 'react'
import { AlertContext, UserContext } from './Context';

 const withProvider = (provider)=>
  (IncomingComponent) =>
     (props) => {
    const content = useContext(provider);
    return <IncomingComponent {...content} {...props}/>
    }
     
export default withProvider;

export const withAlert =  withProvider(AlertContext);
export const withUser = withProvider(UserContext);