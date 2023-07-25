import React from "react";

import Hero from "./components/Hero/Hero";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import styled from "@emotion/styled";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import LogedinFooter from "./components/Footer/logedinfooter";
import { Routes, Route, Navigate } from "react-router-dom";
import Landlordclosedproperties from "./components/Landlord/Landlordclosedproperties";
import { useAuth } from "./context/AuthContext";
import Landlord from "./components/Landlord/Landlord";
import { getProperties } from "./services/propertyServices";
import { useState, useEffect } from "react";
import FavoriteProperties from "./components/HomeSeeker/Favoriteproperties";
import FavoriteContacted from "./components/HomeSeeker/Contactedproperties";

import FindHome from "./components/HomeSeeker/findhome";
import PropertiesList from "./components/PropertiesList/PropertiesList";
import NewPropertyForm from "./components/NewPropertyForm/NewPropertyForm";
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
  const { user } = useAuth();

  const [properties, setProperties] = useState ([]);

  useEffect (() => {
    
  getProperties().then((data) => setProperties(data));
  }, []);

  return (
    <Layout>
      <Header />
      <Routes>
        {user.user_type == "Landlord" ? (
          <>
            <Route index element={<Navigate to="/active" />} />
            <Route path="/active" element={<Landlord />} />
            <Route path="/closed" element={<Landlordclosedproperties />} />
            <Route path="/newproperty" element={<NewPropertyForm />} />
          </>
        ) : (
          <>
          <Route index element={<Navigate to="/"/>} />
          <Route path="/properties" element={<FindHome properties ={properties}/>} />
          <Route path="/favorites" element={<FavoriteProperties/>} />
          <Route path="/contacted" element={<FavoriteContacted/>} />
          </>
          
        )}
       
      </Routes>

      <LogedinFooter></LogedinFooter>
    </Layout>
  );
}

export default AuthenticatedApp;
