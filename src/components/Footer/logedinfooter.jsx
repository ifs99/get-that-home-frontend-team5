import styled from "@emotion/styled";
import { colors, typography } from "../../styles";
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
  padding: 1rem 2rem;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;
  color: #616161;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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
  align-items: center;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Text = styled.p`
  ${colors.gray}
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
          <p>Build with{"\uD83D\uDC97"}by:</p>
          <IconContainer>
            <Member>
              <BsGithub size={16} />
              <p>Crhistian Turpo</p>
            </Member>
            <Member>
              <BsGithub size={16} />
              <p>Rossio Lachos</p>
            </Member>
          </IconContainer>
          <IconContainer>
            <Member>
              <BsGithub size={16} />
              <p>Manuel Aguilar</p>
            </Member>
            <Member>
              <BsGithub size={16} />
              <p>Italo Flores</p>
            </Member>
          </IconContainer>
        </SmallContainer>
        <SmallContainer>
          <p>Source Code</p>
          <LittleContainer>
            <DiRuby size={16} />
            <p>Ruby on Rails REST API</p>
          </LittleContainer>
          <LittleContainer>
            <DiReact size={16} />
            <p>React Responsive SPA</p>
          </LittleContainer>
        </SmallContainer>
      </Container>
    </FooterContainer>
  );
}
export default LogedinFooter;
