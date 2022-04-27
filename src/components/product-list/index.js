import ProductItem from "./product-item";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductSearchbar from "./product-searchbar";
import './product-list.css';
import { PaginateRequest } from "../../models/paginate-request";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [paginateResponse, setPaginateResponse] = useState();

    useEffect(() => {
        axios.get("https://localhost:5001/api/products/categories")
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get("https://localhost:5001/api/products", {params: {pageSize: 5}})
            .then(response => {
                setPaginateResponse(response.data);
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

    const searchProduct = (paginateRequest) => {
        axios.get("https://localhost:5001/api/products", {params: {...paginateRequest}})
            .then(response => {
                setPaginateResponse(response.data);
                console.log(paginateResponse);
                setProducts(response.data.items);
            })
            .catch(error => {
                console.log(error);
            });
        
    }

    return (
        <div className="product-list">
            <div className="w-50 m-auto">
                <ProductSearchbar categories={categories} onClick={searchProduct} {...paginateResponse}/>
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