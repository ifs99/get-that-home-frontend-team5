import PropertyCard from "../PropertyCard/propertycard";
import { getProperties } from "../../services/propertyServices";
import styled from "@emotion/styled";
import Input from "../ui/Input/Input";
import { useAuth } from "../../context/AuthContext";
import { Popover } from "antd";
import Button from "../ui/button";
import PriceFilter from "../Filters/PriceFilter/PriceFilter";
import PropertyFilter from "../Filters/PropertyFilter";
import BedBathFilter from "../Filters/Bed and Bath Filter/BedBathFIilter";
import MoreFilter from "../Filters/More/Morefilter";

const PropertiesListMainContianer = styled.div`
  flex-grow: 1;
  margin: auto;
  width: 1200px;
  padding: 32px 0;
`;
const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  gap: 0.5rem;
`;

function PropertiesList({ properties }) {
  const { user } = useAuth();
  console.log(properties);

  const getMessage = () => {
    if (properties.length === 0) return "No properties Found";
    if (properties.length === 1) return "1 Property found";
    return `${properties.length} Properties found`;
  };

  const properties_counter = getMessage();

  return (
    <PropertiesListMainContianer>
      {user.user_type === "Landlord" ? (
        <></>
      ) : (
        <FiltersWrapper>
          <Input placeholer="Search by address" />
          <div>some filters</div>
          <Input placeholer="operation type" />
        </FiltersWrapper>
      )}
      <FiltersWrapper>
        <div style={{ width: "150px" }}>
          <Input placeholer="Search by address" />
        </div>
        <FiltersContainer>
          <PriceFilter />
          <PropertyFilter/>
          <BedBathFilter/>
          <MoreFilter/>
        </FiltersContainer>
        <div style={{ width: "150px" }}>
          <Input placeholer="operation type" />
        </div>
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
