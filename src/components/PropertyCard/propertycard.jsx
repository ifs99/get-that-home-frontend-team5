import styled from "@emotion/styled";
import { colors } from "../../styles";
import { RiCoinsFill, RiBuildingLine } from "react-icons/ri";
import { BiDollarCircle, BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";

const Container = styled.div`
  width: 18.75rem;
  height: 22.5rem;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ImgContainer = styled.img`
  display: flex;
  width: 18.75rem;
  height: 12.5rem;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  align-items: center;
  width: 18.75rem;
  height: 10rem;
  position: relative;
`;

const RentData = styled.div``;

const ColorBack = styled.div`
  background-color: ${colors.primary.dark_pink};
  height: 0.4375rem;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
`;

const DataLabel = styled.div`
  display: flex;
  flex-direction: row;
`;

const DataProp = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const PropInfo = styled.div``;

const CardChip = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${colors.primary.pink};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

function PropertyCard() {
  return (
    <Container>
      <CardChip>
        <RiCoinsFill />
        <p>For Rental</p>
      </CardChip>
      <Card>
        <ImgContainer src="src/assets/PropertyPlaceholder.png" />
        <Content>
          <RentData>
            <DataProp>
              <InfoContainer>
                <BiDollarCircle />
                <p>Precio</p>
              </InfoContainer>
              <InfoContainer>
                <RiBuildingLine />
                <p>Tipo de prop</p>
              </InfoContainer>
            </DataProp>
            <PropInfo>
              <p>Direccion</p>
              <DataLabel>
                <IconWrap>
                  <BiBed />
                  <p>cama</p>
                </IconWrap>
                <IconWrap>
                  <BiBath />
                  <p>baño</p>
                </IconWrap>
                <IconWrap>
                  <BiArea />
                  <p>area</p>
                </IconWrap>
                <FaPaw />
              </DataLabel>
            </PropInfo>
          </RentData>
        </Content>
      </Card>
      <ColorBack></ColorBack>
    </Container>
  );
}

export default PropertyCard;
