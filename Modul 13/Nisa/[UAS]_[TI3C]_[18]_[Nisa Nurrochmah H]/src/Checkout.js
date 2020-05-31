import React, {Component} from "react";
// import './admin.css';
import ListCheckout from "./ListCheckout";   
import * as firebase from "firebase";
import firebaseConfig from "./config";
import Product from "./Product";   

class Checkout extends Component{
    constructor(check){
        super(check);

        this.state = {
            listCheckout: []
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

    handleHapusCheckout = (idCheckout) => {        // fungsi yang meng-handle button action hapus data
        const {listCheckout} = this.state;
        const newState = listCheckout.filter(data => {
            return data.uid !== idCheckout;
        })
        this.setState({listCheckout: newState})
    }

    handleTambahCheckout = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
        let formInsertCheckout = {...this.state.insertCheckout};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertCheckout['id'] = timestamp;
        formInsertCheckout[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertCheckout: formInsertCheckout
        });
    }

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol simpan
        let nama = this.refs.namaCheckout.value;
        let produk = this.refs.produkCheckout.value;
        let jumlah = this.refs.jumlahCheckout.value;
        let alamat = this.refs.alamatCheckout.value;
        let uid = this.refs.uid.value;

        if (uid && nama && produk && jumlah && alamat){                  // Cek apakah semuad data memiliki nilai (tidak null)
            const {listCheckout} = this.state;
            const indeksCheckout = listCheckout.findIndex(data => {
                return data.uid === uid;
            })
            listCheckout[indeksCheckout].nama = nama;
            listCheckout[indeksCheckout].produk = produk;
            listCheckout[indeksCheckout].jumlah = jumlah;
            listCheckout[indeksCheckout].alamat = alamat;
            this.setState({listCheckout});
        } else if (nama && produk && jumlah && alamat){                  // Cek jika apakah tidak ada data di server
            const uid = new Date().getTime().toString();
            const {listCheckout} = this.state;
            listCheckout.push({ uid, nama, produk, jumlah, alamat });
            this.setState({listCheckout});
        }

        this.refs.namaCheckout.value = "";
        this.refs.produkCheckout.value = "";
        this.refs.jumlahCheckout.value = "";
        this.refs.alamatCheckout.value = "";
        this.refs.uid.value = "";
    }

    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <h2>Checkout</h2>
                    <div className="form-group row">
                        <label htmlFor="image" className="col-sm-2 col-form-label">Nama Pembeli</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" ref="namaCheckout" 
                            onChange={this.handleTambahCheckout}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="price" className="col-sm-2 col-form-label">Produk yang dipesan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="produk" name="produk" ref="produkCheckout" 
                            onChange={this.handleTambahCheckout}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Jumlah Pesanan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="jumlah" name="jumlah" ref="jumlahCheckout" 
                            onChange={this.handleTambahCheckout}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Alamat Pengiriman</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" ref="alamatCheckout" 
                            onChange={this.handleTambahCheckout}></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid"/>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>


                <h2>Data Checkout</h2>
                {
                    this.state.listCheckout.map(check => {  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <ListCheckout key={check.uid} nama={check.nama} produk={check.produk} jumlah={check.jumlah} alamat={check.alamat} 
                        idCheckout={check.uid} hapusProduk={this.handleHapusCheckout}/>     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }

            </div>
        )
    }
}

export default Checkout;