import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.pexels.com/v1/'
})

const PEXEL_API = '<PEXEL_API_KEY>';

http.interceptors.request.use(config => {
    config.headers['Authorization'] = PEXEL_API;
    return config
})

export { http }