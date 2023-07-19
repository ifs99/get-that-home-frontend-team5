import styled from "@emotion/styled";
import { Select } from "antd";
import "./customselect.css";

const StyledCustomSelect = styled(Select)`
  width: 120px;
  border-radius: 8px;
  border: 1px solid var(--pink, #f48fb1);
  background: var(--white, #fff);
  position: relative;
  position: 1;
`;

function CustomSelect({ options }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <StyledCustomSelect
      onChange={handleChange}
      options={options}
    />
  );
}

export default CustomSelect;
