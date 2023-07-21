import Button from "../ui/button";
import { getPropertiesclosed } from "../../services/propertyServices";
import PropertiesList from "../PropertiesList/PropertiesList";
import { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "../../styles";

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

function Landlordclosedproperties(){
    const [propertiesactived, setPropertiesactived] = useState ([]);

        useEffect (() => {
        getPropertiesclosed().then((data) => setPropertiesactived(data));
        }, []);
   
     function   handleAddProperty(){

     }
    
    return(
        <>
        <Button type="primary" onClick={handleAddProperty}>
            <FaPlusCircle size={24} />
            NEW PROPERTY
        </Button>
        <NavDiv>
                <NavWord
                to={"/active"}
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
        <PropertiesList properties = {propertiesactived}/>
        </>

    )
}

export default Landlordclosedproperties