import { Container, Item, ItemCloud, ItemSmallCloud } from "./styled";
import { ReactComponent as Cloud } from "./vector.svg";
import { ReactComponent as SmallCloud } from "./vector2.svg";
import { ReactComponent as Vector } from "./vector3.svg";
import { ReactComponent as Vector1 } from "./vector4.svg";
import { ReactComponent as Vector2 } from "./vector5.svg";
import { ReactComponent as Vector3 } from "./vector6.svg";
import { ReactComponent as Vector4 } from "./vector7.svg";

export const NoResultIcon = () => (
    <>
        <ItemCloud>
            <Cloud />
        </ItemCloud>
        <ItemSmallCloud>
            <SmallCloud />
        </ItemSmallCloud>
        <Container>
            <Item>
                <Vector3 />
            </Item>
            <Item>
                <Vector1 />
            </Item>
            <Item>
                <Vector />
            </Item>
            <Item special>
                <Vector2 />
            </Item>
            <Item wavyLine>
                <Vector4 />
            </Item>
        </Container>
    </>
);