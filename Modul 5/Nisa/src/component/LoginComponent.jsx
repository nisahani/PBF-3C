import React from 'react';
import './LoginComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = () => {
    return <h1 class="text-white font-weight-bold text-center my-5">Sign In</h1>;
}

const FormUsername = () => {
    return (
        <div class="form-group mb-4">
            <input type="text" class="form-control" placeholder="Username"></input>
        </div>
    )
}

const FormPassword = () => {
    return (
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Password"></input>
        </div>
    )
}

const Main = () => {
    return (
        <body>
            <div class="container-fluid h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-3">
                        {Title()}

                        {FormUsername()}

                        {FormPassword()}

                        <div class="form-check my-4 mr-sm-2">
                            <input type="checkbox" class="form-check-input"></input>
                            <label class="form-check-label text-white">Remember Me!</label>
                        </div>

                        <button type="submit" class="btn btn-success btn-block my-1 font-weight-bold">Login</button>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Main;