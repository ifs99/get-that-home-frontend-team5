import styled from "@emotion/styled";

import { colors } from "../../styles/colors"
import { typography } from "../../styles/typography";

function typeStyles(type) {
  switch (type) {
    case "primary":
      return `
        background-color: ${colors.primary.pink};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.primary.dark_pink};
        }
        &:active {
          background-color: ${colors.primary.dark_pink};
        }
        &:focus {
          outline: 2px solid ${colors.primary.dark_pink};
        }
      `;

    case "secondary":
      return `
        background: none;
        border: 1px solid ${colors.primary.pink};
        color: ${colors.gray};
        &:hover {
          background-color: ${colors.primary.shadow_pink};
        }
        &:active {
          background-color: ${colors.primary.shadow_pink};
        }
        &:focus {
          outline: 2px solid ${colors.primary.shadow_pink};
        }
      `;

    default:
      return `
        background: none;
        &:hover {
          background-color: ${colors.primary.shadow_pink};
        }
        &:active {
          background-color: ${colors.primary.shadow_pink};
        }
        &:focus {
          outline: 2px solid ${colors.primary.shadow_pink};
        }
      `;
  }
}

function sizeStyles(size, rounded) {
  switch (size) {
    case "sm":
      return `
        padding: 0.5rem ${rounded ? "" : "0.75rem"};
        ${typography.text.sm}
        line-height: 1em;
      `;

    case "lg":
      return `
          padding: 0.875rem ${rounded ? "" : "1.5rem"};
          ${typography.text.lg}
          line-height: 1em;
        `;

    default:
      break;
  }
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.gray[200]};
  color: ${colors.gray[900]};
  border: none;
  ${typography.text.md}
  line-height: 1em;
  cursor: pointer;

  letter-spacing: 1.25px;

  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  padding: 0.75rem ${({ rounded }) => (rounded ? "0.75rem" : "1rem")};
  border-radius: ${({ rounded }) => (rounded ? "999px" : "1rem")};

  &:hover {
    background-color: ${colors.gray[300]};
  }
  &:active {
    background-color: ${colors.gray[400]};
  }
  &:focus {
    outline: 2px solid ${colors.gray[400]};
  }
  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
  }

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;

function Button({ icon, children, ...props }) {
  return (
    <StyledButton {...props}>
      {icon}
      {children}
    </StyledButton>
  );
}

export default Button;