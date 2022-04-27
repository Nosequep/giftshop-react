import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './checkout.css';

const CheckOut = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:5001/api/products", {params: {pageSize: 2}})
            .then(response => {
                setProducts(response.data.items);
            })
            .catch(error => {
                console.log(error);
            });
        return () => console.log("component destroyed");
    },[]);

  return (
    <div class="container text-center">
        <h3>Confirm Order</h3>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                <th></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p) => 
                    <tr key={p.id}>
                        <td>
                            <div class="container row">
                                <div class="mr-2">
                                    <img src={p.imageUrl} alt="image" class="img-thumbnail checkout-thumb" /> 
                                </div>
                            </div>
                        </td>
                        <td>
                            <p class="mt-2 text-justify">{p.name}</p>
                        </td>
                        <td>{3}</td>
                        <td>{p.price }</td>
                        <td>{(p.price * 3)}</td>
                    </tr>
                )}

            </tbody>
        </table>
        <div class="col-md-4 col-md-offset-8 text-right">
            <table class="table table-condensed">
            <tr>
                <td class="text-right">Subtotal</td>
                <td class="text-right">$ 0.00</td>
            </tr>
            <tr>
                <td class="text-right">Shipping</td>
                <td class="text-right">$ 0.00</td>
            </tr>
            <tr>
                <td class="text-right">Total:</td>
                <td class="text-right">$ 0.00</td>
            </tr>
            </table>
            <button class="btn btn-success">Complete Purchase</button>
            <a class="btn btn-info">Cancel</a>
        </div>
    </div>
  );
}

export default CheckOut;