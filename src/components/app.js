import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
      <Nav />
      <div className="container main-container">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
