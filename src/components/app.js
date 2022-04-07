import logo from '../assets/logo.svg';
import './app.css';
import Footer from '../layouts/footer';
import Header from '../layouts/header';
import Nav from '../layouts/nav';
import ProductList from './product-list';
import ShoppingCart from './shopping-cart';
import Login from './login';
import Signup from './signup';

function App() {
  return (
    <div className="App">
      <Nav />
      {/*
      <Header title={"Home"}/>
      <div className="container main-container">
        
      </div>
      */}
      <div className="container main-container">
        <ShoppingCart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
