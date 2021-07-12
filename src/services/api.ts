import axios from 'axios';

//https://sujeitoprogramador.com/r-api/?api=filmes
//http://localhost:3006/events
const api = axios.create({
    baseURL: 'http://10.0.2.2:3333/',
});

export { api }