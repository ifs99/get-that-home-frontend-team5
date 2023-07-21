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
import { useNavigate } from "react-router-dom";



const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

function NavBar() {
  const [role, setRole] = useState("");
  const navigate = useNavigate()
  const {login, logout} = useAuth()
  

  const [isLoginModalOpen, setIsModalLoginOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "code@able.com",
    password: "123456MERe3",
  });

  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsModalLoginOpen(false);
    login(formData);
   
  }

  const handleLogin = () => {
    setIsModalLoginOpen(true);
  };

  const handleLogout = async () => {
    await logout()
  }

  const handleJoin = () => {
    navigate("/signup")
  }
  return (
    <>
      <Menu>
        <Button size="sm">
          <BiSearch />
          FIND A HOME
        </Button>
        {role === "" ? (
          <>
            <Button type="secondary" size="sm" onClick={handleJoin}>
              <AiOutlineUserAdd />
              JOIN
            </Button>
            <Button type="primary" size="sm" onClick={handleLogin}>
              <AiOutlineUserAdd />
              LOGIN
            </Button>
            <Button type="secondary" size="sm" onClick={handleLogout}>
              <AiOutlineUserAdd />
              LOGOUT
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
          <Input 
          id="email"
          name="email"
          type="email"
          placeholder="user@mail.com"
          value={email}
          onChange={handleChange}
          label="Email"
          />
          <Input 
           id="password"
           name="password"
           type="password"
           placeholder="******"
           value={password}
           onChange={handleChange}
           label="Password"
          />
        </form>
      </Modal>
    </>
  );
}

export default NavBar;
