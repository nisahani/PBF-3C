// Step 4
// Membuat content dari setiap menu

//import all libraries
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
 
class Home extends Component {
  render() {
    return (
      <div classNname ="container">
        <center><h3>Welcome in Noor.id</h3></center>
        <center><h8>cover your beauty as an obedience</h8></center>
        <center><h8>===================================================================================================</h8></center>
        <p></p>
        <p>Noor.id is clothing branding with her best quality.
        </p>
        <br></br>
        <br></br>
        <p>
          Visit Our Offline Store <br></br>
          Noor.id<br></br>
          1st Pahlawan Street, Tulungagung
        </p>

    <center><Link to="/Product">
      <a className ="btn btn-black" >Lihat Produk</a>
    </Link>
    </center>
  </div>
  );

  }
}
 
export default Home;