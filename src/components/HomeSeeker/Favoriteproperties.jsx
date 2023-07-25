import PropertiesList from "../PropertiesList/PropertiesList";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import { getPropertiefavorite } from "../../services/propertyServices";

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

function FavoriteProperties() {
  const [propertiefavorite, setPropertiesfavorite] = useState([]);

  useEffect(() => {
    getPropertiefavorite().then((data) => setPropertiesfavorite(data));
  }, []);

  return (
    <>
      <NavDiv>
        <NavWord
          to={"/favorites"}
          style={({ isActive }) => ({
            color: isActive ? colors.stone[600] : colors.stone[400],
          })}
        >
          FAVORITES
        </NavWord>
        <NavWord
          to={"/contacted"}
          style={({ isActive }) => ({
            color: isActive ? colors.stone[600] : colors.stone[400],
          })}
        >
          CONTACTED
        </NavWord>
      </NavDiv>
      <PropertiesList properties={propertiefavorite} />
    </>
  );
}

export default FavoriteProperties;
