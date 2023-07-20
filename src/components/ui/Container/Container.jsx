import styled from "@emotion/styled";

const StyledContainer = styled.div`
  ${(props) => (props.type === "main" ? "flex-grow: 1;" : "")}
`;

function Container({ type, children }) {
  return <StyledContainer type={type}>{children}</StyledContainer>;
}

export default Container;
