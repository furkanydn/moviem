const API = 'https://api.themoviedb.org/4'
const API_KEY = '1a6c5679f1a870fdd2b486f96e6bd7ff'

const requests = {
    fetchPopulerOne: `${API}/list/1?page=1&api_key=${API_KEY}`,
    fetchPopulerTwo: `${API}/list/1?page=2&api_key=${API_KEY}`,
    fetchPopulerThr: `${API}/list/1?page=3&api_key=${API_KEY}`,
    fetchPopulerFou: `${API}/list/2?page=1&api_key=${API_KEY}`,
    fetchFreeOne: `${API}/list/7082660?page=1&api_key=${API_KEY}`,
    fetchFreeTwo: `${API}/list/7082656?page=1&api_key=${API_KEY}`,
}

export default requests
