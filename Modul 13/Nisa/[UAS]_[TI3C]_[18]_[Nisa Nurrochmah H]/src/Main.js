// Step 3
// Membuat menu yang menampilkan content
// tanpa harus mereload seluruh halaman website
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import admin from "./admin";
import masukan from "./masukan";
import Checkout from "./Checkout";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">noor.id</h1>
          </div>
          <div >
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Product">Product</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/masukan">Masukan</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Product" component={Product}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/masukan" component={masukan}/>
            <Route path="/admin" component={admin}/>
            <Route path="/Checkout" component={Checkout}/>
          </div>
          </div>  
          
      </HashRouter>
    );
  }
}
 
export default Main;