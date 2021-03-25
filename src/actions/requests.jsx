const API_KEY = '1a6c5679f1a870fdd2b486f96e6bd7ff'

const requests = {
    fetchPopulerOne: `/list/1?page=1&api_key=${API_KEY}`,
    fetchPopulerTwo: `/list/1?page=2&api_key=${API_KEY}`,
    fetchPopulerThr: `/list/1?page=3&api_key=${API_KEY}`,
    fetchPopulerFou: `/list/1?page=4&api_key=${API_KEY}`,
    fetchFreeOne: `/list/7082660?page=1&api_key=${API_KEY}`,
    fetchFreeTwo: `/list/7082656?page=1&api_key=${API_KEY}`,
}

export default requests
