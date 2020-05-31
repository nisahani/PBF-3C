import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Style.css';

import Home from './component/Home';
import About from './component/About';
import Keranjang from './component/Keranjang';
import Produk from './component/Produk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { Component } from 'react';

class UTS extends Component {

    Navbar() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                    <a class="navbar-brand" href="/">Toko Kulkas</a>
                </Link>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/">
                            <a class="nav-item nav-link" href="/">Home</a>
                        </Link>
                        <Link to="/produk">
                            <a class="nav-item nav-link" href="/produk">List Produk</a>
                        </Link>
                        <Link to="/keranjang">
                            <a class="nav-item nav-link" href="/keranjang">Keranjang</a>
                        </Link>
                        <Link to="/about">
                            <a class="nav-item nav-link" href="/about">About</a>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            {this.Navbar()}
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/about">
                                    <About />
                                </Route>
                                <Route exact path="/produk">
                                    <Produk />
                                </Route>
                                <Route exact path="/keranjang">
                                    <Keranjang />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default UTS;