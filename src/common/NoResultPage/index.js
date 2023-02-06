import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../features/movieList/movieListSlice";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import { ReactComponent as NoResultIcon } from "./NoResultIcon/picture.svg";
import { Container, StyledHeader, Wrapper } from "./styled";

const NoResultPage = () => {
    const dispatch = useDispatch();
    const query = useQueryParameter(searchQueryParamName);
    useEffect(() => {
        dispatch(setPage(0));
    }, [dispatch]);

    return (
        <>
            <Wrapper>
                <StyledHeader>{`Sorry, there are no result for "${query}"`}</StyledHeader>
                <Container>
                    <NoResultIcon />
                </Container>
            </Wrapper>
        </>
    );
};

export default NoResultPage;