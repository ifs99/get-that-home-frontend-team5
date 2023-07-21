import React from "react";

import Hero from "./components/Hero/Hero";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import styled from "@emotion/styled";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import LogedinFooter from "./components/Footer/logedinfooter";
import { Routes, Route, Navigate } from "react-router-dom";

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
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/products" />} />
          <Route path="products" element={<MeetTeam />} />
        </Route>
      </Routes>
      <MainContainer>
        <Hero />
        <MeetTeam />
      </MainContainer>
      <LogedinFooter></LogedinFooter>
    </Layout>
  );
}

export default AuthenticatedApp;
