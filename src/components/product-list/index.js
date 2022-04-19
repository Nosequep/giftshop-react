import ProductItem from "./product-item";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductSearchbar from "./product-searchbar";
import './product-list.css';
import { PaginateRequest } from "../../models/paginate-request";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:5001/api/products/categories")
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get("https://localhost:5001/api/products")
            .then(response => {
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

    const searchProduct = () => {
        const PaginateRequest = {
            page: 0,
            pageSize: 0,
            term: "",
            categoryId: ""
        }
    }

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