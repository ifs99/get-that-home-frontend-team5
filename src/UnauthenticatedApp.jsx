import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import GuestMainContainer from "./components/GuestMainContainer/GuestMainContainer";
import Signup from "./components/Signup/Signup";
import LogedinFooter from "./components/Footer/logedinfooter";
import SignupForm from "./components/SignupForm/SignupForm";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function UnauthenticatedApp() {
  return (
    <Layout>
      <Header />
      <Routes>
        {/* <Route index element={<Navigate to="" replace={true}/>}/> */}
        <Route exact path="/" element={<GuestMainContainer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/homeseeker" element={<SignupForm />} />
        <Route path="/signup/landlord" element={<SignupForm />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <LogedinFooter />
    </Layout>
  );
}

export default UnauthenticatedApp;
