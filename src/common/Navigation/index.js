import iconNavigation from "./IconNavigation/video.svg";
import iconSearch from "./IconSearch/search.svg";
import { Icon, IconSearch, Input, Item, Name, StyledNavigation } from "./styled";

export const Navigation = () => (
    <nav>
        <StyledNavigation>
            <li>
                <Icon src={iconNavigation} alt="" />
            </li>
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
                <IconSearch src={iconSearch} alt="" />
            </li>
            <li>
                <Input placeholder={`Search for movies...`} />
            </li>
        </StyledNavigation>
    </nav>
);