import axios from "axios";

function getProductData(id){
  const promise = axios.get("https://fakestoreapi.com/products/" + id).then((response) => {
    return response.data;
  });
  return promise;
}

function getProductList() {
  const promise = axios.get("https://fakestoreapi.com/products").then((response) => {
    return response.data;
  });
  return promise;
};
export default getProductList ;
export {getProductData};