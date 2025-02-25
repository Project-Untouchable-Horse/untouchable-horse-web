import React from 'react';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import OrderDetails from "./Orders/OrderDetails";
import Payment from "./Payment/Payment";


function App() {
  // Open and close the sidebar menu
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">
        <link rel="stylesheet" href="style.css" />
        
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Untouchable Horse</Link> 
          </div>
          
          <div className="header-links">
            <Link to="/">Home</Link> 
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payment</Link>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li><Link to="/pants">Pants</Link></li>
            <li><Link to="/shirts">Shirts</Link></li> 
          </ul>
        </aside>

        <main className = "main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="orders" element={<Orders />}></Route>
            <Route path="/order/:id" element={<OrderDetails />}></Route>
            <Route path="payment" element={<Payment />}></Route>
          </Routes>
        </main>
        
      </div>
      </Router>
  );
}
export default App;