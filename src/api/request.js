 import { API_KEY } from "./env";
// import 'dotenv/config' 
//const API_KEY = process.env.API_KEY
const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchTopRated: `/movie/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=20`
}

export default request;
