import styled from "@emotion/styled";
import { typography } from "../styles";
import { DiRubyRough } from "react-icons/ri";

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  ${typography.text.sm}
`;
const Container = styled.div`
  display: flex;
  padding: 1rem 1.9375rem;
  align-items: center;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem 5rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 2rem;
`;

function GuestFooter() {
  return (
    <Footer>
      <Container>
        <SmallContainer>
          <p>© 202X - Find That Home</p>
        </SmallContainer>
        <SmallContainer>
          <p>Source Code</p>
          <IconContainer>
            <DiRubyRough />
            <p>Ruby on Rails REST API</p>
            <p>React Responsive SPA</p>
          </IconContainer>
        </SmallContainer>
        <SmallContainer>
          <p>Codeable - Cohort 10 Final Project</p>
        </SmallContainer>
      </Container>
    </Footer>
  );
}
export default GuestFooter;

// function LogFooter(){
//   return(<Container>
//   </Container>)
// }
// export default LogFooter

// function Footer() {
//   return <>
//   </>;
// }

// export default Footer;
