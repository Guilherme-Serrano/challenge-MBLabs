import axios from 'axios';

//http://localhost:3006/events
const api = axios.create({
    baseURL: 'http://10.0.2.2:3333/',
});

export { api }