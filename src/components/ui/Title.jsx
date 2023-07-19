import styled from "@emotion/styled";

const StyledTitle = styled.div`
  color: var(--dark-pink, #bf5f82);
  text-align: center;
  
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function Title({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

export default Title;
