import styled from "@emotion/styled";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";

const Background = styled.img`
  width: 100%;
`;
import MeetTeam from "./components/MeetTeam/MeetTeam";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import CheckSelect from "./components/ui/CheckSelect/CheckSelect";
import CustomSelect from "./components/ui/CustomSelect/CustomSelect";

const MainContainer = styled.div`
  flex-grow: 1;
`;

const Footer = styled.div``;

function UnauthenticatedApp() {
  return (
    <Layout>
      <Header/>
      <MainContainer>
        <Hero/>
        <CreateAccount/>
        <MeetTeam />
      </MainContainer>
      <Footer>Hola soy el footer</Footer>
    </Layout>
  );
}

export default UnauthenticatedApp;
