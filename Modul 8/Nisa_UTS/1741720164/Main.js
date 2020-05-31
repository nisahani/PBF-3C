import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Barang from "./Barang";
import About from "./About";
import "./style.css";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="judul">
                        <center>
                            <h1 className="title">Gadget.in</h1>
                            <h3 className="subtitle">Jual Elektronik Kekinian</h3>
                        </center>
                    </div>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/barang">Barang</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/barang" component={Barang} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;