import styled from "@emotion/styled";
import CustomSelect from "../ui/CustomSelect/CustomSelect";
import Button from "../ui/button";

const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  margin-top: 64px;
`;

const VerticalDivider = styled.div`
  border: 1px solid #e1e2e1;
  height: 36px;
`;

function Search() {
  const property_types = [
    { value: "jack", label: "Jack" },
    { value: "jack", label: "Jack" },
  ];
  return (
    <SearchContainer>
      <CustomSelect options={property_types} />
      <VerticalDivider />
      <CustomSelect options={property_types} />
      <VerticalDivider />
      <CustomSelect options={property_types} />
      <VerticalDivider />
      <Button type="primary">SEARCH</Button>
    </SearchContainer>
  );
}

export default Search;
