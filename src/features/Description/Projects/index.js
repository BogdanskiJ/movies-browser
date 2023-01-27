import Movie from "../../movieList/Movie";
import {
  MovieScroll,
  TileWrapper,
  TileWrappers,
  Title,
  Wrapper,
} from "./styled";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [castDetails, setCastDetails] = useState([]);
  const [crewDetails, setCrewDetails] = useState([]);

  const url_img = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/2/movie_credits?api_key=9515ffc857c67f1558538dad140abb29&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.cast);
        setCastDetails(data.cast);
        setCrewDetails(data.crew);
      });
  }, []);
  return (
    <>
      <Wrapper>
        <Title>Movies - cast ({castDetails.length})</Title>

        {/* <MovieScroll> */}
        <TileWrapper>
          {castDetails.map((detail) => (
            <Movie
              key={detail.id}
              movieTitle={detail.title}
              movieRating={detail.vote_average}
              votesNumber={detail.vote_count}
            />
          ))}
        </TileWrapper>
        {/* </MovieScroll> */}

        <Title>Movies - crew ({crewDetails.length})</Title>
        <TileWrapper>
          {crewDetails.map((crewDetail) => (
            <Movie
              key={crewDetail.id}
              movieTitle={crewDetail.title}
              movieRating={crewDetail.vote_average}
              votesNumber={crewDetail.vote_count}
            />
          ))}
        </TileWrapper>
      </Wrapper>
    </>
  );
};
