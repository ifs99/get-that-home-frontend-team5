import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import { RiUserReceived2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button";
import Input from "../ui/Input/Input";
import Modal from "../ui/Modal/Modal";
import { useAuth } from "../../context/AuthContext";

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

function GuestNavBar() {
  const navigate = useNavigate();
  const { login, logout } = useAuth();

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

  const handleJoin = () => {
    navigate("/signup");
  };

  return (
    <>
      <Menu>
        <Button onClick={() => navigate("/propertieslist")}>
          <BiSearch size={24} />
          FIND A HOME
        </Button>
        <>
          <Button type="secondary" onClick={handleJoin}>
            <AiOutlineUserAdd size={24} />
            JOIN
          </Button>
          <Button type="primary" onClick={handleLogin}>
            <AiOutlineUserAdd size={24} />
            LOGIN
          </Button>
        </>
      </Menu>
      <Modal
        title="Login"
        open={isLoginModalOpen}
        onOk={handleSubmit}
        footer={[
          <Button key="submit" type="primary" onClick={handleSubmit}>
            <RiUserReceived2Line size={24} />
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

export default GuestNavBar;
