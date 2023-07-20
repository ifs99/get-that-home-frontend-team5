import styled from "@emotion/styled";

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import LogedinFooter from "./components/Footer/logedinfooter";
import PropertyCard from "./components/PropertyCard/propertycard";
import { typography, fonts } from "./styles";
import { Routes } from "react-router-dom";

const MainContainer = styled.div`
  flex-grow: 1;
`;

const CardContainer = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  place-items: center;
  column-gap: 2rem;
  max-width: 1000px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 5.25rem;
`;

const Sub2 = styled.p`
  color: #373737;
  ${typography.head.xxs};
  ${fonts.primary};
`;

const Head4 = styled.p`
  color: #bf5f82;
  ${typography.head.lg};
  ${fonts.primary}
`;
function UnauthenticatedApp() {
  return (
    <Layout>
      <Header />
      <MainContainer>
        <Hero />
        <CreateAccount />
        <MainContainer>
          <TextContainer>
            <Sub2>Find and apartment you love</Sub2>
            <Head4>Homes for rent at best prices</Head4>
          </TextContainer>
          <CardContainer>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </CardContainer>
        </MainContainer>
        <MeetTeam />
      </MainContainer>
      <LogedinFooter />
    </Layout>
  );
}

export default UnauthenticatedApp;
