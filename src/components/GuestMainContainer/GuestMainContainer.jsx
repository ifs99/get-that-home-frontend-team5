import styled from "@emotion/styled";
import Container from "../ui/Container/Container";
import Hero from "../Hero/Hero";
import CreateAccount from "../CreateAccount/CreateAccount";
import MeetTeam from "../MeetTeam/MeetTeam";
import { fonts, typography } from "../../styles";
import PropertyCard from "../PropertyCard/propertycard";

const CardContainer = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  place-items: center;
  column-gap: 2rem;
  max-width: 1000px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 5.25rem;
`;

const Sub2 = styled.p`
  color: #373737;
  ${typography.head.xxs};
  ${fonts.primary};
`;

const Head4 = styled.p`
  color: #bf5f82;
  ${typography.head.lg};
  ${fonts.primary}
`;

function GuestMainContainer() {
  return (
    <Container type="main">
      <Hero />
      <CreateAccount />
      <Container type="main">
        <TextContainer>
          <Sub2>Find and apartment you love</Sub2>
          <Head4>Homes for rent at best prices</Head4>
        </TextContainer>
        <CardContainer>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </CardContainer>
      </Container>
      <MeetTeam />
    </Container>
  );
}

export default GuestMainContainer;
