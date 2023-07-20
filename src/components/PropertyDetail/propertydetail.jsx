import styled from "@emotion/styled";
import Button from "../ui/button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiDollarCircle, BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";

import { typography, fonts } from "../../styles";

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

const Body1 = styled.p`
  text-align: center;
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
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
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
`;

const Icon = styled.div`
  display: flex;
  align-items: flex-start;
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
              <p>Francisco de Paula Ugarriza 27</p>
              <p>Miraflores</p>
            </PDAddress>
            <PDPriceContainer>
              <PDPrice>
                <BiDollarCircle size={24} />
                <p>3000</p>
              </PDPrice>
              <PDPrice>
                <p>+100</p>
              </PDPrice>
            </PDPriceContainer>
          </PDTitle>
          <PDCommodities>
            <PDBorder></PDBorder>
            <PDComIcons>
              <Icon>
                <BiBed size={24} />
                <p>4</p>
              </Icon>
              <Icon>
                <BiBath size={24} />
                <p>2</p>
              </Icon>
              <Icon>
                <BiArea size={24} />
                <p>180 m2</p>
              </Icon>
              <Icon>
                <FaPaw size={24} />
              </Icon>
            </PDComIcons>
            <PDBorder></PDBorder>
          </PDCommodities>
          <PDAbout>
            <p>About this property</p>
            <p>
              3 Bedroom/2 Bathroom apartment available for ASAP move-in!
              Apartment features hardwood floors throughout, virtual doorman,
              Central AC/heat, dishwasher and a microwave. The kitchen has
              custom cabinetry and the living room is big enough to fit a dinner
              table, a couch and a tv set up.
            </p>
          </PDAbout>
          <PDMap>
            <p>Location</p>
            <img src="src/assets/PDMap.png" />
          </PDMap>
        </PD>
      </PropertyInfo>
      <PropertyContact>
        <ContactContainer>
          <Body1>Log in or Join to contact the advertiser</Body1>
          <Button type="primary">Login</Button>
        </ContactContainer>
      </PropertyContact>
    </PropertyDetailContainer>
  );
}

export default PropertyDetail;
