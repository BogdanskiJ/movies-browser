import {
  NavContainer,
  NavHeader,
  StyledInput,
  StyledNavigation,
  StyledNavItem,
  Wrapper,
} from "./styled";

export const Navigation = () => {
  return (
    <Wrapper>
      <NavContainer>
        <NavHeader>Movies Browser</NavHeader>
        <nav>
          <StyledNavigation>
            <StyledNavItem>Movies</StyledNavItem>
            <StyledNavItem>People</StyledNavItem>
          </StyledNavigation>
        </nav>
        <StyledInput />
      </NavContainer>
    </Wrapper>
  );
};
