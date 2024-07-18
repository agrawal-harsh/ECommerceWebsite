import axios from "axios";
import React,{memo} from "react";

function getProductData(id){
  const promise = axios.get("https://fakestoreapi.com/products/" + id).then((response) => {
    return response.data;
  });
  console.log(promise);
  return promise;
}

function getProductList() {
  const promise = axios.get("https://fakestoreapi.com/products").then((response) => {
    return response.data;
  });
  console.log(promise);
  return promise;
};
export default getProductList ;
export {getProductData};