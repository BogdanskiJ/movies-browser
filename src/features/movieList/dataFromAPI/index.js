import React, { useEffect, useState } from "react";
import { keyAPI, languageAPI, movieDetailApiLink, movieId, movieListPopularApiLink, movieListPopularPageApiLink } from "../../../apiSet";

export const useDataFromAPI = () => {

  const [dataFromAPI, setDataFromAPI] = useState({
    data: {},
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${movieListPopularApiLink}${keyAPI}${languageAPI}${movieListPopularPageApiLink}`);
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