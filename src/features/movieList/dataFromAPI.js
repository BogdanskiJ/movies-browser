import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { keyAPI, languageAPI, movieListPopularApiLink } from "../../apiSet";

export const useDataFromAPI = () => {
  const { page } = useParams();
  const [dataFromAPI, setDataFromAPI] = useState({
    data: {},
    state: "loading"
  });
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${movieListPopularApiLink}${keyAPI}${languageAPI}&page=${page}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setDataFromAPI({
          data,
          state: "success"
        })
      } catch {
        setDataFromAPI({
          state: "fail"
        });
      }
    };
    setTimeout(fetchResponse);
  }, [page]);
  return dataFromAPI;
};