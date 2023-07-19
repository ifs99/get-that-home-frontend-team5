import styled from "@emotion/styled";
import React, { useState } from "react";
import { colors } from "./styles";
import React, { Component } from "react";

import { default as ReactSelect } from "react-select";
import NavBar from "./components/navbar";
import Layout from "./components/Layout/Layout";
import Input from "./components/ui/input";
import Select from "./components/ui/select";

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

function UnauthenticatedApp() {
  return (
    <Layout>
      <Header>Hola soy el Header no autenticado</Header>
      {/* Add routes here */}
      <MainContainer>Hola soy el Main Container</MainContainer>
      <Footer>Hola soy el footer</Footer>
    </Layout>
  );
}

export default UnauthenticatedApp;
