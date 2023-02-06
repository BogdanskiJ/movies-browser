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
  console.log("page w People", page);
  const people = useSelector(selectPeopleList);
  const loadingStatus = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);
  const totalResults = useSelector(selectPeopleTotalResults);

  useEffect(() => {
    dispatch(setPeoplePage(page));
    dispatch(getQuery(query));
    dispatch(fetchPeopleList());
  }, [query, page, dispatch]);

  return (
    <>
      {loadingStatus === true ? <LoadingPage title={"Search results for \"Popular People\""} />
        : loadingStatus === false && !people ? <ErrorPage />
          : totalResults === 0 ? <NoResultPage />
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
                    {/* <Pagination currentPage={currentPage} /> */}
                  </MainWrapper>
                </Background>
              </>
            )}
    </>
  );
};

export default People;
