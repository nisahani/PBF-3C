import React, {Component} from "react";
// import './admin.css';
// import ListProduk from "./ListProduk";   
import * as firebase from "firebase";
import firebaseConfig from "./config";

class masukan extends Component{
    constructor(props){
        super(props);

        this.state = {
            listMasukan: []
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

    handleHapusMasukan = (idMasukan) => {        // fungsi yang meng-handle button action hapus data
        const {listMasukan} = this.state;
        const newState = listMasukan.filter(data => {
            return data.uid !== idMasukan;
        })
        this.setState({listMasukan: newState})
    }

    handleTambahMasukan = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
        let formInsertMasukan = {...this.state.insertMasukan};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertMasukan['id'] = timestamp;
        formInsertMasukan[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertMasukan: formInsertMasukan
        });
    }

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol simpan
        let nama = this.refs.namaMasukan.value;
        let email = this.refs.emailMasukan.value;
        let body = this.refs.isiMasukan.value;
        let uid = this.refs.uid.value;

        if (uid && nama && email && body){                  // Cek apakah semuad data memiliki nilai (tidak null)
            const {listMasukan} = this.state;
            const indeksMasukan = listMasukan.findIndex(data => {
                return data.uid === uid;
            })
            listMasukan[indeksMasukan].nama = nama;
            listMasukan[indeksMasukan].email = email;
            listMasukan[indeksMasukan].body = body;
            this.setState({listMasukan});
        } else if (nama && email && body){                  // Cek jika apakah tidak ada data di server
            const uid = new Date().getTime().toString();
            const {listMasukan} = this.state;
            listMasukan.push({ uid, nama, email , body });
            this.setState({listMasukan});
        }

        this.refs.namaMasukan.value = "";
        this.refs.emailMasukan.value = "";
        this.refs.isiMasukan.value = "";
        this.refs.uid.value = "";
    }

    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama Pengirim</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" ref="namaMasukan" 
                            onChange={this.handleTambahMasukan}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" name="email" ref="emailMasukan" 
                            onChange={this.handleTambahMasukan}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Kritik & Saran</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="isiMasukan" 
                            onChange={this.handleTambahMasukan}></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid"/>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Kirim</button>
                </div>
                

                {/* <h2>Daftar Produk</h2>
                {
                    this.state.listProduk.map(produk => {  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <ListProduk key={produk.uid} image={produk.image} price={produk.price} judul={produk.title} isi={produk.body} 
                        idProduk={produk.uid} hapusProduk={this.handleHapusProduk}/>     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                } */}
            </div>
        )
    }
}

export default masukan;