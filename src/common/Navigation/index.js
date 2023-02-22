import { useLocation } from "react-router-dom";
import iconNavigation from "../../images/video.svg";
import { Container, Icon, Input, Name, Logo, NavigationWrapper, Search, StyledNavigation, StyledNavLink, Subpages } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";

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
                        <Logo to="/popular-movies">
                            <Icon src={iconNavigation} alt="" />
                            <Name>
                                Movies Browser
                            </Name>
                        </Logo>
                        <Subpages>
                            <StyledNavLink to="/popular-movies">Movies</StyledNavLink>
                            <StyledNavLink to="/popular-people">People</StyledNavLink>
                        </Subpages>
                    </NavigationWrapper>
                    <Search>
                        <Input
                            placeholder={`Search for ${((location.pathname).slice(0, 15) === "/popular-movies" || (location.pathname).slice(0, 7) === "/movies") ?
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