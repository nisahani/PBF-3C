import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './component/LoginComponent';

ReactDOM.render(<LoginComponent />, document.getElementById('root'));


// import HelloComponent from './component/HelloComponent';
// import StateFullComponent from './container/StateFullComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function HelloWord() {
//     return <p> ini adalah function component </p>
// }

// const HelloWord = () => {
//     return <p> ini adalah arrow function </p>
// }

// class Statefullcomponent extends React.Component {
//     render() {
//         return <p> ini adalah Statefull Component</p>
//     }
// }
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
// ReactDOM.render(<p> hello word</p>, document.getElementById('root'));
// ReactDOM.render(<Statefullcomponent />, document.getElementById('root'));
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();