import Popover from "../../ui/Popover/Popover";
import Button from "../../ui/button";
import { typography } from "../../../styles";
import styled from "@emotion/styled";
import { Input } from "antd";

const RadioLabel = styled.p`
  color: var(--gray, #616161);
  ${typography.text.sm}
`;

function PriceFilter() {
  const filterContent = (
    <div>
      <RadioLabel>PRICE RANGE</RadioLabel>
      <div>

        <Input  placeholder="min" />
        -
        <Input placeholder="max" />
      </div>
      <Button type="primary"> DONE</Button>
    </div>
  );

  return (
    <Popover content={filterContent}>
      <Button type="primary">PRICE</Button>
    </Popover>
  );
}

export default PriceFilter;
