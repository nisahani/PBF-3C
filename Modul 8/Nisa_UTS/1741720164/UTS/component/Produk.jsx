import React from 'react';
import { Component } from 'react';

class Produk extends Component {
    state = {
        listProduk: []
    }

    ambilDataProduk = () => {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataProduk();
    }

    listProduk() {
        return (
            this.state.listProduk.map(produk => {
                return (
                    <div class="col-sm-4 my-3">
                        <div class="card">
                            <img class="card-img-top h-50 img-fluid my-3" src={produk.gambar} alt="Card" />
                            <div class="card-block p-3">
                                <h5 class="card-title">{produk.nama}</h5>
                                <h4 class="card-text text-info font-weight-bold">{produk.harga}</h4>
                                <p class="card-text"><small class="text-muted">Stok : {produk.stok}</small></p>
                                <button type="submit" class="btn btn-primary btn-block">Beli</button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div class="col-lg-12">
                <div class="container">
                    <div class="row">
                        {this.listProduk()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Produk;