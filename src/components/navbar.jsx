import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import Button from "./ui/button";

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

function NavBar() {
  return (
    <Menu>
      <Button size="sm">
        <BiSearch />
        FIND A HOME
      </Button>
      <Button type="secondary" size="sm">
        <AiOutlineUserAdd />
        JOIN
      </Button>
      <Button type="primary" size="sm">
        <AiOutlineUserAdd />
        LOGIN
      </Button>
    </Menu>
  );
}

export default NavBar;
