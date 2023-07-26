import styled from "@emotion/styled";
import Button from "../../ui/button";
import { Carousel } from "antd";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";
import { typography } from "../../../styles";
import { BiDollarCircle, BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import { useJsApiLoader, MarkerF, GoogleMap } from "@react-google-maps/api";

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
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

const Headline4 = styled.p`
  color: var(--dark-gray, #373737);
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.25px;
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

const PDAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
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

const PDMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const PD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
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

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CarouselImageContainer = styled.div`
  display: flex !important;
  justify-content: center;
`;

function LeftPropertyDetail({
  area,
  location,
  price,
  maintanance,
  petfriendly,
  bedroom,
  bathroom,
  description,
  name_image,
}) {
  const ref = useRef();
  const images = name_image?.map(
    (img) => `https://gethomeprueba3.s3.us-west-2.amazonaws.com/${img}`
  );
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDIBNTfFRaaRM9D-d3XW0Ue3qDxZIo1T9M",
  });
  if (!isLoaded) {
    return <h1>cargando</h1>;
  }
  const center = { lat: 48.8584, lng: 2.2945 };
  return (
    <div>
      {images && (
        <CarouselContainer>
          <Button
            onClick={() => {
              ref.current.prev();
            }}
          >
            <BsChevronLeft />
          </Button>
          <Carousel
            style={{ width: "32rem", height: "24rem" }}
            dots={true}
            dotPosition="top"
            draggable
            ref={ref}
          >
            {images.map((image, index) => {
              return (
                <CarouselImageContainer key={index} className="Hola">
                  <img src={image} alt="image" />
                </CarouselImageContainer>
              );
            })}
          </Carousel>
          <Button
            onClick={() => {
              ref.current.next();
            }}
          >
            <BsChevronRight />
          </Button>
        </CarouselContainer>
      )}
      <InformationContainer>
        <PDTitle>
          <PDAddress>
            <Headline4>{location}</Headline4>
            <Subtitle1>Miraflores</Subtitle1>
          </PDAddress>
          <PDPriceContainer>
            <PDPrice>
              <BiDollarCircle size={35} color="#616161" />
              <Headline4>{price}</Headline4>
            </PDPrice>
            <PDPrice>
              <Headline6>{maintanance}</Headline6>
            </PDPrice>
          </PDPriceContainer>
        </PDTitle>
        <PD>
          <PDCommodities>
            <PDBorder></PDBorder>
            <PDComIcons>
              <Icon>
                <BiBed size={24} />
                <Headline5>{bedroom} bedrooms</Headline5>
              </Icon>
              <Icon>
                <BiBath size={24} />
                <Headline5>{bathroom} bathrooms</Headline5>
              </Icon>
              <Icon>
                <BiArea size={24} />
                <Headline5>{area} m2</Headline5>
              </Icon>
              <Icon>
                <FaPaw size={24} />
                {petfriendly ? <Headline5>Pets allowed</Headline5> : <></>}
              </Icon>
            </PDComIcons>
            <PDBorder></PDBorder>
          </PDCommodities>
        </PD>
        <PDAbout>
          <Headline6 style={{ color: `#BF5F82` }}>
            About this property
          </Headline6>
          <Body1>{description}</Body1>
        </PDAbout>
        <PDMap>
          <Headline6 style={{ color: `#BF5F82` }}>Location</Headline6>
          <Body1>Address</Body1>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "47.5rem", height: "47.5rem" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
            }}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </PDMap>
      </InformationContainer>
    </div>
  );
}

export default LeftPropertyDetail;
