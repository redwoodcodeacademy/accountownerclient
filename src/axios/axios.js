import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://brokerage.herokuapp.com',
    headers: {
        headerType: 'example header type'
    }
});

export default instance;