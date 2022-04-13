import ProductItem from "./product-item";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductSearchbar from "./product-searchbar";
import './product-list.css';

const ejemplos = [
    {imageUrl: "https://via.placeholder.com/150", name: "Producto1", price: "100", categoryName: "Electronics"},
    {imageUrl: "https://via.placeholder.com/150", name: "Producto2", price: "102", categoryName: "Books"},
    {imageUrl: "https://via.placeholder.com/150", name: "Producto3", price: "103", categoryName: "Home"},
    {imageUrl: "https://via.placeholder.com/150", name: "Producto4", price: "104", categoryName: "Home"}
];



const categories = [
    {id: "1", name: "Electronics"},
    {id: "2", name: "Home"},
    {id: "3", name: "Books"}
];


const ProductList = () => {
    const [products, setProducts] = useState(ejemplos);
    useEffect(() => {
        axios.get("https://localhost:5001/api/products")
            .then(response => {
                console.log(response)
                setProducts(response.data.items);
            })
            .catch(error => {
                console.log(error);
            });
            return () => console.log("component destroyed");
    },[]);

    useEffect(() => {
        console.log("update");
    },[products]);

  return (
    <div className="product-list">
        <div className="w-50 m-auto">
            <ProductSearchbar categories={categories}/>
        </div>
        <hr/>
        <div className="row">
            {products.map((p,i) => 
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={i}>
                    <ProductItem {...products[i]} />
                </div>)
            }
        </div>
    </div>
  );
}

export default ProductList;