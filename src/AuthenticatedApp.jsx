import styled from "@emotion/styled";
import React, { useState } from "react";
import { colors } from "./styles";
import NavBar from "./components/navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import MeetTeam from "./components/MeetTeam/MeetTeam";

const Background = styled.img`
  width: 100%;
`;

const Header = styled.div`
  
`
const MainContainer = styled.div`
  flex-grow: 1;
`

const Footer = styled.div`
  
`

function AuthenticatedApp() {
  return (
    <Layout>
      <Header>Hola soy el Header Autenticado</Header>
      {/* Add routes here */}
      <MainContainer>
        <Hero />
        <MeetTeam />
      </MainContainer>
      <Footer>Hola soy el footer</Footer>
    </Layout>
  );
}

export default AuthenticatedApp;
