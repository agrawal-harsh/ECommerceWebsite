import React,{useState,useEffect} from 'react';
import Product from "./Product";
import ProductList from "./ProductList";
import getProductList from "./Api.jsx";
import PageNumber from "./PageNumber";
import { ImSpinner } from "react-icons/im";

function ProductListPage() {

  const [loading,setLoading] = useState(true);
  

  const [allData,setAllData] = useState([]);
  useEffect(function () {
    getProductList().then((products) => {
      setAllData(products);
      setLoading(false);
    })
  },[]);


  const [query,setQuery] = useState("");

  function handdleSearch(event) {
  setQuery(event.target.value.toLowerCase());
  }

  const [sort,setSort] = useState("default");

  function handdleSortChange(event) {
  setSort(event.target.value);
  }

  const data = allData.filter(item => item.title.toLowerCase().indexOf(query) != -1 );

  data.sort(function (x,y) {
  if(sort == "l2h"){
  return x.price - y.price;
  }else if(sort == "h2l") {
  return y.price - x.price;
  }else if(sort == "default"){
  return true;
  }else{
  return x.title < y.title ? -1:1    
  }
  })
  if(loading){
    return <div className = "flex items-center justify-center h-full animate-spin">
      <ImSpinner className = "text-5xl "/>
    </div>  }

  
  
  return (
    <>
      <div className="py-6 flex justify-between ">
        <input
          value = {query}
          className = "w-40 border-2 rounded-md px-2" 
          placeholder = "search" 
          onChange = {handdleSearch}></input>
        <select className="px-0 lg:px-4 py-1 lg:text-lg text-sm text-gray-500 border-2 bg-gray-50" onChange = {handdleSortChange} value = {sort}>
          <option value = "default">Default sorting</option>
          <option value = "title">Sort by title</option>
          <option value = "l2h">Sort by price: low to high</option>
          <option value = "h2l">Sort by price: high to low</option>

        </select>
      </div>
      <div className = "grow">{data.length == 0 && "No product found" }</div>
<div className = "flex flex-col items-center products max-w-sm md:max-w-6xl justify-center md:gap-x-12 md:gap-y-5 md:grid md:grid-cols-3 mx-auto">

  <ProductList items = {data} />

</div>
<PageNumber />
    </>
    )
}
export default ProductListPage;