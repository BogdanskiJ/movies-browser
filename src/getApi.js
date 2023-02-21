import { keyAPI, languageAPI, movieDetailApiLink, movieListPopularApiLink } from "./apiSet";

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

    const response = await fetch(`${movieDetailApiLink}${id}?${keyAPI}${languageAPI}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    };

    return await response.json();

};

export const getCredits = async (id) => {

    const response = await fetch(`${movieDetailApiLink}${id}/credits?${keyAPI}${languageAPI}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    };

    return await response.json();

};

export const searchMovies = async (query, page) => {
    if (!query) {
        return;
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?${keyAPI}${languageAPI}&query=${query}&page=${page}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        return await response.json();

    } catch (error) {
        console.log(error);
    };
};

export const searchPeople = async (query, page) => {

    if (!query) {
        return;
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/person?${keyAPI}&language=en-US&query=${query}&page=${page}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        return await response.json();

    } catch (error) {
        console.log(error);
    };
};

export const getDetails = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=9515ffc857c67f1558538dad140abb29&language=en-US`
    );

    if (!response.ok) {
        throw new Error(response.statusText);
    };

    return await response.json();
};

export const getProjects = async (id) => {

    const response = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=9515ffc857c67f1558538dad140abb29&language=en-US`)
    const data = await response.json()

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await data;
};

export const getPeopleList = async (peoplePage) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=${peoplePage}`
    );

    const data = await response.json();

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await data;
};