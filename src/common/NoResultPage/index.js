import { ReactComponent as NoResultIcon } from "./NoResultIcon/picture.svg";
import { Container, StyledHeader } from "./styled";

const NoResultPage = ({ query }) => {
    return (
        <>
            <StyledHeader>{`Sorry, there are no result for "${query}"`}</StyledHeader>
            <Container>
                <NoResultIcon />
            </Container>
        </>
    );
};

export default NoResultPage;