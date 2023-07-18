import styled from "@emotion/styled";

const StyledInput = styled("input")`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  padding: 5px 0;
  width: 100%;
  font-size: 16px;
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
      {label ? <label htmlFor={id || name}>{label}</label> : ""}
      <StyledInput
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;