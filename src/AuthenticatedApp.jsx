import React from "react";

import Hero from "./components/Hero/Hero";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import styled from "@emotion/styled";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import LogedinFooter from "./components/Footer/logedinfooter";
import { Routes, Route, Navigate } from "react-router-dom";
import PropertiesList from "./components/PropertiesList/PropertiesList";
import { useAuth } from "./context/AuthContext";
import NewPropertyForm from "./components/NewPropertyForm/NewPropertyForm";

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
  const { user } = useAuth();
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/">
          {/* <Route index element={<Navigate to="/" />} /> */}
          <Route path="/" element={<Algo />} />
          <Route path="/propertieslist" element={<PropertiesList />} />
          <Route path="/newproperty" element={<NewPropertyForm />} />
        </Route>
      </Routes>

      <LogedinFooter></LogedinFooter>
    </Layout>
  );
}

export default AuthenticatedApp;
