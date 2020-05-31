import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

export default function Barang() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/hp">Handphone</Link>
                    </li>
                    <p>
                        <img src="https://i-cdn.phonearena.com/images/article/118849-two_lead/First-thoughts-iPhone-11-Pro-and-iPhone-Pro-Max-vs-Samsung-Galaxy-S10e-Galaxy-S10-Galaxy-S10.jpg" alt="Food" width='250' />
                    </p>
                    <li>
                        <Link to="/laptop">Laptop</Link>
                    </li>
                    <p>
                        <img src="https://s3.amazonaws.com/digitaltrends-uploads-prod/2016/05/Versus-Zenbook-UX305CA.jpg" alt="Food" width='250' />
                    </p>
                    <li>
                        <Link to="/watch">Watch</Link>
                    </li>
                    <p>
                        <img src="https://electrodealpro.com/wp-content/uploads/2019/09/Apple-Watch-Series-5-vs-Galaxy-Watch-Active-2-Which-one-is-for-you.jpg" alt="Food" width='250' />
                    </p>
                </ul>
                <hr />
                <Switch>
                    <Route path="/hp">
                        <Hp />
                    </Route>
                    <Route path="/laptop">
                        <Laptop />
                    </Route>
                    <Route path="/watch">
                        <Watch />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Hp() {

    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>Handphone</h2>
            <ul>
                <li>
                    <Link to={`${url}/Samsung Z flip, Samsung S20 Ultra`}>Samsung</Link>
                </li>
                <li>
                    <Link to={`${url}/Iphone 11 Pro Max, Iphone XS Max`}>Iphone</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select an item.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Laptop() {

    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>Laptop</h2>
            <ul>
                <li>
                    <Link to={`${url}/Asus A456 UQ, Asus X550 UI`}>Asus</Link>
                </li>
                <li>
                    <Link to={`${url}/Macbook Pro, Macbook Air`}>Macbook</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select an item.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Watch() {

    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>Watch</h2>
            <ul>
                <li>
                    <Link to={`${url}/Samsung Galaxy Watch Active, Samsung Galaxy Gear`}>Samsung</Link>
                </li>
                <li>
                    <Link to={`${url}/I-Wacth Series 3, I-Wacth Series 4`}>Apple Watch</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select an item.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}
