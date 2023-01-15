import iconNavigation from "./IconNavigation/video.svg";
import iconSearch from "./IconSearch/search.svg";
import { Container, Icon, IconSearch, Input, Logo, Name, StyledNavigation, StyledNavLink, Subpages } from "./styled";
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
                    <Logo>
                        <li>
                            <Icon src={iconNavigation} alt="" />
                        </li>
                        <Name>
                            Movies Browser
                        </Name>
                    </Logo>
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
                            <Input
                                placeholder={
                                    `Search for ${location.pathname === "/movies" ? 
                                    "movies..." : "people..."}
                            `}
                                value={query || ""}
                                onChange={onInputChange}
                            />
                        </li>
                    </div>
                </Container>
            </StyledNavigation>
        </nav>
    )
};