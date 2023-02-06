import { useQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import { ReactComponent as NoResultIcon } from "./NoResultIcon/picture.svg";
import { Container, StyledHeader, Wrapper } from "./styled";

const NoResultPage = () => {
    const query = useQueryParameter(searchQueryParamName);

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