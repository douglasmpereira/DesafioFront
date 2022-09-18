import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
})
// const api = axios.create({
    
//     baseURL: 'https://631f4e2f22cefb1edc489910.mockapi.io'
// })


export default api;