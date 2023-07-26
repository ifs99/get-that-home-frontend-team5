import Popover from "../../ui/Popover/Popover";
import Button from "../../ui/button";
import { typography } from "../../../styles";
import styled from "@emotion/styled";
import { Input } from "antd";
import { AiOutlineMinus } from "react-icons/ai";
import { BiSolidDollarCircle } from "react-icons/bi";
import "./override.scss";

const RadioLabel = styled.p`
  color: var(--gray, #616161);
  ${typography.text.sm};
  letter-spacing: 0.09375rem;
`;

const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;
const MainContainer = styled.div`
  display: inline-flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const Logo = styled.div`
  position: absolute;
  top: 38%;
  transform: translate(0, -45%);
  z-index: 1;
  color: gray;
  pointer-events: none;
  left: 1.7rem;
`;
const InputLogo = styled.div``;
const LogoRight = styled.div`
  position: absolute;
  top: 38%;
  transform: translate(0, -45%);
  z-index: 1;
  color: gray;
  pointer-events: none;
  left: 11rem;
`;

function PriceFilter() {
  const filterContent = (
    <MainContainer>
      <RangeContainer>
        <RadioLabel>PRICE RANGE</RadioLabel>
        <InputBox>
          <InputLogo>
            <Logo>
              <BiSolidDollarCircle />
            </Logo>
            <span className="override">
              <Input placeholder="min" />
            </span>
          </InputLogo>
          <AiOutlineMinus size={30} />
          <InputLogo>
            <LogoRight>
              <BiSolidDollarCircle />
            </LogoRight>
            <span className="override">
              <Input placeholder="max" />
            </span>
          </InputLogo>
        </InputBox>
      </RangeContainer>
      <ButtonContainer>
        <Button type="primary"> DONE</Button>
      </ButtonContainer>
    </MainContainer>
  );

  return (
    <Popover content={filterContent}>
      <Button type="primary">PRICE</Button>
    </Popover>
  );
}

export default PriceFilter;
