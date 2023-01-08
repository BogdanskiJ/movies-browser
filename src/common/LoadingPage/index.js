import loadingIcon from "./LoadingIcon/icon-spinner.svg";
import { Container, LoadingIcon, StyledHeader } from "./styled";

export const LoadingPage = () => (
    <>
        <StyledHeader>Search results for "Mulan"</StyledHeader>
        <Container>
            <LoadingIcon src={loadingIcon} alt="" />
        </Container>
    </>
);