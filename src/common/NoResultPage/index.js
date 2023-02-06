import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovieTotalPages } from "../../features/movieList/movieListSlice";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import { ReactComponent as NoResultIcon } from "./NoResultIcon/picture.svg";
import { Container, StyledHeader, Wrapper } from "./styled";

const NoResultPage = () => {
    const query = useQueryParameter(searchQueryParamName);
    const { page } = useParams();
    const totalPages = useSelector(selectMovieTotalPages);

    return (
        <>
            <Wrapper>
                <StyledHeader>{(page > totalPages && totalPages != 0) ? `Sorry, there are no more result for "${query}". Please check previous pages.` : `Sorry, there are no result for "${query}"`}</StyledHeader>
                <Container>
                    <NoResultIcon />
                </Container>
            </Wrapper>
        </>
    );
};

export default NoResultPage;