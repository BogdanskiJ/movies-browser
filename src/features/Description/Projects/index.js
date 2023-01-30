import MovieDetailTile from "../MovieDetailTile";
import { TileWrapper, Title, Wrapper } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, fetchProjects, selectProjectsState } from "./projectsSlice";

export const Projects = () => {
  const { crew, cast } = useSelector(selectProjectsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchGenres())
  }, []);

  return (
    <>
      <Wrapper>
        <Title>Movies - cast ({cast.length})</Title>

        <TileWrapper>
          {cast.map((detail) => (
            <MovieDetailTile
              key={detail.id}
              movieTitle={detail.title}
              movieRating={detail.vote_average.toFixed(1)}
              votesNumber={detail.vote_count}
              poster_path={detail.poster_path}
              movieYear={detail.release_date.slice(0,4)}
              character={detail.character}
              projects={detail.genre_ids}
              id={detail.id}
            />
          ))}
        </TileWrapper>

        <Title>Movies - crew ({crew.length})</Title>
        <TileWrapper>
          {crew.map((crewDetail) => (
            <MovieDetailTile
              key={crewDetail.id}
              movieTitle={crewDetail.title}
              movieRating={crewDetail.vote_average.toFixed(1)}
              votesNumber={crewDetail.vote_count}
              poster_path={crewDetail.poster_path}
              movieYear={crewDetail.release_date.slice(0,4)}
              character={crewDetail.job}
              id={crewDetail.id}
              projects={crewDetail.genre_ids}
            />
          ))}
        </TileWrapper>
      </Wrapper>
    </>
  );
};
