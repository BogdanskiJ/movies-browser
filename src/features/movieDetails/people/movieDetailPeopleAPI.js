import { useEffect, useState } from "react";
import { keyAPI, languageAPI, movieDetailApiLink, movieId } from "../../../apiSet";

export const useMovieDetailPeopleAPI = () => {

    const [movieDetailPeopleAPI, setMovieDetailPeopleAPI] = useState({
        data: {},
        state: "loading"
    });

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const response = await fetch(`${movieDetailApiLink}${movieId}/credits?${keyAPI}${languageAPI}`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setMovieDetailPeopleAPI({
                    data,
                    state: "success"
                });
            } catch {
                setMovieDetailPeopleAPI({
                    state: "fail"
                });
            }
        };
        setTimeout(fetchResponse, 1000);
    }, []);
    return movieDetailPeopleAPI;
};