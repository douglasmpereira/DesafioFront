import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
    /*http://localhost:8080/api/ */
    //CASO NECESSÁRIO, PASSAR O TOKEN
    //headers: {"Authorization" : "TOKEN"}
})

export default api;