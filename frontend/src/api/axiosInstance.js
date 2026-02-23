import axios from 'axios';

const axiosInstance = axios.create({

    baseURL: 'http://localhost:5000/api', // Later, we will use (.env) here so it automatically swaps to live URL when deployed.
    headers: {
        'Content-Type': 'application/json' // We tell the server we are speaking in JSON.
    }

});

export default axiosInstance;