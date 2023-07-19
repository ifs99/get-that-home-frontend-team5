import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import Button from "./ui/button";
import Input from "./ui/input";

const Main = styled.div`
  width: 100%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
`;

const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`;

const Logo = styled.img`
  width: 10rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const SearchButton = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  width: auto;
  border-radius: 1rem;
`;

function NavBar() {
  return (
    <Main>
      <NavContainer>
        <TopMenu>
          <Logo src="src/assets/GTHLogo.png" />
          <Menu>
            <Button>
              <BiSearch />
              FIND A HOME
            </Button>
            <Button type="secondary">
              <AiOutlineUserAdd />
              JOIN
            </Button>
            <Button type="primary">
              <AiOutlineUserAdd />
              LOGIN
            </Button>
          </Menu>
        </TopMenu>
      </NavContainer>
    </Main>
  );
}

export default NavBar;
