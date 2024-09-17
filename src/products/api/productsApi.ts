import axios from 'axios';

const productsApi = axios.create({
    baseURL: 'https://node-api-railway-production.up.railway.app/movies',
});

export { productsApi };
