import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const LogoImg = styled.img`
  width: auto;
  cursor: pointer;
`;

function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <LogoImg src="src/assets/GTHLogo.png" onClick={() => navigate("/")} />
    </>
  );
}
export default Logo;
