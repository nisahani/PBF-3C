import React, {Component} from "react";
// import './admin.css';
import ListProduk from "./ListProduk";   
import firebase from "firebase";
import * as firebaseConfig from "firebase";
import Product from "./Product";   
import app from './config'

class admin extends Component{
    constructor(props){
        super(props);

        this.state = {
            listProduk: []
        }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);   
        })
    }

    simpanDataKeServerAPI = () => {
        firebase.database().ref("/").set(this.state);
    }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusProduk = (idProduk) => {        // fungsi yang meng-handle button action hapus data
        const {listProduk} = this.state;
        const newState = listProduk.filter(data => {
            return data.uid !== idProduk;
        })
        this.setState({listProduk: newState})
    }

    handleTambahProduk = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
        let formInsertProduk = {...this.state.insertProduk};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertProduk['id'] = timestamp;
        formInsertProduk[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertProduk: formInsertProduk
        });
    }

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol simpan
        let image = this.refs.gambarProduk.value;
        let price = this.refs.priceProduk.value;
        let title = this.refs.judulProduk.value;
        let body = this.refs.isiProduk.value;
        let uid = this.refs.uid.value;

        if (uid && image && price && title && body){                  // Cek apakah semuad data memiliki nilai (tidak null)
            const {listProduk} = this.state;
            const indeksProduk = listProduk.findIndex(data => {
                return data.uid === uid;
            })
            listProduk[indeksProduk].image = image;
            listProduk[indeksProduk].price = price;
            listProduk[indeksProduk].title = title;
            listProduk[indeksProduk].body = body;
            this.setState({listProduk});
        } else if (image && price && title && body){                  // Cek jika apakah tidak ada data di server
            const uid = new Date().getTime().toString();
            const {listProduk} = this.state;
            listProduk.push({ uid, image, price, title, body });
            this.setState({listProduk});
        }

        this.refs.gambarProduk.value = "";
        this.refs.priceProduk.value = "";
        this.refs.judulProduk.value = "";
        this.refs.isiProduk.value = "";
        this.refs.uid.value = "";
    }

    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="image" name="image" ref="gambarProduk" 
                            onChange={this.handleTambahProduk}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="price" name="title" ref="priceProduk" 
                            onChange={this.handleTambahProduk}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama Produk</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulProduk" 
                            onChange={this.handleTambahProduk}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Deskripsi Produk</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="isiProduk" 
                            onChange={this.handleTambahProduk}></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid"/>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>


                <h2>Daftar Produk</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nama Produk</th>
                        <th>Harga</th>
                        <th>Deskripsi Produk</th>
                        <th>Gambar Produk</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                
                {
                    this.state.listProduk.map(produk => {  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <ListProduk key={produk.uid} image={produk.image} price={produk.price} judul={produk.title} isi={produk.body} 
                        idProduk={produk.uid} hapusProduk={this.handleHapusProduk}/>     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }
                </table>

            </div>
        )
    }
}

export default admin;