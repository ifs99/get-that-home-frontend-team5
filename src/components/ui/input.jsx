import styled from "@emotion/styled";
import { typography } from "../../styles";
import { colors } from "../../styles";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiUploadLine } from "react-icons/ri";

const StyledInput = styled("input")`
  display: flex;
  background: var(--white, #fff);
  padding: 5px 0;
  flex: 1 0 0;
  ${typography.text.xxs}
  border-radius: 0.5rem;
  border: 1px solid ${colors.primary.pink};
  gap: 0.5rem;
  padding-left: 2rem;

  ::placeholder {
    color: gray; /* Customize the placeholder color */
  }
  ${(props) => typeStyles(props.type)}
`;

const StyledLabel = styled.label`
  ${typography.text.xxs}
  text-transform: uppercase
`;

const InputBox = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 80%;
  transform: translateY(-50%);
  color: gray;
`;

const LeftIconWrapper = styled(IconWrapper)`
  left: 0.6rem;
`;

const RightIconWrapper = styled(IconWrapper)`
  right: 0.5rem;
`;

const FileIconWrapper = styled.div`
  position: absolute;
  top: 72.5%;
  transform: translateY(-50%);
  color: gray;
  left: 0.6rem;
`;

function typeStyles(type) {
  switch (type) {
    case "file":
      return `
        color: ${colors.gray};
        border:none;
        ${typography.text.sm}

          
        }
        ::file-selector-button {
          border: 2px solid ${colors.primary.pink};
          padding: .2em .4em;
          border-radius: .2em;
          background-color: ${colors.primary.pink};
          color: ${colors.white};
          transition: 1s;
        ::file-selector-button:hover {
          background-color: ${colors.primary.dark_pink};
          border: 2px solid #00cec9;
      `;

    default:
      return `
      border: 1px solid ${colors.primary.pink};
      color: ${colors.gray};
      &:focus {
        outline: 2px solid ${colors.primary.dark_pink};
      }
      `;
  }
}

function Input({
  id,
  type,
  name,
  placeholder,
  label,
  buttonText,
  buttonIcon,
  ...props
}) {
  return (
    <>
      <InputBox>
        {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
        <StyledInput
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          {...props}
        />
        {type === "file" && (
          <FileIconWrapper>
            <RiUploadLine />
          </FileIconWrapper>
        )}
        {type !== "file" && (
          <>
            <LeftIconWrapper>
              <BiSearch size={20} />
            </LeftIconWrapper>
            <RightIconWrapper>
              <RiArrowDropDownLine size={20} />{" "}
            </RightIconWrapper>
          </>
        )}
      </InputBox>
    </>
  );
}

export default Input;
