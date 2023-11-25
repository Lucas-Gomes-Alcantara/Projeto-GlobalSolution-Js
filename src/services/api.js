import axios from 'axios';

const api = axios.create({
    baseURL: 'https://projeto-global-solution-json-server.vercel.app',
});

export default api;
