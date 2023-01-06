import { IconNavigation } from "./IconNavigation";
import { IconSearch } from "./IconSearch";
import { Icon, Input, Item, Name, StyledNavigation } from "./styled";

export const Navigation = () => (
    <nav>
        <StyledNavigation>
            <Icon>
                <IconNavigation />
            </Icon>
            <Name>
                Movies Browser
            </Name>
            <Item movies>
                Movies
            </Item>
            <Item people>
                People
            </Item>
            <li>
                <IconSearch />
                <Input type="text" placeholder="Search for movies..." />
            </li>
        </StyledNavigation>
    </nav>
);