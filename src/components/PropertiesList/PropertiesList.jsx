import PropertyCard from "../PropertyCard/propertycard";
import styled from "@emotion/styled";
import Input from "../ui/Input/Input";
import { useAuth } from "../../context/AuthContext";
import { Popover } from "antd";
import Button from "../ui/button";
import PriceFilter from "../Filters/PriceFilter/PriceFilter";

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
  return (
    <PropertiesListMainContianer>
      {user.user_type === "Landlord" ? (
        <></>
      ) : (
        // <FiltersWrapper>
        //   <Input placeholer="Search by address" />
        //   <div>some filters</div>
        //   <Input placeholer="operation type" />
        // </FiltersWrapper>
        <></>
      )}
      {/* <FiltersWrapper>
        <div style={{ width: "150px" }}>
          <Input placeholer="Search by address" />
        </div>
        <FiltersContainer>
          <PriceFilter />
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
        <div style={{ width: "150px" }}>
          <Input placeholer="operation type" />
        </div>
      </FiltersWrapper> */}
      <PropertiesListContainer>
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </PropertiesListContainer>
    </PropertiesListMainContianer>
  );
}

export default PropertiesList;
