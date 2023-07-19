import styled from "@emotion/styled";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";

const Background = styled.img`
  width: 100%;
`;
import MeetTeam from "./components/MeetTeam/MeetTeam";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import CheckSelect from "./components/ui/CheckSelect/CheckSelect";
import CustomSelect from "./components/ui/CustomSelect/CustomSelect";
import React from "react";
import LogedinFooter from "./components/Footer/logedinfooter";

const MainContainer = styled.div`
  flex-grow: 1;
`;


function UnauthenticatedApp() {
  return (
    <Layout>
      <Header />
      <MainContainer>
        <Hero />
        <CreateAccount />
        <MeetTeam />
      </MainContainer>
      <LogedinFooter/>
    </Layout>
  );
}

export default UnauthenticatedApp;
