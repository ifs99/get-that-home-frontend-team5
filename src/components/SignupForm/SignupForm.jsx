import styled from "@emotion/styled";
import Button from "../ui/button";
import Input from "../ui/Input/Input";

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
  return (
    <>
      <SignupFormContainer>
        <StyledSignupForm>
          <SignupFormTitle>Create your Account</SignupFormTitle>
          <div>
            <Input label="NAME" placeholder="John Doe" />
            <Input label="EMAIL" type="email" placeholder="user@mail.com" />
            <Input label="NUMBER" type="number" placeholder="999-999-999" />
            <Input label="PASSWORD" type="password" placeholder="******" />
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
