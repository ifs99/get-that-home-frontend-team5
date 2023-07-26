import styled from "@emotion/styled";
import { NavLink, useNavigate } from "react-router-dom";
import { colors } from "../../../styles";
import { FaPlusCircle } from "react-icons/fa";
import Button from "../../ui/button";

const NavWord = styled(NavLink)`
  border: none;
  cursor: pointer;
  padding: 0.625rem;
  background-color: ${colors.background};
  color: ${colors.stone[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 59px;
  &:active {
    color: ${colors.stone[600]};
  }
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 50px;
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

const LandlordButtons = styled.div`
  padding: 2rem;
`;

function LandlordHeader({ number_of_properties }) {
  const navigate = useNavigate();
  return (
    <LandlordButtons>
      <Button type="primary" onClick={() => navigate("/newproperty")}>
        <FaPlusCircle size={24} />
        NEW PROPERTY
      </Button>
      <NavDiv>
        <NavWord
          to={"/active"}
          style={({ isActive }) => ({
            color: isActive ? "#F48FB1" : colors.stone[400],
          })}
        >
          ACTIVE
        </NavWord>
        <NavWord
          to={"/closed"}
          style={({ isActive }) => ({
            color: isActive ? "#F48FB1" : colors.stone[400],
          })}
        >
          CLOSED
        </NavWord>
      </NavDiv>
      <StyledCounter>{number_of_properties}</StyledCounter>
    </LandlordButtons>
  );
}

export default LandlordHeader;
