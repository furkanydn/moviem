import axios from "axios";

const getMovies = axios.create({
    baseURL: "https://api.themoviedb.org/4",
})

export default getMovies
