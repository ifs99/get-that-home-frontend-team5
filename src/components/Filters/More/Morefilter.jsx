import Popover from "../../ui/Popover/Popover";
import Button from "../../ui/button";
import { typography } from "../../../styles";
import styled from "@emotion/styled";
import { Input } from "antd";
import { Radio } from "antd";

const RadioLabel = styled.p`
  color: var(--gray, #616161);
  ${typography.text.sm}
`;

const Pets = styled.div`
  display: flex;
`;
function MoreFilter() {
  const filterContent = (
    <div>
      <div>
        <Pets>
          <Radio type="radio" value="pets" />
          <p>Pets Allowed</p>
        </Pets>
      </div>
      <div>
        <RadioLabel>AREA IN M2</RadioLabel>
        <div>
          <Input placeholder="min" />
          -
          <Input placeholder="max" />
        </div>
      </div>
      <Button type="primary"> DONE</Button>
    </div>
  );

  return (
    <Popover content={filterContent}>
      <Button type="primary">MORE</Button>
    </Popover>
  );
}

export default MoreFilter;
