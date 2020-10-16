import axios from 'axios'

const api = axios.create({
    baseURL: 'https://proffy-luizh-server.herokuapp.com/api'
})

export default api;