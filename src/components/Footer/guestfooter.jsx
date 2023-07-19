import styled from "@emotion/styled";
import { typography } from "../../styles";
import { DiRuby, DiReact } from "react-icons/di";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
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
  color: #373737;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const LittleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5 rem;
  align-items: center;
  color: #373737;
  gap: 0.25rem;
`;

function GuestFooter() {
  return (
    <FooterContainer>
      <Container>
        <SmallContainer>
          <p>© 202X - Find That Home</p>
        </SmallContainer>
        <SmallContainer>
          <p>Source Code</p>
          <IconContainer>
            <LittleContainer>
              <DiRuby size={16} />
              <p>Ruby on Rails REST API</p>
            </LittleContainer>
            <LittleContainer>
              <DiReact size={16} />
              <p>React Responsive SPA</p>
            </LittleContainer>
          </IconContainer>
        </SmallContainer>
        <SmallContainer>
          <p>Codeable - Cohort 10 Final Project</p>
        </SmallContainer>
      </Container>
    </FooterContainer>
  );
}
export default GuestFooter;
