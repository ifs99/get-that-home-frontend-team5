import styled from "@emotion/styled";
import React, { useState } from "react";
import { colors } from "./styles";
import NavBar from "./components/navbar";
import Layout from "./components/Layout/Layout";

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
      <MainContainer>Hola soy el Main Container</MainContainer>
      <Footer>Hola soy el footer</Footer>
    </Layout>
  );
}

export default AuthenticatedApp;
