import { ReactComponent as Loupe } from "./ellipse_739.svg";
import { ReactComponent as Line } from "./line_181.svg";
import { StyledLine, StyledLoupe } from "./styled";

export const IconSearch = () => (
    <>
        <StyledLoupe>
            <Loupe />
        </StyledLoupe>
        <StyledLine>
            <Line />
        </StyledLine>
    </>
);