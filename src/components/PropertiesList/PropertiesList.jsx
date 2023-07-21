

import PropertyCard from "../PropertyCard/propertycard";
import styled from "@emotion/styled";
import Input from "../ui/Input/Input";
import { useAuth } from "../../context/AuthContext";

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

function PropertiesList({properties}) {
  const { user } = useAuth();
  console.log(properties)

  const getMessage = () => {
    if (properties.length === 0) return "No properties Found";
    if (properties.length === 1) return "1 Property found";
    return `${properties.length} Properties found`;
  };

  const properties_counter = getMessage();

  return (
    <PropertiesListMainContianer>
      

      {user.user_type === "Landlord" ? (
            <>
            </>
          ) : (
            <FiltersWrapper>
            <Input placeholer="Search by address" />
            <div>some filters</div>
            <Input placeholer="operation type" />
          </FiltersWrapper>
          )}
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
