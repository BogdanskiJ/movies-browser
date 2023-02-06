import { useEffect } from "react";
import Pagination from "../pagination/index";
import { PeopleTile } from "../PeopleTile";
import { Background, Info, MainWrapper, TileWrapper } from "./styled";
import { useSelector } from "react-redux";
import {
  fetchPeopleList,
  selectLoadingStatus,
  selectPeopleTotalResults,
  getQuery,
  selectPeopleList,
  setPeoplePage,
  selectPeopleTotalPages,
} from "./peopleListSlice";
import { useDispatch } from "react-redux";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { useQueryParameter } from "../../../queryParameters";
import searchQueryParamName from "../../../searchQueryParamName";
import NoResultPage from "../../../common/NoResultPage";
import { useParams } from "react-router-dom";

export const People = () => {
  const { page } = useParams();
  const people = useSelector(selectPeopleList);
  const loadingStatus = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);
  const totalResults = useSelector(selectPeopleTotalResults);
  const totalPages = useSelector(selectPeopleTotalPages);

  useEffect(() => {
    dispatch(getQuery(query));
    dispatch(setPeoplePage(page));
    dispatch(fetchPeopleList());
  }, [query, page, dispatch]);


  return (
    <>
      {loadingStatus === true && !query ? <LoadingPage title={"Search results for \"Popular People\""} />
        : loadingStatus === true && query ? <LoadingPage title={`Search results for "${query}"`} />
        : loadingStatus === false && !people ? <ErrorPage />
          : (totalResults === 0 || page > totalPages) ? <NoResultPage />
            : (
              <>
                <Background>
                  <MainWrapper>
                    <Info>
                      {!query ? "Popular people"
                        : `Search results for "${query}" (${totalResults})`}
                    </Info>
                    <TileWrapper>
                      {people.map((actor) => (
                        <PeopleTile name={actor.name} key={actor.id} {...actor} />
                      ))}
                    </TileWrapper>
                    <Pagination />
                  </MainWrapper>
                </Background>
              </>
            )}
    </>
  );
};

export default People;
