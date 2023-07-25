import Popover from "../../ui/Popover/Popover";
import Button from "../../ui/button";
import styled from "@emotion/styled";
import { typography } from "../../../styles";
import React, { useState } from "react";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Houses", "Apartments"];
const defaultCheckedList = [];

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

const CheckboxLabel = styled.p`
  color: var(--gray, #616161);
  ${typography.text.sm};
  letter-spacing: 0.09375rem;
`;

const MainContainer = styled.div`
  display: inline-flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;
function PropertyFilter() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const filterContent = (
    <MainContainer>
      <RadioContainer>
        <CheckboxLabel>PROPERTY TYPE</CheckboxLabel>
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </RadioContainer>
      <ButtonContainer>
        <Button type="primary"> DONE</Button>
      </ButtonContainer>
    </MainContainer>
  );
  return (
    <Popover content={filterContent}>
      <Button type="primary">PROPERTY</Button>
    </Popover>
  );
}

export default PropertyFilter;
