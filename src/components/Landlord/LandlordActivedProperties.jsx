import Button from "../ui/button";
import { getPropertiesactived } from "../../services/propertyServices";
import PropertiesList from "../PropertiesList/PropertiesList";
import { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import { countProperties } from "../../Utils/utils";

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

const MainContainer = styled.div`
  flex-grow: 1;
  max-width: 1200px;
  margin: auto;
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

function LandlordActivedProperties() {
    const navigate = useNavigate()
  const [propertiesactived, setPropertiesactived] = useState([]);

  useEffect(() => {
    getPropertiesactived().then((data) => setPropertiesactived(data));
  }, []);

  function handleAddProperty() {}
  const number_of_properties = countProperties(propertiesactived);
  return (
    <MainContainer>
      <LandlordButtons>
        <Button type="primary" onClick={() => navigate("/newproperty")}>
          <FaPlusCircle size={24} />
          NEW PROPERTY
        </Button>
        <NavDiv>
          <NavWord
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? colors.stone[600] : colors.stone[400],
            })}
          >
            ACTIVE
          </NavWord>
          <NavWord
            to={"/closed"}
            style={({ isActive }) => ({
              color: isActive ? colors.stone[600] : colors.stone[400],
            })}
          >
            CLOSED
          </NavWord>
        </NavDiv>
        <StyledCounter>{number_of_properties}</StyledCounter>
      </LandlordButtons>
      <PropertiesList properties={propertiesactived} />
    </MainContainer>
  );
}

export default LandlordActivedProperties;
