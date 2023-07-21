import styled from "@emotion/styled";
import Button from "../ui/button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiDollarCircle, BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import { typography, fonts, colors } from "../../styles";

const PropertyDetailContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const PropertyInfo = styled.div`
  display: flex;
  width: 51.875rem;
  flex-direction: column;
  align-items: center;
`;

const PropertyContact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  border-radius: 0.5rem;
  background: var(--white, #fff);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ContactContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

const PD = styled.div`
  display: flex;
  padding: 0rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const PropertyImageContainer = styled.div`
  display: flex;
  padding: 0rem 4rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const PDTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
`;

const PDAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;
const PDPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const PDPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PDCommodities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const PDBorder = styled.div`
  height: 0.0625rem;
  align-self: stretch;
  background: var(--dark-pink, #bf5f82);
`;

const PDComIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: #616161;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const PDAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const PDMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Headline4 = styled.p`
  ${typography.head.lg}
  color:#373737;
`;

const Subtitle1 = styled.p`
  ${typography.head.sub1}
  color: #616161;
`;

const Headline5 = styled.p`
  ${typography.head.sm}
`;

const Headline6 = styled.p`
  ${typography.head.xs}
  color:#373737;
`;

const Body1 = styled.p`
  ${typography.text.md}
  color:#373737;
`;

const Body1C = styled.p`
  ${typography.text.md}
  color:#373737;
  text-align: center;
`;
function PropertyDetail() {
  return (
    <PropertyDetailContainer>
      <PropertyInfo>
        <PropertyImageContainer>
          <Button type="" size="sm">
            <BsChevronLeft />
          </Button>
          <img src="src/assets/PropertyPlaceholder.png" />
          <Button type="" size="sm">
            <BsChevronRight />
          </Button>
        </PropertyImageContainer>
        <PD>
          <PDTitle>
            <PDAddress>
              <Headline4>Francisco de Paula Ugarriza 27</Headline4>
              <Subtitle1>Miraflores</Subtitle1>
            </PDAddress>
            <PDPriceContainer>
              <PDPrice>
                <BiDollarCircle size={35} color="#616161" />
                <Headline4>3000</Headline4>
              </PDPrice>
              <PDPrice>
                <Headline6>+100</Headline6>
              </PDPrice>
            </PDPriceContainer>
          </PDTitle>
          <PDCommodities>
            <PDBorder></PDBorder>
            <PDComIcons>
              <Icon>
                <BiBed size={24} />
                <Headline5>4 bedrooms</Headline5>
              </Icon>
              <Icon>
                <BiBath size={24} />
                <Headline5>2 bathrooms</Headline5>
              </Icon>
              <Icon>
                <BiArea size={24} />
                <Headline5>180 m2</Headline5>
              </Icon>
              <Icon>
                <FaPaw size={24} />
                <Headline5>Pets allowed</Headline5>
              </Icon>
            </PDComIcons>
            <PDBorder></PDBorder>
          </PDCommodities>
          <PDAbout>
            <Headline6 style={{ color: `#BF5F82` }}>
              About this property
            </Headline6>
            <Body1>
              3 Bedroom/2 Bathroom apartment available for ASAP move-in!
              Apartment features hardwood floors throughout, virtual doorman,
              Central AC/heat, dishwasher and a microwave. The kitchen has
              custom cabinetry and the living room is big enough to fit a dinner
              table, a couch and a tv set up.
            </Body1>
          </PDAbout>
          <PDMap>
            <Headline6 style={{ color: `#BF5F82` }}>Location</Headline6>
            <img src="src/assets/PDMap.png" />
          </PDMap>
        </PD>
      </PropertyInfo>
      <PropertyContact>
        <ContactContainer>
          <Body1C>Log in or Join to contact the advertiser</Body1C>
          <Button type="primary">Login</Button>
        </ContactContainer>
      </PropertyContact>
    </PropertyDetailContainer>
  );
}

export default PropertyDetail;
