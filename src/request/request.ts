import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    },
    timeout: 5000
});

export default instance;