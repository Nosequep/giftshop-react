import {
  Routes,
  Route
} from "react-router-dom";
import logo from '../assets/logo.svg';
import './app.css';
import Footer from '../layouts/footer';
import Header from '../layouts/header';
import Nav from '../layouts/nav';
import ProductList from './product-list';
import ShoppingCart from './shopping-cart';
import Login from './login';
import Signup from './signup';
import ProductAdministration from './product-administration';
import ProductDetail from "./product-detail";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container main-container">
          <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/" element={<ProductList/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route exact path="/cart" element={<ShoppingCart/>}/>
            <Route exact path="/admin" element={<ProductAdministration/>}/>
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
