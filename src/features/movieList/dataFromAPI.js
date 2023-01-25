import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { keyAPI, languageAPI, movieListPopularApiLink } from "../../apiSet";
import { selectMovieListState } from "./movieListSlice";

export const useDataFromAPI = () => {
  const { currentPage } = useSelector(selectMovieListState);
  const [dataFromAPI, setDataFromAPI] = useState({
    data: {},
    state: "loading"
  });
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${movieListPopularApiLink}${keyAPI}${languageAPI}&page=${currentPage}`);
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
    setTimeout(fetchResponse, 500);
  }, [currentPage]);
  return dataFromAPI;
};