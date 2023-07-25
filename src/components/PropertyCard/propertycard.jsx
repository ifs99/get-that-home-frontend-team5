import styled from "@emotion/styled";
import { colors, typography, fonts } from "../../styles";
import { RiCoinsFill, RiBuildingLine } from "react-icons/ri";
import { BiDollarCircle, BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";

const Container = styled.div`
  width: 300px;
  height: 22.5rem;
  position: relative;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ImgContainer = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  align-items: center;
  width: 18.75rem;
  height: 10rem;
  position: relative;
  gap: 1rem;
  padding: 0.5rem;
`;

const RentData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ColorBack = styled.div`
  background-color: ${colors.primary.dark_pink};
  height: 0.4375rem;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const DataLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const DataProp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  height: 3rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const PropInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardChip = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${colors.primary.pink};
  color: white;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

const Head5 = styled.p`
  ${typography.head.sm}
  ${fonts.primary}
`;

const Body1 = styled.p`
  ${typography.text.md}
  ${fonts.secondary}
`;

const Sub1 = styled.p`
  ${typography.text.md}
  ${fonts.primary}
`;

function PropertyCard({ location, name_image }) {
  return (
    <Container>
      <CardChip>
        <RiCoinsFill />
        <p>For Rental</p>
      </CardChip>
      <Card>
        <ImgContainer
          src={`https://gethomeprueba3.s3.us-west-2.amazonaws.com/${name_image}`}
        />
        <Content>
          <RentData>
            <DataProp>
              <InfoContainer>
                <BiDollarCircle size={32} />
                <Head5>3000</Head5>
              </InfoContainer>
              <InfoContainer>
                <RiBuildingLine size={24} />
                <Body1>Apartment</Body1>
              </InfoContainer>
            </DataProp>
            <PropInfo>
              <Sub1>{location}</Sub1>
              <DataLabel>
                <IconWrap>
                  <BiBed size={24} />
                  <p>4</p>
                </IconWrap>
                <IconWrap>
                  <BiBath size={24} />
                  <p>2</p>
                </IconWrap>
                <IconWrap>
                  <BiArea size={24} />
                  <p>180 m2</p>
                </IconWrap>
                <FaPaw size={24} />
              </DataLabel>
            </PropInfo>
          </RentData>
        </Content>
        <ColorBack></ColorBack>
      </Card>
    </Container>
  );
}

export default PropertyCard;
