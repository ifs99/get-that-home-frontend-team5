import styled from "@emotion/styled";
import { Checkbox, Radio } from "antd";
import { useState } from "react";
import Input from "../ui/Input/Input";
import CustomSelect from "../ui/CustomSelect/CustomSelect";
import TextArea from "antd/es/input/TextArea";
import Button from "../ui/button";
import "./newpropertyform.css";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import manu from '../../assets/blobManual.png'
import { createProperty } from "../../services/PropertyServices";

// const bucketName = process.env.AWS_BUCKET_NAME
// const region = process.env.AWS_BUCKET_REGION
// const accessKeyId = process.env.AWS_ACCESS_KEY
// const secretAccessKey = process.env.AWS_SECRET_KEY
//** TODO: move to helpers fils*/
const bucketName = "gethomeprueba3";
const region = "us-west-2";
const accessKeyId = "AKIAYBB2XLPBPQQYZ6SG";
const secretAccessKey = "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";

const client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

async function uploadFile(pathFile) {
  const stream = fs.createReadStream(pathFile);
  const uploadParams = {
    Bucket: bucketName,
    Body: stream,
    Key: "archivoprueba.jpg",
  };

  const command = new PutObjectCommand(uploadParams);
  const response = await client.send(command);
  return response;
}



const NewPropertyFormContainer = styled.div`
  flex-grow: 1;
`;
const NewPropertyWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
`;

const Title = styled.h2`
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.25px;
`;

const OperationTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledMaxImageSize = styled.span`
  color: var(--light-gray, #8e8e8e);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const StyledPropertyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ImagesWrapper = styled.div`
  padding: 0.5rem;
  background: var(--background, #f5f5f6);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  background: #e1e2e1;
  width: fit-content;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FormPropertyImage = styled.img`
  width: 120px;
  height: 120px;
`;

const StyledInputLabel = styled.label`
  color: var(--gray, #616161);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const StyleCheckbox = styled(Checkbox)`
  color: var(--gray, #616161);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

const PetsAllowesDescription = styled.p`
  color: var(--gray, #616161);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const StyledTitle = styled.div`
  color: var(--dark-gray, #373737);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
`;

const PhotosDescription = styled.div`
  color: var(--dark-gray, #373737);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

function NewPropertyForm() {
  const [propertyForm, setPropertyForm] = useState({
    operation_type: "Rent",
    location: "",
    monthly_rent: "",
    maintanance: "",
    property_type: "Apartment",
    bedrooms: null,
    bathrooms: null,
    area: "",
    pets_allowed: false,
    about_property: null,
    images: [],
  });

  const {
    operation_type,
    location,
    monthly_rent,
    maintanance,
    property_type,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    about_property,
    images,
  } = propertyForm;

  const options = [
    { label: "Rent", value: "Rent" },
    { label: "Sale", value: "Sale" },
  ];

  const options2 = [
    { label: "Apartment", value: "Apartment" },
    { label: "House", value: "House" },
  ];

  const onOperationTypeChange = ({ target: { value } }) => {
    setPropertyForm({ ...propertyForm, operation_type: value });
  };

  const handleLocationChange = ({ target: { value } }) => {
    setPropertyForm({ ...propertyForm, location: value });
  };

  const handleMontlyRent = ({ target: { value } }) => {
    setPropertyForm({ ...propertyForm, monthly_rent: value });
  };

  const handleMaintanance = ({ target: { value } }) => {
    setPropertyForm({ ...propertyForm, maintanance: value });
  };

  const handlePropertyTypeChange = ({ target: { value } }) => {
    setPropertyForm({ ...propertyForm, property_type: value });
  };

  const handleBedrooms = (value) => {
    console.log("asd");
    setPropertyForm({ ...propertyForm, bedrooms: value });
  };

  const handleBathrooms = (value) => {
    setPropertyForm({ ...propertyForm, bathrooms: value });
  };

  const handleArea = ({ target: { value } }) => {
    setPropertyForm({ ...propertyForm, area: parseFloat(value) });
  };

  const handleAllowPets = (event) => {
    setPropertyForm({ ...propertyForm, pets_allowed: event.target.checked });
  };

  const handleAboutProperty = (event) => {
    setPropertyForm({ ...propertyForm, about_property: event.target.value });
  };

  const fileHandler = (event) => {
    if (
      event.target.files &&
      event.target.files.length !== 0 &&
      event.target.files[0]
    ) {
      const currentImages = [...images];
      for (let i = 0; i < event.target.files.length; i++) {
        currentImages.push({
          index: i,
          image: URL.createObjectURL(event.target.files[i]),
          details: event.target.files[i],
        });
      }
      setPropertyForm({ ...propertyForm, images: currentImages });
    }
  };

  const deleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setPropertyForm({ ...propertyForm, images: newImages });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(propertyForm);
    for (const imageFile of propertyForm.images) {
      const uploadParams = {
        Bucket: 'gethomeprueba3',
        Key: imageFile.details.name,
        Body: imageFile.details,
      };
      const command = new PutObjectCommand(uploadParams);
      await client.send(command);
    }
    await createProperty(propertyForm)
  };

  
  return (
    <NewPropertyFormContainer>
      <NewPropertyWrapper>
        <Title>Create a Property listing</Title>
        <StyledPropertyForm onSubmit={handleSubmit}>
          <OperationTypeWrapper>
            <StyledInputLabel>OPERATION TYPE</StyledInputLabel>
            <Radio.Group
              options={options}
              onChange={onOperationTypeChange}
              value={operation_type}
              optionType="button"
              buttonStyle="solid"
            />
          </OperationTypeWrapper>
          <Input
            value={location}
            onChange={handleLocationChange}
            label="ADDRESS"
            placeholder="start typing to autocomplete"
          />
          <Input
            label="MONTLY RENT"
            type="number"
            value={monthly_rent}
            onChange={handleMontlyRent}
            placeholder="2000"
          />
          <Input
            label="Maintanance"
            type="number"
            value={maintanance}
            onChange={handleMaintanance}
            placeholder="100"
          />
          <OperationTypeWrapper>
            <span>Property type</span>
            <Radio.Group
              onChange={handlePropertyTypeChange}
              value={property_type}
            >
              <Radio value="Apartment">Apartment</Radio>
              <Radio value="House">House</Radio>
            </Radio.Group>
          </OperationTypeWrapper>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <StyledInputLabel>BEDROOMS</StyledInputLabel>
              <CustomSelect
                handleChange={handleBedrooms}
                options={[
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                ]}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <StyledInputLabel>BATHROOMS</StyledInputLabel>
              <CustomSelect
                handleChange={handleBathrooms}
                options={[
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                ]}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <StyledInputLabel>AREA IN M2</StyledInputLabel>
              <Input
                placeholder="##"
                type="number"
                value={area}
                onChange={handleArea}
              />
            </div>
          </div>
          <div>
            <StyleCheckbox onChange={handleAllowPets}>
              Pets Allowed
            </StyleCheckbox>
            <PetsAllowesDescription>
              Allowing pets increases the likehood of renters liking the
              property by 9001%. It also makes you a better person.
            </PetsAllowesDescription>
          </div>
          <div>
            <StyledInputLabel>About this Property</StyledInputLabel>
            <TextArea
              value={about_property}
              placeholder="My apartment is great because"
              onChange={handleAboutProperty}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <StyledTitle>Photos</StyledTitle>
            <div>
              <PhotosDescription>Upload as many as you wish</PhotosDescription>
              <input type="file" multiple onChange={fileHandler} />
              <StyledMaxImageSize>Only Images, max 5MB</StyledMaxImageSize>
            </div>
            <ImagesWrapper>
              {images &&
                images.map((image, index) => (
                  <ImageContainer key={index}>
                    <Button size="sm" onClick={() => deleteImage(index)}>
                      x
                    </Button>
                    <FormPropertyImage src={image.image} alt="previw image" />
                  </ImageContainer>
                ))}
            </ImagesWrapper>
          </div>
          <div>
            <Button type="primary">PUBLISH PROPERTY LISTING</Button>
          </div>
        </StyledPropertyForm>
      </NewPropertyWrapper>
    </NewPropertyFormContainer>
  );
}

export default NewPropertyForm;
