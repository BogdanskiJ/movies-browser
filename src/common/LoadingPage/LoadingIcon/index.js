import { ReactComponent as Ellipse } from "./ellipse.1.svg";
import { ReactComponent as PartEllipse } from "./ellipse.2.svg";
import { Item, Wrapper } from "./styled";

export const LoadingIcon = () => (
    <Wrapper>
        <div>
            <Ellipse />
        </div>
        <Item>
            <PartEllipse />
        </Item>
    </Wrapper>
);