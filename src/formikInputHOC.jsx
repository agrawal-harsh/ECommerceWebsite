import { useField} from "formik";
import React from "react";

function formikInputHOC(Incoming) {

  return (
    function Outgoing({name, ...rest }){
        const [data,meta] = useField(name);
        const {value,onBlur,onChange} = data;
        const {error,touched} = meta;
        return(
            <>
                <Incoming 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                touched = {touched}
                error = {error} 
                    {...rest}
                />
            </>
        )
    }
    
  );
}
export default formikInputHOC;
