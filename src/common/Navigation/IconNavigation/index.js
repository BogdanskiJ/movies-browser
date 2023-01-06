import { ReactComponent as Camera1 } from "./stroke1.svg";
import { ReactComponent as Camera2 } from "./stroke2.svg";
import { Icon, Item } from "./styled";

export const IconNavigation = () => (
    <Icon>
        <Camera1 />
        <Item>
            <Camera2 />
        </Item>
    </Icon>
);