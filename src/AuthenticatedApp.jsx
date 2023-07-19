import React, { useState } from "react";

import Hero from "./components/Hero/Hero";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import styled from "@emotion/styled";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import LogedinFooter from "./components/Footer/logedinfooter";

const Background = styled.img`
  width: 100%;
`;

const MainContainer = styled.div`
  flex-grow: 1;
`;

function AuthenticatedApp() {
  return (
    <Layout>
      <Header>Hola soy el Header Autenticado</Header>
      {/* Add routes here */}
      <MainContainer>
        <Hero />
        <MeetTeam />
      </MainContainer>
      <LogedinFooter></LogedinFooter>
    </Layout>
  );
}

export default AuthenticatedApp;
