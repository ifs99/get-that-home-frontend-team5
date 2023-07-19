import styled from "@emotion/styled";
import { fonts, typography } from "../styles";

export const Text = styled.p`
  font-family: ${fonts.primary};

  color: ${(props) => props.color || "inherit"};
  font-weight: ${(props) => props.weight || "600"};
  ${(props) => typography.text[props.size] || typography.text.lg};

  line-height: normal;
  text-align: center;
`;

export const Heading = styled.p`
  font-family: ${fonts.primary};

  color: ${(props) => props.color || "inherit"};
  font-weight: ${(props) => props.weight || "600"};
  ${(props) => typography.text[props.size] || typography.text.md};

  line-height: normal;
  font-size: 1.375rem;
  text-align: center;
`;
