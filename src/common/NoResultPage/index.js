import { ReactComponent as NoResultIcon } from "./NoResultIcon/picture.svg";
import { Container, StyledHeader } from "./styled";

const NoResultPage = () => (
    <>
        <StyledHeader>Sorry, there are no result for "Muan"</StyledHeader>
        <Container>
            <NoResultIcon />  
        </Container>
    </>
);

export default NoResultPage;