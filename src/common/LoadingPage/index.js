import loadingIcon from "./LoadingIcon/icon-spinner.svg";
import { Container, LoadingIcon, StyledHeader, Wrapper } from "./styled";

export const LoadingPage = ({ title }) => (
    <>
        <Wrapper>
            <StyledHeader>{title}</StyledHeader>
            <Container>
                <LoadingIcon src={loadingIcon} alt="" />
            </Container>
        </Wrapper>
    </>
);