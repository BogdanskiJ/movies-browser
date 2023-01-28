import { apiKey } from "./apiKey";
import { keyAPI, languageAPI, movieListPopularApiLink } from "./apiSet";
import { setCurrentPage } from "./features/movieList/movieListSlice";

const searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

const searchPeople = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}=en-US&page=1&include_adult=false`;


export const getMovieList = async () => {
    try {
        const response = await fetch(`${movieListPopularApiLink}${keyAPI}${languageAPI}&page=${setCurrentPage}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        return await response.json();

    } catch (error) {
        console.log(error);
    };
};

export const getGenres = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9515ffc857c67f1558538dad140abb29&language=en-US`);
      
      if (!response.ok) {
        throw new Error(response.statusText);
      };

      return await response.json();

    } catch (error) {
        console.log(error);
    };
};