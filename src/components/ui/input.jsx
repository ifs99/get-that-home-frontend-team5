import styled from "@emotion/styled";
import { typography } from "../../styles";
import { colors } from "../../styles";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

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
`;

const StyledLabel = styled.label`
  ${typography.text.xxs}
  text-transform: uppercase
`;

const InputBox = styled.div`
  position: relative;
  display: inline-block;
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

function Input({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <>
      <InputBox>
        {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
        <StyledInput
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <LeftIconWrapper>
          <BiSearch size={20} />
        </LeftIconWrapper>

        <RightIconWrapper>
          <RiArrowDropDownLine size={20} />{" "}
        </RightIconWrapper>
      </InputBox>
    </>
  );
}

export default Input;
