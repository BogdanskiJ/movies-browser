import React, { useEffect, useState } from "react";
import { keyAPI, languageAPI, movieDetailApiLink, movieId } from "../../../../apiSet";

export const useMovieTailAPI = () => {

  const [dataFromAPI, setDataFromAPI] = useState({
    data: {
      release_date: "",
    },
    state: "loading"
  }); 

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${movieDetailApiLink}${movieId}?${keyAPI}${languageAPI}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setDataFromAPI({
          data,
          state: "success"
        });
      } catch {
        setDataFromAPI({
          state: "fail"
        });
      }
    };
    setTimeout(fetchResponse, 1000);
  }, []);
  return dataFromAPI;
};