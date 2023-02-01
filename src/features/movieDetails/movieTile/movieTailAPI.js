import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { keyAPI, languageAPI, movieDetailApiLink } from "../../../apiSet";

export const useMovieTailAPI = () => {
  const { id } = useParams();

  const [movieTailAPI, setMovieTailAPI] = useState({
    data: {
      release_date: "",
    },
    state: "loading"
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(`${movieDetailApiLink}${id}?${keyAPI}${languageAPI}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setMovieTailAPI({
          data,
          state: "success"
        });
      } catch {
        setMovieTailAPI({
          state: "fail"
        });
      }
    };
    setTimeout(fetchResponse, 1000);
  }, [id]);
  return movieTailAPI;
};