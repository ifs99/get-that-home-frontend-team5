import styled from "@emotion/styled";
import React from "react";
import { colors } from "./styles";
import NavBar from "./components/navbar";

const Background = styled.img`
  width: 100%;
`;

function UnauthenticatedApp() {
  return (
    <div>
      <NavBar/>
      <Background src="src/assets/GTHBackground.png" />
    </div>
  );
}

export default UnauthenticatedApp;
