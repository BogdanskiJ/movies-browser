import { ReactComponent as LoadingIcon } from "./LoadingIcon/icon-spinner.svg";
import { Container, StyledHeader } from "./styled";

export const LoadingPage = () => (
    <>
        <StyledHeader>Search results for "Mulan"</StyledHeader>
        <Container>
            <LoadingIcon />
        </Container>
    </>
);