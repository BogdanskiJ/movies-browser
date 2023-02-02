import { keyAPI, languageAPI, movieDetailApiLink, movieListPopularApiLink } from "./apiSet";

const searchMovies = `https://api.themoviedb.org/3/search/movie?${keyAPI}&language=en-US&page=1&include_adult=false`;
const searchPeople = `https://api.themoviedb.org/3/search/person?${keyAPI}=en-US&page=1&include_adult=false`;

export const getMovieList = async (page) => {

    try {
        const response = await fetch(`${movieListPopularApiLink}${keyAPI}${languageAPI}&page=${page}`);

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

export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(`${movieDetailApiLink}${id}?${keyAPI}${languageAPI}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        return await response.json();

    } catch (error) {
        console.log(error);
    };
};

export const getCredits = async (id) => {
    try {
        const response = await fetch(`${movieDetailApiLink}${id}/credits?${keyAPI}${languageAPI}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        return await response.json();

    } catch (error) {
        console.log(error);
    };
};

export const searchMovies = async (query) => {
    if (!query) {
        return;
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?${keyAPI}${languageAPI}&query=${query}&page=1`);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        return await response.json();

    } catch (error) {
        console.log(error);
    };
};

export const searchPeople = async (query) => {

    if (!query) {
        return;
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/person?${keyAPI}&language=en-US&query=${query}&page=1`);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        return await response.json();

    } catch (error) {
        console.log(error);
    };
};

