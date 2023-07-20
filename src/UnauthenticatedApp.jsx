import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import GuestMainContainer from "./components/GuestMainContainer/GuestMainContainer";
import Signup from "./components/Signup/Signup";
import LogedinFooter from "./components/Footer/logedinfooter";
import SignupForm from "./components/SignupForm/SignupForm";
import PropertyDetail from "./components/PropertyDetail/propertydetail";

function UnauthenticatedApp() {
  return (
    <Layout>
      <Header />
      <Routes>
        {/* <Route index element={<Navigate to="" replace={true}/>}/> */}
        <Route exact path="/" element={<PropertyDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/homeseeker" element={<SignupForm />} />
        <Route path="/signup/landlord" element={<SignupForm />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
      <LogedinFooter />
    </Layout>
  );
}

export default UnauthenticatedApp;
