import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUserAdd, AiFillHeart } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import {RiHome8Line} from "react-icons/ri"
import Button from "./ui/button";
import { useState } from "react";

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

function NavBar() {
  const [role, setRole] = useState("");
  const handleLogin = (roleId) => {
    // Implementar logica de login
    setRole(roleId);
  };

  const handleLogout = () => {
    setRole("");
  };

  return (
    <Menu>
      <Button size="sm">
        <BiSearch />
        FIND A HOME
      </Button>
      {role === "" ? (
        <>
          {/* Render these buttons when logged in */}
          <Button type="secondary" size="sm">
            <AiOutlineUserAdd />
            JOIN
          </Button>
          <Button type="primary" size="sm" onClick={handleLogin}>
            <AiOutlineUserAdd />
            LOGIN
          </Button>
        </>
      ) : role === "1" ? (
        <>
          {/* Render these buttons when seeker logged in */}
          <Button type="secondary" size="sm" onClick={handleLogout}>
            <BiLogOutCircle />
            LOGOUT
          </Button>
          <Button type="primary" size="sm">
            <AiFillHeart />
            SAVED PROPERTIES
          </Button>
          <Button type="primary" size="sm">
            <AiOutlineUserAdd />
            PROFILE
          </Button>
        </>
      ) : role === "2" ? (
        <>
          {/* Render these buttons when landlord logged in */}
          <Button type="secondary" size="sm" onClick={handleLogout}>
            <BiLogOutCircle />
            LOGOUT
          </Button>
          <Button type="primary" size="sm">
            <RiHome8Line />
            MY PROPERTIES
          </Button>
          <Button type="primary" size="sm">
            <AiOutlineUserAdd />
            PROFILE
          </Button>
        </>
      ) : null}{" "}
      {}
    </Menu>
  );
}

export default NavBar;
