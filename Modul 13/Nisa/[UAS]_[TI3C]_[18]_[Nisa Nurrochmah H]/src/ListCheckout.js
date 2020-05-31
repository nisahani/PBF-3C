import React from "react";

const ListCheckout = (check) => {
    return (
        <div>     
                    <p>"Nama Pemesan : " {check.nama}</p>
                    <p>"Nama Barang Pesanan : "{check.produk}</p>
                    <p>"Jumlah Pesanan : " : {check.jumlah}</p>
                    <p>"Alamat Kirim : " : {check.alamat}</p>
                    <p><button className="btn btn-sm btn-warning" 
                    onClick={() => { if (window.confirm('Apakah anda yakin menghapus produk ini?')) 
                    check.hapusProduk(check.idCheckout)}} > Hapus</button></p>
        </div>
    )
}

export default ListCheckout;