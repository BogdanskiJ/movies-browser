import iconNavigation from "./IconNavigation/video.svg";
import { Container, Icon, Input, Name, Logo, NavigationWrapper, Search, StyledNavigation, StyledNavLink, Subpages } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <nav>
            <StyledNavigation>
                <Container>
                    <NavigationWrapper>
                        <Logo>
                            <Icon src={iconNavigation} alt="" />
                            <Name>
                                Movies Browser
                            </Name>
                        </Logo>
                        <Subpages>
                            <li>
                                <StyledNavLink to="/popular-movies">Movies</StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to="/people">People</StyledNavLink>
                            </li>
                        </Subpages>
                    </NavigationWrapper>
                    <Search>
                        <Input
                            placeholder={`Search for ${location.pathname === "/popular-movies" ?
                                "movies..." : "people..."}
                            `}
                            value={query || ""}
                            onChange={onInputChange}
                        />
                    </Search>
                </Container>
            </StyledNavigation>
        </nav>
    )
};