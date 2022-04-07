

import axios from 'axios';

const {REACT_APP_HOST_API} = process.env

const axiosServices = axios.create({
    baseURL: REACT_APP_HOST_API
});

// interceptor for http
/* axiosServices.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);*/

export default axiosServices;
