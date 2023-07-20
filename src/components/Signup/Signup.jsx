import styled from "@emotion/styled";

import landlord_image from "../../assets/landlord.png";
import homeseeker_image from "../../assets/homeseeker.png";
import { Link } from "react-router-dom";

const SignupContent = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`;

const SignupBackground = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  height: calc(50% - 56px);
  background: var(--shallow-pink, rgba(244, 143, 177, 0.15));
  z-index: -1;
`;

const Headline5 = styled.h5`
  color: var(--teal-teal-900, #1d4044);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

const Headline2 = styled.h2`
  color: var(--teal-teal-900, #1d4044);
  font-size: 64px;
  font-style: normal;
  font-weight: 300;
  line-height: 88px;
  letter-spacing: -0.5px;
`;

const UserTypeContainer = styled.div`
  display: flex;
  gap: 54px;
  padding-top: 54px;
`;

const StyledUserTypeCard = styled(Link)`
  background-color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  padding: 16px 20px;
  width: 280px;
  height: 280px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const UserTypeImage = styled.img`
  width: 240px;
  height: 180px;
`;

const UserTypeTitle = styled.h4`
  color: var(--dark-gray, #373737);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
`;

const UserTypeDescription = styled.p`
  color: var(--dark-gray, #373737);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

function Signup() {
  return (
    <>
      <SignupContent>
        <Headline5>Select your profile</Headline5>
        <Headline2>What are you looking for?</Headline2>
        <UserTypeContainer>
          <StyledUserTypeCard to="landlord">
            <UserTypeImage src={landlord_image} alt="land Lord image" />
            <UserTypeTitle>Landlord</UserTypeTitle>
            <UserTypeDescription>You want to rent or sell a home</UserTypeDescription>
          </StyledUserTypeCard>
          <StyledUserTypeCard to="homeseeker">
            <UserTypeImage src={homeseeker_image} alt="home seeker image" />
            <UserTypeTitle>Home seeker</UserTypeTitle>
            <UserTypeDescription>You want to find a home</UserTypeDescription>
          </StyledUserTypeCard>
        </UserTypeContainer>
      </SignupContent>
      <SignupBackground />
    </>
  );
}

export default Signup;
