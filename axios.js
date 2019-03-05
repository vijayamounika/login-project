import axios from "axios"
const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

// Alter defaults after instance has been created
export function setToken() {
    instance.defaults.headers.common['Access-Control-Allow-Headers'] = "x-access-token";
    instance.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
}

setToken();
export default instance;