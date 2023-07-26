import { getPropertiesactived } from "../../services/propertyServices";
import PropertiesList from "../PropertiesList/PropertiesList";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { countProperties } from "../../Utils/utils";
import LandlordHeader from "./Header/LandlordHeader";

const MainContainer = styled.div`
  flex-grow: 1;
  max-width: 1200px;
  margin: auto;
`;

function LandlordActivedProperties() {
  const [propertiesactived, setPropertiesactived] = useState([]);

  useEffect(() => {
    getPropertiesactived().then((data) => setPropertiesactived(data));
  }, []);

  const number_of_properties = countProperties(propertiesactived);

  return (
    <MainContainer>
      <LandlordHeader number_of_properties={number_of_properties} />
      <PropertiesList properties={propertiesactived} />
    </MainContainer>
  );
}

export default LandlordActivedProperties;
