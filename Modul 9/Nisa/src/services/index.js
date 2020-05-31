import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

// Daftar API - Get
const getNewsBlog = () => GetAPI('mahasiswa?_sort=id&_order=desc');
// Daftar API - Post 
const postNewsBlog = (dataYgDiKirim) => PostAPI('mahasiswa', dataYgDiKirim);
// Daftar API - Delete
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}


export default API;