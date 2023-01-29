import { keyAPI, languageAPI, movieListPopularApiLink } from "./apiSet";
import { setCurrentPage } from "./features/movieList/movieListSlice";

const searchMovies = `https://api.themoviedb.org/3/search/movie?${keyAPI}&language=en-US&page=1&include_adult=false`;

const searchPeople = `https://api.themoviedb.org/3/search/person?${keyAPI}=en-US&page=1&include_adult=false`;


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
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${keyAPI}${languageAPI}`);
      
      if (!response.ok) {
        throw new Error(response.statusText);
      };

      return await response.json();

    } catch (error) {
        console.log(error);
    };
};
