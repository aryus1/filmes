import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'e28693fc98c1ba5b80b26ae31450fcca',
        language: 'pt-BR'
    }
})

export default api;