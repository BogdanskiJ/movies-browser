import loadingIcon from "./LoadingIcon/icon-spinner.svg";
import { Container, LoadingIcon, StyledHeader } from "./styled";

export const LoadingPage = ({title}) => (
    <>
        <StyledHeader>{title}</StyledHeader>
        <Container>
            <LoadingIcon src={loadingIcon} alt="" />
        </Container>
    </>
);