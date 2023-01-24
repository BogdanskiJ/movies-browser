import { apiKey } from "./apiKey";

const searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

const searchPeople = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}=en-US&page=1&include_adult=false`;

export const getPeople = async () => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=1");
        
        if (!response.ok) {
          throw new Error(response.statusText);
        };

      } catch(error) {
        console.log(error);
      };
};

console.log(getPeople());