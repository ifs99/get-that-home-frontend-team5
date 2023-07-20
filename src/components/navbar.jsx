import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUserAdd, AiFillHeart } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { RiHome8Line } from "react-icons/ri";
import Button from "./ui/button";
import { useState } from "react";
// import { Modal } from "antd";
import Input from "./ui/Input/Input";
import Modal from "./ui/Modal/Modal";
import {RiUserReceived2Line} from "react-icons/ri";
import { useAuth } from "../context/AuthContext";

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

function NavBar() {
  const [role, setRole] = useState("");
  const {setUser} = useAuth()

  const [isLoginModalOpen, setIsModalLoginOpen] = useState(false);

  const handleLogin = () => {
    setIsModalLoginOpen(true);
  };

  const handleSubmit = () => {
    setUser("Someone")
    setIsModalLoginOpen(false);
  };

  const handleLogout = () => {
    setRole("");
  };

  return (
    <>
      <Menu>
        <Button size="sm">
          <BiSearch />
          FIND A HOME
        </Button>
        {role === "" ? (
          <>
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
      <Modal
        title="Login"
        open={isLoginModalOpen}
        onOk={handleSubmit}
        footer={[
          <Button key="submit" type="primary" onClick={handleSubmit}>
            <RiUserReceived2Line size={24}/>
            LOGIN
          </Button>,
        ]}
      >
        <form>
          <Input label="Email" type="email" placeholder="user@mail.com"/>
          <Input label="Password" type="password" placeholder="******"/>
        </form>
      </Modal>
    </>
  );
}

export default NavBar;
