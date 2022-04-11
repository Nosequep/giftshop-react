import './Nav.css';
import { useState } from 'react';
import {
  Link
} from "react-router-dom";

const Nav = () => {
  const [authenticated, setAuthenticated] = useState(false);
  
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
      <Link  className="giftshop-icon my-0" to="/">
        <h5 className="my-0 font-weight-normal text-white"><i className="fas fa-gift"></i> GiftShop</h5>
      </Link>
      <nav className="my-2 my-md-0 mr-md-auto">
        <Link className="p-2 text-white" to="/admin">Admin</Link>
      </nav>
      <div className="my-2 my-md-0">
        <Link className="btn btn-primary mr-2" to="/cart"><i className="fas fa-cart-arrow-down"></i> <span className="badge badge-light ml-1 text-danger"></span></Link>
        <Link className="btn btn-outline-info" to="/login">{authenticated ? "Log out" : "Log in"}</Link>
      </div>
    </div>
  );
}

export default Nav;