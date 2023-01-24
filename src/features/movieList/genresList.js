import { useEffect, useState } from "react";

export const useGenresFromAPI = () => {

  const [genresFromAPI, setGenresFromAPI] = useState({
    genres:[],
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9515ffc857c67f1558538dad140abb29&language=en-US`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const genres = await response.json();
        setGenresFromAPI({
          genres,
          state: "success"
        });
      } catch {
        setGenresFromAPI({
          state: "fail"
        });
      }
    };
    setTimeout(fetchResponse, 1000);
  }, []);
  return genresFromAPI;
};