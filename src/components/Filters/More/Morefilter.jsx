import Popover from "../../ui/Popover/Popover";
import Button from "../../ui/button";
import { typography } from "../../../styles";
import styled from "@emotion/styled";
import { Input } from "antd";
import { Checkbox } from "antd";
import { AiOutlineMinus } from "react-icons/ai";
import "./override2.scss";

const RadioLabel = styled.p`
  color: var(--gray, #616161);
  ${typography.text.sm}
  letter-spacing: 0.09375rem;
`;

const Pets = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const MainContainer = styled.div`
  display: inline-flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.625rem;
  align-self: stretch;
`;

const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;
function MoreFilter() {
  const filterContent = (
    <MainContainer>
      <div>
        <Pets>
          <Checkbox options={"Pets Allowed"} />
          <p>Pets Allowed</p>
        </Pets>
      </div>
      <RangeContainer>
        <RadioLabel>AREA IN M2</RadioLabel>
        <InputBox>
          <span className="override2">
            <Input placeholder="min" />
          </span>
          <AiOutlineMinus size={30} />
          <span className="override2">
            <Input placeholder="max" />
          </span>
        </InputBox>
      </RangeContainer>
      <ButtonContainer>
        <Button type="primary"> DONE</Button>
      </ButtonContainer>
    </MainContainer>
  );

  return (
    <Popover content={filterContent}>
      <Button type="primary">MORE</Button>
    </Popover>
  );
}

export default MoreFilter;
