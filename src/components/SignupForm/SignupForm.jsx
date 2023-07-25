import styled from "@emotion/styled";
import Button from "../ui/button";
import Input from "../ui/Input/Input";
import { useParams } from "react-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const SignupBackground = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  height: calc(50% - 56px);
  background: var(--shallow-pink, rgba(244, 143, 177, 0.15));
  z-index: -1;
`;

const SignupFormContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSignupForm = styled.form`
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SignupFormTitle = styled.h5`
  color: #000;
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

function SignupForm() {
  const { user_type } = useParams();
  const { signup} = useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    type_user: user_type,
  });

  const { name, email, password, phone } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    signup(formData)
  };

  return (
    <>
      <SignupFormContainer>
        <StyledSignupForm onSubmit={handleSubmit}>
          <SignupFormTitle>Create your Account</SignupFormTitle>
          <div>
            <Input
              label="NAME"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={handleChange}
            />
            <Input
              label="EMAIL"
              name="email"
              type="email"
              placeholder="user@mail.com"
              value={email}
              onChange={handleChange}
            />
            <Input
              label="NUMBER"
              name="phone"
              type="number"
              placeholder="999-999-999"
              value={phone}
              onChange={handleChange}
            />
            <Input
              label="PASSWORD"
              name="password"
              type="password"
              placeholder="******"
              value={password}
              onChange={handleChange}
            />
            <Input
              label="PASSWORD CONFIRMATION"
              type="password"
              placeholder="******"
            />
          </div>
          <Button type="primary">CREATE ACCOUNT</Button>
        </StyledSignupForm>
      </SignupFormContainer>
      <SignupBackground />
    </>
  );
}

export default SignupForm;
