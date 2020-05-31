import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import API from "../../services";

class BlogPost extends Component{
    state = {                    // komponen state dari React untuk statefull component
        listMahasiswa: [],
        insertMahasiswa: {
            NIM: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        API.getNewsBlog().then(result => {    // data json hasil ambil dari API kita masukkan ke dalam listArtikel pada state
                this.setState( {
                    listMahasiswa: result
                })
            })
    }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    handleHapusArtikel = (data) => {        // fungsi yang meng-handle button action hapus data
        API.deleteNewsBlog(data)
        this.ambilDataDariServerAPI()
    }

    handleTambahArtikel = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
        let formInsertArtikel = {...this.state.insertMahasiswa};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertMahasiswa: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {            // fungsi untuk meng-handle tombol simpan
        API.postNewsBlog(this.state.insertMahasiswa)
        .then((response) => {
            this.ambilDataDariServerAPI();
        });
    }

    render(){
        return(  
            <div className="post-artikel">
                <div className="form pb-2 border bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-from-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">NIM</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="NIM" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="alamat" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">No. Hp</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="hp" rows="3" 
                            nChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">Angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="angkatan" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="status" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
            </div>
            <h2>Daftar Mahasiswa</h2> 
            {
                this.state.listMahasiswa.map(mahasiswa => {
                    return <Post key={mahasiswa.NIM} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} 
                    NIM={mahasiswa.NIM} status={mahasiswa.status} nama={mahasiswa.nama} alamat={mahasiswa.alamat} 
                    idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa}/>
                })
            }
            {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/> */}
        </div>   
        )
    }
}

export default BlogPost;