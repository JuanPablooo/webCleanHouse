import axios from 'axios'

const api = axios.create({
    baseURL: "http://ec2-100-26-18-60.compute-1.amazonaws.com:8080/v1"
})

export default api