import React from "react";

const Post = (props) => {
    return (
        <tr>
            <td className="nim-mahasiswa">{props.NIM}</td>
            <td className="isi-mahasiswa">{props.nama}</td>
            <td className="isi-mahasiswa">{props.alamat}</td>
            <td className="isi-mahasiswa">{props.hp}</td>
            <td className="isi-mahasiswa">{props.angkatan}</td>
            <td className="isi-mahasiswa">{props.status}</td>
            <td><button className="btn btn-sm btn-danger btn-block" onClick={props.hapusMahasiswa}>Hapus</button></td>
        </tr>
    )
}

export default Post;