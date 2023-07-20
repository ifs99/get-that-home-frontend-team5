import styled from "@emotion/styled";
import NavBar from "../navbar";
import Logo from "../logo";

const Heading = styled.div`
  width: 100%;
  flex-shrink: 0;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding: 0.5rem 2rem;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

function Header() {
  return (
    <Heading>
      <HeaderContainer>
        <Logo />
        <NavBar></NavBar>
      </HeaderContainer>
    </Heading>
  );
}
export default Header;
