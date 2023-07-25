import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import GuestMainContainer from "./components/GuestMainContainer/GuestMainContainer";
import Signup from "./components/Signup/Signup";
import LogedinFooter from "./components/Footer/logedinfooter";
import SignupForm from "./components/SignupForm/SignupForm";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { getProperties } from "./services/propertyServices";
import { useEffect, useState } from "react";
import PropertiesList from "./components/PropertiesList/PropertiesList";

function UnauthenticatedApp() {
  const [guestPropertiesList, setGuestPropertiesList] = useState([]);

  useEffect(() => {
    getProperties()
      .then((data) => setGuestPropertiesList(data))
      .catch(console.log);
  }, []);

 
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<GuestMainContainer properties={guestPropertiesList.slice(0, 3)} />} />
        <Route path="/propertieslist" element={<PropertiesList properties={guestPropertiesList} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/homeseeker" element={<SignupForm />} />
        <Route path="/signup/landlord" element={<SignupForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <LogedinFooter />
    </Layout>
  );
}

export default UnauthenticatedApp;
