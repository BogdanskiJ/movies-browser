import iconNavigation from "./IconNavigation/video.svg";
import iconSearch from "./IconSearch/search.svg";
import { Container, Icon, IconSearch, Input, Item, Name, StyledNavigation, StyledNavLink, Subpages } from "./styled";

export const Navigation = () => (
    <nav>
        <StyledNavigation>
            <li>
                <Icon src={iconNavigation} alt="" />
            </li>
            <Name>
                Movies Browser
            </Name>
            <Container>
                <Subpages>
                    <li>
                        <StyledNavLink to="/movies">Movies</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/people">People</StyledNavLink>
                    </li>
                </Subpages>
                <div>
                    <li>
                        <IconSearch src={iconSearch} alt="" />
                    </li>
                    <li>
                        <Input placeholder={`Search for movies...`} />
                    </li>
                </div>
            </Container>
        </StyledNavigation>
    </nav>
);