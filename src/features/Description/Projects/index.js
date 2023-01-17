import Movie from "../../movieList/Movie";
import { MovieDetail } from "../../movieList/Movie/styled";
import { TileWrapper, Title, Wrapper } from "./styled";
import { useState, useEffect } from "react";

export const Projects = () => {
    const [details, setDetails] = useState([]);

    const url_img = "https://image.tmdb.org/t/p/w500";
    
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/person/2/movie_credits?api_key=9515ffc857c67f1558538dad140abb29&language=en-US"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDetails(data);
        });
    }, []);
  return (
    <>
      <Wrapper>
        <Title>Movies - cast ()</Title>
        <TileWrapper>
          <Movie movieTitle={details.title}/>
          <Movie />
          <Movie />
          <Movie />
        </TileWrapper>
      </Wrapper>
    </>
  );
};
