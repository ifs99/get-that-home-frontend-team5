import PropertyCard from "../PropertyCard/propertycard";
import styled from "@emotion/styled";

const PropertiesListMainContianer = styled.div`
  flex-grow: 1;
  margin: auto;
  width: 1200px;
  padding: 32px 0;
`;

const PropertiesListContainer = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  row-gap: 2rem;
  place-items: center;
`;

function PropertiesList({ properties }) {

  return (
    <PropertiesListMainContianer>
      <PropertiesListContainer>
        {properties?.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </PropertiesListContainer>
    </PropertiesListMainContianer>
  );
}

export default PropertiesList;
