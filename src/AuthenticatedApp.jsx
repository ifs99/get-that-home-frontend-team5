import React from "react";

import Hero from "./components/Hero/Hero";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import styled from "@emotion/styled";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import LogedinFooter from "./components/Footer/logedinfooter";
import { Routes, Route, Navigate } from "react-router-dom";
import PropertiesList from "./components/PropertiesList/PropertiesList";

const MainContainer = styled.div`
  flex-grow: 1;
`;

function Algo() {
  return (
    <MainContainer>
      <Hero />
      <MeetTeam />
    </MainContainer>
  );
}

function AuthenticatedApp() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/">
          {/* <Route index element={<Navigate to="/" />} /> */}
          <Route path="/" element={<Algo />} />
          <Route path="/propertieslist" element={<PropertiesList />} />
        </Route>
      </Routes>

      <LogedinFooter></LogedinFooter>
    </Layout>
  );
}

export default AuthenticatedApp;
