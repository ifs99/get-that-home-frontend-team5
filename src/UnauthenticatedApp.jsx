import styled from "@emotion/styled";
import React, { useState , Component} from "react";
import { colors } from "./styles";


import { default as ReactSelect } from "react-select";
import NavBar from "./components/navbar";
import Layout from "./components/Layout/Layout";
import Input from "./components/ui/input";
import Select from "./components/ui/select";
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";

const Background = styled.img`
  width: 100%;
`;

const MainContainer = styled.div`
  flex-grow: 1;
`;

const Footer = styled.div``;

function UnauthenticatedApp() {
  return (
    <Layout>
      <Header></Header>{/* Add routes here */}
      <MainContainer>
        <Hero/>
      </MainContainer>
      <Footer>Hola soy el footer</Footer>
    </Layout>
  );
}

export default UnauthenticatedApp;
