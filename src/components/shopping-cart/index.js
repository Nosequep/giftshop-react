import ShoppincartItem from "./shopping-cart-item";
import { useState } from "react";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        {id:"1", product:"Grafica", quantity:"10", imageUrl: "https://via.placeholder.com/150"},
        {id:"2", product:"Grafica2", quantity:"11", imageUrl: "https://via.placeholder.com/150"},
        {id:"3", product:"Grafica3", quantity:"12", imageUrl: "https://via.placeholder.com/150"}
    ])

    const isCartEmpty = true;

    return (
        <div className="container border border-gray rounded bg-light mb-3">
            <div className="d-flex flex-md-row m-2 justify-content-center">
                <div className="mr-md-auto">
                    <i className="fas fa-cart-plus fa-5x text-primary"></i>
                </div>
                <div>
                    <h2>Shopping cart</h2>
                </div>
            </div>         
            {isCartEmpty ? 
                <div className="text-center" >
                    <hr/>
                    <i className="far fa-clock fa-5x"></i>
                    <h4 className="text-center">No product added</h4>
                </div> 
                : 
                <div className="mb-2">
                    <div className="table-responsive-lg">
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col" className="col-2"></th>
                                    <th scope="col" className="col-md-8">Product</th>
                                    <th scope="col" className="col-1">Quantity</th>
                                    <th scope="col" className="col-1">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(c =>
                                        <ShoppincartItem key={c.id} {...c}/>
                                    )}
                                </tbody>   
                            </table>
                        </div>
                    </div>
                    <div className="d-flex flex-md-row justify-content-center" >
                        <a className="btn btn-success col-6">Checkout</a>
                    </div>
                </div>
            }
        </div>
    );
}

export default ShoppingCart;