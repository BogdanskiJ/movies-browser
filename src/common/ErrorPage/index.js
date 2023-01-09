import { ReactComponent as ErrorIcon } from "./ErrorIcon/danger.svg";
import { Button, Container, Error, Info } from "./styled";

export const ErrorPage = () => (
    <>
        <Container icon>
            <ErrorIcon />
        </Container>
        <Error>Ooops! Something went wrong...</Error>
        <Info>Please check your network connection <br /> and try again</Info>
        <Container>
            <Button>Back to home page</Button>
        </Container>

    </>
);