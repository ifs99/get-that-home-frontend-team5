import styled from "@emotion/styled";
import { colors, typography, fonts } from "../../styles";
import { RiCoinsFill, RiBuildingLine } from "react-icons/ri";
import {
  BiDollarCircle,
  BiSolidEdit,
  BiBed,
  BiBath,
  BiArea,
} from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import NoImageToDisplay from "../../assets/no-images.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button";

const Container = styled.div`
  width: 300px;
  height: 360px;
  position: relative;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
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
  height: 2.9375rem;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 0.625rem;
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

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

function LandlordPropertyCard({
  location,
  name_image,
  price,
  property_type,
  area,
  bathroom,
  bedroom,
  id,
}) {
  const navigate = useNavigate();
  const handleEdit = () => {
    // Your logic for handling the edit button click
    console.log("Edit button clicked");
    // You can update component properties or state here
  };

  const handleClose = () => {
    // Your logic for handling the close button click
    console.log("Close button clicked");
    // You can change the status from active to closed here
  };
  const image = name_image
    ? `https://gethomeprueba3.s3.us-west-2.amazonaws.com/${name_image[0]}`
    : NoImageToDisplay;

  return (
    <Container>
      <CardChip>
        <RiCoinsFill />
        <p>For Rental</p>
      </CardChip>
      <Card onClick={() => navigate(`/property/${id}`)}>
        <ImageContainer>
          <PropertyImage src={image} alt="property image" />
        </ImageContainer>
        <Content>
          <RentData>
            <DataProp>
              <InfoContainer>
                <BiDollarCircle size={32} />
                <Head5>{price}</Head5>
              </InfoContainer>
              <InfoContainer>
                <RiBuildingLine size={24} />
                <Body1>{property_type}</Body1>
              </InfoContainer>
            </DataProp>
            <PropInfo>
              <Sub1>{location[2]}</Sub1>
              <DataLabel>
                <IconWrap>
                  <BiBed size={24} />
                  <p>{bedroom}</p>
                </IconWrap>
                <IconWrap>
                  <BiBath size={24} />
                  <p>{bathroom}</p>
                </IconWrap>
                <IconWrap>
                  <BiArea size={24} />
                  <p>{area} m2</p>
                </IconWrap>
                <FaPaw size={24} />
              </DataLabel>
            </PropInfo>
          </RentData>
        </Content>
      </Card>
      <ColorBack>
        <ButtonContainer>
          <Button
            style={{ color: "white", textTransform: "uppercase" }}
            onClick={handleEdit}
          >
            <BiSolidEdit />
            edit
          </Button>
          <Button
            style={{ color: "white", textTransform: "uppercase" }}
            onClick={handleClose}
          >
            <AiOutlineCloseCircle />
            close
          </Button>
        </ButtonContainer>
      </ColorBack>
    </Container>
  );
}

export default LandlordPropertyCard;
