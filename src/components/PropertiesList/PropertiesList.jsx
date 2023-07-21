import { useEffect, useState } from "react";

import PropertyCard from "../PropertyCard/propertycard";
import { getProperties } from "../../services/PropertyServices";
import styled from "@emotion/styled";
import Input from "../ui/Input/Input";
import { Popover } from "antd";
import Button from "../ui/button";


const PropertiesListMainContianer = styled.div`
  flex-grow: 1;
  margin: auto;
  width: 1200px;
`;
const FiltersWrapper = styled.div`
  display: flex;
`;

const StyledCounter = styled.h6`
  margin: 0;
  color: var(--gray, #616161);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
`;

const PropertiesListContainer = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  row-gap: 2rem;
  place-items: center;
`;

const FiltersContainer = styled.div`
  display: flex;
`;

function PropertiesList({properties}) {

  const getMessage = () => {
    if (properties.length === 0) return "No properties Found";
    if (properties.length === 1) return "1 Property found";
    return `${properties.length} Properties found`;
  };

  const properties_counter = getMessage();

  return (
    <PropertiesListMainContianer>
      <FiltersWrapper>
        <Input placeholer="Search by address" />
        <FiltersContainer>
          {/* <PriceFilter/> */}
          <Popover placement="bottom">
            <Button type="primary">PROPERTY TYPE</Button>
          </Popover>
          <Popover placement="bottom">
            <Button type="primary">BEDS & BATHS</Button>
          </Popover>
          <Popover placement="bottom">
            <Button type="primary">MORE</Button>
          </Popover>
        </FiltersContainer>
        <Input placeholer="operation type" />
      </FiltersWrapper>
      <StyledCounter>{properties_counter}</StyledCounter>
      <PropertiesListContainer>
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </PropertiesListContainer>
    </PropertiesListMainContianer>
  );
}

export default PropertiesList;
