import styled from "@emotion/styled";

import Container from "../ui/Container/Container";
import Title from "../ui/Title";
import Hero from "../Hero/Hero";
import CreateAccount from "../CreateAccount/CreateAccount";
import PropertiesList from "../PropertiesList/PropertiesList";
import MeetTeam from "../MeetTeam/MeetTeam";
import { useAuth } from "../../context/AuthContext";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 5.25rem;
`;

const Sub2 = styled.p`
  color: var(--dark-gray, #373737);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

function GuestMainContainer({ properties }) {
  const{user} = useAuth()
  console.log("guest main: ", properties);
  return (
    <Container type="main">
      <Hero />
      <CreateAccount />
      <CardContainer>
        <TextContainer>
          <Sub2>Find and apartment you love</Sub2>
          <Title text="Homes for rent at best prices" />
        </TextContainer>
        <PropertiesList properties={properties} />
      </CardContainer>
      <MeetTeam />
    </Container>
  );
}

export default GuestMainContainer;
