import Movie from "../../movieList/Movie";
import { TileWrapper, Title, Wrapper } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, selectProjectsState } from "./projectsSlice";

export const Projects = () => {
  const { crew, cast } = useSelector(selectProjectsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <>
      <Wrapper>
        <Title>Movies - cast ({cast.length})</Title>

        <TileWrapper>
          {cast.map((detail) => (
            <Movie
              key={detail.id}
              movieTitle={detail.title}
              movieRating={detail.vote_average}
              votesNumber={detail.vote_count}
            />
          ))}
        </TileWrapper>

        <Title>Movies - crew ({crew.length})</Title>
        <TileWrapper>
          {crew.map((crewDetail) => (
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
