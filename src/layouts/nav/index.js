import './Nav.css';
import { useState } from 'react';

const Nav = () => {
  const [authenticated, setAuthenticated] = useState(false);
  
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
      <div className="giftshop-icon my-0">
        <h5 className="my-0 font-weight-normal text-white"><i className="fas fa-gift"></i> GiftShop</h5>
      </div>
      <nav className="my-2 my-md-0 mr-md-auto">
        <a className="p-2 text-white" >Admin</a>
      </nav>
      <div className="my-2 my-md-0">
        <a className="btn btn-primary mr-2" ><i className="fas fa-cart-arrow-down"></i> <span className="badge badge-light ml-1 text-danger"></span></a>
        <a className="btn btn-outline-info" >{authenticated ? "Log out" : "Log in"}</a>
      </div>
    </div>
  );
}

export default Nav;