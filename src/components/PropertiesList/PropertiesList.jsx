import PropertyCard from "../PropertyCard/propertycard";
import { getProperties } from "../../services/propertyServices";
import styled from "@emotion/styled";
import Input from "../ui/Input/Input";
import { useAuth } from "../../context/AuthContext";
import { Popover } from "antd";
import Button from "../ui/button";
import PriceFilter from "../Filters/PriceFilter/PriceFilter";
import PropertyFilter from "../Filters/PropertyFilter/PropertyFilter";
import BedBathFilter from "../Filters/Bed and Bath Filter/BedBathFIilter";
import MoreFilter from "../Filters/More/Morefilter";

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

const FiltersContainer = styled.div`
  display: flex;
  gap: 0.5rem;
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
