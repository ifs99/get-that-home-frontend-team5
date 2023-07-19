import styled from "@emotion/styled";
import { typography } from "../../styles";
import { DiRuby, DiReact } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import Logo from "../logo";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 7.75rem;
  ${typography.text.sm}
  background-color: #F5F5F6;
`;
const Container = styled.div`
  display: flex;
  padding: 1rem 1.9375rem;
  align-items: center;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 0.5rem 5rem;
  gap: 0.25rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
  justify-content: left;
`;

const LittleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5 rem;
  align-items: left;
  justify-content: left;
  color: gray;
  gap: 0.25rem;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function LogedinFooter() {
  return (
    <FooterContainer>
      <Container>
        <SmallContainer>
          <Logo />
          <p>© 202X - Find That Home</p>
          <p>Codeable - Cohort 10 Final Project</p>
        </SmallContainer>
        <SmallContainer>
          <p>Build with ❤ by:</p>
          <IconContainer>
            <Member>
              <BsGithub />
              <p>Cristhian Turpo</p>
            </Member>
            <Member>
              <BsGithub />
              <p>Rossio Lachos</p>
            </Member>
          </IconContainer>
          <IconContainer>
            <Member>
              <BsGithub />
              <p>Manuel Aguilar</p>
            </Member>
            <Member>
              <BsGithub />
              <p>Italo Flores</p>
            </Member>
          </IconContainer>
        </SmallContainer>
        <SmallContainer>
          <p>Source Code</p>
          <LittleContainer>
            <DiRuby />
            <p>Ruby on Rails REST API</p>
          </LittleContainer>
          <LittleContainer>
            <DiReact />
            <p>React Responsive SPA</p>
          </LittleContainer>
        </SmallContainer>
      </Container>
    </FooterContainer>
  );
}
export default LogedinFooter;
