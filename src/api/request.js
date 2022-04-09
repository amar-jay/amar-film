import { API_KEY } from "./env";
// import 'dotenv/config' 
// const API_KEY = process.env.API_KEY
const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    // https://api.themoviedb.org/3/trending/all/week?api_key=b0ddba99e923a738f912b28e16561477
    fetchTopRated: `/movie/all/week?api_key=${API_KEY}&language=en-US`, // Not working!!!
    // https://api.themoviedb.org/3/movie/all/week?api_key=b0ddba99e923a738f912b28e16561477
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    // https://api.themoviedb.org/3/discover/tv?api_key=b0ddba99e923a738f912b28e16561477&with_networks=123
    fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=20`,
    // https://api.themoviedb.org/3/trending/all/week?api_key=b0ddba99e923a738f912b28e16561477&with_genres=20

}

export default request;
