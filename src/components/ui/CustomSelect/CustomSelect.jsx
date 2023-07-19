import styled from "@emotion/styled";
import { Select } from "antd";
import "./customselect.css";

const StyledCustomSelect = styled(Select)`
  width: 200px;
  border-radius: 8px;
  border: 1px solid var(--pink, #f48fb1);
  background: var(--white, #fff);
`

function CustomSelect({ options }) {
  return (
    <StyledCustomSelect
      options={options}
    />
  );
}

export default CustomSelect;
