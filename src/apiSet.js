// movieDetail example link https://api.themoviedb.org/3/movie/231232?api_key=9515ffc857c67f1558538dad140abb29&language=en-US

export const keyAPI = "api_key=9515ffc857c67f1558538dad140abb29";

export const languageAPI = "&language=en-US";

export const movieId = "22621";
export const movieDetailApiLink = "https://api.themoviedb.org/3/movie/";

export const movieListPopularApiLink = "https://api.themoviedb.org/3/movie/popular?"
export const movieListPopularPageApiLink = ({ apiPage }) => {
    return (apiPage)
};