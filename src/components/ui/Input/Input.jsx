import styled from "@emotion/styled";
import { colors, typography } from "../../../styles";

const Container = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${colors.primary.pink};
  border-radius: 6px;
  width: 100%;

  &:focus, &:active {
    outline: 1px solid ${colors.primary.pink};
  }
`;

const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;


function Input({ label, ...rest }) {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...rest} />
    </Container>
  );
}

export default Input;