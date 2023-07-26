import styled from "@emotion/styled";

import LeftPropertyDetail from "./LeftPropertyDetail/LeftPropertyDetail";
import RightPropertyDetail from "./RightPropertyDetail/RightPropertyDetail";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProperty } from "../../services/propertyServices";

const MainContainer = styled.div`
  flex-grow: 1;
  max-width: 1200px;
  margin: auto;
`;

const PropertyDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 72% 28%;
  width: 100%;
  padding: 32px;
  gap: 3rem;
`;

function PropertyDetail() {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    getProperty(id).then((data) => setPropertyDetails(data));
  }, []);

  return (
    <MainContainer>
      <PropertyDetailWrapper>
        <LeftPropertyDetail {...propertyDetails} />
        <RightPropertyDetail />
      </PropertyDetailWrapper>
    </MainContainer>
  );
}

export default PropertyDetail;
