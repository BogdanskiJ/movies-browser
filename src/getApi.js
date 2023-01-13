import { apiKey } from "./ApiKey";

const searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

const searchPeople = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}=en-US&page=1&include_adult=false`;
