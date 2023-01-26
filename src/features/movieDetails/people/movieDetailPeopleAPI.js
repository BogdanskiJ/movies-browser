import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { keyAPI, languageAPI, movieDetailApiLink, movieId } from "../../../apiSet";

export const useMovieDetailPeopleAPI = () => {
    const { id } = useParams();

    const [movieDetailPeopleAPI, setMovieDetailPeopleAPI] = useState({
        data: {},
        state: "loading"
    });

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const response = await fetch(`${movieDetailApiLink}${id}/credits?${keyAPI}${languageAPI}`);
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