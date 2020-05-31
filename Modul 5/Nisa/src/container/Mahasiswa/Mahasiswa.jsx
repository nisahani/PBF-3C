import React, { Component } from "react";

import Post from "../../component/Mahasiswa/Post"

class Mahasiswa extends Component {
    state = {
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

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/mahasiswa')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3002/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        formInsertMahasiswa[event.target.name] = event.target.value;
        console.log(formInsertMahasiswa)
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        console.log(this.state.insert)
        fetch('http://localhost:3002/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <h2 className="text-center my-5">Data Mahasiswa</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">NIM</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">Nomor HP</th>
                                <th scope="col">Angkatan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listMahasiswa.map(mahasiswa => {
                                    return <Post
                                        key={mahasiswa.id}
                                        NIM={mahasiswa.id}
                                        nama={mahasiswa.nama}
                                        alamat={mahasiswa.alamat}
                                        hp={mahasiswa.hp}
                                        angkatan={mahasiswa.angkatan}
                                        status={mahasiswa.status}
                                        hapusMahasiswa={() => this.handleHapusMahasiswa(mahasiswa.id)} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <h2 classNam="text-center my-5">Pendaftaran Mahasiswa</h2>
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="NIM" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="Masukkan NIM..." id="id" name="id" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Masukkan Nama..." id="nama" name="nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" placeholder="Masukkan Alamat..." id="alamat" cols="30" row="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">No. Handphone</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="Masukkan No.HP..." id="hp" name="hp" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="angkatan" onChange={this.handleTambahMahasiswa}>
                                <option value="" disabled selected>Pilih Angkatan--</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}>
                                <option value="" disabled selected>Pilih Status--</option>
                                <option value="Aktif">Aktif</option>
                                <option value="Cuti">Cuti</option>
                                <option value="Lulus">Lulus</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
            </div>
        )
    }


}
export default Mahasiswa;