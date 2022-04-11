import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container main-container">
            <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/" element={<ProductList/>}/>
              <Route exact path="/cart" element={<ShoppingCart/>}/>
              <Route exact path="/admin" element={<ProductAdministration/>}/>
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
